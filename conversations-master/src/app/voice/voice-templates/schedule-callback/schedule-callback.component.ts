import { Component, OnInit } from '@angular/core';
import { ShowNewScheduleCallbackPage, ShowEditScheduleCallbackPage, ShowScheduleCallbackListPage } from './../../../ngrx/actions/app-status.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/reducers/index.reducer';
import { AddCallback, UpdateCallback } from '../../../ngrx/actions/schedule-callbacks.actions'
import { ScheduleCallback } from '../../../ngrx/models/schedule-callback.model'

@Component({
    selector: 'app-schedule-callback',
    templateUrl: './schedule-callback.component.html',
    styleUrls: ['./schedule-callback.component.scss']
})
export class ScheduleCallbackComponent implements OnInit {
    enterManualOption = 'manual';
    manualName;
    manualNumber;
    currentName;
    currentNumber;
    specificTimeOption = 'specificTime';
    timeToCallDate;
    timeToCallTime;
    timePeriodFromNowHour;
    timePeriodFromNowMinute;


    constructor(private store: Store<AppState>) {
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.store.select('voices').subscribe(val => {
                let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
                let index = val.findIndex(element => element.callId === openedRequest.callId)
                if (index >= 0) {
                    let currentVoice = val[index];
                    this.currentName = currentVoice.customerInfo.name;
                    this.currentNumber = currentVoice.customerInfo.id;
                }
            })
        });
    }

    ngOnInit(): void {
    }

    cancelSchedule() {

        this.store.dispatch(new ShowScheduleCallbackListPage());
    }

    parseNumberToString(data) {
        if (data < 10) return ('0' + data)
        else return data;
    }
    saveSchedule() {
        let newCallback;
        let name;
        let number;
        let dateToCall;
        let timeToCall;
        if (this.enterManualOption == 'manual') {
            name = this.manualName;
            number = this.manualNumber;
        }
        else if (this.enterManualOption == 'useCurrentNumber') {
            name = this.currentName;
            number = this.currentNumber;
        }

        if (this.specificTimeOption == 'specificTime') {
            dateToCall = this.timeToCallDate;
            timeToCall = this.timeToCallTime;
        }
        else if (this.specificTimeOption == 'timePeriodFromNow') {
            let currentDate = new Date();
            let month = currentDate.getMonth();
            let parsedMonth;
            if ((month + 1) < 10) parsedMonth = '0' + (month + 1);
            else parsedMonth = month + 1;


            currentDate.setHours(currentDate.getHours() + this.timePeriodFromNowHour)
            currentDate.setMinutes(currentDate.getMinutes() + this.timePeriodFromNowMinute);
            dateToCall = currentDate.getFullYear() + '-' + (parsedMonth) + '-' + this.parseNumberToString(currentDate.getDate());
            timeToCall = this.parseNumberToString(currentDate.getHours()) + ':' + this.parseNumberToString(currentDate.getMinutes());
        }

        this.store.dispatch(new AddCallback({
            nameToCall: name,
            numberToCall: number,
            dateToCall: dateToCall,
            timeToCall: timeToCall,
        }))
        this.store.dispatch(new ShowScheduleCallbackListPage());
    }

}
