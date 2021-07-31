import { Component, OnInit } from '@angular/core';
import { ActiveRequest } from '../../ngrx/models/active-request.model';
import { UpdateActiveRequest } from '../../ngrx/actions/active-request.actions';
import { AppState, selectChannel } from '../../ngrx/reducers/index.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from "@angular/core";
// import { Subscription } from 'rxjs';
import { timer, Subscription } from "rxjs";
import { EmailTranscript } from './../../ngrx/models/email-transcript.model';
import { Call } from './../../ngrx/models/call.model';
import { ReceivedCall, StartMainCall } from './../../ngrx/actions/email-transcript.actions';
import { CreateCall, UpdateCall, DeleteCall } from './../../ngrx/actions/call.actions';

@Component({
    selector: 'app-incoming-call',
    templateUrl: './incoming-call.component.html',
    styleUrls: ['./incoming-call.component.scss']
})
export class IncomingCallComponent implements OnInit {

    openedRequest: ActiveRequest;
    countUp: Subscription;
    tick = 1000;
    timer: number = 0;
    interval;

    emailTranscript: EmailTranscript;
    calls: Call[];

    name: string = "Hilda Palmer";
    role: string = "Account Status Inquiry";
    dialNumber: string = "1915462345";
    filterType: String;
    constructor(private store: Store<AppState>, public router: Router) {
        store.select('openArDetail').subscribe(val => this.openedRequest = JSON.parse(localStorage.getItem('openedRequest')));
        store.select('calls').subscribe(val => { this.calls = val; });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            store.select('voices').subscribe(val => {
                let index = val.findIndex(element => element.callId === opendRequestData.callId)
                // console.log(index);
                if (index >= 0) {
                    this.filterType = val[index].filtertype;
                }
            })
            this.timer = (Date.now() - this.openedRequest.startTime) / 1000;
        })
    }

    ngOnInit(): void {
        this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        this.countUp = timer(0, this.tick).subscribe(() => this.countUpIncomingTimer());
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

    countUpIncomingTimer(): void {
        let currentTime = Date.now();
        this.timer = (currentTime - this.openedRequest.startTime) / 1000;
    }

    ngOnDestroy() {
        this.countUp.unsubscribe();
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
