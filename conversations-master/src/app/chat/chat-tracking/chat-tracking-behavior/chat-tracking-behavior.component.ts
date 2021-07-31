import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chat-tracking-behavior',
    templateUrl: './chat-tracking-behavior.component.html',
    styleUrls: ['./chat-tracking-behavior.component.scss']
})
export class ChatTrackingBehaviorComponent implements OnInit {

    constructor() { }

    behaviorData = [
        {
            date: '2020/3/24 06:54',
            url: 'https://google.com',
            timespent: 10628739,
            subdata: [
            ]
        },
        {
            date: '2020/02/13 03:20',
            url: 'https://localhost/-leosouthwork',
            subdata: [
                {
                    className: 'Tracking Test 1',
                    showing: 'c1mock-tracking-test-1 content 1',
                },
                {
                    className: 'Tracking Test 1',
                    showing: 'c1mock-tracking-test-1 content 1',
                },
            ],
            timespent: 64183,
        },
        {
            date: '2020/01/30 23:07',
            url: 'https://c1bottomcatlab.ngrok.io/webchat-demo-configurable-1.0/index.html',
            subdata: [
                {
                    className: 'C1 Mock Tracking Test1',
                    showing: 'c1mock-tracking-test-1 content 1',
                },
                {
                    className: 'C1 Mock Tracking Test2',
                    showing: 'c1mock-tracking-test-1 content 1',
                },
            ],
            timespent: 57075,
        }
    ]

    ngOnInit(): void {
    }

}
