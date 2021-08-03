import { Injectable } from '@angular/core';
import { Diabetes } from '../apps/interfaces/diabetes';


@Injectable({
    providedIn: 'root'
})
export class DiabetesService {

    listDiabetes: Diabetes[] = [
        { id: 1, nombre: 'Cristina', apellido: 'Cortes', correo: 'user@gmail.com', tipo: 'DM1', wearable: 'Si' },
        { id: 2, nombre: 'Court ', apellido: 'Morales', correo: 'user@gmail.com', tipo: 'DM2', wearable: 'Si' },
        { id: 3, nombre: 'Austin', apellido: 'Espinoza', correo: 'user@gmail.com', tipo: 'DM2', wearable: 'Si' },
        { id: 4, nombre: 'Tasha ', apellido: 'Smith', correo: 'user@gmail.com', tipo: 'DM2', wearable: 'Si' },
        { id: 5, nombre: 'Unique', apellido: 'Gilliot', correo: 'user@gmail.com', tipo: 'DM1', wearable: 'Si' },
        { id: 6, nombre: 'Erika', apellido: 'Sawyer', correo: 'user@gmail.com', tipo: 'DM2', wearable: 'Si' }
    ];

    constructor() { }

    getDiabetes() {
        return this.listDiabetes.slice();
    }

    eliminarDiabetes(index: number) {
        this.listDiabetes.splice(index, 1);
    }
}
