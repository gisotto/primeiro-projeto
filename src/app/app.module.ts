import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiroComponent2Component } from './meu-primeiro-component2/meu-primeiro-component2.component';



@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiroComponent2Component,
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
