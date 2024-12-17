import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { WatchlistPageComponent } from './pages/watchlist-page/watchlist-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'watchlist', component: WatchlistPageComponent },
  { path: '**', redirectTo: '' },
];
