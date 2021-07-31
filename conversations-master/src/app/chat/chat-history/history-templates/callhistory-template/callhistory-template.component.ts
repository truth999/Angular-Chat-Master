import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-callhistory-template',
  templateUrl: './callhistory-template.component.html',
  styleUrls: ['./callhistory-template.component.scss']
})
export class CallhistoryTemplateComponent implements OnInit {
  @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
  @Input() content: any;
  expanded: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }

  expand() {
    this.expanded = true;
  }
  collapse() {
    this.expanded = false;
  }
  editInteraction() {
    this.callbackFunction.emit('Edit Interaction');
  }
  viewTranscript() {
    this.callbackFunction.emit('View Transcript');
  }

}
