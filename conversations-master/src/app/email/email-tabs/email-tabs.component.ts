import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ActiveRequest } from '../../ngrx/models/active-request.model';
import { timer, Subscription } from "rxjs";
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';

@Component({
    selector: 'app-email-tabs',
    templateUrl: './email-tabs.component.html',
    styleUrls: ['./email-tabs.component.scss']
})
export class EmailTabsComponent implements OnInit {

    numberOfActiveRequests;
    constructor(private store: Store<AppState>) {   
        store.select('activeRequests').subscribe(val => {
            this.numberOfActiveRequests = val.length;
        });
     }

    @Input() status: string = 'Incoming';
    @Input() contactinfo: ActiveRequest;
    @Input() tabId: number = 0;

    @Input() isLinked: boolean = false;
    @Input() newMesssage: boolean = false;
    @Input() isActive: boolean = false;
    timer: number = 0;
    tick = 1000;
    countUp: Subscription;
    isTooltipAdjusted: boolean = false;
    //li-main/li-list
    @Input() display_type: string = 'li-main';

    @ViewChild('tooltip') tooltip: ElementRef;
    @ViewChild('tab') tab: ElementRef;

    ngOnInit(): void {
        this.countUp = timer(0, this.tick).subscribe(() => ++this.timer);
        
        // if (this.tooltip != undefined && this.tab != undefined) {
        //     console.log(this.tooltip.nativeElement.offsetWidth);
        //     console.log(this.tab.nativeElement.offsetWidth);
        //     if (this.tooltip.nativeElement.offsetWidth > this.tab.nativeElement.offsetWidth) {
        //         this.isTooltipAdjusted = true;
        //     }
        // }
    }
    ngAfterViewInit() {
    }
    ngAfterViewChecked() {
    }

    ngOnDestroy() {
        this.countUp = null;
    }
}
