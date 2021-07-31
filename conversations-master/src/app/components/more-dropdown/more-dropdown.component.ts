import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActiveRequest } from '../../ngrx/models/active-request.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/reducers/index.reducer';
import { AddActiveRequest, ClearActiveRequests } from 'src/app/ngrx/actions/active-request.actions';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';

@Component({
    selector: 'app-more-dropdown',
    templateUrl: './more-dropdown.component.html',
    styleUrls: ['./more-dropdown.component.scss']
})
export class MoreDropdownComponent implements OnInit {
    @Input() isShow: boolean;

    length = 0;
    activeRequests: ActiveRequest[];
    deferedEmails: ActiveRequest[] = [];
    onGoingInteractionsCount = 0;
    // deferedEmailCheck: boolean = false;

    constructor(private store: Store<AppState>) {
        this.onGoingInteractionsCount = 0;
        store.select('activeRequests').subscribe(val => {
            this.activeRequests = val; this.length = val.length
            this.activeRequests.map((tab, index) => {
                if (tab.type == 'email') {
                    if (index >= 5 && tab.isDefered == false) this.onGoingInteractionsCount++;
                }
                else {
                    if (index >= 5) this.onGoingInteractionsCount++;
                }
            })
        });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.deferedEmails = [];
            this.activeRequests.map((request, index) => {
                if (request.type == 'email' && request.isDefered == true && index > 4) {
                    this.deferedEmails = [...this.deferedEmails, request];
                    // this.deferedEmailCheck = true;
                }
            })
        });
    }

    ngOnInit(): void {
    }

    updateOrder(item: ActiveRequest): void {
        let tempData = this.activeRequests.slice(0, this.activeRequests.length - 1);
        let child = item;
        this.activeRequests.map(tab => {
            if (tab.linkedTo == child.callId) {
                child = tab;
            }
        })
        if (child.linkedTo == '') {
            // tempData.unshift(item)
            let newData = [];
            newData = [...newData, item];
            this.activeRequests.map(val => {
                if (val.callId != item.callId) {
                    newData = [...newData, val];
                }
            })
            tempData = [...newData];
        }
        else {
            this.activeRequests.map((val, index, tab) => {
                if (tab[tab.length - 1 - index].linkedTo == child.linkedTo) {
                    tempData = tempData.filter(value => tab[tab.length - 1 - index].callId != value.callId);
                    tempData = [tab[tab.length - 1 - index], ...tempData];
                }
            });
            this.activeRequests.map(val => {
                if (val.callId == child.linkedTo) {
                    tempData = tempData.filter(tab => val.callId != tab.callId);
                    tempData = [val, ...tempData];
                }
            })
        }
        this.store.dispatch(new ClearActiveRequests());
        for (var i = 0; i < tempData.length; i++) {
            this.store.dispatch(new AddActiveRequest(tempData[i]))
        }
        this.store.dispatch(new ChangeOpenedRequest(item.callId));
    }
}
