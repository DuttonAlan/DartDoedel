import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
  {
    path: 'homepage',
    component: Homepage,
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
];
