import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ActiveRequest } from '../../../../ngrx/models/active-request.model';
import { Chat } from '../../../../ngrx/models/chat.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../ngrx/reducers/index.reducer';

@Component({
    selector: 'app-input-autocomplete',
    templateUrl: './input-autocomplete.component.html',
    styleUrls: ['./input-autocomplete.component.scss']
})
export class InputAutocompleteComponent implements OnInit {

    // @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    @Output() callbackFunction: EventEmitter<{ data: any, id: number }> = new EventEmitter();
    @Input() currentIndex: any;
    @Input() data: any;
    @Input() type: any = 'normal';
    unlinkFlag: boolean = false;
    searchText: string = "";
    activeRequests;
    constructor(private store: Store<AppState>) {
        store.select('activeRequests').subscribe(val => {
            this.activeRequests = val;
        });

    }
    lists = [
        {
            'name': 'Calvin Hogan',
            'title': 'Account Inquiry, Login Issue',
            'type': 'Chat',
            'ticketNo': '34879'
        },
        {
            'name': 'David Shrute',
            'title': 'Unprocessed Order',
            'type': 'Email',
            'ticketNo': '11389'
        },
        {
            'name': 'Jay Mathis',
            'title': 'Payment Issue, Refund',
            'type': 'Call',
            'ticketNo': '50821'
        },
        {
            'name': 'Hilda Palmer',
            'title': 'Account Inquiry',
            'type': 'Call',
            'ticketNo': '03832'
        },
        {
            'name': 'Calvin Hogan',
            'title': 'Account Inquiry, Login Issue',
            'type': 'Chat',
            'ticketNo': '34879'
        },
        {
            'name': 'David Shrute',
            'title': 'Unprocessed Order',
            'type': 'Email',
            'ticketNo': '11389'
        },
        {
            'name': 'Jay Mathis',
            'title': 'Payment Issue, Refund',
            'type': 'Call',
            'ticketNo': '50821'
        },
        {
            'name': 'Hilda Palmer',
            'title': 'Account Inquiry',
            'type': 'Call',
            'ticketNo': '03832'
        },

    ];

    ngOnInit(): void {
        // console.log(this.data);
    }

    autoComplete(list, id) {
        if (this.unlinkFlag == false) {
            let data;
            if (this.type == 'normal') {
                data = list.name + ' ' + list.title;
            }
            else if (this.type == 'Info') {
                data = list.name;
            }
            else if (this.type == 'InfoLinkedTo') {
                data = list.name + '(' + list.type + ')';
                id = list.callId;
            }
            else if (this.type == 'WrapupCode') {
                data = list.name;
            }
            else if (this.type == 'WrapupCodeName') {
                data = list.name;
            }
            else if (this.type == 'WrapupCodeRelated') {
                data = list.id;
            }
            else if (this.type == 'FromEmailAutocomplete') {
                data = list.email;
            }
            else if (this.type == 'QueueList') {
                data = list.name;
            }
            this.callbackFunction.emit({ data, id });
        }

    }
    unlink() {
        let data = "";
        let id;
        this.unlinkFlag = true;
        this.callbackFunction.emit({ data, id })

    }
}
