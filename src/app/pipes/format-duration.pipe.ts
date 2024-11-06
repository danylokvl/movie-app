import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration',
  standalone: true,
})
export class FormatDurationPipe implements PipeTransform {
  transform(value: string): string {
    if (value.includes('minutes')) {
      const minutes = +value.replace('minutes', '');
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = remainingMinutes.toString().padStart(2, '0');

      return `${formattedHours}:${formattedMinutes}`;
    }

    return 'Error. Invalid Duration';
  }
}
