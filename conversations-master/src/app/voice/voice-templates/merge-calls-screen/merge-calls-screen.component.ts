import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Call } from './../../../ngrx/models/call.model';
import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../../ngrx/models/email-transcript.model';
import { AppState } from './../../../ngrx/reducers/index.reducer';
import { Pipe, PipeTransform } from "@angular/core";

@Component({
    selector: 'app-merge-calls-screen',
    templateUrl: './merge-calls-screen.component.html',
    styleUrls: ['./merge-calls-screen.component.scss']
})
export class MergeCallsScreenComponent implements OnInit {
    calls: Call[];
    totalTime: number = 0;
    constructor(private store: Store<AppState>) {
        store.select('calls').subscribe(val => { this.calls = val; });
    }
    ngOnInit(): void {
        for (let i = 0; i < this.calls.length; i++) {
            this.totalTime += this.calls[i].talkingTime;
        }
    }

}

@Pipe({
    name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
    transform(value: number): string {
        const hours: number = Math.floor(value / 3600);
        const minutes: number = Math.floor((value % 3600) / 60);
        return (
            '333' +
            ("00" + hours).slice(-2) +
            ":" +
            ("00" + minutes).slice(-2) +
            ":" +
            ("00" + Math.floor(value - minutes * 60)).slice(-2)
        );
    }
}
