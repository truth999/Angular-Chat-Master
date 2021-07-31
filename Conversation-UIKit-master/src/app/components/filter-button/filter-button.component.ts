import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {

  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleFilterButtonClick() {
    this.isActive = !this.isActive;
  }
}
