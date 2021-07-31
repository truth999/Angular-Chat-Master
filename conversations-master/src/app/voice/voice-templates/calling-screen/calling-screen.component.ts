import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../../ngrx/models/email-transcript.model';
import { AppState } from './../../../ngrx/reducers/index.reducer';
import { ReceivedCall, StartMainCall } from './../../../ngrx/actions/email-transcript.actions';
import { timer, Subscription } from "rxjs";
import { Call } from './../../../ngrx/models/call.model';
import { CreateCall, UpdateCall, DeleteCall } from './../../../ngrx/actions/call.actions';
import { takeUntil } from 'rxjs/operators';
import { UpdateActiveRequest } from '../../../ngrx/actions/active-request.actions';

@Component({
    selector: 'app-calling-screen',
    templateUrl: './calling-screen.component.html',
    styleUrls: ['./calling-screen.component.scss']
})
export class CallingScreenComponent implements OnInit {
    interval;
    timeCount = 0;
    name = 'Cornelia Goodman, Agent, Marketing Dpt, Lorem Inc';
    phone_number = '1986 134 7843';
    emailTranscript: EmailTranscript;
    calls: Call[];
    firstCallTimer: Subscription;

    constructor(private router: Router, private store: Store<AppState>) {
        store.select('emailTranscript').subscribe(val => { this.emailTranscript = val; });
        store.select('calls').subscribe(val => { this.calls = val; });
    }

    ngOnInit(): void {
        this.name = this.calls[0].destname;
        this.phone_number = this.calls[0].phoneNumber;

        this.interval = setInterval(() => {
            this.timeCount++;
            if (this.timeCount == 3) {
                // this.timeCount = 0;
                this.store.dispatch(new ReceivedCall);
                this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });

                let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
                let updatedRequest = { ...openedRequest, callStatus: 'received' }
                localStorage.setItem('openedRequest', JSON.stringify(updatedRequest))
                this.store.dispatch(new UpdateActiveRequest(updatedRequest));
                // this.firstCallTimer = timer(0, 1000).subscribe(() => this.store.dispatch(new UpdateCall({destname : this.calls[0].destname, phoneNumber: this.calls[0].phoneNumber, type: 'customer', status: 'talking',
                // holdTime: 0, talkingTime: (this.calls[0].talkingTime + 1)}, 0))) ;
                // clearInterval(this.interval);
            }
            if (this.timeCount > 3) {
                if (!(this.calls[0].talkingTime > 0 && this.calls[0].holdTime > 0)) {
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
                }

            }
        }, 1000);
    }

    close() {
        this.router.navigate(["home/newcall"], { skipLocationChange: true });
    }
}
