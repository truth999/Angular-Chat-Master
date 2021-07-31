import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Chat } from '../../ngrx/models/chat.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';
// import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { Email } from 'src/app/ngrx/models/email.model';
import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';
import { UpdateEmail } from 'src/app/ngrx/actions/email.actions';
import { Voice } from 'src/app/ngrx/models/voice.model';
import { UpdateVoice } from 'src/app/ngrx/actions/voice.actions';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-intent',
    templateUrl: './intent.component.html',
    styleUrls: ['./intent.component.scss']
})
export class IntentComponent implements OnInit {
    addIntentSearchText: string = "";
    showSearchField: boolean = false;
    hoverSearchFieldControl: boolean = false;
    isShowCommentTemplate: boolean = false;
    curAddCommentIndex;
    isShowSearchTypeMenu: boolean = false;
    currentSearchType = "add";
    plusIntents = [
        {
            'name': 'Login Issue',
        },
        {
            'name': 'Unauthorized Payment',
        },
        {
            'name': 'Frozen Login Page',
        },
    ];

    intents = [
        {
            'name': 'Frozen Account',
        },
        {
            'name': 'Frozen Login Page',
        },
        {
            'name': 'Frozen Payment'
        },
        {
            'name': 'Better Trade',
        },
        {
            'name': 'Consultant',
        },
        {
            'name': 'Payment Issue',
        }
    ]

    customer_intents;
    customers = [];
    openedRequest: ActiveRequest;
    currentChat: Chat;
    currentEmail: Email;
    currentVoice: Voice;
    intentMenuClickCheck: boolean = false;
    intentMenuClickIndex;
    masterIntentsList;
    hoverSearchInput: boolean = false;
    hoverTypeMenu: boolean = false;
    hoverTypeButton: boolean = false;
    searchBoxPlaceholder = "Add an intent";
    constructor(private router: Router, private store: Store<AppState>, private renderer: Renderer2) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hoverTypeButton == false && this.hoverTypeMenu == false) {
                this.isShowSearchTypeMenu = false;
                // this.isAssociatedAutoComplete = false;
            }
            if (this.hoverSearchFieldControl == false && this.hoverSearchInput == false) {
                this.showSearchField = false;
            }
        });

        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest.type == 'chat') {
                store.select('chats').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if(index >= 0) {
                        this.currentChat = val[index];
                        this.customer_intents = this.currentChat.customerIntents;
                        this.masterIntentsList = this.currentChat.masterIntentsList;
                    }  
                })
            }
            else if (this.openedRequest.type == 'email') {
                store.select('emails').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if(index >= 0) {
                        this.currentEmail = val[index];
                        this.customer_intents = this.currentEmail.customerIntents;
                        this.masterIntentsList = this.currentEmail.masterIntentsList;
                    }
                })
            }
            else if (this.openedRequest.type == 'voice') {
                store.select('voices').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if(index >= 0) {
                        this.currentVoice = val[index];
                        this.customer_intents = this.currentVoice.customerIntents;
                        this.masterIntentsList = this.currentVoice.masterIntentsList;
                    }
                })
            }
            this.customers = [];
            this.customer_intents.map(intent => {
                if (!(this.customers.includes(intent.customerId))) {
                    this.customers = [...this.customers, intent.customerId]
                }
            })

        })
    }
    ngOnInit(): void {
    }

    close() {
        this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });
    }

    resolveItem(index) {
        if (this.openedRequest.type == 'chat') {
            let intent = { ...this.customer_intents[index], state: 'Open' };
            let customerIntents = this.customer_intents.map((item, i) => i == index ? intent : item);
            let newChat = { ...this.currentChat, customerIntents: customerIntents };
            this.store.dispatch(new UpdateChat({
                callId: this.currentChat.callId,
                chat: newChat
            }))
            this.intentMenuClickCheck = false;
        }
        else if (this.openedRequest.type == 'email') {
            let intent = { ...this.customer_intents[index], state: 'Open' };
            let customerIntents = this.customer_intents.map((item, i) => i == index ? intent : item);
            let newEmail = { ...this.currentEmail, customerIntents: customerIntents };
            this.store.dispatch(new UpdateEmail({
                callId: this.currentEmail.callId,
                email: newEmail
            }))
            this.intentMenuClickCheck = false;
        }
        else if (this.openedRequest.type == 'voice') {
            let intent = { ...this.customer_intents[index], state: 'Open' };
            let customerIntents = this.customer_intents.map((item, i) => i == index ? intent : item);
            let newVoice = { ...this.currentVoice, customerIntents: customerIntents };
            this.store.dispatch(new UpdateVoice({
                callId: this.currentVoice.callId,
                voice: newVoice
            }))
            this.intentMenuClickCheck = false;
        }
    }
    unresolveItem(index) {
        if (this.openedRequest.type == 'chat') {
            let intent = { ...this.customer_intents[index], state: 'Closed' };
            let customerIntents = this.customer_intents.map((item, i) => i == index ? intent : item);
            let newChat = { ...this.currentChat, customerIntents: customerIntents };
            this.store.dispatch(new UpdateChat({
                callId: this.currentChat.callId,
                chat: newChat
            }))
            this.intentMenuClickCheck = false;
        }
        else if (this.openedRequest.type == 'email') {
            let intent = { ...this.customer_intents[index], state: 'Closed' };
            let customerIntents = this.customer_intents.map((item, i) => i == index ? intent : item);
            let newEmail = { ...this.currentEmail, customerIntents: customerIntents };
            this.store.dispatch(new UpdateEmail({
                callId: this.currentEmail.callId,
                email: newEmail
            }))
            this.intentMenuClickCheck = false;
        }
        else if (this.openedRequest.type == 'voice') {
            let intent = { ...this.customer_intents[index], state: 'Closed' };
            let customerIntents = this.customer_intents.map((item, i) => i == index ? intent : item);
            let newVoice = { ...this.currentVoice, customerIntents: customerIntents };
            this.store.dispatch(new UpdateVoice({
                callId: this.currentVoice.callId,
                voice: newVoice
            }))
            this.intentMenuClickCheck = false;
        }
    }
    toggleMenu(index) {
        // this.customerIntents[index].clickCheck = !this.customerIntents[index].clickCheck;
        this.intentMenuClickCheck = !this.intentMenuClickCheck;
        this.intentMenuClickIndex = index;
    }


    showSearchTextField() {
        this.showSearchField = true;
    }
    hideSearchTextField() {
        if (this.hoverSearchFieldControl == false)
            this.showSearchField = false;
    }
    addNewIntet() {
        this.router.navigate(["home/new-intent"], { skipLocationChange: true });
    }
    newIntent(intent) {
        let time = new Date();

        this.showSearchField = false;
        if (this.openedRequest.type == 'chat') {
            let customerIntents = [{
                aiName: intent.aiName,
                lastUpdate: time.getUTCDate(),
                customerId: this.currentChat.Name,
                name: intent.name,
                lastComment: '',
                id: this.currentChat.id,
                state: 'Open',
                lastActor: {
                    name: this.currentChat.Name,
                    id: this.currentChat.id,
                },
                friendlyName: intent.friendlyName,
                relevance: time.getUTCDate(),
            },
            ...this.customer_intents,
            ]
            let newChat = { ...this.currentChat, customerIntents: customerIntents };
            this.store.dispatch(new UpdateChat({
                callId: this.currentChat.callId,
                chat: newChat
            }))
        }
        else if (this.openedRequest.type == 'email') {
            let customerIntents = [{
                aiName: intent.aiName,
                lastUpdate: time.getUTCDate(),
                customerId: this.currentEmail.Name,
                name: intent.name,
                lastComment: '',
                id: this.currentEmail.id,
                state: 'Open',
                lastActor: {
                    name: this.currentEmail.Name,
                    id: this.currentEmail.id,
                },
                friendlyName: intent.friendlyName,
                relevance: time.getUTCDate(),
            },
            ...this.customer_intents
            ]
            let newEmail = { ...this.currentEmail, customerIntents: customerIntents };
            this.store.dispatch(new UpdateEmail({
                callId: this.currentEmail.callId,
                email: newEmail
            }))
        }
        else if (this.openedRequest.type == 'voice') {
            let customerIntents = [{
                aiName: intent.aiName,
                lastUpdate: time.getUTCDate(),
                customerId: this.currentVoice.Name,
                name: intent.name,
                lastComment: '',
                id: this.currentVoice.id,
                state: 'Open',
                lastActor: {
                    name: this.currentVoice.Name,
                    id: this.currentVoice.id,
                },
                friendlyName: intent.friendlyName,
                relevance: time.getUTCDate(),
            },
            ...this.customer_intents
            ]
            let newVoice = { ...this.currentVoice, customerIntents: customerIntents };
            this.store.dispatch(new UpdateVoice({
                callId: this.currentVoice.callId,
                voice: newVoice
            }))
        }
    }

    showSearchTypeMenu() {
        this.isShowSearchTypeMenu = !this.isShowSearchTypeMenu;
        // console.log(this.isShowSearchTypeMenu);
    }
    changeSearchType(action) {
        this.currentSearchType = action;
        if (action == 'search') {
            this.searchBoxPlaceholder = "Search customer"
        }
        else {
            this.searchBoxPlaceholder = "Add an intent"
        }
        this.isShowSearchTypeMenu = false;
    }

    searchTextChangeEvent(event) {
        if (this.currentSearchType == 'search') {
            this.customers = [];
            this.customer_intents.map(intent => {
                if (intent.customerId.toLowerCase().includes(this.addIntentSearchText.toLowerCase()))
                    if (!(this.customers.includes(intent.customerId))) {
                        this.customers = [...this.customers, intent.customerId]
                    }
            })
        }
    }

    hoverInTypeMenu() {
        this.hoverTypeMenu = true;
    }

    hoverOutTypeMenu() {
        this.hoverTypeMenu = false;
    }

    hoverInTypeButton() {
        this.hoverTypeButton = true;
    }
    hoverOutTypeButton() {
        this.hoverTypeButton = false;
    }

    hoverInSearchField() {
        this.hoverSearchFieldControl = true;
    }
    hoverOutSearchField() {
        this.hoverSearchFieldControl = false;
    }

    hoverInSearchInput() {
        this.hoverSearchInput = true;
    }

    hoverOutSearchInput() {
        this.hoverSearchInput = false;
    }

    addComment(index) {
        // alert('abc');
        this.isShowCommentTemplate = true;
        this.curAddCommentIndex = index;
    }

    handleCommentText(data) {
        if (data.type != 'Cancel') {
            let index = this.curAddCommentIndex;
            if (this.openedRequest.type == 'chat') {
                let intent = { ...this.customer_intents[index], lastComment: data.text };
                let customerIntents = this.customer_intents.map((item, i) => i == index ? intent : item);
                let newChat = { ...this.currentChat, customerIntents: customerIntents };
                this.store.dispatch(new UpdateChat({
                    callId: this.currentChat.callId,
                    chat: newChat
                }))
            }
            else if (this.openedRequest.type == 'email') {
                let intent = { ...this.customer_intents[index], lastComment: data.text };
                let customerIntents = this.customer_intents.map((item, i) => i == index ? intent : item);
                let newEmail = { ...this.currentEmail, customerIntents: customerIntents };
                this.store.dispatch(new UpdateEmail({
                    callId: this.currentEmail.callId,
                    email: newEmail
                }))
            }
            else if (this.openedRequest.type == 'voice') {
                let intent = { ...this.customer_intents[index], lastComment: data.text };
                let customerIntents = this.customer_intents.map((item, i) => i == index ? intent : item);
                let newVoice = { ...this.currentVoice, customerIntents: customerIntents };
                this.store.dispatch(new UpdateVoice({
                    callId: this.currentVoice.callId,
                    voice: newVoice
                }))
            }
        }
        this.isShowCommentTemplate = false;
    }
}
