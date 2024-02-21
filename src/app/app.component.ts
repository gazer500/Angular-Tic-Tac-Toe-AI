import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from './square/square.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tic-tac-toe-ai';
}
