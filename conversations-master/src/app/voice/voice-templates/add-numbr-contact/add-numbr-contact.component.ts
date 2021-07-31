import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-numbr-contact',
    templateUrl: './add-numbr-contact.component.html',
    styleUrls: ['./add-numbr-contact.component.scss']
})
export class AddNumbrContactComponent implements OnInit {
    name: string = "";
    number: string = "";
    description: string = "";
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    constructor(private router: Router) { }

    ngOnInit(): void {
    }
    close() {
        this.callbackFunction.emit('close');
        // this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });

    }
    addContact() {
        this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });
        this.callbackFunction.emit('close');
    }
}
