import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActiveRequest } from '../../../ngrx/models/active-request.model';
import { Chat } from '../../../ngrx/models/chat.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/reducers/index.reducer';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';
import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';

@Component({
    selector: 'app-new-canned-response',
    templateUrl: './new-canned-response.component.html',
    styleUrls: ['./new-canned-response.component.scss']
})
export class NewCannedResponseComponent implements OnInit {
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    display_text: string;
    textHeader: String;
    textContent: string = '';
    lengthContent: number = 0;
    timeStamp: Number = 1547140040709;
    skill: String = '12002000001';
    isHeaderActive: boolean = false;

    currentChat: Chat;
    constructor(private store: Store<AppState>) {
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            store.select('chats').subscribe(val => {
                let index = val.findIndex(element => element.callId === opendRequestData.callId)
                // console.log(index);
                if (index >= 0) {
                    this.currentChat = val[index];
                }
            })
        })
    }

    close() {
        this.callbackFunction.emit('Close');
    }
    ngOnInit(): void {
    }

    addNewCannedText() {
        let availableTextResponses = [...this.currentChat.cannedResponse.availableTextResponses, {
            skill: this.skill,
            name: this.textHeader,
            text: this.textContent,
            type: 'agent',
            timestamp: this.timeStamp,
        }]
        let cannedResponse = { ...this.currentChat.cannedResponse, availableTextResponses: availableTextResponses }
        // this.currentChat.cannedResponse.availableTextResponses
        this.currentChat = { ...this.currentChat, cannedResponse: cannedResponse }
        this.store.dispatch(new UpdateChat({
            callId: this.currentChat.callId,
            chat: this.currentChat
        }))
        this.callbackFunction.emit('Close');
    }
    textContentChange() {
        this.lengthContent = this.textContent.length;
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
