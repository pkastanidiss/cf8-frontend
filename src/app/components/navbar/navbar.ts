import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListGroupMenu } from '../list-group-menu/list-group-menu';
import { UserService } from '../../shared/services/user.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    ListGroupMenu,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  userService = inject(UserService);

  user = this.userService.user;

  logout() {
    this.userService.logoutUser();
  }
}
