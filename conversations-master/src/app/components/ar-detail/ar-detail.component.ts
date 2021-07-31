import { Component, OnInit, Input } from '@angular/core';
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

@Component({
    selector: 'app-ar-detail',
    templateUrl: './ar-detail.component.html',
    styleUrls: ['./ar-detail.component.scss']
})
export class ArDetailComponent implements OnInit {

    @Input() name: string;
    @Input() id: String = "+ 1-402-541-7564";

    customer_intents;
    topFourIntents;
    openedRequest: ActiveRequest;
    currentChat: Chat;
    currentEmail: Email;
    currentVoice: Voice;
    intentMenuClickCheck: boolean = false;
    intentMenuClickIndex;
    filterType: String;
    constructor(private router: Router, private store: Store<AppState>) {
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest.type == 'chat') {
                store.select('chats').subscribe(val => {
                    let index = val.findIndex(element => element.callId === this.openedRequest.callId)
                    if (index >= 0) {
                        this.currentChat = val[index];
                        this.customer_intents = this.currentChat.customerIntents;
                        this.topFourIntents = this.customer_intents.filter((intent, index) => (0 <= index) && index < 4)
                        this.filterType = this.currentChat.filtertype;
                    }
                })
            }
            else if (this.openedRequest.type == 'email') {
                store.select('emails').subscribe(val => {
                    let index = val.findIndex(element => element.callId === this.openedRequest.callId)
                    if (index >= 0) {
                        this.currentEmail = val[index];
                        this.customer_intents = this.currentEmail.customerIntents;
                        this.topFourIntents = this.customer_intents.filter((intent, index) => (0 <= index) && index < 4)
                        this.filterType = this.currentEmail.filtertype;
                        this.id = this.currentEmail.id;
                    }

                })
            }

            else if (this.openedRequest.type == 'voice') {
                store.select('voices').subscribe(val => {
                    let index = val.findIndex(element => element.callId === this.openedRequest.callId)
                    if (index >= 0) {
                        this.currentVoice = val[index];
                        this.customer_intents = this.currentVoice.customerIntents;
                        this.topFourIntents = this.customer_intents.filter((intent, index) => (0 <= index) && index < 4)
                        this.filterType = this.currentVoice.filtertype;
                    }
                })
            }
        })
    }

    ngOnInit(): void {
    }
    showIntent() {
        this.router.navigate(["home/intent"], { skipLocationChange: true });
    }
    createIntent() {
        this.router.navigate(["home/new-intent"], { skipLocationChange: true });
    }
}
