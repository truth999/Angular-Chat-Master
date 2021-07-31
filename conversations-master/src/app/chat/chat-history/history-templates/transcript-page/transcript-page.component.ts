import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-transcript-page',
    templateUrl: './transcript-page.component.html',
    styleUrls: ['./transcript-page.component.scss']
})
export class TranscriptPageComponent implements OnInit {

    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    @Input() type: string = 'normal';

    from_email = "hildapalmer@gmail.com";
    from_title = "Payment Issue";
    from_date = "Tue, Jun 20 2020, 10:55 AM";
    from_message = "Hello, \n \n I would like to verify the accounts I have with the bank.  I’m \nattaching a screen shot of the list of accounts.  I wonder if \nsomeone could call me.\n\nThank you.\n-Hilda Palmer";
    translated_from_message = "Hola, me gustaría verificar las cuentas que tengo con el banco. Adjunto una captura de pantalla de la lista de cuentas. Me pregunto si alguien podría llamarme. Gracias. -Hilda Palmer"
    to_email = "hildapalmer@gmail.com";
    to_title = "Payment Issues";
    to_date = "Tue, Jun 20 2020, 10:55 AM";
    to_message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \n enim ad minim veniam, quis nostrud exercitation ullamco.\n\nThank you.\n-Hilda Palmer";
    translated_to_message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Translated message";
    isHeaderActive: boolean = false;

    // isTranslateMode: boolean = false;
    languageTranslateToEmail;
    languageTranslateFromEmail;
    isTranslateModeFromEmail: boolean = false;
    isTranslateModeToEmail: boolean = false;
    constructor() { }

    ngOnInit(): void {
    }

    close() {
        this.callbackFunction.emit('Close');
    }

    onScroll($event) {
        let scrollPosition = $event.srcElement.scrollTop;
        if (scrollPosition > 0) {
            this.isHeaderActive = true;
        }
        else if (scrollPosition == 0) {
            this.isHeaderActive = false;
        }
    }

    handleTranslateBar(data) {
        if (data.action == 'Translate') {
            if (data.for == 'From') {
                this.languageTranslateFromEmail = data.language;
            }
            else if(data.for == 'To') {
                this.languageTranslateToEmail = data.language;
            }
        } else if (data.action == 'View Original Message') {
            if (data.for == 'From') {
                this.isTranslateModeFromEmail = false;
            }
            else if(data.for == 'To') {
                this.isTranslateModeToEmail = false;
            }
        }
    }
    Translate(action) {
        if(action === 'From') {
            this.isTranslateModeFromEmail = true;
        }
        else if (action === 'To') {
            this.isTranslateModeToEmail = true;
        }
    }

}
