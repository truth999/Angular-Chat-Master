import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-call-dialtones',
    templateUrl: './call-dialtones.component.html',
    styleUrls: ['./call-dialtones.component.scss']
})
export class CallDialtonesComponent implements OnInit {
    dialNumber = '';
    constructor() { }

    ngOnInit(): void {
    }
    // numberButtonClick(number) {

    // }

    numberButtonClick(number) {
        this.dialNumber += number;
        // if (this.dialNumber.length == 4 || this.dialNumber.length == 8) {
        //     this.dialNumber += ' ';
        // }
    }
}
