import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  template: `
    <button>{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: string  = '';
}