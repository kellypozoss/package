import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { MedicoLoginComponent } from './medico-login/medico-login.component';
export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: ErrorComponent
      },
      {
        path: 'forgot',
        component: ForgotComponent
      },
      {
        path: 'lockscreen',
        component: LockscreenComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'medico-login',
        component: MedicoLoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'inicio',
        component: InicioComponent
      }
    ]
  }
];
