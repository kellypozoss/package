import { Injectable } from '@angular/core';
import { Hipertension } from '../apps/interfaces/hipertension';


@Injectable({
    providedIn: 'root'
})
export class HipertensionService {

    listHiper: Hipertension[] = [
        { id: 1, nombre: 'Serena', apellido: 'Cortes', correo: 'user@gmail.com', wearable: 'Si' },
        { id: 2, nombre: 'Blair ', apellido: 'Morales', correo: 'user@gmail.com', wearable: 'Si' },
        { id: 3, nombre: 'Chuck', apellido: 'Espinoza', correo: 'user@gmail.com', wearable: 'Si' },
        { id: 4, nombre: 'Nate ', apellido: 'Smith', correo: 'user@gmail.com', wearable: 'Si' },
        { id: 5, nombre: 'Louis', apellido: 'Gilliot', correo: 'user@gmail.com', wearable: 'Si' },
        { id: 6, nombre: 'Matt', apellido: 'Sawyer', correo: 'user@gmail.com', wearable: 'Si' }
    ];

    constructor() { }

    getHipertension() {
        return this.listHiper.slice();
    }

    eliminarHipertension(index: number) {
        this.listHiper.splice(index, 1);
    }
}
