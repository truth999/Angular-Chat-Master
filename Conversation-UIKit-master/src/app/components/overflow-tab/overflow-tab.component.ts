import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overflow-tab',
  templateUrl: './overflow-tab.component.html',
  styleUrls: ['./overflow-tab.component.scss']
})
export class OverflowTabComponent implements OnInit {

  isShow:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.isShow = !this.isShow;
  }

}
