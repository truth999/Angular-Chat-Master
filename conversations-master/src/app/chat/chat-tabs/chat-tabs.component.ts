import { Component, OnInit, Input } from '@angular/core';
import { ActiveRequest} from '../../ngrx/models/active-request.model';
import { timer, Subscription } from "rxjs";

// import { UpdateActiveRequest} from '../../ngrx/actions/active-request.actions';
// import { AppState ,selectChannel} from '../../ngrx/reducers/index.reducer';
// import { Store} from '@ngrx/store';

@Component({
  selector: 'app-chat-tabs',
  templateUrl: './chat-tabs.component.html',
  styleUrls: ['./chat-tabs.component.scss']
})
export class ChatTabsComponent implements OnInit {

  constructor() { }
  @Input() status:string = 'Incoming';    
  @Input() contactinfo:ActiveRequest;
  
  @Input() isLinked:boolean = false;
  @Input() newMesssage:boolean = false;
  @Input() isActive:boolean = false;
  timer:number = 0;
  tick = 1000;
  countUp: Subscription;

  // openedRequest: ActiveRequest;
  //li-main/li-list
  @Input() display_type:string = 'li-main';
  ngOnInit(): void {
    this.countUp = timer(0, this.tick).subscribe(() => ++this.timer);  
  }

  ngOnDestroy() {
    this.countUp = null;
  }

}
