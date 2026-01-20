import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-note-details-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title style="color: #1976d2; font-weight: bold;">
      {{ data.note.title }}
    </h2>
    
    <mat-dialog-content>
      <p style="white-space: pre-wrap; line-height: 1.6; color: #444; font-size: 1.1rem;">
        {{ data.note.content }}
      </p>
    </mat-dialog-content>
    
    <mat-dialog-actions align="end">
      <button mat-flat-button color="primary" mat-dialog-close>Κλείσιμο</button>
    </mat-dialog-actions>
  `
})
export class NoteDetails {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { note: any }) {}
}