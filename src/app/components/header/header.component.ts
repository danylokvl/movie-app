import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { Router } from '@angular/router';
import { favoriteMoviesIds } from '../../favorites-and-watchlist-ids';
import { watchListMoviesIds } from '../../favorites-and-watchlist-ids';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToFavoritesPage() {
    const favoriteMoviesIdsString = JSON.stringify(favoriteMoviesIds);
    this.router.navigate(['/favorites', { ids: favoriteMoviesIdsString }]);
  }
}
