import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1> 
        <h3>La base es: {{ base }}</h3>

        <button (click)="funcion(-base)"> - {{base}}</button>
        <span> {{ numero }} </span>
        <button (click)="funcion(+base)"> + {{base}}</button>
    `
})

export class ContadorComponent {
      titulo:string = 'Contador App';
  numero: number = 0;
  base:number = 5;

  funcion( value:number) {
    this.numero += value;
  }
}