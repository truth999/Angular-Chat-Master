import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DashboardChannelComponent } from '../../components/dashboard-channel/dashboard-channel.component';
import { Store, select } from '@ngrx/store';
import { AppState, selectChannel } from '../../ngrx/reducers/index.reducer';
import { Channel } from '../../ngrx/models/channel.model';
import { UpdateChannel } from '../../ngrx/actions/channel.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // @ViewChild('mldbc_chat') mldbc_chat: DashboardChannelComponent;
  // @ViewChild('mldbc_voice') mldbc_voice: DashboardChannelComponent;
  // @ViewChild('mldbc_email') mldbc_email: DashboardChannelComponent;
  @Input() opened: boolean;
  @Input() searched: boolean;
  @Output() reset = new EventEmitter();
  channel: Channel;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    localStorage.removeItem("tab_id");
    this.store.select('channel').subscribe(val => this.channel = val)
  }

  resetAll(): void {
    // this.mldbc_chat.ngOnInit();
    // this.mldbc_voice.ngOnInit();
    // this.mldbc_email.ngOnInit();
    var channel: Channel;
    var chat_agentStatus = {...this.channel.chat.agentStatus, currentState: "READY", currentReasonCode: "0"}
    var voice_agentStatus = {...this.channel.voice.agentStatus, currentState: "READY", currentReasonCode: "0"}
    var email_agentStatus = {...this.channel.email.agentStatus, currentState: "READY", currentReasonCode: "0"}
    var chat_obj = {...this.channel.chat, agentStatus: chat_agentStatus}
    var email_obj = {...this.channel.email, agentStatus: email_agentStatus}
    var voice_obj = {...this.channel.voice, agentStatus: voice_agentStatus}
    channel = {...this.channel, chat: chat_obj, email: email_obj, voice: voice_obj}
    this.store.dispatch(new UpdateChannel(channel));
  }

}
