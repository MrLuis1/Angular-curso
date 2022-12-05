import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HerosModule } from "./heroes/heroes.module";
import { DbzModule } from './dbz/dbz.module';




@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HerosModule,
        ContadorModule,
        DbzModule ,
    ]
})
export class AppModule { }
