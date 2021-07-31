import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../../ngrx/models/email-transcript.model';
import { AppState } from './../../../ngrx/reducers/index.reducer';
import { StartTransferCall } from './../../../ngrx/actions/email-transcript.actions';
import { Call } from './../../../ngrx/models/call.model';
import { CreateCall, UpdateCall, DeleteCall } from './../../../ngrx/actions/call.actions';
import { HostListener } from '@angular/core';
import { Channel } from '../../../ngrx/models/channel.model';
import { UpdateActiveRequest, DeleteActiveRequest } from '../../../ngrx/actions/active-request.actions';
import { Router } from '@angular/router';
import { VoiceService } from './../../../_service/voice.service';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';

@Component({
    selector: 'app-call-transfer',
    templateUrl: './call-transfer.component.html',
    styleUrls: ['./call-transfer.component.scss']
})
export class CallTransferComponent implements OnInit {

    show_call_menu: boolean = false;
    isTransferShow: boolean = false;
    search_modal_show: boolean = false;
    dialNumber = '';
    name: string = '';
    contactsForm_control: boolean = false;
    emailTranscript: EmailTranscript;
    calls: Call[];
    channel: Channel;
    wrapup_enable: boolean = true;
    wrapup_status: number = 0;
    hover: boolean = false;
    openedRequest: ActiveRequest;
    currentVoice;

    @ViewChild('contactsForm') contactsForm: ElementRef;
    @ViewChild('contactsButton') contactsButton: ElementRef;
    constructor(private renderer: Renderer2, private store: Store<AppState>, private router: Router, public voiceService: VoiceService) {
        store.select('emailTranscript').subscribe(val => { this.emailTranscript = val; });
        store.select('calls').subscribe(val => { this.calls = val; });
        this.renderer.listen('window', 'click', (e: Event) => {
            if (e.target == this.contactsButton.nativeElement) {

            }
            else if (this.contactsForm_control == false) {
                this.search_modal_show = false;
            }
            if (this.hover == false) {
                this.show_call_menu = false;
            }
        });

        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest.type == 'voice') {
                store.select('voices').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if (index >= 0) {
                        this.currentVoice = val[index];
                    }
                })

            }
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

    showCallMenu() {
        this.show_call_menu = !this.show_call_menu;
    }

    cancelCall = (): void => {
        this.isTransferShow = false;
    }

    onContacts() {
        // this.search_modal_show = !this.search_modal_show;
        this.search_modal_show = true;
    }

    contactsFormleave() {
        this.contactsForm_control = false;
    }
    contactsFormenter() {
        this.contactsForm_control = true;
    }

    numberButtonClick(number) {
        this.dialNumber += number;
        if (this.dialNumber.length == 4 || this.dialNumber.length == 8) {
            this.dialNumber += ' ';
        }
    }
    phoneNumberAutoComplete(contact) {
        this.dialNumber = contact.number;
        this.name = contact.name;
        this.search_modal_show = false;
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

    wrapup() {
        this.wrapup_status = 1;
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
    @HostListener('document:keyup', ['$event'])
    handleDeleteKeyboardEvent(event: KeyboardEvent) {
        if (event.key === 'Backspace') {
            if (this.dialNumber[this.dialNumber.length - 1] == ' ') {
                this.dialNumber = this.dialNumber.slice(0, -1);
            }
        }
    }
    hoverStatus(): void {
        this.hover = true;
    }
    hoveroutStatus(): void {
        this.hover = false;
    }
    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
