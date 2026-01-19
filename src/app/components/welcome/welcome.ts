import { Component, inject } from '@angular/core';
import { UserService } from '../../shared/services/user.service'; // Πρόσεξε το path προς το service σου
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './welcome.html', 
  styleUrl: './welcome.css'     
})
export class Welcome {
  userService = inject(UserService);
}