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
      // Αφαιρούμε τυχόν κενά που μπορεί να μπλοκάρουν το validation
      const updatedNote = this.form.value;
      
      this.noteService.updateNote(this.noteId, updatedNote).subscribe({
        next: () => {
          this.isUpdated = true;
          this.cdr.detectChanges(); // ΑΝΑΓΚΑΣΤΙΚΗ ΕΝΗΜΕΡΩΣΗ UI
        },
        error: (err) => console.error(err)
      });
    }
  }
}