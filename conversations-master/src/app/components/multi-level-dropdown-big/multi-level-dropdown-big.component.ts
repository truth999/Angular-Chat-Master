import { Component, OnInit, Input, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";
import { AppState, selectChannel } from '../../ngrx/reducers/index.reducer';
import { ActiveRequest } from '../../ngrx/models/active-request.model';
import { AddActiveRequest } from '../../ngrx/actions/active-request.actions';
import { Channel } from '../../ngrx/models/channel.model';
import { UpdateChannel } from '../../ngrx/actions/channel.actions';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ChatService } from './../../_service/chat.service';
import { VoiceService } from './../../_service/voice.service';
import { EmailService } from './../../_service/email.service';

@Component({
  selector: 'app-multi-level-dropdown-big',
  templateUrl: './multi-level-dropdown-big.component.html',
  styleUrls: ['./multi-level-dropdown-big.component.scss']
})
export class MultiLevelDropdownBigComponent implements OnInit {
  @Input() type: string;
  channel: Channel;
  isShow: boolean = false;
  status: string;
  timer: number = 0;
  tick = 1000;
  countUp: Subscription;
  tooltip: string;
  activeRequest: ActiveRequest;
  hover: boolean = false;
  is_right_menu: boolean = false;
  firstStatusFlag = false;
  submenu = [];
  statusLabel: string;

  constructor(private store: Store<AppState>, public chatService: ChatService, public emailService: EmailService, public voiceService: VoiceService) {
    
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.tagName === "SPAN" && clickedElement.className === "multi-level-dropdown__button") {
      this.isShow = false;
    }
    if ((clickedElement.tagName === "SPAN" && clickedElement.className === "multi-level-dropdown__timer") || (clickedElement.tagName === "SPAN" && clickedElement.innerHTML === "Ready") || clickedElement.tagName === "svg") {
      this.isShow = false;
    }
    if (clickedElement.classList[0] !== 'multi-level-dropdown__status' && clickedElement.tagName !== "SPAN" && clickedElement.tagName !== "svg") {
      this.isShow = false;
    }
  }

  ngOnInit(): void {
    this.countUp = timer(0, this.tick).subscribe(() => ++this.timer);    
    this.store.select('channel').subscribe((val) => {
      var changed_flag = 0;
      if(!this.channel || !this.channel[this.type]){
        changed_flag = 1;
      }else{
        if(this.channel[this.type] != val[this.type]){
          changed_flag = 1;
        }
      }
      this.channel = val
      if(changed_flag == 1){
        this.Init_Func();
      }
    });
  }
  Init_Func() {
    this.timer = 0;
    this.submenu = [];
    this.status = this.channel[this.type].agentStatus.currentState; 
    switch (this.status) {
      case 'READY':
        this.tooltip = 'READY';
        this.statusLabel = 'Ready';
        break;
      case 'NOT_READY':
        var reasonCode = this.channel[this.type].agentStatus.notReadyReasonCodes.find( ({ value }) => value == this.channel[this.type].agentStatus.currentReasonCode )
        this.tooltip = reasonCode.name
        break;
      case 'MODE_WRAPUP':
        var reasonCode = this.channel[this.type].agentStatus.wrapUpReasonCodes.find( ({ value }) => value == this.channel[this.type].agentStatus.currentReasonCode )
        this.tooltip = reasonCode.name
        break;
      case 'OUT_OF_SERVICE':
        var reasonCode = this.channel[this.type].agentStatus.logoutReasonCodes.find( ({ value }) => value == this.channel[this.type].agentStatus.currentReasonCode )
        this.tooltip = reasonCode.name
        this.statusLabel = 'Log Out';
        break;
      default:
        this.tooltip = 'READY';
        break;
    }
    var that = this;
    this.channel[this.type].agentStatus.availableStates.forEach((val) => {
      switch (val) {
        case 'READY':
          that.submenu.push({
            'label':'Ready',
            'action':'READY',
            'reasonCode':'Ready',
            'sub_list':[]
          });
          break;
        case 'NOT_READY':
          var sublist = [];
          this.channel[this.type].agentStatus.notReadyReasonCodes.forEach((val1) => {
            sublist.push({
              'label': val1.name,  
              'action':'NOT_READY',
              'reasonCode': val1.value
            });
          });
          that.submenu.push({
            'label':'Not Ready',
            'action':'NOT_READY',
            'reasonCode': '0',
            'sub_list': sublist
          });
          break;
        case 'MODE_WRAPUP':
          var sublist = [];
          this.channel[this.type].agentStatus.wrapUpReasonCodes.forEach((val1) => {
            sublist.push({
              'label': val1.name,  
              'action':'MODE_WRAPUP',
              'reasonCode': val1.value
            });
          });
          that.submenu.push({
            'label':'Wrap Up',
            'action':'MODE_WRAPUP',
            'reasonCode': '9',
            'sub_list': sublist
          });
          break;
        case 'OUT_OF_SERVICE':
          var sublist = [];
          this.channel[this.type].agentStatus.logoutReasonCodes.forEach((val1) => {
            sublist.push({
              'label': val1.name,  
              'action':'OUT_OF_SERVICE',
              'reasonCode': val1.value
            });
          });
          that.submenu.push({
            'label':'Log Out',
            'action':'OUT_OF_SERVICE',
            'reasonCode': '5',
            'sub_list': sublist
          });
          break;
        default:
          break;
      }
    });
  }

  ngOnDestroy() {
    this.countUp = null;
  }

  showMenu(): void {
    this.isShow = true;
  }

  doAction(submenu: any) {
    
    // this.status_for_style = status;
    // this.firstStatusFlag = false;

    if (!submenu.sub_list || submenu.sub_list.length == 0) {
      switch (submenu.action) {
        case 'READY':
          this.tooltip = 'READY';
          this.statusLabel = 'Ready';
          break;
        case 'NOT_READY':
          var reasonCode = this.channel[this.type].agentStatus.notReadyReasonCodes.find( ({ value }) => value == submenu.reasonCode )
          this.tooltip = reasonCode.name
          break;
        case 'MODE_WRAPUP':
          var reasonCode = this.channel[this.type].agentStatus.wrapUpReasonCodes.find( ({ value }) => value == submenu.reasonCode )
          this.tooltip = reasonCode.name
          break;
        case 'OUT_OF_SERVICE':
          var reasonCode = this.channel[this.type].agentStatus.logoutReasonCodes.find( ({ value }) => value == submenu.reasonCode )
          this.tooltip = reasonCode.name
          this.statusLabel = 'Log Out';
          break;
        default:
          this.tooltip = 'READY';
          break;
      }
  
      this.timer = 0;
      this.status = submenu.action;
      this.isShow =false;

      //Update the channel status of Ngrx
      var agentStatus = {...this.channel[this.type].agentStatus, currentState: this.status, currentReasonCode: this.status == 'READY'? '0': submenu.reasonCode}
      var channel: Channel;
      switch (this.type) {
        case 'chat':
          var chat_obj = {...this.channel.chat, agentStatus: agentStatus}
          channel = {...this.channel, chat: chat_obj}
          break;
        case 'email':
          var email_obj = {...this.channel.email, agentStatus: agentStatus}
          channel = {...this.channel, email: email_obj}
          break;
        case 'voice':
          var voice_obj = {...this.channel.voice, agentStatus: agentStatus}
          channel = {...this.channel, voice: voice_obj}
          break;
        default:
          break;
      }
      this.store.dispatch(new UpdateChannel(channel));
    }
  }

  hoverStatus(): void {
    this.hover = true;
  }

  hoveroutStatus(): void {
    this.hover = false;
  }

  newActionRequest(): void {
    // this.activeRequest = {
    //   user_id: 1,
    //   first_name: "Test",
    //   last_name: "test",
    //   email: "test@test.com",
    //   phone: "8135637145",
    //   type: this.type,
    //   status: this.type === "voice" ? "incoming" : "ready",
    //   is_active: false,
    //   new_message: true,
    //   is_deferred: false,
    // }
    // this.store.dispatch(new AddActiveRequest(this.activeRequest))
    // this.isShow = false;
    if(this.type == "chat"){
      //call the api
      this.chatService.newChat().then((status:any) => {            
        //if get success
        this.isShow = false;
      }).catch((error:any) => {
        alert("can't create the chat");
      });        
    }

    if(this.type == "email"){
      //call the api
      this.emailService.newEmail().then((status:any) => {            
        //if get success
        this.isShow = false;
      }).catch((error:any) => {
        alert("can't create the chat");
      });        
    }

    if(this.type == "voice"){
      //call the api
      this.voiceService.newVoice().then((status:any) => {            
        //if get success
        this.isShow = false;
      }).catch((error:any) => {
        alert("can't create the chat");
      });        
    }
  }

  dropdownHover(e) {
    if (e.x < 250) { // if x of mouse position is less than dropdown ul + sub ul 
      this.is_right_menu = true;
    } else {
      this.is_right_menu = false;
    }
  }
}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
