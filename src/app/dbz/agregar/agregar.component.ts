import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService){}

  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar():void {
    if(this.nuevo.nombre.trim().length === 0){ return; }

    this.dbzService.agregarPersonajes(this.nuevo);
    // console.log(this.nuevo) 
    // this.nuevoPersonaje.emit( this.nuevo );
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
