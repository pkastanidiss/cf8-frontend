import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { UserLogin } from './components/user-login/user-login';
import { UserRegister } from './components/user-register/user-register';
import { authGuard } from './shared/guards/auth-guard';
import { adminRoleGuard } from './shared/guards/admin-role-guard';
import { CreateNote } from './components/create-note/create-note';
import { NotesList } from './components/notes-list/notes-list';
import { EditNote } from './components/edit-note/edit-note';

export const routes: Routes = [
  {path:'user-login', component: UserLogin},
  {path:'user-register', component: UserRegister},
  {path:'create-note', component: CreateNote, canActivate:[authGuard]},
  {path:'notes-list', component: NotesList},
  {path:'edit-note', component: EditNote },
  {path:'edit-note/:id', component: EditNote },
  {path:'welcome', component: Welcome},
  {path:'', redirectTo: '/welcome', pathMatch: 'full' }, 
  {path:'welcome', component: Welcome }
];
