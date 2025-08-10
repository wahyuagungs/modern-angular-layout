import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Import the components you want to use
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Add the imported components to the 'imports' array
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'modern-angular-layout';
}
