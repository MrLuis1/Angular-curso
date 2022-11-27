import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroBorrado: string = '';
  heros: string[] = ['Deku', 'Bakugo', 'Shoto', 'Endevoar', 'Hawks'];


  borrarHero():void {
    this.heroBorrado = this.heros.pop() || '';
  }
}
