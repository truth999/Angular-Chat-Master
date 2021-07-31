import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";
import { ErrorHistory } from '../ngrx/models/error-history.model';
import { AddErrorHistory, UpdateErrorHistory } from '../ngrx/actions/error-history.action';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/reducers/index.reducer';
import { EmailhistoryTemplateComponent } from '../chat/chat-history/history-templates/emailhistory-template/emailhistory-template.component';

@Component({
    selector: 'app-custom-alert',
    templateUrl: './custom-alert.component.html',
    styleUrls: ['./custom-alert.component.scss']
})

export class CustomAlertComponent implements OnInit {
    @Input() alert_type: any;
    @Input() alert_message: any;
    @Input() show_retrieve: boolean = true;
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    timer: number = 0;
    countUp: Subscription;
    errors: ErrorHistory[];
    // @Input() closeAlert: () => void;
    constructor(private store: Store<AppState>) {
        store.select('errorHistories').subscribe(data => {
            this.errors = [...data];

        });
    }

    ngOnInit(): void {
        // this.countUp = timer(0, 1000).subscribe(() => ++this.timer); 
    }

    close(index) {
        let currentErrors = this.errors.length;
        let error: ErrorHistory;
        error = {
            channel: this.errors[index].channel,
            message: this.errors[index].message,
            time: this.errors[index].time,
            flash: false,
        }
        this.store.dispatch(new UpdateErrorHistory(error));
        this.store.select('errorHistories').subscribe(data => {
            let index = data.findIndex(element => element.flash == true);
            if (index == -1) {
                // alert('abc');
                this.callbackFunction.emit('close');
            }
        });
    }
    retreive() {
        this.callbackFunction.emit('hold');
    }
    closeSuccess() {
        this.callbackFunction.emit('close');
    }
}

