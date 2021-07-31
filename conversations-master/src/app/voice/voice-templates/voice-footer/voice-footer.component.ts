import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Voice } from '../../../ngrx/models/voice.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/reducers/index.reducer';
import { HoldCall, IncreaseTimer, RetreiveCall, InitTimer } from './../../../ngrx/actions/email-transcript.actions';
import { CreateCall, UpdateCall, DeleteCall } from './../../../ngrx/actions/call.actions';
import { Call } from './../../../ngrx/models/call.model';
import { VoiceService } from './../../../_service/voice.service';
import { StartConferenceCall } from './../../../ngrx/actions/email-transcript.actions';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { StartTransferCall } from './../../../ngrx/actions/email-transcript.actions';
import { UpdateActiveRequest, DeleteActiveRequest } from '../../../ngrx/actions/active-request.actions';
import { Router } from '@angular/router';
import { ReceivedCall, StartMainCall } from './../../../ngrx/actions/email-transcript.actions';
import { ActiveRequest } from '../../../ngrx/models/active-request.model';
import { EmailTranscript } from './../../../ngrx/models/email-transcript.model';
import { ChatService } from './../../../_service/chat.service';
import { EmailService } from 'src/app/_service/email.service';
import { ShowNewScheduleCallbackPage, ShowEditScheduleCallbackPage, ShowScheduleCallbackListPage } from './../../../ngrx/actions/app-status.actions';

@Component({
    selector: 'app-voice-footer',
    templateUrl: './voice-footer.component.html',
    styleUrls: ['./voice-footer.component.scss']
})
export class VoiceFooterComponent implements OnInit {

    @Input() currentPage: any;
    @Input() conferenceCallCount: any = 0;
    @Input() name: any = '';
    @Input() dialNumber: any = '';

    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();

    interval;
    tick = 1000;
    currentVoice: Voice;
    calls: Call[];
    is_hover_call_menu: boolean = false;
    is_show_call_menu: boolean = false;
    openedRequest: ActiveRequest;
    emailTranscript: EmailTranscript;

    isEsmenuShow: boolean = false;
    wrapup_status: number = 0;
    wrapup_enable: boolean = true;
    is_right_menu: boolean = false;
    menu_hover_status: boolean = false;
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

    constructor(private renderer: Renderer2, private router: Router, private store: Store<AppState>, public voiceService: VoiceService, public chatService: ChatService, public emailService: EmailService) {
        store.select('openArDetail').subscribe(val => this.openedRequest = JSON.parse(localStorage.getItem('openedRequest')));
        store.select('emailTranscript').subscribe(val => { this.emailTranscript = val; });
        store.select('calls').subscribe(val => { this.calls = val; });

        store.select('openedRequestDetail').subscribe(opendRequestData => {
            store.select('voices').subscribe(val => {
                let index = val.findIndex(element => element.callId === opendRequestData.callId)
                // console.log(index);
                if (index >= 0) {
                    this.currentVoice = val[index];
                }

            })
        })

        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.is_hover_call_menu == false) {
                this.is_show_call_menu = false;
            }
            if (this.menu_hover_status == false) {
                this.isEsmenuShow = false;
            }
        });

    }

    ngOnInit(): void {
    }

    accept_call(): void {
        let updatedRequest = { ...this.openedRequest, callStatus: 'accepted' }
        localStorage.setItem('openedRequest', JSON.stringify(updatedRequest))
        this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        this.store.dispatch(new UpdateActiveRequest(updatedRequest));

        this.store.dispatch(new ReceivedCall);
        this.store.dispatch(new CreateCall({
            destname: this.name, phoneNumber: this.dialNumber, type: 'customer', status: 'talking',
            holdTime: 0, talkingTime: 0
        }));

        if (!(this.calls[0].talkingTime > 0 && this.calls[0].holdTime > 0)) {
            this.interval = setInterval(() => {
                if (this.calls[0].status == 'talking') {
                    this.store.dispatch(new UpdateCall({
                        destname: this.calls[0].destname, phoneNumber: this.calls[0].phoneNumber, type: 'customer', status: 'talking',
                        holdTime: this.calls[0].holdTime, talkingTime: (this.calls[0].talkingTime + 1)
                    }, 1));
                }
                if (this.calls[0].status == 'holding') {
                    this.store.dispatch(new UpdateCall({
                        destname: this.calls[0].destname, phoneNumber: this.calls[0].phoneNumber, type: 'customer', status: 'holding',
                        holdTime: (this.calls[0].holdTime + 1), talkingTime: (this.calls[0].talkingTime)
                    }, 1));
                }
                this.calls.map(call => {
                    if (call.type != 'customer') {
                        clearInterval(this.interval);
                    }
                })
            }, 1000);
        }
        this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });
    }

    holdCall() {
        this.store.dispatch(new HoldCall());
        this.store.dispatch(new UpdateCall({
            destname: this.calls[0].destname, phoneNumber: this.calls[0].phoneNumber, type: 'customer', status: 'holding',
            holdTime: this.calls[0].holdTime, talkingTime: (this.calls[0].talkingTime)
        }, 1));

    }
    retrieveCall() {
        this.store.dispatch(new RetreiveCall);

        this.store.dispatch(new UpdateCall({
            destname: this.calls[0].destname, phoneNumber: this.calls[0].phoneNumber, type: 'customer', status: 'talking',
            holdTime: this.calls[0].holdTime, talkingTime: (this.calls[0].talkingTime)
        }, 1));
    }

    dialConferenceCall() {
        if (this.dialNumber != '') {
            this.store.dispatch(new CreateCall({
                destname: this.name, phoneNumber: this.dialNumber, type: 'conference', status: 'talking',
                holdTime: 0, talkingTime: 0
            }));


            this.voiceService.createConsultantVoice('conference').then((status: any) => {
                //if get success
                this.store.dispatch(new StartConferenceCall());
            }).catch((error: any) => {
                alert("can't create the Voice");
            });
        }
    }

    directTransfer() {
        if (this.dialNumber != '') {
            this.store.dispatch(new CreateCall({
                destname: this.name, phoneNumber: this.dialNumber, type: 'transfer', status: 'talking',
                holdTime: 0, talkingTime: 0
            }));
            this.voiceService.createConsultantVoice('transfer').then((status: any) => {
                //if get success
                this.store.dispatch(new StartTransferCall());
            }).catch((error: any) => {
                alert("can't create the Voice");
            });
        }
    }

    newVoiceDial() {
        if (this.dialNumber != '') {
            this.store.dispatch(new StartMainCall);
            this.store.dispatch(new CreateCall({
                destname: this.name, phoneNumber: this.dialNumber, type: 'customer', status: 'talking',
                holdTime: 0, talkingTime: 0
            }));
            this.router.navigate(["home/outgoing-maincall"], { skipLocationChange: true });
        }
    }


    mergeCalls() {
        this.callbackFunction.emit("Merge Calls");
    }

    completeTransfer() {
        this.callbackFunction.emit('Complete Transfer');
    }

    endInteraction() {

        let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        let updatedRequest = { ...openedRequest, callStatus: 'closed' }
        localStorage.setItem('openedRequest', JSON.stringify(updatedRequest))
        this.store.dispatch(new DeleteActiveRequest(openedRequest));
        this.router.navigate(["home/queue"], { skipLocationChange: true });
    }

    showCallMenu() {
        this.is_show_call_menu = !this.is_show_call_menu;
    }
    hoverInMenu() {
        this.is_hover_call_menu = true;
    }
    hoverOutMenu() {
        this.is_hover_call_menu = false;
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

    addScheduleCallback() {
        this.store.dispatch(new ShowNewScheduleCallbackPage());
    }

}
