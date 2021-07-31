import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../ngrx/models/email-transcript.model';
import { AppState } from './../../ngrx/reducers/index.reducer';
import { HoldCall, RetreiveCall, ReceivedCall, CloseConferenceCall, FinishConferenceCall, CloseTransferCall } from './../../ngrx/actions/email-transcript.actions';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";
import { Call } from './../../ngrx/models/call.model';
import { ActivatedRoute } from '@angular/router';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { Voice } from 'src/app/ngrx/models/voice.model';

@Component({
    selector: 'app-voice-transcript',
    templateUrl: './voice-transcript.component.html',
    styleUrls: ['./voice-transcript.component.scss']
})
export class VoiceTranscriptComponent implements OnInit {
    tabindex: number = 1;
    mergedCalls: boolean = false;
    show_hold_alert: boolean = true;
    alert_message = "Call has been on hold for";
    conference_alert_message = "Customer call has been on hold for";
    calls: Call[];
    success_transfer_alert_message: string;
    success_transfer_alert_flag: boolean = false;

    isTranscriptDisabled: boolean = false;
    emailTranscript: EmailTranscript;
    openedRequest: ActiveRequest;
    currentVoice: Voice;
    currentScheduleCallbackPage: string;

    constructor(private store: Store<AppState>) {
        store.select('emailTranscript').subscribe(val => { this.emailTranscript = val; });
        store.select('calls').subscribe(val => { this.calls = val; });



        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest.callStatus == 'conference') {
                this.tabindex = 3;
            }
            else if (this.openedRequest.callStatus == 'transfer') {
                this.tabindex = 4;
            }
            this.store.select('voices').subscribe(val => {
                let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
                let index = val.findIndex(element => element.callId === openedRequest.callId)
                if (index >= 0) {
                    this.currentVoice = val[index];
                    if (val[index].EnableTranscript == false) {
                        this.isTranscriptDisabled = true;
                        this.tabindex = 2;
                    }
                }
            })
        });

        store.select('appStatus').subscribe(appStatus => {
            this.currentScheduleCallbackPage = appStatus.scheduleCallbackPageStatus;
        });


    }
    ngOnInit(): void {
    }

    changeTab(tabindex) {
        this.tabindex = tabindex;
    }

    closeAlert(action) {
        this.show_hold_alert = false;
    }

    retreiveCall(action) {
        if (action == 'hold') {
            this.show_hold_alert = false;
            this.store.dispatch(new RetreiveCall());
        }
    }
    test() {
        alert(this.calls[0].talkingTime);
    }

    handleConferenceProgress(action) {
        if (action == 'Merge Calls') {
            this.mergedCalls = true;
            this.store.dispatch(new FinishConferenceCall());
        }
    }
    completeTransferProgress(name) {
        this.tabindex = 1;
        this.store.dispatch(new CloseTransferCall);
        this.success_transfer_alert_flag = true;
        this.success_transfer_alert_message = "Call Successfully transfered to Agent, " + name;
    }
    closeTransferSuccessAlert(action) {
        this.success_transfer_alert_flag = false;
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
            '333' +
            ("00" + hours).slice(-2) +
            ":" +
            ("00" + minutes).slice(-2) +
            ":" +
            ("00" + Math.floor(value - minutes * 60)).slice(-2)
        );
    }
}
