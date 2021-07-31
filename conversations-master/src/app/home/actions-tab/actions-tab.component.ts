import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-actions-tab',
    templateUrl: './actions-tab.component.html',
    styleUrls: ['./actions-tab.component.scss']
})
export class ActionsTabComponent implements OnInit {
    // @Output() curTabNum = new EventEmitter<string>();
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();

    curTab = undefined;
    curSubTab = undefined;
    subTabOpen = false;
    hoverHistory: boolean = false;
    hoverAnalytics: boolean = false;
    hoverQueue: boolean = false;
    hoverHelp: boolean = false;
    constructor(private router: Router) { }

    ngOnInit(): void {
        this.curTab = localStorage.getItem('tab_id');
        if (this.curTab === 2) {
            this.subTabOpen = true;

            console.log('abc');
            this.curSubTab = localStorage.getItem('subTab_id') ? parseInt(localStorage.getItem('subTab_id')) : 0;
        } else {
            this.subTabOpen = false;
        }
    }

    setActionTab(curTab) {
        this.curTab = curTab;
        if (this.curTab === 2) {
            this.subTabOpen = true;
            this.curSubTab = 0;
        } else {
            this.subTabOpen = false;
        }
        localStorage.setItem("tab_id", this.curTab);
        this.callbackFunction.emit('changed_tab');
    }

    setActionSubTab(curSubTab) {
        this.curSubTab = curSubTab;
        this.subTabOpen = true;
        localStorage.setItem("subTab_id", this.curSubTab);
        this.callbackFunction.emit('changed tab');
    }

    hoverStatusHistory(): void {
        this.hoverHistory = true;
    }

    hoveroutStatusHistory(): void {
        this.hoverHistory = false;
    }

    hoverStatusAnalytics(): void {
        this.hoverAnalytics = true;
    }

    hoveroutStatusAnalytics(): void {
        this.hoverAnalytics = false;
    }

    hoverStatusQueue(): void {
        this.hoverQueue = true;
    }

    hoveroutStatusQueue(): void {
        this.hoverQueue = false;
    }

    hoverStatusHelp(): void {
        this.hoverHelp = true;
    }

    hoveroutStatusHelp(): void {
        this.hoverHelp = false;
    }

}
