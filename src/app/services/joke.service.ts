import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Joke {
  id: number;
  setup: string;
  punchline: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private jokes: Joke[] = [
    {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
      category: "Science"
    },
    {
      id: 2,
      setup: "Why did the scarecrow win an award?",
      punchline: "He was outstanding in his field!",
      category: "Puns"
    },
    {
      id: 3,
      setup: "Why don't eggs tell jokes?",
      punchline: "They'd crack each other up!",
      category: "Food"
    },
    {
      id: 4,
      setup: "What do you call a fake noodle?",
      punchline: "An impasta!",
      category: "Food"
    },
    {
      id: 5,
      setup: "Why did the math book look so sad?",
      punchline: "Because it had too many problems!",
      category: "Math"
    },
    {
      id: 6,
      setup: "What do you call a bear with no teeth?",
      punchline: "A gummy bear!",
      category: "Animals"
    },
    {
      id: 7,
      setup: "Why don't some couples go to the gym?",
      punchline: "Because some relationships don't work out!",
      category: "Fitness"
    },
    {
      id: 8,
      setup: "What do you call a sleeping bull?",
      punchline: "A bulldozer!",
      category: "Animals"
    }
  ];

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<Joke> {
    const randomIndex = Math.floor(Math.random() * this.jokes.length);
    return of(this.jokes[randomIndex]).pipe(delay(500));
  }

  getJokesByCategory(category: string): Observable<Joke[]> {
    const filteredJokes = this.jokes.filter(joke => 
      category === 'all' || joke.category.toLowerCase() === category.toLowerCase()
    );
    return of(filteredJokes).pipe(delay(300));
  }

  getCategories(): string[] {
    const categories = [...new Set(this.jokes.map(joke => joke.category))];
    return ['all', ...categories];
  }
}
