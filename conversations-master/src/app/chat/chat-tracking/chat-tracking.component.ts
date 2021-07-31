import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chat-tracking',
    templateUrl: './chat-tracking.component.html',
    styleUrls: ['./chat-tracking.component.scss']
})
export class ChatTrackingComponent implements OnInit {
    tabindex: number = 1;

    constructor() { }

    ngOnInit(): void {
    }

    changeTab(index) {
        this.tabindex = index;
    }
}
