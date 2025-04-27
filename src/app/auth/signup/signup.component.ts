import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit {
  user = {
    username: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    role: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
// Delay scroll to ensure page content is loaded first
    setTimeout(() => {
      this.scrollToSignupForm();
    }, 100);
     // Delay 100ms to make sure content is loaded  }
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      alert('Please fill all required field correctly.')
      return;
    }
    this.authService.register(this.user).subscribe({
      next: (res) => {
        alert('Signup successful!');
        this.router.navigate(['/login']);

        console.log(res);
      },
      error: (err) => {
        console.error(err);
        alert('Signup failed!');
      }
    });
  }

  scrollToSignupForm(): void {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
