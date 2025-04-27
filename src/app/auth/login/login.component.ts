import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(private authService: AuthService, private router: Router) {}

  // onLogin(form: NgForm) {
  //   if (form.invalid) return;

  //   this.authService.login(this.credentials).subscribe({
  //     next: (res) => {
  //       alert('Login successful!');
  //       console.log('Token:', res.token);
  //       localStorage.setItem('token', res.token);
  //     },
  //     error: (err) => {
  //       alert('Login failed!');
  //       console.error(err);
  //     }
  //   });
  // }

  onLogin(form: NgForm) {
    if (form.invalid) {
    alert('Please fill in all field.');
        return;
      }
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        alert('Login successful!');
        console.log('Token:', res.token);
        localStorage.setItem('token', res.token);
  
        // ✅ Redirect to home (app.component.html will show car form)
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert('Login failed. Please check your Username & Password');
        console.error(err);
      }
    });
  }
}
