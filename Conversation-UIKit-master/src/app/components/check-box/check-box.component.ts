import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  setting_status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleInput () {
    this.setting_status = !this.setting_status;
  }
}
