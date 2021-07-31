import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
'@angular/core';
import { Chat } from '../../ngrx/models/chat.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { Email } from 'src/app/ngrx/models/email.model';
import { Voice } from 'src/app/ngrx/models/voice.model';
import { AddActiveRequest, ClearActiveRequests } from 'src/app/ngrx/actions/active-request.actions';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';
import { ThemeService } from 'ng2-charts';
import { timer, Subscription } from "rxjs";

@Component({
    selector: 'app-chat-info',
    templateUrl: './chat-info.component.html',
    styleUrls: ['./chat-info.component.scss']
})

export class ChatInfoComponent implements OnInit {
    isAutoCompleteForm: boolean = false;
    isAssociatedAutoComplete: boolean = false;
    extension: String;

    associated_to: String = '';


    linked_to: String = '';
    linked_to_currentId: number;
    associated_to_currentId: number;
    name_currentId: number;
    currentChat: Chat;
    currentEmail: Email;
    currentVoice: Voice;
    name: String;
    drop_name: String = '';
    state: String;
    channel: String;
    duration: String;
    ani: String = '';
    uui: String = '';
    skill: String = '';
    dnis: String = '';
    ucid: String = '';
    dnis_name = '';

    isNameAutoComplete: boolean = false;
    autocompleteForm_control: boolean = false;
    linkedtoInput_control: boolean = false;
    associatedtoInput_control: boolean = false;
    nameInput_control: boolean = false;
    openedRequest: ActiveRequest;
    displayData;
    activeRequests: ActiveRequest[];

    countUp: Subscription;

    constructor(private renderer: Renderer2, private store: Store<AppState>) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.linkedtoInput_control != true && this.autocompleteForm_control == false) {
                this.isAutoCompleteForm = false;
            }
            if (this.associatedtoInput_control != true && this.autocompleteForm_control == false) {
                this.isAssociatedAutoComplete = false;
            }
            if (this.nameInput_control != true && this.autocompleteForm_control == false) {
                this.isNameAutoComplete = false;
            }
        });
        store.select('activeRequests').subscribe(val => { this.activeRequests = val; });
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest.type == 'chat') {
                store.select('chats').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if (index >= 0) {
                        this.currentChat = val[index];
                        this.name = this.currentChat.Name;
                        this.channel = 'Chat'
                        this.state = this.currentChat.callType
                        this.displayData = this.currentChat.displayData;
                    }
                })
            }
            else if (this.openedRequest.type == 'email') {
                store.select('emails').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if (index >= 0) {
                        this.currentEmail = val[index];
                        this.name = this.currentEmail.Name;
                        this.channel = 'Email'
                        this.state = this.currentEmail.callType
                        this.displayData = this.currentEmail.displayData;
                    }

                })
            }
            else if (this.openedRequest.type == 'voice') {
                store.select('voices').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if (index >= 0) {
                        this.currentVoice = val[index];
                        this.name = this.currentVoice.Name;
                        this.channel = 'Voice'
                        this.state = this.currentVoice.callType
                        this.displayData = this.currentVoice.displayData;
                    }
                })
            }
            this.linked_to = '';
            this.activeRequests.map((tab, index) => {
                if (tab.callId == this.openedRequest.linkedTo) {
                    this.linked_to = tab.name + '(' + tab.type + ')';
                }
            })

            this.duration = this.displayData.find(element => element.name == 'Duration').value;
            this.ani = this.displayData.find(element => element.name == 'ani').value;
            this.uui = this.displayData.find(element => element.name == 'uui').value;
            this.skill = this.displayData.find(element => element.name == 'skill').value;
            this.dnis = this.displayData.find(element => element.name == 'dnis').value;
            this.ucid = this.displayData.find(element => element.name == 'ucid').value;
            this.dnis_name = this.displayData.find(element => element.name == 'dnis_name').value;
        })

    }

    ngOnInit(): void {
        this.countUp = timer(0, 1000).subscribe(() => this.countupTimerDisplayData());
    }

    countupTimerDisplayData() {
        this.displayData.map((item, index) => {
            let increasedValue = parseInt(item.value) + 1;
            if (item.type == 'timer') {
                let updatedItem = {
                    name: item.name,
                    value: increasedValue,
                    type: item.type
                };
                this.displayData = [...this.displayData.slice(0, index), updatedItem, ...this.displayData.slice(index + 1)]
            }
        })
    }

    showAutoCompleteForm() {
        this.isAutoCompleteForm = !this.isAutoCompleteForm;
    }
    showAssociatedAutoCompleteForm() {
        this.isAssociatedAutoComplete = !this.isAssociatedAutoComplete;
    }
    showNameAutoCompleteForm() {
        this.isNameAutoComplete = !this.isNameAutoComplete;
    }

    autoCompleteLinkedTo(data) {
        this.linked_to = data.data;
        this.linked_to_currentId = data.id;
        this.isAutoCompleteForm = false;

        //Manual Link
        let tempData = this.activeRequests;
        let current_index;
        this.activeRequests.map((tab, index) => {
            if (tab.callId == this.openedRequest.callId) {
                current_index = index;
                let updatedTab = tab;
                updatedTab = { ...updatedTab, linkedTo: data.id }
                tempData = tempData.filter(request => request.callId != updatedTab.callId)
                tempData.splice(index, 0, updatedTab);
            }
        })
        this.activeRequests.map((tab, index) => {
            if (tab.callId == data.id) {
                tempData = tempData.filter(request => request.callId != data.id)
                if (index < current_index) {
                    tempData.splice(current_index - 1, 0, tab);
                }
                else {
                    tempData.splice(current_index, 0, tab);
                }
                localStorage.setItem('openedRequest', JSON.stringify(tab));

            }
        })

        this.store.dispatch(new ClearActiveRequests());
        for (var i = 0; i < tempData.length; i++) {
            this.store.dispatch(new AddActiveRequest(tempData[i]))
        }
        this.store.dispatch(new ChangeOpenedRequest(this.openedRequest.callId));
    }

    autoCompleteAssociatedTo(data) {
        this.associated_to = data.data;
        this.associated_to_currentId = data.id;
        this.isAssociatedAutoComplete = false;
    }

    autoCompleteName(data) {
        this.drop_name = data.data;
        this.name_currentId = data.id;
        this.isNameAutoComplete = false;
    }

    autocompleteFormleave() {
        this.autocompleteForm_control = false;
    }
    autocompleteFormenter() {
        this.autocompleteForm_control = true;
    }
    linkedtoInputleave() {
        this.linkedtoInput_control = false;
    }
    linkedtoInputenter() {
        this.linkedtoInput_control = true;
    }
    associatedtoInputleave() {
        this.associatedtoInput_control = false;
    }
    associatedtoInputenter() {
        this.associatedtoInput_control = true;
    }
    nameInputleave() {
        this.nameInput_control = false;
    }
    nameInputenter() {
        this.nameInput_control = true;
    }
}
