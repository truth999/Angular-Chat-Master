import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../../ngrx/models/email-transcript.model';
import { AppState } from './../../../ngrx/reducers/index.reducer';
import { HoldCall, IncreaseTimer, RetreiveCall, InitTimer } from './../../../ngrx/actions/email-transcript.actions';
import { timer, Subscription } from "rxjs";
import { Call } from './../../../ngrx/models/call.model';
import { CreateCall, UpdateCall, DeleteCall } from './../../../ngrx/actions/call.actions';
import { Channel } from '../../../ngrx/models/channel.model';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateActiveRequest, DeleteActiveRequest } from '../../../ngrx/actions/active-request.actions';
import { ActiveRequest } from '../../../ngrx/models/active-request.model';
import { ChatService } from './../../../_service/chat.service';
import { VoiceService } from './../../../_service/voice.service';
import { EmailService } from 'src/app/_service/email.service';
import { ReceivedCall, StartMainCall } from './../../../ngrx/actions/email-transcript.actions';

@Component({
    selector: 'app-calltranscript-footer',
    templateUrl: './calltranscript-footer.component.html',
    styleUrls: ['./calltranscript-footer.component.scss']
})
export class CalltranscriptFooterComponent implements OnInit {
    isEsmenuShow: boolean = false;
    emailTranscript: EmailTranscript;
    countUp: Subscription;
    calls: Call[];
    interval;
    wrapup_status: number = 0;
    wrapup_enable: boolean = true;
    channel: Channel;
    is_right_menu: boolean = false;
    menu_hover_status: boolean = false;
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
    agencyType: string = 'normal';

    constructor(private store: Store<AppState>, private renderer: Renderer2, private router: Router, public chatService: ChatService, public emailService: EmailService, public voiceService: VoiceService) {
        // this.emailTranscript = this.store.select('emailTranscript');
        store.select('emailTranscript').subscribe(val => { this.emailTranscript = val; });
        store.select('calls').subscribe(val => { this.calls = val; });

        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.menu_hover_status == false) {
                this.isEsmenuShow = false;
            }
        });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        })
    }
    ngOnInit(): void {
        this.store.select('channel').subscribe((val) => {
            this.channel = val;
            if (this.channel.voice.agentStatus.availablewrapUp) {
                this.wrapup_enable = true;
            } else {
                // this.wrapup_enable = false;
                this.wrapup_enable = false;
            }
        });
    }
    hold() {
        this.store.dispatch(new HoldCall());
        // this.store.dispatch(new IncreaseTimer);
        // this.countUp = timer(0, 1000).subscribe(() => this.store.dispatch(new IncreaseTimer)); 
        this.store.dispatch(new UpdateCall({
            destname: this.calls[0].destname, phoneNumber: this.calls[0].phoneNumber, type: 'customer', status: 'holding',
            holdTime: this.calls[0].holdTime, talkingTime: (this.calls[0].talkingTime)
        }, 1));

    }
    retreive() {
        this.store.dispatch(new RetreiveCall);

        this.store.dispatch(new UpdateCall({
            destname: this.calls[0].destname, phoneNumber: this.calls[0].phoneNumber, type: 'customer', status: 'talking',
            holdTime: this.calls[0].holdTime, talkingTime: (this.calls[0].talkingTime)
        }, 1));
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
    showEscalateMenu() {
        this.isEsmenuShow = !this.isEsmenuShow;
    }
    showSubMenu() {
        this.is_right_menu = true;
    }
    hideSubMenu() {
        this.is_right_menu = false;
    }
    hoverinFooter() {
        this.menu_hover_status = true;
    }
    hoveroutFooter() {
        this.menu_hover_status = false;
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
