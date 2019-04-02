import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponentComponent } from './Components/simple-component/simple-component.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponentComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
