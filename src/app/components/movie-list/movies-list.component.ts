import { Component, Input, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { movies } from '../../movies';
import { Movie } from '../models/movie.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, NgFor, NgIf],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MovieListComponent {
  movies: Movie[] = movies;
  favoriteMovies: Movie[] = [];
  watchListMovies: Movie[] = [];

  private addToList(list: Movie[], id: number) {
    const movieInList = list.find((movie) => movie.id === id);
    if (movieInList) return list;
    const addedMovie = this.movies.find((movie) => movie.id === id);
    if (addedMovie) return [...list, addedMovie];
    return list;
  }

  onAddToFavorites(id: number) {
    this.favoriteMovies = this.addToList(this.favoriteMovies, id);
  }

  onAddToWatchList(id: number) {
    this.watchListMovies = this.addToList(this.watchListMovies, id);
  }
}
