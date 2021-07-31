import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { InteractionHistory } from './../../ngrx/models/interaction-history.model'
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { UpdateInteractionHistory } from 'src/app/ngrx/actions/interaction-history.action';

@Component({
    selector: 'app-history-detail',
    templateUrl: './history-detail.component.html',
    styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {

    historyId;
    interactionHistory: InteractionHistory;
    emailcontent = "";
    date = "2-27-2020";
    time = "10:55:0 am";
    emalContent = '';
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
    wrapup_currentId;
    wrapup_autocompleteData = [];
    isAutoCompleteForm: boolean = true;
    autoCompleteForm_control: boolean = false;
    isRelatedtoAutoCompleteForm: boolean = false;
    isIntentAutoCompleteForm: boolean = false;
    intentInputControl: boolean = false;
    relatedtoInputControl: boolean = false;
    isWrapupAutoCompleteForm: boolean = false;
    wrapupInputcontrol: boolean = false;
    isHeaderActive: boolean = false;
    callTranscript;

    constructor(private renderer: Renderer2, private router: Router, private route: ActivatedRoute, private store: Store<AppState>) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.intentInputControl != true && this.autoCompleteForm_control == false) {
                this.isIntentAutoCompleteForm = false;
            }
            if (this.relatedtoInputControl != true && this.autoCompleteForm_control == false) {
                this.isRelatedtoAutoCompleteForm = false;
            }
            if (this.wrapupInputcontrol != true && this.autoCompleteForm_control == false) {
                this.isWrapupAutoCompleteForm = false;
            }

        });

        //get route paramter for history id
        this.route.params.subscribe((params: any) => this.historyId = params['id']);

        //load current interaction history details
        store.select('interactionHistory').subscribe(value => {
            this.interactionHistory = value[this.historyId];
            this.date = this.interactionHistory.callansweredtime__c.split(', ')[0]
            this.time = this.interactionHistory.callansweredtime__c.split(', ')[1]
            this.subject = this.interactionHistory.subject;
            this.wrap_up_code = this.interactionHistory.WrapUpCode.chosen + ' ' + this.interactionHistory.WrapUpCode.available[this.interactionHistory.WrapUpCode.chosen]
            this.wrap_up_comment = this.interactionHistory.WrapUpComment
            this.session_notes = ''
            this.interactionHistory.sessionNotes.map(sessionNote => {
                this.session_notes += sessionNote.notes
            })
            if (this.interactionHistory.callLog.associated == null) {
                this.intent = ''
            }
            else {
                this.intent = this.interactionHistory.callLog.associated.id;
                this.interactionHistory.callLog.associatevals.map((associated, index) => {
                    if (associated.id == this.intent) {
                        this.intent_currentId = index;
                    }
                })
            }
            this.related_to = this.interactionHistory.callLog.related.id;
            this.interactionHistory.callLog.relatevals.map((related, index) => {
                if (related.id == this.related_to) {
                    this.related_to_currentId = index;
                }
            })
            this.wrapup_autocompleteData = []
            for (let key in this.interactionHistory.WrapUpCode.available) {
                this.wrapup_autocompleteData = [...this.wrapup_autocompleteData, {
                    name: key + ' ' + this.interactionHistory.WrapUpCode.available[key]
                }]
            }
            if (this.interactionHistory.type == 'voice') {
                //for voice transcript history makes time stamp as hh:mm am format
                let voiceTranscript = this.interactionHistory.voiceTranscript;
                this.callTranscript = voiceTranscript.map(transcript => {
                    let time: any;
                    time = transcript.timestamp.split('T', 2)[1];
                    let hour = time.split(':')[0];

                    time = time.split(':')[0] + ':' + time.split(':')[1];
                    if ((hour - 0) < 12) {
                        time += 'am';
                    }
                    else {
                        time += 'pm';
                    }
                    return { ...transcript, timestamp: time };
                })

            }
        })
    }

    ngOnInit(): void {

    }

    historyBack(): void {
        this.router.navigate(["home/queue"], { skipLocationChange: true });
    }
    autoCompleteIntent(data) {
        this.intent = data.data;
        this.intent_currentId = data.id;
        this.isIntentAutoCompleteForm = false;
    }
    autoCompleteRelatedTo(data) {
        this.related_to = data.data;
        this.related_to_currentId = data.id;
        this.isRelatedtoAutoCompleteForm = false;
    }
    autoCompleteWrapup(data) {
        this.wrap_up_code = data.data;
        this.wrapup_currentId = data.id;
        this.isWrapupAutoCompleteForm = false;
    }
    autoCompleteFormleave() {
        this.autoCompleteForm_control = false;
    }
    autoCompleteFormEnter() {
        this.autoCompleteForm_control = true;
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

    cancel() {
        this.router.navigate(["home/queue"], { skipLocationChange: true });
    }
    save() {
        //save updated history to interactionHistory ngrx
        let updatedInteractionHistory = this.interactionHistory;
        updatedInteractionHistory = { ...updatedInteractionHistory, callansweredtime__c: this.date + ', ' + this.time }
        updatedInteractionHistory = { ...updatedInteractionHistory, subject: this.subject }
        let callLog = {
            associatevals: updatedInteractionHistory.callLog.associatevals,
            relatevals: updatedInteractionHistory.callLog.relatevals,
            associated: updatedInteractionHistory.callLog.associatevals[this.intent_currentId],
            related: updatedInteractionHistory.callLog.relatevals[this.related_to_currentId]
        }
        updatedInteractionHistory = { ...updatedInteractionHistory, callLog: callLog }

        let wrapupCode = updatedInteractionHistory.WrapUpCode
        wrapupCode = { ...wrapupCode, chosen: this.wrap_up_code.split(' ')[0] }
        updatedInteractionHistory = { ...updatedInteractionHistory, WrapUpCode: wrapupCode }
        updatedInteractionHistory = { ...updatedInteractionHistory, WrapUpComment: this.wrap_up_comment }
        this.store.dispatch(new UpdateInteractionHistory({ history: updatedInteractionHistory, index: this.historyId }));

        //back to hisotry page
        this.router.navigate(["home/queue"], { skipLocationChange: true });
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
