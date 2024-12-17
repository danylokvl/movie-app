import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieListComponent } from '../../components/movie-list/movies-list.component';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [NgFor, MovieCardComponent, MovieListComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPageComponent {}
