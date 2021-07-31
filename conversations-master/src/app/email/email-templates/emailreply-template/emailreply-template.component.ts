import { Component, OnInit, Renderer2, ElementRef, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailTranscript } from './../../../ngrx/models/email-transcript.model';
import { AppState } from './../../../ngrx/reducers/index.reducer';
import { CloseReply } from './../../../ngrx/actions/email-transcript.actions';
import { Email } from 'src/app/ngrx/models/email.model';
import { UpdateActiveRequest, DeleteActiveRequest } from '../../../ngrx/actions/active-request.actions';
import { Router } from '@angular/router';
import { ErrorHistory } from '../../../ngrx/models/error-history.model';
import { AddErrorHistory } from '../../../ngrx/actions/error-history.action';
import { FormControl } from '@angular/forms';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { range } from 'rxjs';

@Component({
    selector: 'app-emailreply-template',
    templateUrl: './emailreply-template.component.html',
    styleUrls: ['./emailreply-template.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EmailreplyTemplateComponent implements OnInit {

    emailTranscript: EmailTranscript;
    is_cc_show: boolean = false;
    is_bcc_show: boolean = false;
    toEmail: String = '';
    toEmailTemp: String = '';
    toCC: string = '';
    toCCTemp: string = '';
    toBCC: string = '';
    toBCCTemp: string = '';
    isShowContacts: boolean = false;
    isDiscard: boolean = false;
    emailHeader: string = 'Account Inquiry';
    isShowReplyMethodMenu: boolean = false;
    replyMethod: string = "reply";
    menuHover: boolean = false;
    buttonHover: boolean = false;
    isShowReceivedMessage: boolean = false;
    blockedWordsCheck: boolean = false;
    alert_message = 'This email contains blocked words. Please change them and retry.';

    editorModel = [{
        attributes: {
            font: 'DM_Sans',
            background: 'transparent',
            color: '',
        },
        insert: 'Hello Adam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. not able to do that. see ya. '
    }];
    backupEditorModel;
    blockedWords = ['consectetur', 'Hello', 'hello', 'see ya', 'not able to'];

    show_toolbar: boolean = false;
    hoverEmailContactsForm: boolean = false;
    hoverEmailContactsButton: boolean = false;
    saved__info = "Auto saved 2 mins ago";
    is_translate_mode: boolean = false;
    show_select_language: boolean = false;
    translate_language = "English";
    currentEmail: Email;
    focusedInput: string = "to";
    attachments = [];
    attachmentsDisplay = [];
    // attachmentFileName = "";
    emailSubject: String;
    fromEmail: string;
    fromEmailTemp: string;
    blockedWordsEnabled: boolean = false;

    autocompleteForm_control: boolean = false;
    isFromEmailAutoComplete: boolean = false;
    openedRequest: ActiveRequest;

    fromEmailAddressList = [
        {
            'name': 'Thomas Smith',
            'email': 'thomas_smith@yahoo.com',
        },
        {
            'name': 'Calvin Hogan',
            'email': 'lavada_kuhic@janice.biz',
        },
        {
            'name': 'Jay Mathis',
            'email': 'eusebio.haag@jolie.tv',
        },
        {
            'name': 'Hilda West',
            'email': 'bauch_valerie@hillard.co.uk',
        },
        {
            'name': 'Thomas Smith',
            'email': 'thomas_smith@yahoo.com',
        },
    ]

    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    @ViewChild('emailContactsForm') emailContactsForm: ElementRef;
    @ViewChild('toInput') private toInput: ElementRef<HTMLElement>;
    @ViewChild('bccInput') bccInput: ElementRef;
    constructor(private store: Store<AppState>, private renderer: Renderer2, private router: Router) {
        store.select('emailTranscript').subscribe(val => { this.emailTranscript = val; });

        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hoverEmailContactsButton) {
            }
            else if (this.hoverEmailContactsForm == false) {
                this.isShowContacts = false;
            }
            if (this.menuHover == false && this.buttonHover == false) {

                this.isShowReplyMethodMenu = false;
            }
            if (this.autocompleteForm_control == false) {
                this.isFromEmailAutoComplete = false;
            }
        });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            store.select('emails').subscribe(val => {
                let index = val.findIndex(element => element.callId === opendRequestData.callId)
                if (index >= 0) {
                    this.currentEmail = val[index];
                    let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
                    this.openedRequest = openedRequest;
                    this.toEmail = '';
                    this.toCC = '';
                    this.toBCC = '';
                    if (openedRequest.callStatus == 'replyAll') {
                        this.toEmail = this.currentEmail.emailContent.headers.replyTo.id + '; ';
                        this.currentEmail.emailContent.headers.cc.map(item => {
                            this.toCC += item.email + ';&nbsp;';
                        })
                        this.currentEmail.emailContent.headers.bcc.map(item => {
                            this.toBCC += item.email + ';&nbsp;';
                        })
                    }
                    else if (openedRequest.callStatus == 'reply') {
                        this.toEmail = this.currentEmail.emailContent.headers.replyTo.id + '; ';
                    }
                    else if (openedRequest.callStatus == 'forward') {
                    }
                    this.emailSubject = this.currentEmail.emailContent.headers.subject;
                    if (this.toCC != '') {
                        this.is_cc_show = true;
                    }
                    if (this.toBCC != '') {
                        this.is_bcc_show = true;
                    }
                    this.fromEmail = this.currentEmail.id + ';&nbsp;';

                }
            })
            let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            this.replyMethod = openedRequest.callStatus;

        })
        this.toEmailTemp = this.toEmail;
        this.fromEmailTemp = this.fromEmailTemp;
        this.toCCTemp = this.toCC;
        this.toBCCTemp = this.toBCC;

    }

    ngOnInit(): void {
    }

    reply() {

    }
    close() {
        this.store.dispatch(new CloseReply());
    }
    showCC() {
        this.is_cc_show = true;
    }
    showBCC() {
        this.is_bcc_show = true;
    }
    closeCC() {
        this.is_cc_show = false;
    }
    closeBCC() {
        this.is_bcc_show = false;
    }
    showContacts() {
        this.isShowContacts = !this.isShowContacts;
    }

    handleFooter(action: any) {
        if (action == 'Discard') {
            this.isDiscard = true;
        }
        else if (action == 'Send Email') {
            if (this.blockedWordsEnabled == false) {

                //check the blocked words and highlight the blockedwords
                let blockedWordsCheck = false;
                let totalSentence = '';
                this.editorModel.map(item => {
                    totalSentence += item.insert;
                })

                let totalWords = totalSentence.split(' ');
                this.backupEditorModel = this.editorModel;

                let separatedSentence = [
                    {
                        'sentence': totalSentence,
                        'blockedCheck': false,
                    }
                ]
                this.blockedWords.map(word => {
                    let tempSentence = [];
                    separatedSentence.map(item => {
                        if (item.sentence.includes(word)) {
                            let temp = item.sentence.split(word);
                            temp.map((subitem, index) => {

                                tempSentence = [...tempSentence, {
                                    'sentence': subitem,
                                    'blockedCheck': false,
                                }]
                                if (temp.length != index + 1) {
                                    tempSentence = [...tempSentence, {
                                        'sentence': word,
                                        'blockedCheck': true,
                                    }]
                                }

                            })
                        }
                        else {
                            tempSentence = [...tempSentence, item];
                        }
                    })
                    separatedSentence = tempSentence;
                })

                this.editorModel = separatedSentence.map(section => {
                    if (section.blockedCheck == true) {
                        blockedWordsCheck = true;
                        return {
                            attributes: {
                                font: 'DM_Sans',
                                background: 'rgb(244, 204, 206)',
                                color: 'rgb(255, 0, 0)',

                            },
                            insert: section.sentence
                        }
                    }
                    else if (section.blockedCheck == false) {
                        return {
                            attributes: {
                                font: 'DM_Sans',
                                background: '',
                                color: '',

                            },
                            insert: section.sentence
                        }
                    }
                })

                if (blockedWordsCheck) {
                    this.blockedWordsCheck = true;
                    var currentDate = new Date();

                    var date = currentDate.getDate();
                    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
                    var year = currentDate.getFullYear();

                    let dateString = date + "-" + (month + 1) + "-" + year;

                    let errorHistory: ErrorHistory
                    errorHistory = {
                        channel: 'email',
                        message: 'This email contains blocked words. Please change them and retry.',
                        time: dateString,
                        flash: true,
                    }
                    this.store.dispatch(new AddErrorHistory(errorHistory));
                }

            }

        }
        else if (action == 'Save Draft') {
            this.saved__info = "Saved just now";
        }
        else if (action == 'Set Plain Text Mode') {
            this.editorModel = this.editorModel.map(item => {
                return {
                    ...item, attributes: {
                        font: 'DM_Sans',
                        background: 'transparent',
                        color: '',
                    }
                }
            })
        }
        else if (action == 'Save Draft') {
            this.saved__info = "Saved just now";
        }
        else if (action == 'Enable Blocked Words') {
            this.blockedWordsEnabled = true;
        }
        else if (action == 'Disable Blocked Words') {
            this.blockedWordsEnabled = false;
        }
        else if (action == 'Attachment Action') {
            this.attachments.map(attachment => {
                if (attachment.type.match(/image\/*/) == null) {
                    this.attachmentsDisplay = [...this.attachmentsDisplay, {
                        type: 'data',
                        name: attachment.name
                    }]
                } else {
                    var reader;
                    reader = new FileReader();
                    reader.readAsDataURL(attachment);
                    reader.onload = (_event) => {
                        this.attachmentsDisplay = [...this.attachmentsDisplay, {
                            type: 'image',
                            name: attachment.name,
                            url: reader.result
                        }]
                    }
                }
                
            })
        }
    }
    handleDiscardTemplate(action: any) {
        if (action == 'Discard') {
            this.isDiscard = false;
            let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            let updatedRequest = { ...openedRequest, callStatus: 'closed' }
            localStorage.setItem('openedRequest', JSON.stringify(updatedRequest))
            this.store.dispatch(new DeleteActiveRequest(openedRequest));
            this.router.navigate(["home/queue"], { skipLocationChange: true });
        }
        if (action == 'Close') {
            this.isDiscard = false;
        }
    }
    showReceivedMessage() {
        this.isShowReceivedMessage = !this.isShowReceivedMessage;
    }
    hoverInContactsForm() {
        this.hoverEmailContactsForm = true;
    }
    hoverOutContactsForm() {
        this.hoverEmailContactsForm = false;
    }
    showReplyMethodMenu() {
    }

    getContent(innerText) {
        console.log(innerText);
        this.toEmail = innerText;
    }
    emailAutocomplete(email) {
        //email autocomplete when click contacts on contacts form to focused input of to/cc/bcc.
        if (this.focusedInput == 'to') {
            this.toEmail += '<h1>' + email + ';' + '</h1>' + '&nbsp;';
            this.toEmailTemp = this.toEmail;
            this.isShowContacts = false;
            this.testEmail();
        }
        else if (this.focusedInput == 'cc') {
            this.toCC += '<h1>' + email + ';' + '</h1>' + '&nbsp;';
            this.toCCTemp += this.toCC;
            this.isShowContacts = false;
            this.testEmail();
        }
        else if (this.focusedInput == 'bcc') {
            this.toBCC += '<h1>' + email + ';' + '</h1>' + '&nbsp;';
            this.toBCCTemp += this.toBCC;
            this.isShowContacts = false;
            this.testEmail();
        }
    }
    hoverInContactsButton() {
        this.hoverEmailContactsButton = true;
    }
    hoverOutContactsButton() {
        this.hoverEmailContactsButton = false;
    }
    menuhoverStatus() {
        this.menuHover = true;
    }
    menuhoveroutStatus() {
        this.menuHover = false;
    }
    buttonhoverStatus() {
        this.buttonHover = true;
    }
    buttonhoveroutStatus() {
        this.buttonHover = false;
    }
    toggleToolbar(show_toolbar) {
        this.show_toolbar = show_toolbar;
    }
    saveDraft() {
        this.saved__info = "Saved just now";
    }
    selectLanguage() {
        this.show_select_language = !this.show_select_language;
    }
    changeTranslateLanguage(language) {
        this.translate_language = language;
        this.show_select_language = false;
    }
    viewOriginalMessage() {
        this.is_translate_mode = false;
    }
    translateMessage() {
        this.is_translate_mode = true;
    }
    setFocusInput(name) {
        this.focusedInput = name;
    }
    closeAlert(action) {
        this.blockedWordsCheck = false;
        this.editorModel = this.backupEditorModel;
    }
    validateEmail(email) { //validate email whether valid or invalid
        const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]| \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?| \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:  (?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return re.test(email);
    }

    checkEmail(check_email) {
        //for from/to/cc/bcc emails string, divides it by ';' to emails and validate each email. for valid email wrap it by '<h1>' tag and for invalid email wrap it by '<p>'tag, so invalid emails can be marked as red on view.
        let testString = check_email
        testString = testString.split('&nbsp;').join('');
        testString = testString.split('<p>').join('');
        testString = testString.split('</p>').join('');
        testString = testString.split('<br>').join('');
        testString = testString.split('<h1>').join('');
        testString = testString.split('</h1>').join('');
        testString = testString.split(' ').join('');
        let emails = testString.split(';');

        let resultEmail = ''
        emails.map(email => {
            if (email != '') {
                if (this.validateEmail(email)) {
                    resultEmail += '<h1>' + email + ';' + '</h1>';
                    resultEmail += '&nbsp;'
                }
                else {
                    let blockedEmail = '<p>'
                    blockedEmail += email
                    blockedEmail += ';'
                    blockedEmail += '</p>'
                    blockedEmail += '&nbsp;'
                    resultEmail += blockedEmail
                }
            }

        })
        resultEmail = resultEmail.split('<br>').join('');
        return resultEmail;
    }

    recognizeEmail($event) { //if press space or enter on email from/to/cc/bcc input, prevents it and check inputed email is valid.
        $event.preventDefault();
        this.testEmail();
    }

    testEmail() {
        if (this.focusedInput == 'to' && this.toEmail[this.toEmail.length - 1] != ' ' && this.toEmail[this.toEmail.length - 2] != ';' && this.toEmail != '') {
            //if focused input is to input, adds ';&nbsp;' to last of to email string. so emails can be separated.
            if (this.toEmail[this.toEmail.length - 1] == ';') {
                this.toEmail += '&nbsp;';
            }
            else {
                this.toEmail += ';&nbsp;';
            }
            this.toEmailTemp = this.checkEmail(this.toEmail); // toEmailTemp is variable for innerHtml of to input

            //move cursor to last after changing innerHtml of toInput
            // var el = document.getElementById("toInput")
            // var range = document.createRange()
            // var sel = window.getSelection()

            // // range.setStart(el.childNodes[1].firstChild, 5)
            // range.setStart(this.toInput.nativeElement.firstChild, 2)
            // range.collapse(true)

            // sel.removeAllRanges()
            // sel.addRange(range)
            // this.toInput.nativeElement.focus();

        }
        else if (this.focusedInput == 'bcc' && this.toBCC[this.toBCC.length - 1] != ' ' && this.toBCC[this.toBCC.length - 2] != ';' && this.toBCC != '') {
            //if focused input is bcc input, adds ';&nbsp;' to last of to email string. so emails can be separated.
            if (this.toBCC[this.toBCC.length - 1] == ';') {
                this.toBCC += '&nbsp;';
            }
            else {
                this.toBCC += ';&nbsp;';
            }
            this.toBCCTemp = this.checkEmail(this.toBCC); // toBCCTemp is variable for innerHtml of from input
        }
        else if (this.focusedInput == 'cc' && this.toCC[this.toCC.length - 1] != ' ' && this.toCC[this.toCC.length - 2] != ';' && this.toCC != '') {
            //if focused input is cc input, adds ';&nbsp;' to last of to email string. so emails can be separated.
            if (this.toCC[this.toCC.length - 1] == ';') {
                this.toCC += '&nbsp;';
            }
            else {
                this.toCC += ';&nbsp;';
            }
            this.toCCTemp = this.checkEmail(this.toCC); // toCCTemp is variable for innerHtml of cc input
        }
        else if (this.focusedInput == 'from' && this.fromEmail[this.fromEmail.length - 1] != ' ' && this.fromEmail[this.fromEmail.length - 2] != ';' && this.fromEmail != '') {
            //if focused input is from input, adds ';&nbsp;' to last of to email string. so emails can be separated.
            if (this.fromEmail[this.fromEmail.length - 1] == ';') {
                this.fromEmail += '&nbsp;';
            }
            else {
                this.fromEmail += ';&nbsp;';
            }
            this.fromEmailTemp = this.checkEmail(this.fromEmail); // fromEmailTemp is variable for innerHtml of from input
        }
    }

    removeAttachment(indexToRemove) { //remove attachment when click remove button of each attachment
        this.attachments = this.attachments.filter((val, index) => index != indexToRemove)
        this.attachmentsDisplay = this.attachmentsDisplay.filter((val, index) => index != indexToRemove)
    }

    autocompleteFormleave() {
        this.autocompleteForm_control = false;
    }
    autocompleteFormenter() {
        this.autocompleteForm_control = true;
    }
    autoCompleteFromEmail(data) {
        this.fromEmail = data.data + ';&nbsp;';
        this.fromEmailTemp = this.fromEmail;
        this.isFromEmailAutoComplete = false;
    }
    showFromEmailAutocomplete() {
        this.isFromEmailAutoComplete = true;
    }
}
