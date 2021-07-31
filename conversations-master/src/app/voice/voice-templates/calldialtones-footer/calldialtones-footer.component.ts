import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { AppState, selectChannel } from '../../../ngrx/reducers/index.reducer';
import { Channel } from '../../../ngrx/models/channel.model';
import { Store, select } from '@ngrx/store';
import { UpdateActiveRequest, DeleteActiveRequest } from '../../../ngrx/actions/active-request.actions';
import { Router } from '@angular/router';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';

import { ActiveRequest } from '../../../ngrx/models/active-request.model';
import { ChatService } from './../../../_service/chat.service';
import { VoiceService } from './../../../_service/voice.service';
import { EmailService } from 'src/app/_service/email.service';

@Component({
    selector: 'app-calldialtones-footer',
    templateUrl: './calldialtones-footer.component.html',
    styleUrls: ['./calldialtones-footer.component.scss']
})
export class CalldialtonesFooterComponent implements OnInit {
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    @Input() type: any = 'dialtones';
    @Input() conferenceCallCount: any;

    isEsmenuShow: boolean = false;
    wrapup_status: number = 0;
    wrapup_enable = 1;
    channel: Channel;
    is_right_menu = false;
    hoverEsmenu: boolean = false;

    openedRequest: ActiveRequest;
    isShowManuallyLinkForm: boolean = false;
    show_alert: boolean = false;
    alert_type;
    alert_message;
    show_agency: boolean = false;
    show_agency_transfer: boolean = false;
    show_agency_transfer_progress: boolean = false;
    escalate_type = "";
    show_escalate: boolean = false;


    constructor(private store: Store<AppState>, private router: Router, private renderer: Renderer2, public chatService: ChatService, public emailService: EmailService) {
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        })
    }

    ngOnInit(): void {
        this.store.select('channel').subscribe((val) => {
            this.channel = val;
            if (this.channel.voice.agentStatus.availablewrapUp) {
                this.wrapup_enable = 1;
            } else {
                this.wrapup_enable = 0;
            }
        });
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hoverEsmenu == false) {
                this.isEsmenuShow = false;
            }
        });
    }

    wrapup() {
        this.wrapup_status = 1;
    }
    handleWrapup(action) {
        if (action == 'Close Before') {
            this.wrapup_status = 0;
        }
        else if (action == 'Accept Before') {
            this.wrapup_status = 2;
        }
        else if (action == 'Confirm Wrapup') {
            this.wrapup_status = 0;
        }
        else if (action == 'Close Confirm') {
            this.wrapup_status = 0;
        }
    }

    mergeCalls() {
        this.callbackFunction.emit("Merge Calls");
    }

    endInteraction() {

        let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        let updatedRequest = { ...openedRequest, callStatus: 'closed' }
        localStorage.setItem('openedRequest', JSON.stringify(updatedRequest))
        this.store.dispatch(new DeleteActiveRequest(openedRequest));
        // openedRequest = null;
        // localStorage.setItem('openedRequest', JSON.stringify(openedRequest))
        this.router.navigate(["home/queue"], { skipLocationChange: true });
    }

    showSubMenu(e) {
        this.is_right_menu = true;
    }

    hideSubMenu(e) {
        this.is_right_menu = false;
    }
    showEsMenu() {
        this.isEsmenuShow = !this.isEsmenuShow;
    }
    hoverInEsmenu() {
        this.hoverEsmenu = true;
    }
    hoverOutEsmenu() {
        this.hoverEsmenu = false;
    }

    showEscalateQueue() {
        this.escalate_type = "Queue";
        this.is_right_menu = false;
        this.show_escalate = true;
        this.isEsmenuShow = false;
    }
    showEscalateSupervisor() {
        this.is_right_menu = false;
        this.escalate_type = "Supervisor";
        this.show_escalate = true;
        this.isEsmenuShow = false;
    }
    closeEscalate = (args: any): void => {
        this.show_escalate = false;
        this.isEsmenuShow = false;
    }

    showAgency() {
        this.is_right_menu = false;
        this.show_agency = true;
        this.isEsmenuShow = false;
    }
    AgencyCallback = (data: any): void => {
        if (data.action == 'CLOSE AGENCY') {
            this.show_agency = false;
        }
        else if (data.action == 'DIRECT TRANSFER') {
            this.show_agency_transfer = true;
            this.show_agency = false;
        }
    }
    AgencyTransferCallback = (action: any): void => {
        if (action == 'CLOSE AGENCY TRANSFER') {
            this.show_agency_transfer = false;
            this.show_agency = true;
        }
        else if (action == 'TRANSFER PROGRESS') {
            this.show_agency_transfer = false;
            this.show_agency_transfer_progress = true;
        }
    }
    AgencyTransferProgressCallback = (action: any): void => {
        if (action == 'CLOSE AGENCY TRANSFER PROGRESS') {
            this.show_agency_transfer_progress = false;
        }
        else if (action == 'COMPLETE TRANSFER PROGRESS') {
            this.show_alert = true;
            this.alert_type = "success";
            this.alert_message = "Chat Successfully transfered to Agent, Cornelia Goodman";
            this.show_agency_transfer_progress = false;
        }
    }

    manualLink() {
        this.isShowManuallyLinkForm = true;
        this.isEsmenuShow = false;
    }

    handleManuallyLinkForm(action) {
        if (action == 'close') {
            this.isShowManuallyLinkForm = false;
        }
    }

    textCustomer() {
        this.chatService.createLinkedChat('new').then((status: any) => {
            //if get success
        }).catch((error: any) => {
            alert("can't create the Voice");
        });
    }

    emailCustomer() {
        this.emailService.createLinkedEmail('new').then((status: any) => {
            //if get success
        }).catch((error: any) => {
            alert("can't create the Email");
        });
    }
    closeAlert(action) {
        this.show_alert = false;
    }


}
