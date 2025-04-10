import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router) {} 

  onSubmit() {
    
    if (this.username === 'Iha' && this.password === 'password') {
     
      this.router.navigate(['/homw']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

}
