import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  @Input() label: any;
  @Input() type: any;
  setting_status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleInput () {
    this.setting_status = !this.setting_status;
  }
}
