import { Routes } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';
import { Welcome } from './components/welcome/welcome';
import { Step6SimpleDatatableShow } from './components/step6-simple-datatable-show/step6-simple-datatable-show';
import { Step7ComponentOutput } from './components/step7-component-output/step7-component-output';
import { Step8TemplateDrivenForms } from './components/step8-template-driven-forms/step-8-template-driven-forms';
import { Step9ReactiveForms } from './components/step9-reactive-forms/step9-reactive-forms';
import { Step10UserLogin } from './components/step10-user-login/step10-user-login';
import { Step11CreateUser } from './components/step11-create-user/step11-create-user';
import { authGuard } from './shared/guards/auth-guard';
import { adminRoleGuard } from './shared/guards/admin-role-guard';
import { Step12CreateNote } from './components/step12-create-note/step12-create-note';

export const routes: Routes = [
  {path:'person-table-example', component: Step2PersonTable},
  {path:'component-input-example', component: Step3PersonTableInput},
  {path:'for-directive-example', component: Step4ForDirective},
  {path:'event-bind-example', component: Step5EventBind},
  {path:'simple-datatable-example', component:Step6SimpleDatatableShow},
  {path:'component-output-example', component:Step7ComponentOutput},
  {path:'template-driven-form-example', component:Step8TemplateDrivenForms},
  {path:'reactive-forms-example', component: Step9ReactiveForms},
  {path:'login-example', component: Step10UserLogin},
  {path:'create-user-example', component: Step11CreateUser, canActivate:[authGuard, adminRoleGuard]},
  {path:'create-note-example', component: Step12CreateNote},
  {path:'welcome', component: Welcome},
  {path:'', redirectTo:'welcome', pathMatch:'full'}
];
