import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { Step10UserLogin } from './components/step10-user-login/step10-user-login';
import { Step11CreateUser } from './components/step11-create-user/step11-create-user';
import { authGuard } from './shared/guards/auth-guard';
import { adminRoleGuard } from './shared/guards/admin-role-guard';
import { Step12CreateNote } from './components/step12-create-note/step12-create-note';
import { Step13NotesList } from './components/step13-notes-list/step13-notes-list';
import { Step14EditNote } from './components/step14-edit-note/step14-edit-note';

export const routes: Routes = [
  {path:'login-example', component: Step10UserLogin},
  {path:'create-user-example', component: Step11CreateUser, canActivate:[authGuard, adminRoleGuard]},
  {path:'create-note-example', component: Step12CreateNote, canActivate:[authGuard]},
  {path:'notes-list-example', component: Step13NotesList},
  {path:'step14-edit-note', component: Step14EditNote },
  {path:'step14-edit-note/:id', component: Step14EditNote },
  {path:'welcome', component: Welcome},
  {path:'', redirectTo: '/welcome', pathMatch: 'full' }, 
  {path:'welcome', component: Welcome }
];
