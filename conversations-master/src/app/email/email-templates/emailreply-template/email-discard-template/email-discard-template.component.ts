import { Component, OnInit } from '@angular/core';
import {  EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-email-discard-template',
  templateUrl: './email-discard-template.component.html',
  styleUrls: ['./email-discard-template.component.scss']
})
export class EmailDiscardTemplateComponent implements OnInit {
  @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  doAction(action) {
    if( action == 'Discard' )
    {
      this.callbackFunction.emit('Discard');
    }
    if( action == 'Close' )
    {
      this.callbackFunction.emit('Close');
    }
  }
}
