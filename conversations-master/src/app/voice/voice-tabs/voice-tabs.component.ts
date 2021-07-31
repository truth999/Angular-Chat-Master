import { Component, OnInit, Input } from '@angular/core';
import { ActiveRequest} from '../../ngrx/models/active-request.model';
import { timer, Subscription } from "rxjs";

@Component({
  selector: 'app-voice-tabs',
  templateUrl: './voice-tabs.component.html',
  styleUrls: ['./voice-tabs.component.scss']
})
export class VoiceTabsComponent implements OnInit {

  constructor() { } 
  @Input() contactinfo: ActiveRequest;
  
  @Input() isLinked:boolean = false;
  @Input() newMesssage:boolean = false;
  @Input() isActive:boolean = false;
  //li-main/li-list
  @Input() display_type:string = 'li-main';

  timer:number = 0;
  tick = 1000;
  countUp: Subscription;
  ngOnInit(): void {
    this.countUp = timer(0, this.tick).subscribe(() => ++this.timer);  
  }

  ngOnDestroy() {
    this.countUp = null;
  }
}
