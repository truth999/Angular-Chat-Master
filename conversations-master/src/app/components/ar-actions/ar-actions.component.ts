import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { AppState } from 'src/app/ngrx/reducers/index.reducer';

@Component({
    selector: 'app-ar-actions',
    templateUrl: './ar-actions.component.html',
    styleUrls: ['./ar-actions.component.scss']
})
export class ArActionsComponent implements OnInit {

    curTab = 0;
    hoverHistory: boolean = false;
    hoverInfo: boolean = false;
    hoverQueue: boolean = false;
    hoverNotes: boolean = false;
    openedRequest: ActiveRequest;
    isEnableTracking: boolean = false;

    constructor(private store: Store<AppState>) {
        store.select('openArDetail').subscribe(val => this.openedRequest = JSON.parse(localStorage.getItem('openedRequest')));
    }

    ngOnInit(): void {
        //when transcript is disabled in voice on call accept then default screen to be shown - should be info tab.
        this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        if (this.openedRequest.type == 'voice') {
            this.store.select('voices').subscribe(val => {
                let index = val.findIndex(element => element.callId === this.openedRequest.callId)
                if (index >= 0) {
                    if (val[index].EnableTranscript == false) {
                        this.curTab = 2;
                    }
                }

            })
        }
        this.store.select('openedRequestDetail').subscribe(opendRequestData => {
            // enables tracking tab for only WEB chat
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));

            if (this.openedRequest.type == 'chat') {
                this.store.select('chats').subscribe(val => {
                    let index = val.findIndex(element => element.callId === this.openedRequest.callId)
                    if (index >= 0) {
                        if (val[index].filtertype == 'WEB') {
                            this.isEnableTracking = true;
                        }
                        else { this.isEnableTracking = false }
                    }

                })
            }
            else { this.isEnableTracking = false }
        });
    }

    setActionTab(curTab) {
        this.curTab = curTab;
    }

    hoverStatusHistory(): void {
        this.hoverHistory = true;
    }

    hoveroutStatusHistory(): void {
        this.hoverHistory = false;
    }

    hoverStatusInfo(): void {
        this.hoverInfo = true;
    }

    hoveroutStatusInfo(): void {
        this.hoverInfo = false;
    }

    hoverStatusQueue(): void {
        this.hoverQueue = true;
    }

    hoveroutStatusQueue(): void {
        this.hoverQueue = false;
    }

    hoverStatusNotes(): void {
        this.hoverNotes = true;
    }

    hoveroutStatusNotes(): void {
        this.hoverNotes = false;
    }
}
