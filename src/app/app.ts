import { Component } from '@angular/core';
import { JokeDisplayComponent } from './components/joke-display/joke-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JokeDisplayComponent],
  template: `
    <div class="app-container">
      <app-joke-display />
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem;
    }
  `]
})
export class App {
  title = 'jokes-app';
}
