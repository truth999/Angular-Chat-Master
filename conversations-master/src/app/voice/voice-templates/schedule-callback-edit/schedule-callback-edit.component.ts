import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/reducers/index.reducer';
import { ShowNewScheduleCallbackPage, ShowEditScheduleCallbackPage, ShowScheduleCallbackListPage } from './../../../ngrx/actions/app-status.actions';
import { Router } from '@angular/router';
import { AddCallback, UpdateCallback, DeleteCallback } from '../../../ngrx/actions/schedule-callbacks.actions'

@Component({
    selector: 'app-schedule-callback-edit',
    templateUrl: './schedule-callback-edit.component.html',
    styleUrls: ['./schedule-callback-edit.component.scss']
})
export class ScheduleCallbackEditComponent implements OnInit {

    nameToCall;
    numberToCall;
    dateToCall;
    timeToCall;
    currentScheduleCallbackIndex = 0;

    constructor(private router: Router, private store: Store<AppState>) {
        store.select('scheduleCallbacks').subscribe(value => {
            store.select('appStatus').subscribe(appStatus => {
                if (value.length > 0 && appStatus.editScheduleCallbackIndex < value.length) {
                    this.nameToCall = value[appStatus.editScheduleCallbackIndex].nameToCall;
                    this.numberToCall = value[appStatus.editScheduleCallbackIndex].numberToCall;
                    this.dateToCall = value[appStatus.editScheduleCallbackIndex].dateToCall;
                    this.timeToCall = value[appStatus.editScheduleCallbackIndex].timeToCall;
                    this.currentScheduleCallbackIndex = appStatus.editScheduleCallbackIndex;
                }
            })
        });
    }

    ngOnInit(): void {
    }

    saveSchedule() {
        this.store.dispatch(new UpdateCallback({
            nameToCall: this.nameToCall,
            numberToCall: this.numberToCall,
            dateToCall: this.dateToCall,
            timeToCall: this.timeToCall,
        }, this.currentScheduleCallbackIndex))
        this.store.dispatch(new ShowScheduleCallbackListPage());
    }

    cancelSchedule() {
        this.store.dispatch(new ShowScheduleCallbackListPage());
    }

    discardSchedule() {
        this.store.dispatch(new DeleteCallback(this.currentScheduleCallbackIndex))
        this.store.dispatch(new ShowScheduleCallbackListPage());
    }
}
