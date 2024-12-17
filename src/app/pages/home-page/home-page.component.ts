import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movies-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
