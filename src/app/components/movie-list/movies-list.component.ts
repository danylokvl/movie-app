import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from '../../movies';
import { NgFor, NgIf } from '@angular/common';
import { favoriteMoviesIds } from '../../favorites-and-watchlist-ids';
import { watchListMoviesIds } from '../../favorites-and-watchlist-ids';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [MovieCardComponent, NgFor, NgIf],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent {
  @Input() listToRender!: string;

  movies: any = {
    nowPlayingMovies: nowPlayingMovies,
    popularMovies: popularMovies,
    topRatedMovies: topRatedMovies,
    upcomingMovies: upcomingMovies,
  };

  PushMovieIdToCorrectArray(value: any) {
    let correctArray: number[] = [];
    if (value.listName === 'favorites') {
      correctArray = favoriteMoviesIds;
    } else if (value.listName === 'watchlist') {
      correctArray = watchListMoviesIds;
    } else return;

    correctArray.includes(value.id)
      ? correctArray.splice(correctArray.indexOf(value.id), 1)
      : correctArray.push(value.id);
  }
}
