import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CalculatorComponent} from './calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        CalculatorComponent
    ],
    providers: [
    ]
})
export class CalculatorModule {}
