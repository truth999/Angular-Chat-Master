import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-component',
  templateUrl: './stepper-component.component.html',
  styleUrls: ['./stepper-component.component.scss']
})
export class StepperComponentComponent implements OnInit {

  step: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    this.step = this.step + 1;
  }
}
