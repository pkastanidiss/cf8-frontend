import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { MatFormField, MatLabel, MatInput, MatError } from '@angular/material/input';
import { MatAnchor } from "@angular/material/button";
import { Credentials, LoggedInUser } from '../../shared/interfaces/user';
import { Router } from '@angular/router';

import {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-step10-user-login',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, MatAnchor],
  templateUrl: './step10-user-login.html',
  styleUrl: './step10-user-login.css',
})
export class Step10UserLogin {
  userService = inject(UserService);
   router = inject(Router);

  invalidLogin: boolean = false;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.form.value);
    this.userService.loginUser(this.form.value as Credentials)
    .subscribe({
      next: (response) => {
        console.log(response.token);
        this.invalidLogin = false;
        const access_token = response.token;
        const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser;
        console.log(decodedTokenSubject);

        localStorage.setItem('access_token', access_token)

        this.userService.user.set({
          username: decodedTokenSubject.username,
          email: decodedTokenSubject.email,
          roles: decodedTokenSubject.roles
        })

        this.router.navigate(['/notes-list-example']);
      },
      error: (error) => {
        console.log("Login", error);
        this.invalidLogin = true;
      }
    })
  }
}