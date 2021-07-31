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
import { Renderer2, ViewChild } from '@angular/core';
import { ThemeService } from 'ng2-charts';

@Component({
    selector: 'channel',
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
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
    submenu = [];
    statusLabel: string;
    hoverChannel: boolean = false;

    constructor(private renderer: Renderer2, private store: Store<AppState>, public chatService: ChatService, public emailService: EmailService, public voiceService: VoiceService) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hoverChannel == false) {
                this.isShow = false;
            }
        });
    }

    // @HostListener('document:mousedown', ['$event'])
    // onGlobalClick(event): void {
    //     const clickedElement = event.target as HTMLElement;
    //     if ((clickedElement.tagName === "SPAN" && clickedElement.className === "multi-level-dropdown__timer") || (clickedElement.tagName === "SPAN" && clickedElement.innerHTML === "Ready") || clickedElement.tagName === "svg") {
    //         this.isShow = false;
    //     }
    //     if (clickedElement.classList[0] !== 'multi-level-dropdown__status' && clickedElement.tagName !== "SPAN" && clickedElement.tagName !== "svg") {
    //         this.isShow = false;
    //     }
    // }


    ngOnInit(): void {
        this.countUp = timer(0, this.tick).subscribe(() => ++this.timer);
        // this.countUp = timer(0, this.tick).subscribe(() => this.countUpFunction());
        this.store.select('channel').subscribe((val) => {
            var changed_flag = 0;
            if (!this.channel || !this.channel[this.type]) {
                changed_flag = 1;
            } else {
                if (this.channel[this.type] != val[this.type]) {
                    changed_flag = 1;
                }
            }
            this.channel = val;
            if (changed_flag == 1) {
                this.Init_Func();
            }
        });

    }

    countUpFunction() {
        var agentStatus = { ...this.channel[this.type].agentStatus, countUp: (1 + this.channel[this.type].agentStatus.countUp) }
        if (this.channel[this.type].agentStatus.countUp == null) {
            var agentStatus = { ...this.channel[this.type].agentStatus, countUp: 0 }
        }
        // var agentStatus = {...this.channel[this.type].agentStatus, countUp: (0 + this.channel[this.type].agentStatus.countUp)}
        var channel: Channel;
        switch (this.type) {
            case 'chat':
                var chat_obj = { ...this.channel.chat, agentStatus: agentStatus }
                channel = { ...this.channel, chat: chat_obj }
                break;
            case 'email':
                var email_obj = { ...this.channel.email, agentStatus: agentStatus }
                channel = { ...this.channel, email: email_obj }
                break;
            case 'voice':
                var voice_obj = { ...this.channel.voice, agentStatus: agentStatus }
                channel = { ...this.channel, voice: voice_obj }
                break;
            default:
                break;
        }
        this.store.dispatch(new UpdateChannel(channel));
        this.timer = this.channel[this.type].agentStatus.countUp
    }

    resetTimer() {
        var agentStatus = { ...this.channel[this.type].agentStatus, countUp: 0 }

        var channel: Channel;
        switch (this.type) {
            case 'chat':
                var chat_obj = { ...this.channel.chat, agentStatus: agentStatus }
                channel = { ...this.channel, chat: chat_obj }
                break;
            case 'email':
                var email_obj = { ...this.channel.email, agentStatus: agentStatus }
                channel = { ...this.channel, email: email_obj }
                break;
            case 'voice':
                var voice_obj = { ...this.channel.voice, agentStatus: agentStatus }
                channel = { ...this.channel, voice: voice_obj }
                break;
            default:
                break;
        }
        this.store.dispatch(new UpdateChannel(channel));
    }

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    Init_Func() {
        // this.timer = 0;
        // this.resetTimer();
        this.submenu = [];
        this.status = this.channel[this.type].agentStatus.currentState;

        switch (this.status) {
            case 'READY':
                this.tooltip = 'READY';
                this.statusLabel = 'Ready';
                break;
            case 'NOT_READY':
                var reasonCode = this.channel[this.type].agentStatus.notReadyReasonCodes.find(({ value }) => value == this.channel[this.type].agentStatus.currentReasonCode)
                this.tooltip = 'NOT READY, ' + this.capitalize(reasonCode.name)
                break;
            case 'MODE_WRAPUP':
                var reasonCode = this.channel[this.type].agentStatus.wrapUpReasonCodes.find(({ value }) => value == this.channel[this.type].agentStatus.currentReasonCode)
                this.tooltip = 'WRAP UP, ' + this.capitalize(reasonCode.name)
                break;
            case 'OUT_OF_SERVICE':
                var reasonCode = this.channel[this.type].agentStatus.logoutReasonCodes.find(({ value }) => value == this.channel[this.type].agentStatus.currentReasonCode)
                this.tooltip = 'LOG OUT, ' + this.capitalize(reasonCode.name)
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
                        'label': 'Ready',
                        'action': 'READY',
                        'reasonCode': 'Ready',
                        'sub_list': []
                    });
                    break;
                case 'NOT_READY':
                    var sublist = [];
                    this.channel[this.type].agentStatus.notReadyReasonCodes.forEach((val1) => {
                        sublist.push({
                            'label': val1.name,
                            'action': 'NOT_READY',
                            'reasonCode': val1.value,
                        });
                    });
                    that.submenu.push({
                        'label': 'Not Ready',
                        'action': 'NOT_READY',
                        'reasonCode': '0',
                        'sub_list': sublist
                    });
                    break;
                case 'MODE_WRAPUP':
                    var sublist = [];
                    this.channel[this.type].agentStatus.wrapUpReasonCodes.forEach((val1) => {
                        sublist.push({
                            'label': val1.name,
                            'action': 'MODE_WRAPUP',
                            'reasonCode': val1.value
                        });
                    });
                    that.submenu.push({
                        'label': 'Wrap Up',
                        'action': 'MODE_WRAPUP',
                        'reasonCode': '9',
                        'sub_list': sublist
                    });
                    break;
                case 'OUT_OF_SERVICE':
                    var sublist = [];
                    this.channel[this.type].agentStatus.logoutReasonCodes.forEach((val1) => {
                        sublist.push({
                            'label': val1.name,
                            'action': 'OUT_OF_SERVICE',
                            'reasonCode': val1.value
                        });
                    });
                    that.submenu.push({
                        'label': 'Log Out',
                        'action': 'OUT_OF_SERVICE',
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
        if (!submenu.sub_list || submenu.sub_list.length == 0) {
            switch (submenu.action) {
                case 'READY':
                    this.tooltip = 'READY';
                    this.statusLabel = 'Ready';
                    break;
                case 'NOT_READY':
                    var reasonCode = this.channel[this.type].agentStatus.notReadyReasonCodes.find(({ value }) => value == submenu.reasonCode)
                    this.tooltip = 'NOT READY, ' + this.capitalize(reasonCode.name)
                    break;
                case 'MODE_WRAPUP':
                    var reasonCode = this.channel[this.type].agentStatus.wrapUpReasonCodes.find(({ value }) => value == submenu.reasonCode)
                    this.tooltip = 'WRAP UP, ' + (reasonCode.name)
                    break;
                case 'OUT_OF_SERVICE':
                    var reasonCode = this.channel[this.type].agentStatus.logoutReasonCodes.find(({ value }) => value == submenu.reasonCode)
                    this.tooltip = 'LOG OUT, ' + this.capitalize(reasonCode.name)
                    this.statusLabel = 'Log Out';
                    break;
                default:
                    this.tooltip = 'READY';
                    break;
            }

            this.timer = 0;
            // this.resetTimer();
            this.status = submenu.action;
            this.isShow = false;

            //Update the channel status of Ngrx
            var agentStatus = { ...this.channel[this.type].agentStatus, currentState: this.status, currentReasonCode: this.status == 'READY' ? '0' : submenu.reasonCode }
            var channel: Channel;
            switch (this.type) {
                case 'chat':
                    var chat_obj = { ...this.channel.chat, agentStatus: agentStatus }
                    channel = { ...this.channel, chat: chat_obj }
                    break;
                case 'email':
                    var email_obj = { ...this.channel.email, agentStatus: agentStatus }
                    channel = { ...this.channel, email: email_obj }
                    break;
                case 'voice':
                    var voice_obj = { ...this.channel.voice, agentStatus: agentStatus }
                    channel = { ...this.channel, voice: voice_obj }
                    break;
                default:
                    break;
            }
            this.store.dispatch(new UpdateChannel(channel));
        }
    }

    hoverStatus(): void {
        this.hoverChannel = true;
    }

    hoveroutStatus(): void {
        this.hoverChannel = false;
    }

    newActionRequest(): void {

        if (this.type == "chat") {
            //call the api
            this.chatService.newChat().then((status: any) => {
                //if get success
                this.isShow = false;
            }).catch((error: any) => {
                alert("can't create the chat");
            });
        }

        if (this.type == "email") {
            //call the api
            this.emailService.newEmail().then((status: any) => {
                //if get success
                this.isShow = false;
            }).catch((error: any) => {
                alert("can't create the chat");
            });
        }

        if (this.type == "voice") {
            //call the api
            this.voiceService.newVoice().then((status: any) => {
                //if get success
                this.isShow = false;
            }).catch((error: any) => {
                alert("can't create the chat");
            });
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
