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

const MENUITEMSMEDICO = [
    {
        state: '',
        name: 'Médicos',
        type: 'saperator',
        icon: 'av_timer'
    },
    {
        state: 'dashboards',
        name: 'Panel',
        type: 'sub',
        icon: 'av_timer',
        children: [
            { state: 'dashboard2', name: 'Panel Médico', type: 'link' }
        ]
    },

    {
        state: 'usuarios',
        name: 'Mis pacientes',
        type: 'link',
        icon: 'people'

    },
    {

        state: 'hospitales',
        name: 'Hospitales',
        type: 'link',
        icon: 'local_hospital'

    },
    {

        state: 'cardiovascular',
        name: 'Enfermedades cardiovasculares',
        type: 'link',
        icon: 'healing'

    },
    {

        state: 'diabetes',
        name: 'Diabetes',
        type: 'link',
        icon: 'colorize'

    },
    {

        state: 'hipertension',
        name: 'Hipertensión',
        type: 'link',
        icon: 'medical_services'

    }

];

@Injectable()
export class MenuItemsMedico {
    getMenuitem(): Menu[] {
        return MENUITEMSMEDICO;
    }
}
