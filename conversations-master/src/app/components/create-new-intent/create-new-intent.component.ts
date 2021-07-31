import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from '../../ngrx/models/chat.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';
// import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { Email } from 'src/app/ngrx/models/email.model';
import { Voice } from 'src/app/ngrx/models/voice.model';
import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';
import { UpdateEmail } from 'src/app/ngrx/actions/email.actions';
import { UpdateVoice } from 'src/app/ngrx/actions/voice.actions';

@Component({
    selector: 'app-create-new-intent',
    templateUrl: './create-new-intent.component.html',
    styleUrls: ['./create-new-intent.component.scss']
})
export class CreateNewIntentComponent implements OnInit {

    aiName: String = '';
    friendlyName: String = '';
    comment: String = '';
    customer_intents;
    openedRequest: ActiveRequest;
    currentChat: Chat;
    currentEmail: Email;
    currentVoice: Voice;
    intentMenuClickCheck: boolean = false;
    intentMenuClickIndex;

    constructor(private router: Router, private store: Store<AppState>) {
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest.type == 'chat') {
                store.select('chats').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if(index >= 0) {
                        this.currentChat = val[index];
                        this.customer_intents = this.currentChat.customerIntents;
                    }
                })
            }
            else if (this.openedRequest.type == 'email') {
                store.select('emails').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if(index >= 0) {
                        this.currentEmail = val[index];
                        this.customer_intents = this.currentEmail.customerIntents;
                    }
                })
            }
            else if (this.openedRequest.type == 'voice') {
                store.select('voices').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if(index >= 0) {
                        this.currentVoice = val[index];
                        this.customer_intents = this.currentVoice.customerIntents;
                    }
                })
            }
        })
    }

    ngOnInit(): void {
    }

    close() {
        this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });
    }
    addIntent() {
        let time = new Date();
        let currentTime = time.getUTCFullYear() + "-" + (time.getUTCMonth() + 1) + "-" + time.getUTCDate() + "T" + time.getUTCHours() + ":" + time.getUTCMinutes() + ":" + time.getUTCSeconds() + '.' + time.getMilliseconds + 'Z';
        let dateStr = "Fri Apr 20 2020 00:00:00 GMT+0530 (India Standard Time)"
        // console.log()
        if (this.openedRequest.type == 'chat') {

            let customerIntents = [
                {
                    aiName: this.aiName,
                    lastUpdate: time.getUTCDate(),
                    customerId: this.currentChat.customerInfo.id,
                    name: this.aiName,
                    lastComment: this.comment,
                    id: this.currentChat.conversationId,
                    lastActor: {
                        name: this.currentChat.Name,
                        id: this.currentChat.customerInfo.id,
                    },
                    friendlyName: this.friendlyName,
                    state: 'Open',
                    relevance: new Date().toString(),
                    createddatetime: currentTime,
                }, ...this.customer_intents
            ];
            let newChat = { ...this.currentChat, customerIntents: customerIntents };

            this.store.dispatch(new UpdateChat({
                callId: this.currentChat.callId,
                chat: newChat
            }))
        }
        else if (this.openedRequest.type == 'email') {
            let time = new Date();
            let customerIntents = [
                {
                    aiName: this.aiName,
                    lastUpdate: time.getUTCDate(),
                    customerId: this.currentEmail.customerInfo.id,
                    name: this.aiName,
                    lastComment: this.comment,
                    id: 'siva_1566410954545',
                    lastActor: {
                        name: this.currentEmail.Name,
                        id: this.currentEmail.customerInfo.id,
                    },
                    friendlyName: this.friendlyName,
                    state: 'Open',
                    relevance: new Date().toString(),
                    createddatetime: currentTime,
                }, ...this.customer_intents
            ];
            let newEmail = { ...this.currentEmail, customerIntents: customerIntents };
            this.store.dispatch(new UpdateEmail({
                callId: this.currentEmail.callId,
                email: newEmail,
            }))
        }
        else if (this.openedRequest.type == 'voice') {
            let time = new Date();
            let customerIntents = [
                {
                    aiName: this.aiName,
                    lastUpdate: time.getUTCDate(),
                    customerId: this.currentVoice.customerInfo.id,
                    name: this.aiName,
                    lastComment: this.comment,
                    id: 'siva_1566410954545',
                    lastActor: {
                        name: this.currentVoice.Name,
                        id: this.currentVoice.customerInfo.id,
                    },
                    friendlyName: this.friendlyName,
                    state: 'Open',
                    relevance: new Date().toString(),
                    createddatetime: currentTime,
                },
                ...this.customer_intents
            ];
            let newVoice = { ...this.currentVoice, customerIntents: customerIntents };
            this.store.dispatch(new UpdateVoice({
                callId: this.currentVoice.callId,
                voice: newVoice,
            }))
        }

        this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });
    }
}
