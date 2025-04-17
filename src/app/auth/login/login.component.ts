import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.invalid) return;

    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        alert('Login successful!');
        console.log('Token:', res.token);
        localStorage.setItem('token', res.token);
      },
      error: (err) => {
        alert('Login failed!');
        console.error(err);
      }
    });
  }
}
