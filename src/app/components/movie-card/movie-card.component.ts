import { NgIf, NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormatDurationPipe } from '../../pipes/format-duration.pipe';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [NgIf, FormatDurationPipe, CardModule, NgFor],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  encapsulation: ViewEncapsulation.None,
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
