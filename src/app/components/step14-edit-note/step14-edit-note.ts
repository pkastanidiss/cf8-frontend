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
  private cdr = inject(ChangeDetectorRef); // Inject τον Change Detector

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
          this.cdr.detectChanges(); // Ενημέρωσε το UI ότι ήρθαν τα δεδομένα
        }
      });
    }
  }

  onSubmit(): void {
  if (this.form.valid && this.noteId) {
    // Χρησιμοποιούμε το getRawValue() για να αποφύγουμε το σφάλμα με το 'null'
    // και στέλνουμε τα δεδομένα στο service.
    this.noteService.updateNote(this.noteId, this.form.getRawValue()).subscribe({
      next: (response) => {
        // ΑΥΤΟ ΕΙΝΑΙ ΠΟΥ ΖΗΤΗΣΕΣ: Εμφάνιση στο console
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