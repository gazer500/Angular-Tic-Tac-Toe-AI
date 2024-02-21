import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  template: `
    <button (click)="onClick()">{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: string  = '';
  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    if (!this.value) {
      this.clickEvent.emit();
    }
  }
}