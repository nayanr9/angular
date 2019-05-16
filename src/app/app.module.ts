import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, { enableTracing: true } ),
        LayoutModule
    ],
    providers: [],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
