import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})
export class Figuras {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  figura: string = ''; 

  calcular(): void {
    switch(this.figura) {
      case 'triangulo':
        this.resultado = (this.num1 * this.num2) / 2;
        break;
      case 'rectangulo':
        this.resultado = this.num1 * this.num2;
        break;
      case 'circulo':
        this.resultado = 3.1416 * (this.num1 * this.num1);
        break;
      case 'pentagono':
        this.resultado = (this.num1 * 5 * this.num2) / 2;
        break;
    }
  }
}