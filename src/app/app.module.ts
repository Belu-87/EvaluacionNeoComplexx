import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientesModule } from './clientes/clientes.module';

import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';

import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';


@NgModule({
  declarations: [AppComponent, AltaClienteComponent, ListadoClientesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AltaClienteComponent,ListadoClientesComponent]

})
export class AppModule { }
