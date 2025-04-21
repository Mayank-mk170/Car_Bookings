import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'USER'
  };

  constructor(private authService: AuthService) {}

  onSignup(form: NgForm) {
    if (form.invalid) return;

    this.authService.register(this.user).subscribe({
      next: (res) => {
        alert('Signup successful!');
        console.log(res);
      },
      error: (err) => {
        alert('Signup failed!');
        console.error(err);
      }
    });
  }
}
