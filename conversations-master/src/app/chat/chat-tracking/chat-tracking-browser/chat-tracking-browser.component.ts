import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chat-tracking-browser',
    templateUrl: './chat-tracking-browser.component.html',
    styleUrls: ['./chat-tracking-browser.component.scss']
})
export class ChatTrackingBrowserComponent implements OnInit {

    constructor() { }

    location = {
        lat: "35.7310179",
        long: "-78.785329199999999"
    }
    browserName = "Chrome/79.0.3945.130"

    ngOnInit(): void {
    }

}
