import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable()
export class ClientesService {

  private clientes: Cliente[];

  constructor() {
    this.clientes = [];
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      apellido: '',
      direccion: ''
    };
  }
}