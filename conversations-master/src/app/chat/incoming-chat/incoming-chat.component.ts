import { Component, OnInit } from '@angular/core';
import { ActiveRequest } from '../../ngrx/models/active-request.model';
import { UpdateActiveRequest } from '../../ngrx/actions/active-request.actions';
import { AppState, selectChannel } from '../../ngrx/reducers/index.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from "@angular/core";
// import { Subscription } from 'rxjs';
import { timer, Subscription } from "rxjs";

@Component({
    selector: 'app-incoming-chat',
    templateUrl: './incoming-chat.component.html',
    styleUrls: ['./incoming-chat.component.scss']
})
export class IncomingChatComponent implements OnInit {

    openedRequest: ActiveRequest;
    countUp: Subscription;
    tick = 1000;
    timer: number = 0;
    filterType: String;

    constructor(private store: Store<AppState>, public router: Router) {
        store.select('openArDetail').subscribe(val => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'))
        });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            store.select('chats').subscribe(val => {
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

    accept_chat(): void {
        let updatedRequest = { ...this.openedRequest, callStatus: 'accepted', connectedTime: Date.now() }
        localStorage.setItem('openedRequest', JSON.stringify(updatedRequest))
        this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        this.store.dispatch(new UpdateActiveRequest(updatedRequest));
        this.countUp.unsubscribe();
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

