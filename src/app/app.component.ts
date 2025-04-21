import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-booking';
  showPanel = false;
  activePanel: 'login' | 'signup' | null = null;

  openPanel(panel: 'login' | 'signup') {
    this.activePanel = panel;
    this.showPanel = true;
  }
}
