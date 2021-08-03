import { Injectable } from '@angular/core';
import { Hospitales } from '../apps/interfaces/hospitales';


@Injectable({
    providedIn: 'root'
})
export class HospitalService {

    listHospitales: Hospitales[] = [
        { id: 1, nombre: 'Hospital Cardiológica Aguascalientes', estado: 'Aguascalientes', correo: 'hospital1@gmail.com' },
        { id: 2, nombre: 'Hospital Metropolitano del Sur ', estado: 'Chiapas', correo: 'hospital2@gmail.com' },
        { id: 3, nombre: 'Hospital Ángeles De Puebla', estado: 'Puebla', correo: 'hospital3@gmail.com' },
        { id: 4, nombre: 'Hospital México Americano ', estado: 'Jalisco', correo: 'hospital4@gmail.com' },
        { id: 5, nombre: 'Centro Médico Del Ángel', estado: 'Morelos', correo: 'hospital5@gmail.com' },
        { id: 6, nombre: 'Centro Médico De Cristo', estado: 'Veracruz', correo: 'hospital6@gmail.com' }
    ];

    constructor() { }

    getHospital() {
        return this.listHospitales.slice();
    }

    eliminarHospital(index: number) {
        this.listHospitales.splice(index, 1);
    }
}
