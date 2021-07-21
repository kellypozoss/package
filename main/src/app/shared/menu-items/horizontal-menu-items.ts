import { Injectable } from '@angular/core';

export interface BadgeItem {
    type: string;
    value: string;
}
export interface Saperator {
    name: string;
    type?: string;
}
export interface SubChildren {
    state: string;
    name: string;
    type?: string;
}
export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
    child?: SubChildren[];
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    saperator?: Saperator[];
    children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: '',
        name: 'Pacientes',
        type: 'saperator',
        icon: 'av_timer'
    },
    {
        state: 'dashboards',
        name: 'Paneles',
        type: 'sub',
        icon: 'av_timer',
        children: [
            { state: 'dashboard1', name: 'Panel Paciente', type: 'link' }
        ]
    },
    {
        state: 'apps',
        name: 'Datos Médicos',
        type: 'sub',
        icon: 'apps',

        children: [
            { state: 'datos-medicos', name: 'Datos Médicos', type: 'link' },
            { state: 'antecedentes-familiares', name: 'Antecedentes familiares', type: 'link' },
            { state: 'antecedentes-enfermedades', name: 'Antecedentes de enfermedades', type: 'link' },
            { state: 'historial-medico', name: 'Historial Médico', type: 'link' },

        ]
    },
    {
        state: 'apps',
        name: 'Mis Wearables',
        type: 'sub',
        icon: 'bubble_chart',

        children: [
            { state: 'mis-wearables', name: 'Mis wearables', type: 'link' },
            { state: 'agregar-wearable', name: 'Agregar wearable', type: 'link' }

        ]
    },

    {
        state: 'mis-pronosticos',
        name: 'Mis pronósticos',
        type: 'link',
        icon: 'brightness_7'

    },
    {

        state: 'variables-biomedicas',
        name: 'Mis variables biomédicas',
        type: 'link',
        icon: 'insert_drive_file'

    }

];

@Injectable()
export class HorizontalMenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}
