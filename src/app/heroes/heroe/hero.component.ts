import { Component } from "@angular/core";


@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
})
export class AppHero {
    nombre:string = 'Ironman';
    edad:number = 42;

    get nombreCapitalizado():string  {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 22;
    }

    cambiarData():void {
        this.nombre = 'Falcon';
        this.edad = 32;
    }
}