import { Component, EventEmitter, output, Output } from '@angular/core';

type Multiplier = 1 | 2 | 3;

@Component({
  selector: 'app-dart-keyboard',
  imports: [],
  templateUrl: './dart-keyboard.html',
  styleUrl: './dart-keyboard.scss',
})
export class DartKeyboard {
  valueSelected = output<number>();
  back = output();

  numbers = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 25
  ];

  multiplier: Multiplier = 1;

  setMultiplier(value: Multiplier) {
    this.multiplier = value;
  }

  selectNumber(num: number) {
    this.valueSelected.emit(num * this.multiplier);
    this.multiplier = 1;
  }

  goBack() {
    this.multiplier = 1;
    this.back.emit();
  }

  isActive(value: Multiplier): boolean {
    return this.multiplier === value;
  }
}
