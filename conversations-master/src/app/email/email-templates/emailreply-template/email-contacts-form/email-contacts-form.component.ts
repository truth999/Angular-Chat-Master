import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-email-contacts-form',
    templateUrl: './email-contacts-form.component.html',
    styleUrls: ['./email-contacts-form.component.scss']
})
export class EmailContactsFormComponent implements OnInit {

    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    contactSearchText: string = '';
    isShowAddContactForm: boolean = false;
    constructor(private router: Router) { }
    contacts = [
        {
            'name': 'Thomas Smith',
            'role': 'CEO, XYZ Company',
            'email': 'thomas_smith@yahoo.com',
        },
        {
            'name': 'Calvin Hogan',
            'role': 'Agent, Service Dpt, ABC corp',
            'email': 'lavada_kuhic@janice.biz',
        },
        {
            'name': 'Jay Mathis',
            'role': 'Supervisor, Marketing Dpt, Lorem Inc',
            'email': 'eusebio.haag@jolie.tv',
        },
        {
            'name': 'Hilda West',
            'role': 'Agent, Service Dpt, ABC corp',
            'email': 'bauch_valerie@hillard.co.uk',
        },
        {
            'name': 'Thomas Smith',
            'role': 'CEO, XYZ Company',
            'email': 'thomas_smith@yahoo.com',
        },
        {
            'name': 'Calvin Hogan',
            'role': 'Agent, Service Dpt, ABC corp',
            'email': 'lavada_kuhic@janice.biz',
        },
        {
            'name': 'Jay Mathis',
            'role': 'Supervisor, Marketing Dpt, Lorem Inc',
            'email': 'eusebio.haag@jolie.tv',
        },
        {
            'name': 'Hilda West',
            'role': 'Agent, Service Dpt, ABC corp',
            'email': 'bauch_valerie@hillard.co.uk',
        },
    ]
    ngOnInit(): void {
    }

    emailAutocomplete(email) {
        this.callbackFunction.emit(email);
    }
    addContact() {
        // this.isShowAddContactForm = true;
        this.router.navigate(["home/new-email-contact"], { skipLocationChange: true });
    }
}
