import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Users } from './users/users';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  imports: [Users,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('user-dashboard');
}
