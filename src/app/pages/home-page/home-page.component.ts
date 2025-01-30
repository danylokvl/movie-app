import { Component } from '@angular/core';
import { MoviesListComponent } from '../../components/movie-list/movies-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
