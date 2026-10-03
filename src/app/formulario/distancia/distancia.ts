import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  resultado: number = 0;

  calcular(): void {
    let resX = this.x2 - this.x1;
    let resY = this.y2 - this.y1;

    this.resultado = Math.sqrt((resX * resX) + (resY * resY));
  }
}