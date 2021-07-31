import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-email-contact',
    templateUrl: './add-email-contact.component.html',
    styleUrls: ['./add-email-contact.component.scss']
})
export class AddEmailContactComponent implements OnInit {
    name: string = "";
    email: string = "";
    description: string = "";
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    close() {
        this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });
    }
    addContact() {
        this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });
    }
}
