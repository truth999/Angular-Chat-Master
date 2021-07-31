import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../ngrx/models/email-transcript.model';
import { AppState } from './../../ngrx/reducers/index.reducer';
import { Observable } from 'rxjs';
import { ReplyAction } from './../../ngrx/actions/email-transcript.actions';
import { Email } from 'src/app/ngrx/models/email.model';
import { EmailService } from './../../_service/email.service';

@Component({
    selector: 'app-email-transcript',
    templateUrl: './email-transcript.component.html',
    styleUrls: ['./email-transcript.component.scss']
})
export class EmailTranscriptComponent implements OnInit {
    emailTranscript: EmailTranscript;

    email;
    message_subject: String;
    date = "Tue, Jun 20 2020, 10:55 AM";
    message_content;
    translated_message_title = "Consulta de cuenta";
    translated_message_content = "Hola, Me gustaría verificar las cuentas que tengo con el banco. Adjunto una captura de pantalla de la lista de cuentas. Me pregunto si alguien podría llamarme. Gracias.";
    translate_language = "Spanish";
    is_translate_mode: boolean = false;
    show_select_language: boolean = false;
    is_defer: boolean = false;
    hover_select_language_form: boolean = false;
    hover_select_language_button: boolean = false;

    currentEmail: Email;
    // @ViewChild('selectLanguageButton') selectLanguageButton: ElementRef;
    // @ViewChild('selectLanguageButton', { static: true }) selectLanguageButton: any;
    constructor(private renderer: Renderer2, private store: Store<AppState>, public emailService: EmailService) {
        // this.emailTranscript = this.store.select('emailTranscript');
        store.select('emailTranscript').subscribe(val => { this.emailTranscript = val; });
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hover_select_language_button == false && this.hover_select_language_form == false) {
                this.show_select_language = false;
            }
        });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            store.select('emails').subscribe(val => {
                let index = val.findIndex(element => element.callId === opendRequestData.callId)
                if (index >= 0) {
                    this.currentEmail = val[index];
                    this.email = this.currentEmail.emailContent.headers.from.id;
                    this.message_content = this.currentEmail.emailContent.bodyHtml;
                    this.message_subject = this.currentEmail.emailContent.headers.subject;
                    let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
                    if (openedRequest.isDefered == true) { this.is_defer = true; }
                    else { this.is_defer = false; }
                }
            })
        })
    }

    ngOnInit(): void {
    }

    reply(action) {
        // this.store.dispatch(new ReplyAction());
        this.emailService.createLinkedEmail(action).then((status: any) => {
            //if get success
        }).catch((error: any) => {
            alert("can't create the Email");
        });
    }

    translateMessage() {
        this.is_translate_mode = true;
    }
    viewOriginalMessage() {
        this.is_translate_mode = false;
    }
    selectLanguage() {
        this.show_select_language = !this.show_select_language;
    }
    changeTranslateLanguage(language) {
        this.translate_language = language;
        this.show_select_language = false;
    }
    handleFooter(action) {
        if (action == 'Defer Email') {
            this.is_defer = true;
        }
        if (action == 'Resume Email') {
            this.is_defer = false;
        }
    }

    hoverInSelectLanguageForm() {
        this.hover_select_language_form = true;
    }
    hoverOutSelectLanguageForm() {
        this.hover_select_language_form = false;
    }
    hoverInSelectLanguageButton() {
        this.hover_select_language_button = true;
    }
    hoverOutSelectLanguageButton() {
        this.hover_select_language_button = false;
    }
}
