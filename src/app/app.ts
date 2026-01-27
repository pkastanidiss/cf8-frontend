import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Markos";

  doNotShowRest:boolean = true;

  // Step 3 input component
  person1: Person = {
    firstname: 'User1 name',
    lastname: 'User1 surname',
    email: 'user1@aueb.gr'
  }

  person2: Person = {
    firstname: 'User2 name',
    lastname: 'User2 surname',
    email: 'user2@aueb.gr'
  }
}