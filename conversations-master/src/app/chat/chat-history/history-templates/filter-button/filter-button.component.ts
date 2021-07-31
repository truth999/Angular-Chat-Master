import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
    selector: 'app-filter-button',
    templateUrl: './filter-button.component.html',
    styleUrls: ['./filter-button.component.scss']
})

export class FilterButtonComponent implements OnInit {
    clicked: boolean = false;

    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    @Input() filterLists: Filter;
    filterValues: Filter;
    constructor() { }

    ngOnInit(): void {
        this.filterValues = this.filterLists;
    }
    showFilterList() {
        this.clicked = true;
    }
    closeFilterList() {
        this.clicked = false;
        this.callbackFunction.emit(this.filterValues);
    }

}
export interface Filter {
    time: {
        value: string;
    },
    channel: {
        whatsapp: string;
        facebookMessenger: string;
        sms: string;
        webchat: string;
        skype: string;
        msTeams: string;
        hangOut: string;
    },
    type: {
        chat: string;
        voiceCall: string;
        email: string;
    }
}