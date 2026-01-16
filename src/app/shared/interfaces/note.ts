import { IUser } from './user'; 

export interface INote {
  _id?: string;            
  title: string;           
  content: string;         
  author?: IUser | string; 
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NoteResponse {
  message: string;
  note: INote;
}