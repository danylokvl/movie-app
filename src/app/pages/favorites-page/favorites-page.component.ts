import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MoviesListComponent } from '../../components/movie-list/movies-list.component';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [NgFor, MovieCardComponent, MoviesListComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPageComponent implements OnInit {
  favoriteMoviesIds: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const dataString = params['ids'];
      this.favoriteMoviesIds = dataString ? JSON.parse(dataString) : [];
    });
  }
}
