import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-step-without-icons',
  templateUrl: './multi-step-without-icons.component.html',
  styleUrls: ['./multi-step-without-icons.component.scss']
})
export class MultiStepWithoutIconsComponent implements OnInit {

  step: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    this.step = this.step + 1;
  }
}
