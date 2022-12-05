import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService {

    private _personajes:Personaje[] = [
        {
          nombre: 'Gohan',
          poder: 8000
        },
        {
          nombre: 'Picolo',
          poder: 3000
        }
    ];

    get personajes():Personaje[] {
        return [...this._personajes];
    }

    constructor(){
        console.log('servicio inicializado');
    }

    agregarPersonajes(personaje:Personaje){
        this._personajes.push(personaje);
    }
}