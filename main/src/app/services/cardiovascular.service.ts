import { Injectable } from '@angular/core';
import { Cardiovasculares } from '../apps/interfaces/cardiovasculares';


@Injectable({
    providedIn: 'root'
})
export class CardiovascularService {

    listCardio: Cardiovasculares[] = [
        { id: 1, nombre: 'Carmen', apellido: 'Cortes', correo: 'user@gmail.com', enfermedad: 'Arritmias', wearable: 'Si' },
        { id: 2, nombre: 'Marianna ', apellido: 'Morales', correo: 'user@gmail.com', enfermedad: 'Insuficiencia cardíaca', wearable: 'Si' },
        { id: 3, nombre: 'Pablo', apellido: 'Espinoza', correo: 'user@gmail.com', enfermedad: 'Cardiopatía', wearable: 'Si' },
        { id: 4, nombre: 'Erick ', apellido: 'Smith', correo: 'user@gmail.com', enfermedad: 'Arritmias', wearable: 'Si' },
        { id: 5, nombre: 'Ángel', apellido: 'Gilliot', correo: 'user@gmail.com', enfermedad: 'Miocardiopatías', wearable: 'Si' },
        { id: 6, nombre: 'Erin', apellido: 'Sawyer', correo: 'user@gmail.com', enfermedad: 'Cardiopatía', wearable: 'Si' }
    ];

    constructor() { }

    getCardiovascular() {
        return this.listCardio.slice();
    }

    eliminarCardiovascular(index: number) {
        this.listCardio.splice(index, 1);
    }
}
