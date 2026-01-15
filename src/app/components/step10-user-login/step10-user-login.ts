import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { MatFormField, MatLabel, MatInput, MatError } from '@angular/material/input';
import { MatAnchor } from "@angular/material/button";


@Component({
  selector: 'app-step10-user-login',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, MatAnchor],
  templateUrl: './step10-user-login.html',
  styleUrl: './step10-user-login.css',
})
export class Step10UserLogin {

  invalidLogin: boolean = false;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.form.value);
  }
}
