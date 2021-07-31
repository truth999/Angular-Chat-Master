import { Component, OnInit } from '@angular/core';
import { ErrorHistory } from '../../ngrx/models/error-history.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { DeleteErrorHistory } from '../../ngrx/actions/error-history.action';
import { Router } from '@angular/router';

@Component({
    selector: 'app-error-history',
    templateUrl: './error-history.component.html',
    styleUrls: ['./error-history.component.scss']
})
export class ErrorHistoryComponent implements OnInit {

    errorHistories: ErrorHistory[];
    tabindex: number = 1;
    reportText = "";
    show_alert: boolean = false;
    report_success: boolean = false;
    alert_type = "";
    alert_message = "";
    reportIds = [
        {
            'releasedBy': 'Cary',
            'buildId': '070020200212',
            'componentId': '1'
        },
        {
            'releasedBy': 'James',
            'buildId': '070020200212',
            'componentId': '2'
        },
        {
            'releasedBy': 'Cary',
            'buildId': '070020200212',
            'componentId': '3'
        }
    ]
    constructor(private store: Store<AppState>, private router: Router) {
        store.select('errorHistories').subscribe(data => {
            this.errorHistories = [...data];
        });
    }
    changeTab(tabindex) {
        this.tabindex = tabindex;
    }

    ngOnInit(): void {
    }

    deleteHistory(index) {
        this.store.dispatch(new DeleteErrorHistory(this.errorHistories[index]));
    }
    close() {
        this.router.navigate(["home/queue"], { skipLocationChange: true });
    }
    sendReport() {
        this.report_success = true;
        this.alert_type = "success";
        this.alert_message = "Your report has been successfully submitted";
        this.reportText = '';
    }
    closeAlert(action) {
        this.report_success = false;
    }
}
