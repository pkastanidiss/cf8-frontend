import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-group-menu',
  imports: [
    CommonModule, 
    RouterLink, 
    RouterLinkActive, 
    MatListModule, 
    MatIconModule
  ],
  templateUrl: './list-group-menu.html',
  styleUrl: './list-group-menu.css',
})
export class ListGroupMenu {

  menu = [
    // {text:"Step 2 Person Table", link: 'person-table-example'},
    // {text:"Step 3 Component Input", link: 'component-input-example'},
    // {text:"Step 4 @For Directive", link: 'for-directive-example'},
    // {text:"Step 5 Event Bind", link: 'event-bind-example'},
    // {text:"Step 6 Simple Datatable", link: 'simple-datatable-example'},
    // {text:"Step 7 Component Output", link: 'component-output-example'},
    // {text:"Step 8 Template Drivn Forms", link: 'template-driven-form-example'},
    // {text:"Step 9 Reactive Forms", link: 'reactive-forms-example'},
    {text:"User Login", link: 'login-example'},
    {text:"Create User", link: 'create-user-example'},
    {text:"Create Note", link: 'create-note-example'},
    {text:"Notes List", link: 'notes-list-example'}

  ]
}
