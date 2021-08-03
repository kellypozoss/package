import { Injectable } from '@angular/core';
import { Medicos } from '../apps/interfaces/medicos';

@Injectable({
    providedIn: 'root'
})
export class MedicoService {

    listMedicos: Medicos[] = [
        { id: 1, nombre: 'Giacomo', apellido: 'Guilizzoni', especialidad: 'Cardiología ', correo: 'user@gmail.com' },
        { id: 2, nombre: 'Marco', apellido: 'Botton', especialidad: 'Nutriología ', correo: 'user@gmail.com' },
        { id: 3, nombre: 'Mariah', apellido: 'Maclachlan', especialidad: 'Oncología ', correo: 'user@gmail.com' },
        { id: 4, nombre: 'Valerie', apellido: 'Liberty', especialidad: 'Hematología ', correo: 'user@gmail.com' },
        { id: 5, nombre: 'Guido Jack', apellido: 'Guilizzoni', especialidad: 'Cardiología ', correo: 'user@gmail.com' },
        { id: 6, nombre: 'Carmen', apellido: 'Morales', especialidad: 'Cardiología ', correo: 'user@gmail.com' }
    ];

    constructor() { }

    getMedico() {
        return this.listMedicos.slice();
    }

    eliminarMedico(index: number) {
        this.listMedicos.splice(index, 1);
    }
}
