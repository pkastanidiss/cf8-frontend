import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NoteService } from '../../shared/services/note.service';
import { INote } from '../../shared/interfaces/note';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './create-note.html',
  styleUrl: './create-note.css',
})
export class CreateNote {
  noteService = inject(NoteService);
  router = inject(Router);
  status: { success: boolean; message: string } = {
    success: false,
    message: '',
  };

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    content: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  onSubmit() {
    if (this.form.invalid) return;

    const noteData = this.form.value as INote;

    console.log('Sending note data:', noteData);

    this.noteService.createNote(noteData).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.status = { 
          success: true, 
          message: 'Η σημείωση δημοσιεύτηκε επιτυχώς! Πλέον είστε Author.' 
        };
        this.form.reset();
        
        setTimeout(() => {
          this.router.navigate(['/notes-list-example']);
        }, 2000);
      },
      error: (error)=> {
        console.error('Error creating note:', error);
        this.status = { 
          success: false, 
          message: 'Υπήρξε κάποιο πρόβλημα κατά τη δημοσίευση.' 
        };
      }
    });
  }
}