import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/reducers/index.reducer';
import { ShowNewScheduleCallbackPage, ShowEditScheduleCallbackPage, ShowScheduleCallbackListPage } from './../../../ngrx/actions/app-status.actions';

@Component({
    selector: 'app-schedule-callback-lists',
    templateUrl: './schedule-callback-lists.component.html',
    styleUrls: ['./schedule-callback-lists.component.scss']
})
export class ScheduleCallbackListsComponent implements OnInit {

    scheduleCallbacks = [];
    filteredCallbacks = [];

    constructor(private router: Router, private store: Store<AppState>) {
        store.select('scheduleCallbacks').subscribe(value => { //load last ten interactions history from ngrx
            this.scheduleCallbacks = value;
            let tempCallbacks = [];

            this.scheduleCallbacks.map((scheduleCallback, index) => {

                //convert history date to 'December 22, 2020' format or Yesterday if history date is yesterday
                let callbackDateString = scheduleCallback.dateToCall.split('-');
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                let callbackDate = monthNames[parseInt(callbackDateString[1]) - 1] + ' ' + callbackDateString[2] + ', ' + callbackDateString[0]
                const yesterdayFullDate = new Date()
                let timestamp = Date.parse(callbackDateString)
                yesterdayFullDate.setDate(yesterdayFullDate.getDate() - 1)

                var yesterdayDate = new Date(yesterdayFullDate.getUTCFullYear(), yesterdayFullDate.getUTCMonth(), yesterdayFullDate.getUTCDate());
                if (yesterdayDate.getTime() == Date.parse(callbackDateString)) {
                    callbackDateString = 'Yesterday'
                }

                //save data to tempHistory for displaying on the view
                tempCallbacks = [...tempCallbacks, {
                    id: index,
                    name: scheduleCallback.nameToCall,
                    callId: scheduleCallback.numberToCall,
                    time: scheduleCallback.timeToCall,
                    date: callbackDate,
                    timestamp: timestamp,
                }]

                //sort tempHistory via date
                tempCallbacks = tempCallbacks.sort(function (a, b) {
                    let countA = a.timestamp;
                    let countB = b.timestamp;
                    if (countA < countB) { return 1; }
                    else if (countA > countB) { return -1; }
                    return 0;
                })
            })

            //divide histories by date
            let firstIndex = -1;
            let tempTimeStamp;
            tempCallbacks.map(history => {
                if (history.timestamp != tempTimeStamp) {
                    firstIndex++;
                    this.filteredCallbacks = [...this.filteredCallbacks, []]
                    tempTimeStamp = history.timestamp;
                }
                this.filteredCallbacks[firstIndex] = [...this.filteredCallbacks[firstIndex], history]
            })
        })
    }

    ngOnInit(): void {
    }

    editScheduleCallback(index) {
        this.store.dispatch(new ShowEditScheduleCallbackPage(index));
    }
}
