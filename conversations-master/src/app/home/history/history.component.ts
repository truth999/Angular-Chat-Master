import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    interactionsHistory = [];
    filteredHistory = [];

    constructor(private router: Router, private store: Store<AppState>) {
        store.select('interactionHistory').subscribe(value => { //load last ten interactions history from ngrx
            this.interactionsHistory = value;
            let tempHistory = [];

            this.interactionsHistory.map((history, index) => {

                //convert history date to 'December 22, 2020' format or Yesterday if history date is yesterday
                let historyDateString = history.callansweredtime__c.split(',')[0].split('/');
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                let historyDate = monthNames[parseInt(historyDateString[0]) - 1] + ' ' + historyDateString[1] + ', ' + historyDateString[2]
                const yesterdayFullDate = new Date()
                let timestamp = Date.parse(historyDate)
                yesterdayFullDate.setDate(yesterdayFullDate.getDate() - 1)

                var yesterdayDate = new Date(yesterdayFullDate.getUTCFullYear(), yesterdayFullDate.getUTCMonth(), yesterdayFullDate.getUTCDate());
                if (yesterdayDate.getTime() == Date.parse(historyDate)) {
                    historyDate = 'Yesterday'
                }

                //get user name of history
                let name = history.sessionNotes[0].conversationId;

                //save data to tempHistory for displaying on the view
                tempHistory = [...tempHistory, {
                    id: index,
                    type: history.type,
                    name: name,
                    callId: history.name,
                    time: history.callansweredtime__c.split(', ')[1],
                    date: historyDate,
                    timestamp: timestamp,
                }]

                //sort tempHistory via date
                tempHistory = tempHistory.sort(function (a, b) {
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
            tempHistory.map(history => {
                if (history.timestamp != tempTimeStamp) {
                    firstIndex++;
                    this.filteredHistory = [...this.filteredHistory, []]
                    tempTimeStamp = history.timestamp;
                }
                this.filteredHistory[firstIndex] = [...this.filteredHistory[firstIndex], history]
            })
        })
    }

    ngOnInit(): void {
    }

    historyDetail(item: any): void {
        localStorage.setItem("history-detail", "true");
        this.router.navigate(["home/history-detail", item.id], { skipLocationChange: true });
    }

}
