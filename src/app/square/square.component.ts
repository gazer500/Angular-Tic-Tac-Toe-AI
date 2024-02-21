import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: [],
  standalone: true
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | ''  = '';
}