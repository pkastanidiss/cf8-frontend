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
    {text:"User Login", link: 'login-example'},
    {text:"Create User", link: 'create-user-example'},
    {text:"Create Note", link: 'create-note-example'},
    {text:"Notes List", link: 'notes-list-example'}

  ]
}
