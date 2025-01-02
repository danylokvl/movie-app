import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { WatchlistPageComponent } from './pages/watchlist-page/watchlist-page.component';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { TopRatePageComponent } from './pages/top-rate-page/top-rate-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'watchlist', component: WatchlistPageComponent },
  {
    path: 'now-playing',
    outlet: 'sidebarOutlet',
    component: NowPlayingPageComponent,
  },
  {
    path: 'popular',
    outlet: 'sidebarOutlet',
    component: PopularPageComponent,
  },
  {
    path: 'top-rate',
    outlet: 'sidebarOutlet',
    component: TopRatePageComponent,
  },
  {
    path: 'upcoming',
    outlet: 'sidebarOutlet',
    component: UpcomingPageComponent,
  },
  { path: '**', redirectTo: '' },
];
