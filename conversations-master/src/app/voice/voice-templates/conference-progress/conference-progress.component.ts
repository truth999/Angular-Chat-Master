import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pipe, PipeTransform } from "@angular/core";
import { Call } from './../../../ngrx/models/call.model';
import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../../ngrx/models/email-transcript.model';
import { AppState } from './../../../ngrx/reducers/index.reducer';
import { HoldCall, RetreiveCall, ReceivedCall, StartMainCall } from './../../../ngrx/actions/email-transcript.actions';
import { CreateCall, UpdateCall, DeleteCall } from './../../../ngrx/actions/call.actions';
import { VoiceService } from './../../../_service/voice.service';

@Component({
    selector: 'app-conference-progress',
    templateUrl: './conference-progress.component.html',
    styleUrls: ['./conference-progress.component.scss']
})
export class ConferenceProgressComponent implements OnInit {
    calls: Call[];
    conferenceCallCount = 0;
    agencyType: string = 'normal';
    show_agency: boolean = false;

    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    constructor(private store: Store<AppState>, public voiceService: VoiceService) {
        store.select('calls').subscribe(val => { this.calls = val; });
        this.calls.map(call => {
            if (call.type === 'conference') { this.conferenceCallCount++; }
        })
    }

    ngOnInit(): void {

    }
    pause(index) {
        this.store.dispatch(new UpdateCall({
            destname: this.calls[index].destname, phoneNumber: this.calls[index].phoneNumber, type: 'customer', status: 'holding',
            holdTime: this.calls[index].holdTime, talkingTime: (this.calls[index].talkingTime)
        }, index + 1));
    }
    wrapup(index) {

    }
    retrieve(index) {
        this.store.dispatch(new UpdateCall({
            destname: this.calls[index].destname, phoneNumber: this.calls[index].phoneNumber, type: 'customer', status: 'talking',
            holdTime: this.calls[index].holdTime, talkingTime: (this.calls[index].talkingTime)
        }, index + 1));
    }

    mergeCalls() {
        // this.callbackFunction.emit('Merge Calls');
    }

    addAnotherCall() {
        this.agencyType = 'CallCustomer';
        this.show_agency = true;
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
                        // this.store.dispatch(new CreateCall({
                        //     destname: data.name, phoneNumber: data.number, type: 'customer', status: 'talking',
                        //     holdTime: 0, talkingTime: 0
                        // }));
                    }).catch((error: any) => {
                        alert("can't create the Voice");
                    });
                }
            }

        }
    }


    handleFooter(action) {
        if (action == "Merge Calls") {
            this.callbackFunction.emit('Merge Calls');
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
