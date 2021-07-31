import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-float-input',
    templateUrl: './float-input.component.html',
    styleUrls: ['./float-input.component.scss']
})
export class FloatInputComponent implements OnInit {

    constructor() { }
    @Input() inputModel: string;
    @Input() inputLabel: string;
    @Input() inputType: string = "text";
    @Input() isDisabled: boolean = false;
    @Input() status: string = "normal";
    @Input() place_holder: string = "";
    @Input() type: string = "login";
    @Output() inputModelChange = new EventEmitter<string>();
    time;

    ngOnInit(): void {
        if (this.type == 'timer') {
            const milliseconds = parseInt(this.inputModel) * 1000 // 1575909015000

            const dateObject = new Date(milliseconds)
            let hour = dateObject.getHours();
            let minute = dateObject.getMinutes();
            let second = dateObject.getSeconds();
            let realhour;
            let realminute;
            let realsecond;
            if (!(hour >= 0 && hour <= 100)) { hour = 0; }
            if (!(minute >= 0 && minute <= 60)) { minute = 0; }
            if (!(second >= 0 && second <= 60)) { second = 0; }

            if (hour < 10) { realhour = '0' + hour; }
            else { realhour = hour; }

            if (minute < 10) { realminute = '0' + minute; }
            else { realminute = minute; }

            if (second < 10) { realsecond = '0' + second; }
            else { realsecond = second; }

            this.time = realhour + ':' + realminute + ':' + realsecond;
        }

    }
}
