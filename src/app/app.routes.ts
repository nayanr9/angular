import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/sports',
        pathMatch: 'full'
    },
    {
        path: 'sports',
        loadChildren: './sports/sports.module#SportsModule'
    }
];
