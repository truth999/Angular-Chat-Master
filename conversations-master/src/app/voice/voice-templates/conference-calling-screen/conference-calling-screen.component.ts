import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../../ngrx/models/email-transcript.model';
import { AppState } from './../../../ngrx/reducers/index.reducer';
import { ReceiveConferenceCall, CloseConferenceCall, ReceiveTransferCall, CloseTransferCall } from './../../../ngrx/actions/email-transcript.actions';
import { Call } from './../../../ngrx/models/call.model';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { CreateCall, UpdateCall, DeleteCall } from './../../../ngrx/actions/call.actions';

@Component({
    selector: 'app-conference-calling-screen',
    templateUrl: './conference-calling-screen.component.html',
    styleUrls: ['./conference-calling-screen.component.scss']
})
export class ConferenceCallingScreenComponent implements OnInit {
    @Input() type: any = "conference";
    interval1;
    timeCount = 0;
    name = 'Calvin Hogan, Supervisor, Marketing Dpt, Lorem Inc';
    phone_number = '1 986 134 7843';
    emailTranscript: EmailTranscript;
    calls: Call[];
    length = 0;
    openedRequest: ActiveRequest;
    constructor(private router: Router, private store: Store<AppState>) {
        store.select('emailTranscript').subscribe(val => { this.emailTranscript = val; });
        store.select('calls').subscribe(val => { this.calls = val; this.length = val.length });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        });
    }

    ngOnInit(): void {
        // let numberofcalls = this.calls.length;
        let numberofcalls = this.length;
        this.name = this.calls[numberofcalls - 1].destname;
        this.phone_number = this.calls[numberofcalls - 1].phoneNumber;
        let check = 0;
        this.interval1 = setInterval(() => {
            this.timeCount++;
            if (this.timeCount == 3) {
                if (this.type == 'conference') {
                    this.store.dispatch(new ReceiveConferenceCall());

                }
                else if (this.type == 'transfer') {
                    this.store.dispatch(new ReceiveTransferCall());
                }
                check = 1;
            }
            let numberofcalls = this.length

            if (this.type == 'conference') {
                let conferenceCallCount = 0;
                let indexToRemove = 0;
                this.calls.map((call, index) => {
                    if (call.status == 'talking' && check == 1 && call.type != 'transfer') {
                        this.store.dispatch(new UpdateCall({
                            destname: call.destname, phoneNumber: call.phoneNumber, type: call.type, status: 'talking',
                            holdTime: call.holdTime, talkingTime: (call.talkingTime + 1)
                        }, (index + 1)));
                        if (call.type == 'conference') {
                            conferenceCallCount++;
                            if (conferenceCallCount == 1) { indexToRemove = index + 1; }
                        }

                    }
                    if (call.status == 'holding' && check == 1 && call.type != 'transfer') {
                        this.store.dispatch(new UpdateCall({
                            destname: call.destname, phoneNumber: call.phoneNumber, type: call.type, status: 'holding',
                            holdTime: (call.holdTime + 1), talkingTime: (call.talkingTime)
                        }, (index + 1)));
                        if (call.type == 'conference') {
                            conferenceCallCount++;
                            if (conferenceCallCount == 1) { indexToRemove = index + 1; }
                        }

                    }
                })
                if (conferenceCallCount >= 2) {
                    clearInterval(this.interval1);
                }
            }
            else if (this.type == 'transfer') {
                let transferCallCount = 0;
                let indexToRemove = 0;
                this.calls.map((call, index) => {
                    if (call.status == 'talking' && check == 1 && call.type == 'transfer') {
                        this.store.dispatch(new UpdateCall({
                            destname: call.destname, phoneNumber: call.phoneNumber, type: call.type, status: 'talking',
                            holdTime: call.holdTime, talkingTime: (call.talkingTime + 1)
                        }, (index + 1)));
                        if (call.type == 'transfer') {
                            transferCallCount++;
                            if (transferCallCount == 1) { indexToRemove = index; }
                        }

                    }
                    if (call.status == 'holding' && check == 1 && call.type == 'transfer') {
                        this.store.dispatch(new UpdateCall({
                            destname: call.destname, phoneNumber: call.phoneNumber, type: call.type, status: 'holding',
                            holdTime: (call.holdTime + 1), talkingTime: (call.talkingTime)
                        }, (index + 1)));
                        if (call.type == 'transfer') {
                            transferCallCount++;
                            if (transferCallCount == 1) { indexToRemove = index; }
                        }

                    }

                })
                if (transferCallCount >= 2) {
                    // console.log('abc');
                    clearInterval(this.interval1);
                    this.store.dispatch(new UpdateCall({
                        destname: this.calls[indexToRemove].destname, phoneNumber: this.calls[indexToRemove].phoneNumber, type: 'deleted', status: 'holding',
                        holdTime: (this.calls[indexToRemove].holdTime + 1), talkingTime: (this.calls[indexToRemove].talkingTime)
                    }, (indexToRemove + 1)));
                }
            }


        }, 1000);

    }

    close() {
        if (this.type == 'conference') {
            this.store.dispatch(new CloseConferenceCall());
            clearInterval(this.interval1);
        }
        if (this.type == 'transfer') {
            this.store.dispatch(new CloseTransferCall());
            clearInterval(this.interval1);
        }
    }

}
