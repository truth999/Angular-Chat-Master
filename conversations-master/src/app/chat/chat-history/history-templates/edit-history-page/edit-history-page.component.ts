import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-edit-history-page',
    templateUrl: './edit-history-page.component.html',
    styleUrls: ['./edit-history-page.component.scss']
})
export class EditHistoryPageComponent implements OnInit {
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    @Input() type: string = 'normal';
    emailcontent = "";
    date = "2-27-2020";
    time = "10:55:0 am";
    subject = "Account Inquiry";
    intent = "Account Inquiry";
    related_to = "None";
    from = "Logan Williamson";
    sent = "Thursday, Feb 27, 2020, 10:55:00 am";
    to = "banking@clcx.cloud";
    message = "Hello, <br>I would like to verify the accounts I have with the bank. I’m attaching a screen image of the list of accounts. I wonder if someone can call me. Thank you.<br>Logan Williamson";
    notice = "This email message and any attachements hereto may contain confidential information. Any unauthorized review, use, disclosure, or distribution of such information is prohibited. If you are not the intended recipient, please contact the original owner.";
    session_notes = "Was able to resolve the customer’s concerns. Will follow up tomorrow to be sure that the customer received the automated communication and understands everything.";
    wrap_up_code = "2 Query Resolved";
    wrap_up_comment = "Called customer and answered his questions about his accounts. Have also created a ticket related to the customer’s concerns about the website functionality.  ";
    intent_currentId;
    related_to_currentId;
    wrapup_currentId
    isAutoCompleteForm: boolean = true;
    autoCompleteForm_control: boolean = false;
    isRelatedtoAutoCompleteForm: boolean = false;
    isIntentAutoCompleteForm: boolean = false;
    intentInputControl: boolean = false;
    relatedtoInputControl: boolean = false;
    isWrapupAutoCompleteForm: boolean = false;
    wrapupInputcontrol: boolean = false;
    isHeaderActive: boolean = false;


    constructor(private renderer: Renderer2) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.intentInputControl != true && this.autoCompleteForm_control == false) {
                this.isIntentAutoCompleteForm = false;
                // this.isAssociatedAutoComplete = false;
            }
            if (this.relatedtoInputControl != true && this.autoCompleteForm_control == false) {
                this.isRelatedtoAutoCompleteForm = false;
                // this.isAssociatedAutoComplete = false;
            }
            if (this.wrapupInputcontrol != true && this.autoCompleteForm_control == false) {
                this.isWrapupAutoCompleteForm = false;
            }

        });
    }

    ngOnInit(): void {
    }

    close() {
        this.callbackFunction.emit('Close');
    }

    autoCompleteIntent(data) {
        this.intent = data.data;
        this.intent_currentId = data.id;
        // this.isAutoCompleteForm = false;
        this.isIntentAutoCompleteForm = false;
    }
    autoCompleteRelatedTo(data) {
        this.related_to = data.data;
        this.related_to_currentId = data.id;
        // this.isAutoCompleteForm = false;
        this.isRelatedtoAutoCompleteForm = false;
    }
    autoCompleteWrapup(data) {
        this.wrap_up_code = data.data;
        this.wrapup_currentId = data.id;
        this.isWrapupAutoCompleteForm = false;
    }
    autoCompleteFormleave() {
        this.autoCompleteForm_control = false;
        // alert('leave');
    }
    autoCompleteFormEnter() {
        this.autoCompleteForm_control = true;
        // alert('enter');
    }

    showRelatedToAutoComplete() {
        this.isRelatedtoAutoCompleteForm = true;
    }
    showIntentAutoComplete() {
        this.isIntentAutoCompleteForm = true;
    }
    intentInputleave() {
        this.intentInputControl = false;
    }
    intentInputenter() {
        this.intentInputControl = true;
    }
    relatedtoInputleave() {
        this.relatedtoInputControl = false;
    }
    relatedtoInputenter() {
        this.relatedtoInputControl = true;
    }
    wrapupInputleave() {
        this.wrapupInputcontrol = false;
    }
    wrapupInputenter() {
        this.wrapupInputcontrol = true;
    }
    showWrapupAutoComplete() {
        this.isWrapupAutoCompleteForm = true;
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
}
