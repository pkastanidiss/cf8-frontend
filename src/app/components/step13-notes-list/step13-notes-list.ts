import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NoteService } from '../../shared/services/note.service';
import { UserService } from '../../shared/services/user.service';
import { INote } from '../../shared/interfaces/note';
import { LoggedInUser } from '../../shared/interfaces/user';
import { NoteDetails } from '../note-details/note-details';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-step13-notes-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatDialogModule
  ],
  templateUrl: './step13-notes-list.html',
  styleUrls: ['./step13-notes-list.css']
})
export class Step13NotesList implements OnInit, OnDestroy {
  private noteService = inject(NoteService);
  private userService = inject(UserService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private cd = inject(ChangeDetectorRef);
  dialog = inject(MatDialog);
  
  private routerSub?: Subscription; 
  notes: any[] = [];

  constructor() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
  this.noteService.findAllNotes().subscribe({
    next: (data) => {
      this.notes = data;
      this.cd.detectChanges(); 
      console.log('Notes loaded:', this.notes);
    },
    error: (err) => {
      console.error('Error loading notes:', err);
    }
  });
}


  loadNotes(): void {
    this.noteService.findAllNotes().subscribe({
      next: (data) => {
        this.notes = data;
        console.log('Notes loaded successfully');
      },
      error: (err) => console.error('API Error:', err)
    });
  }

openNote(note: any) {
  this.dialog.open(NoteDetails, {
    data: { note: note }
  });
}

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  get currentUser(): LoggedInUser | null {
    return this.userService.user() as LoggedInUser | null;
  }

  isAuthor(note: any): boolean {
  const user = this.currentUser;
  if (!user || !note.author) return false;
  const authorUsername = typeof note.author === 'object' ? note.author.username : null;
  return authorUsername === user.username;
  }

  deleteNote(id: string): void {
    if (confirm('Είσαι σίγουρος ότι θέλεις να διαγράψεις αυτή τη σημείωση;')) {
      this.noteService.deleteNote(id).subscribe({
        next: () => {
          this.notes = this.notes.filter(note => note._id !== id);

          this.cd.detectChanges(); 

          this.snackBar.open('Η σημείωση διαγράφηκε!', 'OK', { duration: 3000 });
          
          console.log('Deleted successfully');
        },
        error: (err) => console.error(err)
      });
    }
  }
}