import { NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormatDurationPipe } from '../../pipes/format-duration.pipe';
import { CardModule } from 'primeng/card';
import { MovieIdAndListName } from '../models/movie-id-and-list-name.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [FormatDurationPipe, CardModule, NgFor],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MovieCardComponent {
  @Input() movie: any;

  @Output() OutputIdToMoviesList = new EventEmitter<MovieIdAndListName>();

  AddIdToList(value: MovieIdAndListName) {
    this.OutputIdToMoviesList.emit(value);
  }
}
