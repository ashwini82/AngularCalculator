import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public num1 = null;
  public num2 = null;
  public result: number;
  choose: any;
  constructor() { }

  ngOnInit(): void {
  }
  addition() {
    this.result = this.num1 + this.num2;
    this.choose = "addition";


  }
  sub() {
    this.result = this.num1 - this.num2;
    this.choose = "sub";
  }
  multiply() {
    this.result = this.num1 * this.num2;
    this.choose = "multiply";
  }
  divide() {
    this.choose = "divide";
    this.result = (this.num1) / (this.num2);
    Math.round(this.result);

  }

}
