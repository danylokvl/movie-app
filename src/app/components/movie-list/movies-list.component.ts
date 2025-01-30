import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { movies } from '../../movies';
import { Movie } from '../models/movie.model';
import { MovieIdAndListName } from '../models/movie-id-and-list-name.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, NgFor, NgIf],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent {


  movies: Movie[] = movies;
  favoriteMoviesIds: number[] = [];
  watchListMoviesIds: number[] = [];

  PushMovieIdToCorrectArray(value: any) {
    let correctArray: number[] = [];
    if (value.listName === 'favorites') {
      correctArray = this.favoriteMoviesIds;
    } else if (value.listName === 'watchlist') {
      correctArray = this.watchListMoviesIds;
    } else return;

    correctArray.includes(value.id)
      ? correctArray.splice(correctArray.indexOf(value.id), 1)
      : correctArray.push(value.id);

  }
}
