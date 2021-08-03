import { Injectable } from '@angular/core';
import { Usuarios } from '../apps/interfaces/usuarios';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    listUsuarios: Usuarios[] = [
        { id: 1, nombre: 'Serena', apellido: 'Cortes', correo: 'user@gmail.com' },
        { id: 2, nombre: 'Blair ', apellido: 'Morales', correo: 'user@gmail.com' },
        { id: 3, nombre: 'Chuck', apellido: 'Espinoza', correo: 'user@gmail.com' },
        { id: 4, nombre: 'Nate ', apellido: 'Smith', correo: 'user@gmail.com' },
        { id: 5, nombre: 'Louis', apellido: 'Gilliot', correo: 'user@gmail.com' },
        { id: 6, nombre: 'Matt', apellido: 'Sawyer', correo: 'user@gmail.com' },
        { id: 7, nombre: 'Cristina', apellido: 'Cortes', correo: 'user@gmail.com' },
        { id: 8, nombre: 'Court ', apellido: 'Morales', correo: 'user@gmail.com' },
        { id: 9, nombre: 'Austin', apellido: 'Espinoza', correo: 'user@gmail.com' },
        { id: 10, nombre: 'Tasha ', apellido: 'Smith', correo: 'user@gmail.com' },
        { id: 11, nombre: 'Unique', apellido: 'Gilliot', correo: 'user@gmail.com' },
        { id: 12, nombre: 'Erika', apellido: 'Sawyer', correo: 'user@gmail.com' },
        { id: 13, nombre: 'Carmen', apellido: 'Cortes', correo: 'user@gmail.com' },
        { id: 14, nombre: 'Marianna ', apellido: 'Morales', correo: 'user@gmail.com' },
        { id: 15, nombre: 'Pablo', apellido: 'Espinoza', correo: 'user@gmail.com' },
        { id: 16, nombre: 'Erick ', apellido: 'Smith', correo: 'user@gmail.com' },
        { id: 17, nombre: 'Ángel', apellido: 'Gilliot', correo: 'user@gmail.com' },
        { id: 18, nombre: 'Erin', apellido: 'Sawyer', correo: 'user@gmail.com' },




    ];

    constructor() { }

    getUsuario() {
        return this.listUsuarios.slice();
    }

    eliminarUsuario(index: number) {
        this.listUsuarios.splice(index, 1);
    }
}
