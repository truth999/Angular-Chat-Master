import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectChannel } from '../../../ngrx/reducers/index.reducer';
import { UpdateActiveRequest, DeleteActiveRequest } from '../../../ngrx/actions/active-request.actions';

@Component({
    selector: 'app-defer-email-footer',
    templateUrl: './defer-email-footer.component.html',
    styleUrls: ['./defer-email-footer.component.scss']
})
export class DeferEmailFooterComponent implements OnInit {
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
    }
    resumeEmail() {
        let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        openedRequest = { ...openedRequest, isDefered: false }
        this.store.dispatch(new UpdateActiveRequest(openedRequest));

        this.callbackFunction.emit('Resume Email');
    }
}
