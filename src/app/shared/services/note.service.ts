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
  apiUrl: any;

  findAllNotes(): Observable<INote[]> {
    return this.http.get<INote[]>(API_URL);
  }


getNoteById(id: string): Observable<INote> {
  return this.http.get<INote>(`http://localhost:4000/api/notes/${id}`);
}

  createNote(note: INote): Observable<INote> {
    return this.http.post<INote>(API_URL, note);
  }

  updateNote(id: string, data: any): Observable<any> {
  return this.http.put(`${API_URL}/${id}`, data);
}

 deleteNote(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}

