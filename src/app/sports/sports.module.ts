import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsItemsComponent } from './sports-items/sports-items.component';
import { RouterModule } from '@angular/router';
import { sportsRoutes } from './sports.routes';
import { LayoutModule } from '../layout/layout.module';
import { FootballComponent } from './sports-items/football/football.component';
import { VolleyballComponent } from './sports-items/volleyball/volleyball.component';
import { CricketComponent } from './sports-items/cricket/cricket.component';
import { RugbyComponent } from './sports-items/rugby/rugby.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sportsRoutes),
    LayoutModule
  ],
  declarations: [
    SportsItemsComponent,
    FootballComponent,
    VolleyballComponent,
    CricketComponent,
    RugbyComponent
  ],
  exports: [SportsItemsComponent]
})
export class SportsModule { }
