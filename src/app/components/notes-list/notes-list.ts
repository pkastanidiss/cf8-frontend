import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoteService } from '../../shared/services/note.service';
import { UserService } from '../../shared/services/user.service';
import { INote } from '../../shared/interfaces/note';
import { LoggedInUser } from '../../shared/interfaces/user';
import { NoteDetails } from '../note-details/note-details';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { SCIENTIFIC_CATEGORIES } from '../../shared/constants/categories';



@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './notes-list.html',
  styleUrls: ['./notes-list.css']
})
export class NotesList implements OnInit, OnDestroy {
  private noteService = inject(NoteService);
  private userService = inject(UserService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private cd = inject(ChangeDetectorRef);
  dialog = inject(MatDialog);
  readonly filterOptions = ['Όλα', ...SCIENTIFIC_CATEGORIES];
  selectedCategory = 'Όλα';
  
  triggerChangeDetection() {
    this.cd.detectChanges();
  }

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

  getFilteredNotes() {
    return this.selectedCategory === 'Όλα' 
      ? this.notes 
      : this.notes.filter(n => n.category === this.selectedCategory);
  }

  getCategoryColor(category: string): string {
  const colors: { [key: string]: string } = {
    'Ιατρική': '#e91e63',      // Pink
    'Πληροφορική': '#1e88e5',  // Blue
    'Οικονομικά': '#4caf50',   // Green
    'default': '#9e9e9e'       // Grey
  };
  return colors[category] || colors['default'];
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