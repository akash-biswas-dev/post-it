import { Routes } from '@angular/router';

import { HomePage } from '../pages/home/home.page';
import { AuthPage } from '../pages/auth/auth.page';
import { DashBoardPage } from '../pages/dashboard/dashboard.page';
import { NotFoundPage } from '../pages/not-found/not-found.page';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterUseComponent } from '../pages/register-user/register-user.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    title: 'Home | PostIt'
  },
  {
    path: 'dash-board',
    component: DashBoardPage,
    title: 'Dashboard | PostIt'
  },  
  {
    path:'auth',
    component: AuthPage,
    title: 'Auth | PostIt',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterUseComponent
      },
      {
        path: '**',
        redirectTo:'/auth/login'
      }
    ]
  },
  {
    path:'error',
    component: NotFoundPage
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, 
  {
    path: '**',
    redirectTo: '/error'
  }
];
