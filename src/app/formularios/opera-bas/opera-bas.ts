import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  standalone: false,
  templateUrl: './opera-bas.html',
})
export class OperaBas {
  num1:string=''
  num2:string=''
  resultado:number=0
  
  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2)
  }
  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2)
  }
  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2)
  }
  
}
