import { Routes } from '@angular/router';

import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { MailComponent } from './mail/mail.component';
import { ChatComponent } from './chat/chat.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotesComponent } from './notes/notes.component';
import { CoursesComponent } from './courses/courses.component';
import { ListingComponent } from './mailbox/listing/listing.component';
import { DetailComponent } from './mailbox/detail/detail.component';
import { MailboxComponent } from './mailbox/mailbox.component';



import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { InvoiceViewComponent } from './invoice/invoice-view/invoice-view.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { TodoComponent } from './todo/todo.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { DatosMedicosComponent } from '../datos-medicos/datos-medicos.component';
import { AntecedentesFamiliaresComponent } from './antecedentes-familiares/antecedentes-familiares.component';
import { AntecedentesEnfermedadComponent } from './antecedentes-enfermedad/antecedentes-enfermedad.component';
import { HistorialMedicoComponent } from './historial-medico/historial-medico.component';
import { MisWearablesComponent } from './mis-wearables/mis-wearables.component';
import { AgregarWearableComponent } from './agregar-wearable/agregar-wearable.component';
import { DetalleVariableComponent } from './detalle-variable/detalle-variable.component';
import { DetalleWearableComponent } from './detalle-wearable/detalle-wearable.component';


export const AppsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'calendar',
                component: FullcalendarComponent,
                data: {
                    title: 'Calendar',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Calendar' }
                    ]
                }
            },
            {
                path: 'datos-medicos',
                component: DatosMedicosComponent,
                data: {
                    title: 'Datos Médicos',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Datos Médicos' }
                    ]
                }
            },
            {
                path: 'antecedentes-familiares',
                component: AntecedentesFamiliaresComponent,
                data: {
                    title: 'Antecedentes Familiares',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Antecedentes Familiares' }
                    ]
                }
            },
            {
                path: 'antecedentes-enfermedades',
                component: AntecedentesEnfermedadComponent,
                data: {
                    title: 'Antecedentes de Enfermedades',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Antecedentes de Enfermedades' }
                    ]
                }
            },
            {
                path: 'historial-medico',
                component: HistorialMedicoComponent,
                data: {
                    title: 'Historial Médico',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Historial Médico' }
                    ]
                }
            },

            {
                path: 'mis-wearables',
                component: MisWearablesComponent,
                data: {
                    title: 'Mis wearables',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Mis wearables' }
                    ]
                }
            },
            {
                path: 'agregar-wearable',
                component: AgregarWearableComponent,
                data: {
                    title: 'Agregar wearable',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Agregar wearable' }
                    ]
                }
            },
            {
                path: 'detalle-variable',
                component: DetalleVariableComponent,
                data: {
                    title: 'Lista de Variables',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Lista de Variables' }
                    ]
                }
            },

            {
                path: 'detalle-wearable',
                component: DetalleWearableComponent,
                data: {
                    title: 'Detalles del Wearable',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalles del Wearable' }
                    ]
                }
            },

            { path: 'mailbox', redirectTo: 'mailbox/inbox', pathMatch: 'full' },

            {
                path: 'mailbox/:type',
                component: MailboxComponent,
                children: [
                    {
                        path: ':id', component: DetailComponent,
                        data: {
                            title: 'New Email',
                            urls: [
                                { title: 'Dashboard', url: '/dashboard' },
                                { title: 'Email' }
                            ]
                        }
                    },

                ],
                data: {
                    title: 'New Email',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Email' }
                    ]
                }
            },
            {
                path: 'messages',
                component: MailComponent,
                data: {
                    title: 'Email',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Email' }
                    ]
                }
            },
            {
                path: 'chat',
                component: ChatComponent,
                data: {
                    title: 'Chat',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Chat' }
                    ]
                }
            },
            {
                path: 'taskboard',
                component: TaskboardComponent,
                data: {
                    title: 'Taskboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Taskboard' }
                    ]
                }
            },
            {
                path: 'notes',
                component: NotesComponent,
                data: {
                    title: 'Notes',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Notes' }
                    ]
                }
            },
            {
                path: 'ticketlist',
                component: TicketlistComponent,
                data: {
                    title: 'Ticket List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ticket List' }
                    ]
                }
            },
            {
                path: 'ticketdetails',
                component: TicketdetailsComponent,
                data: {
                    title: 'Ticket Details',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ticket Details' }
                    ]
                }
            },
            {
                path: 'employeelist',
                component: EmployeeComponent,
                data: {
                    title: 'Employee List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Employee List' }
                    ]
                }
            },
            {
                path: 'contact',
                component: ContactComponent,
                data: {
                    title: 'Contact',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Contact' }
                    ]
                }
            },
            {
                path: 'courses',
                component: CoursesComponent,
                data: {
                    title: 'Courses',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Courses' }
                    ]
                }
            },
            {
                path: 'courses/coursesdetail/:id',
                component: CourseDetailComponent,
                data: {
                    title: 'Courses Detail',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Courses' }
                    ]
                }
            },
            {
                path: 'invoice',
                component: InvoiceListComponent,
                data: {
                    title: 'Invoice',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Invoice' }
                    ]
                }
            },
            {
                path: 'addInvoice',
                component: AddInvoiceComponent,
                data: {
                    title: '',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: '' }
                    ]
                }
            },
            {
                path: 'viewInvoice/:id',
                component: InvoiceViewComponent,
                data: {
                    title: 'View Invoice',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'View Invoice' }
                    ]
                }
            },
            {
                path: 'editinvoice/:id',
                component: EditInvoiceComponent,
                data: {
                    title: '',
                    urls: [

                    ]
                }
            },
            {
                path: 'todo',
                component: TodoComponent,
                data: {
                    title: 'Todo',
                    urls: [

                    ]
                }
            }
        ]
    }
];



