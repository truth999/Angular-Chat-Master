import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { AppState, selectChannel } from '../../../ngrx/reducers/index.reducer';
import { Channel } from '../../../ngrx/models/channel.model';
import { Store, select } from '@ngrx/store';
import { ActiveRequest } from '../../../ngrx/models/active-request.model';
import { UpdateActiveRequest, DeleteActiveRequest } from '../../../ngrx/actions/active-request.actions';
import { Router } from '@angular/router';
import { EmailService } from './../../../_service/email.service';
import { VoiceService } from './../../../_service/voice.service';
import { CreateCall, UpdateCall, DeleteCall, CreateMainCall } from './../../../ngrx/actions/call.actions';
import { ReceivedCall, StartMainCall } from './../../../ngrx/actions/email-transcript.actions';

'@angular/core';
@Component({
    selector: 'app-footer-action',
    templateUrl: './footer-action.component.html',
    styleUrls: ['./footer-action.component.scss']
})
export class FooterActionComponent implements OnInit {

    isComenuShow: boolean = false;
    isEsmenuShow: boolean = false;
    show_cobrowse: boolean = false;
    show_escalate: boolean = false;
    show_agency: boolean = false;
    show_agency_transfer: boolean = false;
    show_agency_transfer_progress: boolean = false;
    wrapup_status: number = 0;
    wrapup_enable = 1;
    channel: Channel;
    hover: boolean = false;
    is_right_menu = false;
    escalate_type = "";
    show_alert: boolean = false;
    alert_type;
    alert_message;
    openedRequest: ActiveRequest;
    isShowManuallyLinkForm: boolean = false;
    agencyType: string = 'normal';
    isCobrowseEnabled;

    @ViewChild('footer') footer: ElementRef;

    constructor(private store: Store<AppState>, private renderer: Renderer2, private router: Router, public emailService: EmailService, public voiceService: VoiceService) {

        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hover == false) {
                this.isComenuShow = false;
                this.isEsmenuShow = false;
            }
        });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        })

        store.select('openedRequestDetail').subscribe(opendRequestData => {
            store.select('chats').subscribe(val => {
                let index = val.findIndex(element => element.callId === opendRequestData.callId)
                if (index >= 0) {
                    this.isCobrowseEnabled = val[index].showCobrowseCriteria;
                }
            })
        })
    }

    ngOnInit(): void {
        this.store.select('channel').subscribe((val) => {
            this.channel = val;
            if (this.channel.chat.agentStatus.availablewrapUp) {
                this.wrapup_enable = 1;
            } else {
                this.wrapup_enable = 0;
            }
        });
    }

    toggleDropdownEsmenu(): void {
        this.isEsmenuShow = !this.isEsmenuShow;
        this.isComenuShow = false;
    }
    toggleDropdownComenu(): void {
        this.isComenuShow = !this.isComenuShow;
        this.isEsmenuShow = false;
    }

    showCoBrowse() {
        this.show_cobrowse = true;
        this.isComenuShow = false;
    }
    closeCobrowse = (): void => {
        this.show_cobrowse = false;
        this.isComenuShow = false;
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
                    this.voiceService.createLinkedVoice('NewCallCustomer', data.name, data.number).then((status: any) => {
                        //if get success
                        // this.store.dispatch(new StartMainCall);
                        // this.store.dispatch(new CreateMainCall({
                        //     destname: data.name, phoneNumber: data.number, type: 'customer', status: 'talking',
                        //     holdTime: 0, talkingTime: 0
                        // }));
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

    showSubMenu(e) {
        this.is_right_menu = true;
    }

    hideSubMenu(e) {
        this.is_right_menu = false;
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

    hoverStatus(): void {
        this.hover = true;
    }

    closeAlert(action) {
        this.show_alert = false;
    }
    hoveroutStatus(): void {
        this.hover = false;
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
        // this.voiceService.createLinkedVoice('new').then((status: any) => {
        //     //if get success
        // }).catch((error: any) => {
        //     alert("can't create the Voice");
        // });
        this.agencyType = 'CallCustomer';
        this.show_agency = true;
        this.isEsmenuShow = false;
    }

    emailCustomer() {
        this.emailService.createLinkedEmail('new').then((status: any) => {
            //if get success
        }).catch((error: any) => {
            alert("can't create the Email");
        });
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

}
