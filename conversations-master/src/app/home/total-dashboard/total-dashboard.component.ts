import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-total-dashboard',
    templateUrl: './total-dashboard.component.html',
    styleUrls: ['./total-dashboard.component.scss']
})
export class TotalDashboardComponent implements OnInit {
    curTab = undefined;
    curSubTab = undefined;
    subTabOpen = false;
    hoverHistory: boolean = false;
    hoverAnalytics: boolean = false;
    hoverQueue: boolean = false;
    hoverHelp: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.curTab = localStorage.getItem('tab_id');
        if (this.curTab === '2') {
            this.subTabOpen = true;
            this.curSubTab = localStorage.getItem('subTab_id') ? parseInt(localStorage.getItem('subTab_id')) : 0;
        } else {
            this.subTabOpen = false;
        }
    }

    handleActionsTab($event) {
        this.curTab = localStorage.getItem('tab_id');
        if (this.curTab === '2') {
            this.subTabOpen = true;
            this.curSubTab = localStorage.getItem('subTab_id') ? parseInt(localStorage.getItem('subTab_id')) : 0;
        } else {
            this.subTabOpen = false;
        }
    }

    setActionTab(curTab) {
        this.curTab = curTab;
    }

    setActionSubTab(curSubTab) {
        this.curSubTab = curSubTab;
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
