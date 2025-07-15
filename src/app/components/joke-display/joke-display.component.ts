import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeService, Joke } from '../../services/joke.service';

@Component({
  selector: 'app-joke-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke-display.component.html',
  styleUrl: './joke-display.component.css'
})
export class JokeDisplayComponent implements OnInit {
  currentJoke = signal<Joke | null>(null);
  isLoading = signal(false);
  showPunchline = signal(false);
  selectedCategory = signal('all');
  categories = signal<string[]>([]);

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.categories.set(this.jokeService.getCategories());
    this.loadRandomJoke();
  }

  loadRandomJoke() {
    this.isLoading.set(true);
    this.showPunchline.set(false);
    
    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        this.currentJoke.set(joke);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading joke:', error);
        this.isLoading.set(false);
      }
    });
  }

  revealPunchline() {
    this.showPunchline.set(true);
  }

  onCategoryChange(category: string) {
    this.selectedCategory.set(category);
    this.loadRandomJoke();
  }
}
