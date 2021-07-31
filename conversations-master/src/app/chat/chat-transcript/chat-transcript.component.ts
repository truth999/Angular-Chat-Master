import { AfterViewChecked, ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { ActiveRequest } from '../../ngrx/models/active-request.model';
import { Chat } from '../../ngrx/models/chat.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';
import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';

@Component({
    selector: 'app-chat-transcript',
    templateUrl: './chat-transcript.component.html',
    styleUrls: ['./chat-transcript.component.scss']
})
export class ChatTranscriptComponent implements OnInit {

    show_insert_template: boolean = false;
    show_account_details: boolean = false;
    show_add_new_text: boolean = false;
    chat_hover_state = false;
    showSendButton: boolean = false;
    new_message: String = '';
    scrollcheck: boolean = false;
    currentChat: Chat;

    transcripts;

    show_alert: boolean = false;
    alert_type;
    alert_message;
    openedRequest: ActiveRequest;
    accountDetailsHeader: String;
    accountDetailsContent: String;
    accountDetailsIndex: number;
    imageTempUrl;

    quickCannedResponses = [];
    @ViewChild('chatArea') private chatArea: ElementRef;
    @ViewChild('FileSelectInputDialog') FileSelectInputDialog: ElementRef;
    constructor(private store: Store<AppState>) {
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            store.select('chats').subscribe(val => {
                let index = val.findIndex(element => element.callId === opendRequestData.callId)
                if (index >= 0) {
                    this.transcripts = val[index].chatTranscript;
                    this.currentChat = val[index];
                    // this.transcripts = this.transcripts.map(transcript => {
                    //     if(transcript != null) {
                    //         return {
                    //             message: transcript.message,
                    //             raisedBy: transcript.raisedBy,
                    //             senderId: transcript.senderId,
                    //             timestamp: transcript.timestamp.split('T').join(' ').split('.')[0]
                    //         }
                    //     }
                    // })
                }
            })
            this.scrollToBottom();
            this.scrollcheck = false;
        })

    }

    ngOnInit(): void {
        this.scrollToBottom();

    }

    ngAfterViewChecked() {
        if (this.scrollcheck == false) {
            this.scrollToBottom();
            this.scrollcheck = true;
        }

    }
    scrollToBottom() {
        try {
            this.chatArea.nativeElement.scrollTop = this.chatArea.nativeElement.scrollHeight;
        } catch (err) { }
    }

    handleAddNewText(action: any) {
        if (action == 'Open') {
            this.show_add_new_text = true;
        }
        else if (action == 'Close') {
            this.show_add_new_text = false;
        }
    }

    quickTextCannedResponseClick() {
        this.new_message = this.accountDetailsContent;
        this.show_insert_template = false;
        this.showSendButton = true;
    }

    quickActionCannedResponseClick(cannedResponse) { //add quick action canned response to chat transcript when click action canned response
        this.transcripts = [...this.transcripts, {
            senderId: this.currentChat.Name,
            display: cannedResponse.display,
            action: cannedResponse.action,
            type: cannedResponse.type,
            raisedBy: 'user'
        }]

        this.currentChat = { ...this.currentChat, chatTranscript: this.transcripts }

        this.store.dispatch(new UpdateChat({
            callId: this.currentChat.callId,
            chat: this.currentChat
        }))

        this.scrollcheck = false;

        this.changeQuickCannedResponses(); // change quick canned responses bases on recently used canned response.
    }

    showAccountDetailsTemplate(cannedResponse, index) {
        this.show_account_details = true;
        this.accountDetailsHeader = cannedResponse.name;
        this.accountDetailsContent = cannedResponse.text;
        this.accountDetailsIndex = index;
    }
    hideAccountDetailsTemplate() {
        this.show_account_details = false;
    }

    handleChatTemplate(action: any) {
        if (action == 'Open') {
            this.show_insert_template = !this.show_insert_template;
        }
        else if (action === 'Close') {
            this.show_insert_template = false;
        }
        else if (action == 'NEW TEXT') {
            this.show_insert_template = false;
            this.show_add_new_text = true;

        }
    }
    chatHover(action) {
        if (action == 'hover') {
            this.chat_hover_state = true;
        }
        else if ('leavehover') {
            this.chat_hover_state = false;
        }
    }
    closeAlert() {
        this.show_alert = false;
    }
    newMessageEvent(e) {
        if (this.new_message != '') {
            this.showSendButton = true;
        } else {
            this.showSendButton = false;
        }
    }
    insertTemplate(data) {
        if (data.type == 'TEXT') {
            this.new_message = data.template;
            this.show_insert_template = false;
            this.showSendButton = true;
        }
        else if (data.type == 'ACTION') {
            let actions = data.template;
            actions.map(action => {
                this.transcripts = [...this.transcripts, {
                    senderId: this.currentChat.Name,
                    display: action.display,
                    action: action.action,
                    type: action.type,
                    timestamp: this.getCurrentTimeStamp(),
                    raisedBy: 'user'
                }]

                this.currentChat = { ...this.currentChat, chatTranscript: this.transcripts }

                this.store.dispatch(new UpdateChat({
                    callId: this.currentChat.callId,
                    chat: this.currentChat
                }))
            })
            if (actions.length > 0) { this.show_insert_template = false; }
            this.scrollcheck = false;

            this.changeQuickCannedResponses(); // change quick canned responses bases on recently used canned response.
        }
        else if (data.type == 'CARDS') {
            let cards = data.template;
            cards.map(card => {
                this.transcripts = [...this.transcripts, {
                    senderId: this.currentChat.Name,
                    description: card.description,
                    price: card.price,
                    timestamp: this.getCurrentTimeStamp(),
                    raisedBy: 'user'
                }]

                this.currentChat = { ...this.currentChat, chatTranscript: this.transcripts }

                this.store.dispatch(new UpdateChat({
                    callId: this.currentChat.callId,
                    chat: this.currentChat
                }))
            })
            if (cards.length > 0) { this.show_insert_template = false; }
            this.scrollcheck = false;
        }

    }

    changeQuickCannedResponses() {
        //extract recently used canned text and actions from chat transcript
        this.quickCannedResponses = []
        let chatTranscripts = this.currentChat.chatTranscript;
        let countQuickTextResponse = 0;
        let countQuickActionResponse = 0;

        chatTranscripts.slice(0).reverse().map(transcript => {
            if (transcript.hasOwnProperty('message')) { // if this transcript is text chat
                this.currentChat.cannedResponse.availableTextResponses.map(textresponse => { //confirm chat conversation is canned Text Response
                    if (textresponse.text == transcript.message) { // if chat conversation is canned response text
                        let isInQuickTextCheck = 0;
                        this.quickCannedResponses.map(cannedResponse => {
                            if (cannedResponse.hasOwnProperty('name')) //if quick canned response is for text canned response
                                if (cannedResponse.name == textresponse.name) {
                                    isInQuickTextCheck = 1;
                                }
                        })
                        if (isInQuickTextCheck == 0 && countQuickTextResponse < 3) { //if this canned text response is not registered in quick canned texts list, add it.
                            this.quickCannedResponses = [...this.quickCannedResponses, {
                                name: textresponse.name,
                                text: textresponse.text,
                            }]
                            countQuickTextResponse++;
                        }
                    }
                })
            }
            else if (transcript.hasOwnProperty('action')) { //if this transcript is action
                let isInQuickActionCheck = 0;
                this.quickCannedResponses.map(cannedResponse => {
                    if (cannedResponse.hasOwnProperty('action')) //if quick canned response is for action canned response
                        if (cannedResponse.display == transcript.display) {
                            isInQuickActionCheck = 1;
                        }
                })
                if (isInQuickActionCheck == 0 && countQuickActionResponse < 3) {
                    this.quickCannedResponses = [...this.quickCannedResponses, {
                        display: transcript.display,
                        action: transcript.action,
                        type: transcript.type,
                    }]
                    countQuickActionResponse++;
                }
            }
        })
    }
    getCurrentTimeStamp() {
        let time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var day = time.getUTCDate();

        let hours = time.getHours();
        let minutes = time.getMinutes();
        let second = time.getSeconds();
        let formated_month = month >= 10 ? month : '0' + month;
        let formated_day = day >= 10 ? day : '0' + day;
        let formated_hours = hours >= 10 ? hours : '0' + hours;
        let formated_minutes = minutes >= 10 ? minutes : '0' + minutes;
        let formated_seconds = second >= 10 ? second : '0' + second;
        var strTime = year + '-' + formated_month + '-' + formated_day + ' ' + formated_hours + ':' + formated_minutes + ':' + formated_seconds;
        return strTime;
    }
    send() {
        this.transcripts = [...this.transcripts, {
            senderId: this.currentChat.Name,
            message: this.new_message,
            timestamp: this.getCurrentTimeStamp(),
            raisedBy: 'user'
        }]

        this.currentChat = { ...this.currentChat, chatTranscript: this.transcripts }

        this.store.dispatch(new UpdateChat({
            callId: this.currentChat.callId,
            chat: this.currentChat
        }))
        this.new_message = "";
        this.showSendButton = false;
        this.scrollcheck = false;

        this.changeQuickCannedResponses(); // change quick canned responses bases on recently used canned response.
    }
    showAttachmentSelector() {
        const e: HTMLElement = this.FileSelectInputDialog.nativeElement;
        e.click();
    }
    onFileChange(event) {
        //add multiple attachments when select files on file selector
        let attachments = [...event.target.files];
        attachments.map(attachment => {
            let type;
            let url;
            if (attachment.type.match(/image\/*/) == null) {
                type = 'data';
                this.transcripts = [...this.transcripts, {
                    senderId: this.currentChat.Name,
                    messageType: 'attachment',
                    name: attachment.name,
                    type: 'data',
                    path: '',
                    timestamp: this.getCurrentTimeStamp(),
                    raisedBy: 'user'
                }]
                this.currentChat = { ...this.currentChat, chatTranscript: this.transcripts }
                this.store.dispatch(new UpdateChat({
                    callId: this.currentChat.callId,
                    chat: this.currentChat
                }))
                this.scrollcheck = false;
            } else {
                type = 'image';
                var reader;
                reader = new FileReader();
                reader.readAsDataURL(attachment);
                reader.onload = (_event) => {
                    url = reader.result;
                    this.transcripts = [...this.transcripts, {
                        senderId: this.currentChat.Name,
                        messageType: 'attachment',
                        name: attachment.name,
                        type: 'image',
                        path: '',
                        url: url,
                        timestamp: this.getCurrentTimeStamp(),
                        raisedBy: 'user'
                    }]
                    this.currentChat = { ...this.currentChat, chatTranscript: this.transcripts }
                    this.store.dispatch(new UpdateChat({
                        callId: this.currentChat.callId,
                        chat: this.currentChat
                    }))
                    this.scrollcheck = false;
                }
            }
        })
        this.scrollcheck = false;
    }
}
