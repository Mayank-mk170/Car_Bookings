import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-booking';
  showPanel = false;
  activePanel: 'login' | 'signup' | null = null;
  menuOpen = false;



  constructor(public router: Router) {}

isAuthRoute(): boolean {
  return this.router.url === '/signup' || this.router.url === '/login';
}


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('Toggle clicked. isMenuOpen:', this.menuOpen);

  }

  openPanel(panel: 'login' | 'signup') {
    this.activePanel = panel;
    this.showPanel = true;
  }

  // check if user is logged in
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }
  // Logout function
  logout(){
    localStorage.removeItem('token');
    this.activePanel = null;
    this.showPanel = false;
  }
  //call this from login component to close form after successful login
  onLoginSuccess(){
    this.activePanel = null;
    this.showPanel = false;
  }

  
}
