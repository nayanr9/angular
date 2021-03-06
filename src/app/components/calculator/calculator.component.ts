import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  firstValue = 0;
  secondValue = 0;
  resultValue: any = 0;
  operand = '+';
  error = 'Operator not found';

  ngOnInit() {
  }

  process() {
    switch (this.operand) {
      case '+':
        this.resultValue = this.firstValue + this.secondValue;
        break;

      default:
      this.resultValue = this.error;
      break;
    }
  }

}
