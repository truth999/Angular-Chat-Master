import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-wrapup-before',
  templateUrl: './wrapup-before.component.html',
  styleUrls: ['./wrapup-before.component.scss']
})
export class WrapupBeforeComponent implements OnInit {
  @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
  @Input() type: any;
  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.callbackFunction.emit('Close Before');
  }
  wrapUp() {
    this.callbackFunction.emit('Accept Before');
  }
}
