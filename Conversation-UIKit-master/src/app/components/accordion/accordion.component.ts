import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  curPanel: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  showPanel(index) {
    this.curPanel = index;
  }
}
