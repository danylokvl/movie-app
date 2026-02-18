import { Component } from '@angular/core';
import { nowPlayingMovies } from '../../mock-data';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movies-list',
  imports: [MovieCard],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss',
})
export class MoviesList {
  nowPlayingMovies: any[] = nowPlayingMovies;
}
