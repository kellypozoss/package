import { RouterModule, Routes } from '@angular/router';
import { DatosMedicosComponent } from './datos-medicos/datos-medicos.component';
import { MisPronosticosComponent } from './mis-pronosticos/mis-pronosticos.component';


const app_routes: Routes = [
    { path: 'datos-medicos', component: DatosMedicosComponent },
    { path: 'mis-pronosticos', component: MisPronosticosComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);