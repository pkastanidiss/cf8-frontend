import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../shared/services/note.service'; 


@Component({
  selector: 'app-step14-edit-note',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './step14-edit-note.html',
  styleUrls: ['./step14-edit-note.css']
})
export class Step14EditNote implements OnInit {
  private noteService = inject(NoteService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef); 

  noteId: string | null = null;
  isUpdated = false;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get('id');
    if (this.noteId) {
      this.noteService.getNoteById(this.noteId).subscribe({
        next: (note) => {
          this.form.patchValue(note);
          this.cdr.detectChanges(); 
        }
      });
    }
  }

  onSubmit(): void {
  if (this.form.valid && this.noteId) {
    this.noteService.updateNote(this.noteId, this.form.getRawValue()).subscribe({
      next: (response) => {
        console.log('Update Successful! Response from server:', response);
        
        this.isUpdated = true;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Update failed:', err);
        alert('Πρόβλημα κατά την αποθήκευση.');
      }
    });
  }
  }
}