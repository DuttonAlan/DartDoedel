import { Component, input, output } from '@angular/core';
import { PointDisplay } from "../point-display/point-display";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-player-stat-display',
  imports: [PointDisplay, NgClass],
  templateUrl: './player-stat-display.html',
  styleUrl: './player-stat-display.scss',
})
export class PlayerStatDisplay {
  name = input.required<string>();
  isCurrentPlayer = input<boolean>();
  currentPoints = input<number>();

  avgPoints = input<number>();

  endResult = output<number>();
}
