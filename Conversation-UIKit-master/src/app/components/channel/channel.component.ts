import { Component, OnInit, Input, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { Renderer2, ViewChild } from '@angular/core';
import { ThemeService } from 'ng2-charts';

@Component({
    selector: 'channel',
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
    @Input() type: string;
    isShow: boolean = false;
    status: string;
    timer: number = 0;
    tick = 1000;
    countUp: Subscription;
    tooltip: string;
    hover: boolean = false;
    submenu = [];
    statusLabel: string;
    hoverChannel: boolean = false;

    channel = {
      "chat": {
        "agentStatus": {
          "currentState": "READY",
          "currentReasonCode": "0",
          "availablewrapUp": false,
          "countUp": 0,
          "availableStates": [
            "READY",
            "NOT_READY",
            "MODE_WRAPUP",
            "OUT_OF_SERVICE"
          ],
          "logoutReasonCodes": [
            {
              "name": "End Of The Day",
              "value": "5"
            },
            {
              "name": "Meeting",
              "value": "6"
            }
          ],
          "notReadyReasonCodes": [
            {
              "name": "Default",
              "value": "0"
            },
            {
              "name": "Break",
              "value": "1"
            },
            {
              "name": "lunch",
              "value": "2"
            },
            {
              "name": "Meeting",
              "value": "3"
            }
          ],
          "wrapUpReasonCodes": [
            {
              "name": "Query resolved",
              "value": "9"
            },
            {
              "name": "New Query",
              "value": "10"
            }
          ]
        }
      },
      "email": {
        "agentStatus": {
          "currentState": "NOT_READY",
          "currentReasonCode": "1",
          "availablewrapUp": true,
          "countUp": 0,
          "availableStates": [
            "READY",
            "NOT_READY",
            "MODE_WRAPUP",
            "OUT_OF_SERVICE"
          ],
          "logoutReasonCodes": [
            {
              "name": "End Of The Day",
              "value": "5"
            },
            {
              "name": "Meeting",
              "value": "6"
            }
          ],
          "notReadyReasonCodes": [
            {
              "name": "Default",
              "value": "0"
            },
            {
              "name": "Break",
              "value": "1"
            },
            {
              "name": "lunch",
              "value": "2"
            },
            {
              "name": "Meeting",
              "value": "3"
            }
          ],
          "wrapUpReasonCodes": [
            {
              "name": "Query resolved",
              "value": "9"
            },
            {
              "name": "New Query",
              "value": "10"
            }
          ]
        }
      },
      "voice": {
        "agentStatus": {
          "currentState": "NOT_READY",
          "currentReasonCode": "2",
          "availablewrapUp": false,
          "countUp": 0,
          "availableStates": [
            "READY",
            "NOT_READY",
            "MODE_WRAPUP",
            "OUT_OF_SERVICE"
          ],
          "logoutReasonCodes": [
            {
              "name": "End Of The Day",
              "value": "5"
            },
            {
              "name": "Meeting",
              "value": "6"
            }
          ],
          "notReadyReasonCodes": [
            {
              "name": "Default",
              "value": "0"
            },
            {
              "name": "Break",
              "value": "1"
            },
            {
              "name": "lunch",
              "value": "2"
            },
            {
              "name": "Meeting",
              "value": "3"
            }
          ],
          "wrapUpReasonCodes": [
            {
              "name": "Query resolved",
              "value": "9"
            },
            {
              "name": "New Query",
              "value": "10"
            }
          ]
        }
      }
    }
    constructor(private renderer: Renderer2) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hoverChannel == false) {
                this.isShow = false;
            }
        });
    }

    ngOnInit(): void {
        this.countUp = timer(0, this.tick).subscribe(() => ++this.timer);
        this.Init_Func();
    }

    countUpFunction() {
        this.timer = this.timer ++;
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

        }
    }

    hoverStatus(): void {
        this.hoverChannel = true;
    }

    hoveroutStatus(): void {
        this.hoverChannel = false;
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
