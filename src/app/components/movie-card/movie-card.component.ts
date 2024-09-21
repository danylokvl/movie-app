import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: any;
  @Output() addedToFavorites: EventEmitter<number> = new EventEmitter<number>();
  @Output() addedToWatchList: EventEmitter<number> = new EventEmitter<number>();

  addToFavorites(id: number) {
    this.addedToFavorites.emit(id);
  }

  addToWatchList(id: number) {
    this.addedToWatchList.emit(id);
  }
}
