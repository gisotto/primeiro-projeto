import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiroComponent2Component } from './meu-primeiro-component2/meu-primeiro-component2.component';
import { MeuPrimeiroComponent3Component } from './meu-primeiro-component3/meu-primeiro-component3.component';
import { MeuPrimeiroCompoment4Component } from './meu-primeiro-compoment4/meu-primeiro-compoment4.component';
import { MeuQuintoComponent } from './meu-quinto/meu-quinto.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiroComponent2Component,
    MeuPrimeiroComponent3Component,
    MeuPrimeiroCompoment4Component,
    MeuQuintoComponent,
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
