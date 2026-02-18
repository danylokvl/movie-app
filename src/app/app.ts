import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesList } from './components/movies-list/movies-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('movie-app');
}
