import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pipe, PipeTransform } from "@angular/core";
import { Call } from './../../../ngrx/models/call.model';
import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../../ngrx/models/email-transcript.model';
import { AppState } from './../../../ngrx/reducers/index.reducer';
import { HoldCall, RetreiveCall, ReceivedCall } from './../../../ngrx/actions/email-transcript.actions';
import { CreateCall, UpdateCall, DeleteCall } from './../../../ngrx/actions/call.actions';

@Component({
    selector: 'app-transfer-progress',
    templateUrl: './transfer-progress.component.html',
    styleUrls: ['./transfer-progress.component.scss']
})
export class TransferProgressComponent implements OnInit {

    calls: Call[];
    destname: string;
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    constructor(private store: Store<AppState>) {
        store.select('calls').subscribe(val => { this.calls = val; });
    }

    ngOnInit(): void {

        for (let i = 0; i < this.calls.length; i++) {
            if (this.calls[i].type == 'transfer') {
                this.destname = this.calls[i].destname;
            }
        }
    }
    pause(index) {
        this.store.dispatch(new UpdateCall({
            destname: this.calls[index].destname, phoneNumber: this.calls[index].phoneNumber, type: 'transfer', status: 'holding',
            holdTime: this.calls[index].holdTime, talkingTime: (this.calls[index].talkingTime)
        }, index + 1));
    }
    wrapup(index) {

    }
    retrieve(index) {
        this.store.dispatch(new UpdateCall({
            destname: this.calls[index].destname, phoneNumber: this.calls[index].phoneNumber, type: 'transfer', status: 'talking',
            holdTime: this.calls[index].holdTime, talkingTime: (this.calls[index].talkingTime)
        }, index + 1));
    }


    completeTransfer(action) {
        if (action == 'Complete Transfer') {
            this.callbackFunction.emit(this.destname);
        }
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