import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { INote } from '../interfaces/note';
import { Observable } from 'rxjs';

const API_URL = `${environment.apiUrl}/api/notes`;

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private http = inject(HttpClient);

  findAllNotes(): Observable<INote[]> {
    return this.http.get<INote[]>(API_URL);
  }

  createNote(note: INote): Observable<INote> {
    return this.http.post<INote>(API_URL, note);
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}