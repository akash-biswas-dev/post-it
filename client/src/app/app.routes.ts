import { Routes } from '@angular/router';

import { HomePage } from '../pages/home/home.page';
import { AuthPage } from '../pages/auth/auth.page';
import { DashBoardPage } from '../pages/dashboard/dashboard.page';
import { NotFoundPage } from '../pages/not-found/not-found.page';


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
    title: 'Auth | PostIt'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, 
  {
    path:'**',
    component: NotFoundPage
  }
];
