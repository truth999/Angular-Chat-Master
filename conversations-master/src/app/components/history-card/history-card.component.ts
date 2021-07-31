import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {

  @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
  @Input() content: any;
  expanded: boolean = false;
  intent;
  duration;
  agent;
  status;
  activity;
  constructor() { }

  ngOnInit(): void {
    this.content.activityObjects.map(object => {
        if(object.key == 'SFIntents__c') {
            this.intent = object;
        }
        else if(object.key == 'CallDurationInSeconds') {
            this.duration = object;
        }
        else if(object.key == 'agentId') {
            this.agent = object;
        }
        else if(object.key == 'Status') {
            this.status = object;
        }
        else if(object.key == 'Description') {
            this.activity = object;
        }
        else if(object.key == 'Description') {
            this.duration = object;
        }
    })
  }

  collapse() {
    this.expanded = false;
  }
  expand() {
    this.expanded = true;
  }
  editInteraction() {
    this.callbackFunction.emit('Edit Interaction');
  }
  viewTranscript() {
    this.callbackFunction.emit('View Transcript');
  }

}
