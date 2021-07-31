import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dial-search-modal',
    templateUrl: './dial-search-modal.component.html',
    styleUrls: ['./dial-search-modal.component.scss']
})
export class DialSearchModalComponent implements OnInit {

    contactSearchText: string = "";
    @Output() callbackFunction: EventEmitter<{ number: any, name: any }> = new EventEmitter();
    isShowAddNumberContactForm: boolean = false;
    constructor(private router: Router) { }
    contacts = [
        {
            'name': 'Calvin Hogan',
            'role': 'Supervisor, Marketing',
            'worknumber': '1-402-541-7564',
            'homenumber': '2-940-994-1081',
            'mobilenumber': '0-390-492-3892'

        },
        {
            'name': 'Genda Gina',
            'role': 'Supervisor, Marketing',
            'worknumber': '1-402-541-7564',
            'homenumber': '2-940-994-1081',
            'mobilenumber': '0-390-492-3892'

        },
        {
            'name': 'Nona Buma',
            'role': 'Supervisor, Marketing',
            'worknumber': '1-402-541-7564',
            'homenumber': '2-940-994-1081',
            'mobilenumber': '0-390-492-3892'

        },
        {
            'name': 'David Khan',
            'role': 'Supervisor, Marketing',
            'worknumber': '1-402-541-7564',
            'homenumber': '2-940-994-1081',
            'mobilenumber': '0-390-492-3892'

        },
        {
            'name': 'James Angels',
            'role': 'Supervisor, Marketing',
            'worknumber': '1-402-541-7564',
            'homenumber': '2-940-994-1081',
            'mobilenumber': '0-390-492-3892'

        },
        {
            'name': 'Hidra Toma',
            'role': 'Supervisor, Marketing',
            'worknumber': '1-402-541-7564',
            'homenumber': '2-940-994-1081',
            'mobilenumber': '0-390-492-3892'

        },

    ];

    ngOnInit(): void {
    }
    numberAutoComplete(number, name) {
        number = number.replaceAll('-', ' ');
        this.callbackFunction.emit({ number, name });
    }
    createContact() {
        // this.router.navigate(["home/new-number-contact"], { skipLocationChange: true });
        this.isShowAddNumberContactForm = true;
    }
    handleAddContactForm(action) {
        if (action == 'close') {
            this.isShowAddNumberContactForm = false;
        }
    }
}
