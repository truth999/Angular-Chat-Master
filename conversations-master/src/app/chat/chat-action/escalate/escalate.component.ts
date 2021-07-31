import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-escalate',
    templateUrl: './escalate.component.html',
    styleUrls: ['./escalate.component.scss']
})
export class EscalateComponent implements OnInit {
    @Input() escalate_type: any;
    @Input() closeEscalate: (args: any) => void;
    queue: string = '';
    autocompleteForm_control: boolean = false;
    isQueueAutoComplete: boolean = false;
    queueList = [
        {
            'name': 'Chat',
        },
        {
            'name': 'Email',
        },
        {
            'name': 'Voice',
        },
    ]

    constructor(private renderer: Renderer2) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.autocompleteForm_control == false) {
                this.isQueueAutoComplete = false;
            }
        });
    }

    ngOnInit(): void {

    }

    close(type) {
        this.closeEscalate(type);
    }

    autocompleteFormleave() {
        this.autocompleteForm_control = false;
    }
    autocompleteFormenter() {
        this.autocompleteForm_control = true;
    }
    autoCompleteQueue(data) {
        this.queue = data.data;
        this.isQueueAutoComplete = false;
    }
    showQueueAutocomplete() {
        this.isQueueAutoComplete = true;
    }

}
