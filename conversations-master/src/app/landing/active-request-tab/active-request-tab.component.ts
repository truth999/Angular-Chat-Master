import { AfterViewChecked, Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { ActiveRequest } from '../../ngrx/models/active-request.model';
import { Store } from '@ngrx/store';
import { MoreTabComponent } from './more-tab/more-tab.component';
import { OpenActiveRequestDetail, HideActiveRequestDetail } from 'src/app/ngrx/actions/open-ar-detail.action';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UpdateActiveRequest } from '../../ngrx/actions/active-request.actions';

@Component({
    selector: 'active-request-tab',
    templateUrl: './active-request-tab.component.html',
    styleUrls: ['./active-request-tab.component.scss']
})
export class ActiveRequestTabComponent implements OnInit {
    @ViewChild(MoreTabComponent) MoreTabComponent: MoreTabComponent;
    curTab = 0;
    length = 0;
    open = false;

    openid = undefined;
    openedRequest: ActiveRequest;
    activeRequests: ActiveRequest[];
    name: string;
    phone: string;

    constructor(private store: Store<AppState>, private router: Router, private _location: Location) {

        store.select('activeRequests').subscribe(val => {
            this.activeRequests = val;
            this.length = val.length;
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest != null) {
                if (this.openedRequest.callStatus == 'closed') {
                    this.open = false;
                    this.store.dispatch(new HideActiveRequestDetail());
                }
            }
        });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));

            if (opendRequestData.callId == '') {
                this.open = false;
                this.store.dispatch(new HideActiveRequestDetail());
            }
            else if (this.openedRequest != null && (opendRequestData.callId != this.openedRequest.callId) && (opendRequestData.callId != '')) {
                let index = this.activeRequests.findIndex(element => element.callId == opendRequestData.callId)

                this.openid = -1;
                this.openDetail(this.activeRequests[index], index);
            }

        });

    }

    ngOnInit(): void {
    }

    setCurTab(curTab) {
        this.curTab = curTab;
    }

    openDetail(request: ActiveRequest, index: number): void {

        if (this.MoreTabComponent) {
            this.MoreTabComponent.isShow = false;
        }
        if (this.openid != index) {
            this.open = true;
        } else {
            this.open = !this.open;
        }
        this.openid = index;
        this.name = request.name;
        this.phone = "1-402-541-7564";
        let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));


        this.openedRequest = request;
        if (this.open) {
            localStorage.setItem('openedRequest', JSON.stringify(this.openedRequest));
            this.store.dispatch(new ChangeOpenedRequest(request.callId));
            this.store.dispatch(new OpenActiveRequestDetail());

            if (this.openedRequest.type == 'chat' && this.openedRequest.callStatus == 'incoming') {
                this.router.navigate(["home/incoming-chat"], { skipLocationChange: true });
            }
            else if (this.openedRequest.type == 'email' && this.openedRequest.callStatus == 'incoming') {
                this.router.navigate(["home/incoming-email"], { skipLocationChange: true });
            }
            else if (this.openedRequest.type == 'voice' && this.openedRequest.callStatus == 'new') {
                this.router.navigate(["home/newcall"], { skipLocationChange: true });
            }
            else if (this.openedRequest.type == 'voice' && this.openedRequest.callStatus == 'incoming') {
                this.router.navigate(["home/incoming-call"], { skipLocationChange: true });
            }
            else if (this.openedRequest.type == 'voice' && this.openedRequest.callStatus == 'NewCallCustomer') {
                this.router.navigate(["home/outgoing-maincall"], { skipLocationChange: true });
            }
            else {
                this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });
            }
        } else {
            this.store.dispatch(new HideActiveRequestDetail());
            this.router.navigate(["home/queue"], { skipLocationChange: true });
        }

        // this.setCurTab(index);
    }

    isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }
}
