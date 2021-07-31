import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Channel } from '../../ngrx/models/channel.model';
import { Store, select } from '@ngrx/store';
import { AppState, selectChannel } from '../../ngrx/reducers/index.reducer';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';

@Component({
    selector: 'app-wrapup-chat',
    templateUrl: './wrapup-chat.component.html',
    styleUrls: ['./wrapup-chat.component.scss']
})
export class WrapupChatComponent implements OnInit {
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();

    constructor(private renderer: Renderer2, private store: Store<AppState>) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.relatedtoInputControl != true && this.autoCompleteForm_control == false) {
                this.isRelatedtoAutoCompleteForm = false;
            }
            if (this.wrapupInputcontrol != true && this.autoCompleteForm_control == false) {
                this.isWrapupAutoCompleteForm = false;
            }
            if (this.nameInputControl != true && this.autoCompleteForm_control == false) {
                this.isNameAutoCompleteForm = false;
            }
        });
    }
    wrap_up_code = '';
    name = '';
    wrapup_comments = "Calling back the customer later to request more details about the acc inquiry and payment issues.";
    setting_status: boolean = false;
    related_to: string = '';
    subject = '';


    related_to_currentId;
    wrapup_currentId;
    name_currentId;
    isAutoCompleteForm: boolean = true;
    autoCompleteForm_control: boolean = false;
    isRelatedtoAutoCompleteForm: boolean = false;

    relatedtoInputControl: boolean = false;
    isWrapupAutoCompleteForm: boolean = false;
    wrapupInputcontrol: boolean = false;

    nameInputControl: boolean = false;
    isNameAutoCompleteForm: boolean = false;

    wrapUpReasonCodes;
    associatedVals;
    relatedVals;

    openedRequest: ActiveRequest;

    ngOnInit(): void {

        this.store.select('channel').subscribe((val) => {
            let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            let type = openedRequest.type;
            this.wrapUpReasonCodes = val[type].agentStatus.wrapUpReasonCodes;
        });
        this.store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest.type == 'chat') {
                this.store.select('chats').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    this.associatedVals = val[index].callLog.associatevals;
                    this.relatedVals = val[index].callLog.relatevals;
                })
            }
            else if (this.openedRequest.type == 'email') {
                this.store.select('emails').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    this.associatedVals = val[index].callLog.associatevals;
                    this.relatedVals = val[index].callLog.relatevals;
                })
            }
            else if (this.openedRequest.type == 'voice') {
                this.store.select('voices').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    this.associatedVals = val[index].callLog.associatevals;
                    this.relatedVals = val[index].callLog.relatevals;
                })
            }
        })
    }

    toggleSetting() {
        this.setting_status = !this.setting_status;
    }

    confirm() {
        this.callbackFunction.emit('Confirm Wrapup');
    }
    closeConfirm() {
        this.callbackFunction.emit('Close Confirm');
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
        this.isRelatedtoAutoCompleteForm = !this.isRelatedtoAutoCompleteForm;
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
        this.isWrapupAutoCompleteForm = !this.isWrapupAutoCompleteForm;
    }
    showNameAutoComplete() {
        this.isNameAutoCompleteForm = !this.isNameAutoCompleteForm;
    }
    nameInputleave() {
        this.nameInputControl = false;
    }
    nameInputenter() {
        this.nameInputControl = true;
    }
    autoCompleteName(data) {
        this.name = data.data;
        this.name_currentId = data.id;
        this.isNameAutoCompleteForm = false;
    }
}
