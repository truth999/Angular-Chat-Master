import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  expanded: boolean = false;
  notes = [
    {
      user: 'Ben',
      date: '03/08/2020',
      info: 'Payment'
    },
    {
      user: 'Tom',
      date: '03/08/2020',
      info: 'Payment'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  collapse() {
    this.expanded = false;
  }
  expand() {
    this.expanded = true;
  }
}
