import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { SportsItemsComponent } from './sports-items/sports-items.component';
import { FootballComponent } from './sports-items/football/football.component';
import { VolleyballComponent } from './sports-items/volleyball/volleyball.component';
import { CricketComponent } from './sports-items/cricket/cricket.component';
import { RugbyComponent } from './sports-items/rugby/rugby.component';

export const sportsRoutes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: SportsItemsComponent,
            children: [
                {
                    path: 'football',
                    component: FootballComponent
                },
                {
                    path: 'volleyball',
                    component: VolleyballComponent
                },
                {
                    path: 'cricket',
                    component: CricketComponent
                },
                {
                    path: 'rugby',
                    component: RugbyComponent
                }
            ]
        }
    ]
}];
