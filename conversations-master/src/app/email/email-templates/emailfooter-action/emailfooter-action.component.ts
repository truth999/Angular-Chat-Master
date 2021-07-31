import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { AppState, selectChannel } from '../../../ngrx/reducers/index.reducer';
import { Channel } from '../../../ngrx/models/channel.model';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { UpdateActiveRequest, DeleteActiveRequest } from '../../../ngrx/actions/active-request.actions';
import { ActiveRequest } from '../../../ngrx/models/active-request.model';
import { ChatService } from './../../../_service/chat.service';
import { VoiceService } from './../../../_service/voice.service';
import { ReceivedCall, StartMainCall } from './../../../ngrx/actions/email-transcript.actions';
import { CreateCall, UpdateCall, DeleteCall } from './../../../ngrx/actions/call.actions';
import { isDefined } from '@angular/compiler/src/util';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';

@Component({
    selector: 'app-emailfooter-action',
    templateUrl: './emailfooter-action.component.html',
    styleUrls: ['./emailfooter-action.component.scss']
})
export class EmailfooterActionComponent implements OnInit {
    isEsmenuShow: boolean = false;
    isComenuShow: boolean = false;
    wrapup_status: number = 0;
    wrapup_enable: boolean = true;
    channel: Channel;
    hoverEsmenu: boolean = false;
    is_right_menu = false;
    activeRequests: ActiveRequest[];

    show_cobrowse: boolean = false;
    show_escalate: boolean = false;
    show_agency: boolean = false;
    show_agency_transfer: boolean = false;
    show_agency_transfer_progress: boolean = false;
    escalate_type = "";
    show_alert: boolean = false;
    alert_type;
    alert_message;
    openedRequest: ActiveRequest;
    isShowManuallyLinkForm: boolean = false;
    agencyType: string = 'normal';

    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();

    constructor(private renderer: Renderer2, private store: Store<AppState>, private router: Router, public chatService: ChatService, public voiceService: VoiceService) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hoverEsmenu == false) {
                this.isEsmenuShow = false;
            }
        });
        store.select('activeRequests').subscribe(val => {
            this.activeRequests = val;
        });
    }

    ngOnInit(): void {
        this.store.select('channel').subscribe((val) => {
            this.channel = val;
            if (this.channel.email.agentStatus.availablewrapUp) {
                this.wrapup_enable = true;
            } else {
                this.wrapup_enable = false;
            }
        });
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
    wrapup() {
        this.wrapup_status = 1;
    }
    deferEmail() {
        let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        openedRequest = { ...openedRequest, isDefered: true, callStatus: 'accepted' }
        localStorage.setItem('openedRequest', JSON.stringify(openedRequest))
        this.store.dispatch(new ChangeOpenedRequest(openedRequest.callId));
        this.store.dispatch(new UpdateActiveRequest(openedRequest));
        this.callbackFunction.emit('Defer Email');
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

    hoverInEsmenu() {
        this.hoverEsmenu = true;
    }
    hoverOutEsmenu() {
        this.hoverEsmenu = false;
    }

    endInteraction() {

        let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        let updatedRequest = { ...openedRequest, callStatus: 'closed' }
        localStorage.setItem('openedRequest', JSON.stringify(updatedRequest))
        this.store.dispatch(new DeleteActiveRequest(openedRequest));

        //remove chain for linked tabs
        this.activeRequests.map(request => {
            if (request.linkedTo == openedRequest.callId) {
                let updatedRequest = request;
                updatedRequest.linkedTo = '';
                this.store.dispatch(new UpdateActiveRequest(updatedRequest));
            }
        })

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
            if (this.agencyType == "CallCustomer") {
                if (data.number != '') {
                    this.voiceService.createLinkedVoice('NewCallCustomer').then((status: any) => {
                        //if get success
                        this.store.dispatch(new StartMainCall);
                        this.store.dispatch(new CreateCall({
                            destname: data.name, phoneNumber: data.number, type: 'customer', status: 'talking',
                            holdTime: 0, talkingTime: 0
                        }));
                    }).catch((error: any) => {
                        alert("can't create the Voice");
                    });
                }
            }
            else {
                this.show_agency_transfer = true;
                this.show_agency = false;
            }

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
    closeAlert(action) {
        this.show_alert = false;
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

    callCustomer() {
        this.agencyType = 'CallCustomer';
        this.show_agency = true;
        this.isEsmenuShow = false;
    }

    textCustomer() {
        this.chatService.createLinkedChat('new').then((status: any) => {
            //if get success
        }).catch((error: any) => {
            alert("can't create the Email");
        });
    }

}
