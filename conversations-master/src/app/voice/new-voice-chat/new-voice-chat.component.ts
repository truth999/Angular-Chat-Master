import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../ngrx/models/email-transcript.model';
import { Call } from './../../ngrx/models/call.model';
import { CreateCall, UpdateCall, DeleteCall } from './../../ngrx/actions/call.actions';
import { AppState } from './../../ngrx/reducers/index.reducer';
import { ReceivedCall, StartMainCall } from './../../ngrx/actions/email-transcript.actions';
import { CallConferenceComponent } from '../voice-templates/call-conference/call-conference.component';
import { UpdateActiveRequest, DeleteActiveRequest } from '../../ngrx/actions/active-request.actions';
import { HostListener } from '@angular/core';
import { Voice } from 'src/app/ngrx/models/voice.model';

@Component({
    selector: 'app-new-voice-chat',
    templateUrl: './new-voice-chat.component.html',
    styleUrls: ['./new-voice-chat.component.scss']
})
export class NewVoiceChatComponent implements OnInit {

    dialNumber: string = '';
    show_call_menu: boolean = false;
    search_modal_show: boolean = false;
    contactsForm_control: boolean = false;
    emailTranscript: EmailTranscript;
    calls: Call[];
    name: string = "";
    currentVoice: Voice;

    @ViewChild('contactsForm') contactsForm: ElementRef;
    @ViewChild('contactsButton') contactsButton: ElementRef;

    constructor(private renderer: Renderer2, private router: Router, private _location: Location, private store: Store<AppState>) {
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
            if (e.target == this.contactsButton.nativeElement) {
            }
            else if (this.contactsForm_control == false) {
                this.search_modal_show = false;
            }
        });
    }

    ngOnInit(): void {
    }
    numberButtonClick(number) {
        this.dialNumber += number;
        if (this.dialNumber.length == 4 || this.dialNumber.length == 8) {
            this.dialNumber += ' ';
        }
    }

    onContacts() {
        // this.search_modal_show = !this.search_modal_show;
        this.search_modal_show = true;
    }


    contactsFormleave() {
        this.contactsForm_control = false;
    }
    contactsFromenter() {
        this.contactsForm_control = true;
    }

    dial() {
        if (this.dialNumber != '') {
            this.store.dispatch(new StartMainCall);
            this.store.dispatch(new CreateCall({
                destname: this.name, phoneNumber: this.dialNumber, type: 'customer', status: 'talking',
                holdTime: 0, talkingTime: 0
            }));
            this.router.navigate(["home/outgoing-maincall"], { skipLocationChange: true });
        }

    }

    phoneNumberAutoComplete(contact) {
        this.dialNumber = contact.number;
        this.name = contact.name;
        this.search_modal_show = false;
    }
    close() {
        let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        let updatedRequest = { ...openedRequest, callStatus: 'closed' }
        localStorage.setItem('openedRequest', JSON.stringify(updatedRequest))
        this.store.dispatch(new DeleteActiveRequest(openedRequest));
        this.router.navigate(["home/queue"], { skipLocationChange: true });
    }
    deleteDialNumber() {
        if (this.dialNumber[this.dialNumber.length - 1] == ' ') {
            this.dialNumber = this.dialNumber.slice(0, -1);
        }
        this.dialNumber = this.dialNumber.slice(0, -1);
    }

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    @HostListener('document:keyup', ['$event'])
    handleDeleteKeyboardEvent(event: KeyboardEvent) {
        if (event.key === 'Backspace') {
            if (this.dialNumber[this.dialNumber.length - 1] == ' ') {
                this.dialNumber = this.dialNumber.slice(0, -1);
            }
        }
    }
}
