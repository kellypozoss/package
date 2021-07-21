import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { DatosMedicosComponent } from './datos-medicos/datos-medicos.component';
import { MisPronosticosComponent } from './mis-pronosticos/mis-pronosticos.component';
import { VariablesBiomedicasComponent } from './variables-biomedicas/variables-biomedicas.component';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';


export const AppRoutes: Routes = [
    {

        path: '',
        component: FullComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboards/dashboard1',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                redirectTo: '/dashboards/dashboard1',
                pathMatch: 'full'
            },
            {
                path: 'dashboards',
                loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
            },
            {
                path: 'material',
                loadChildren: () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
            },
            {
                path: 'apps',
                loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
            },
            {
                path: 'forms',
                loadChildren: () => import('./forms/forms.module').then(m => m.FormModule)
            },
            {
                path: 'tables',
                loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
            },
            {
                path: 'mis-pronosticos', component: MisPronosticosComponent,
                data: {
                    title: 'Mis pronósticos',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Mis pronósticos' }
                    ]
                }
            },
            {
                path: 'variables-biomedicas', component: VariablesBiomedicasComponent,
                data: {
                    title: 'Variables biomédicas',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Variables biomédicas' }
                    ]
                }
            },
            {
                path: 'generate-pdf', component: GeneratePdfComponent,
                data: {
                    title: 'Pronóstico',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Pronóstico' }
                    ]
                }
            },
            {
                path: 'tree',
                loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule)
            },
            {
                path: 'datatables',
                loadChildren: () => import('./datatables/datatables.module').then(m => m.DataTablesModule)
            },
            {
                path: 'pages',
                loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
            },
            {
                path: 'widgets',
                loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
            },
            {
                path: 'charts',
                loadChildren: () => import('./charts/chartslib.module').then(m => m.ChartslibModule)
            },
            {
                path: 'multi',
                loadChildren: () => import('./multi-dropdown/multi-dd.module').then(m => m.MultiModule)
            }
        ]
    },
    {
        path: '',
        component: AppBlankComponent,
        children: [
            {
                path: 'authentication',
                loadChildren:
                    () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'authentication/404'
    }
];
