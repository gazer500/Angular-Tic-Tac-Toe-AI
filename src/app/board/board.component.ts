import { Component } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-board',
    standalone: true,
    template: `
    <div class="board">
      <div class="row" *ngFor="let row of [0, 1, 2]">
        <div class="square" *ngFor="let col of [0, 1, 2]"
            (click)="makeMove(row, col)">
          <app-square [value]="board[row][col]"></app-square>
        </div>
      </div>
      <div *ngIf="winner">
      <h2>Winner: {{ winner }}</h2>
    </div>
    <button (click)="reset()">Reset Game</button>
    </div>
  `,
    styles: [`
    .board {
      display: flex;
      flex-direction: column;
      width: 150px;
    }

    .row {
      display: flex;
    }

    .square {
      width: 50px;
      height: 50px;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `],
    imports: [SquareComponent , NgFor, NgIf]
})
export class BoardComponent {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  currentPlayer: 'X' | 'O' = 'X';
  winner: string = '';


  makeMove(row: number, col: number) {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner() {
    // Check rows, columns, and diagonals for a winner
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) {
        this.winner = this.board[i][0];
        return;
      }
      if (this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) {
        this.winner = this.board[0][i];
        return;
      }
    }
    if (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
      this.winner = this.board[0][0];
      return;
    }
    if (this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
      this.winner = this.board[0][2];
      return;
    }
  }

  reset() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = '';
  }
}

