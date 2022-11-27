import { NgModule } from '@angular/core';
import { AppHero } from './heroe/hero.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppHero,
        ListadoComponent,
    ],
    exports: [
        AppHero,
        ListadoComponent
    ],
    imports: [
        CommonModule
    ],
})

export class HerosModule {}