import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../../ngrx/models/chat.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { Email } from 'src/app/ngrx/models/email.model';
import { Voice } from 'src/app/ngrx/models/voice.model';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-chat-history',
    templateUrl: './chat-history.component.html',
    styleUrls: ['./chat-history.component.scss']
})

export class ChatHistoryComponent implements OnInit {
    editInteraction_page: boolean = false;
    viewTranscript_page: boolean = false;
    filterValues: Filter;
    @Input() type: string = 'normal';

    histories = [
        {
            'historytitle': 'Payment Issue, New Account',
            'date': 'Jun 13, 2020',
            'passeddays': 5,
            'totaltime': 33,
            'historyfields': [
                {
                    'type': 'voice',
                    'ticketno': 41125,
                    'activity': 'Connected to an agent',
                    'agent': '5009, Joseph',
                    'notenumber': 3,
                    'intent': 'Payment Issue',
                    'duration': '2:45PM - 2:50PM, 5 Minutes',
                    'status': 'Escalated To Voice Call: 41126',
                    'notes': [
                        {
                            'user': '5009, Joseph (you)',
                            'date': 'Jun 20, 2020 | 2:45 PM',
                            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.'
                        },
                        {
                            'user': '5009, Joseph (you)',
                            'date': 'Jun 20, 2020 | 2:45 PM',
                            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.'
                        },
                        {
                            'user': '5009, Joseph (you)',
                            'date': 'Jun 20, 2020 | 2:45 PM',
                            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.'
                        },
                    ]
                },
                {
                    'type': 'email',
                    'ticketno': 41125,
                    'activity': 'Connected to an agent',
                    'agent': '5009, Joseph',
                    'notenumber': 3,
                    'intent': 'Payment Issue',
                    'duration': '2:45PM - 2:50PM, 5 Minutes',
                    'status': 'Escalated To Voice Call: 41126',
                    'notes': [
                        {
                            'user': '5009, Joseph (you)',
                            'date': 'Jun 20, 2020 | 2:45 PM',
                            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.'
                        },
                        {
                            'user': '5009, Joseph (you)',
                            'date': 'Jun 20, 2020 | 2:45 PM',
                            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.'
                        },
                        {
                            'user': '5009, Joseph (you)',
                            'date': 'Jun 20, 2020 | 2:45 PM',
                            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.'
                        },
                    ]
                },
            ]
        },
    ];

    openedRequest: ActiveRequest;
    currentChat: Chat;
    currentEmail: Email;
    currentVoice: Voice;

    activityHistories;

    constructor(private store: Store<AppState>) {
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest.type == 'chat') {
                store.select('chats').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if(index >= 0) {
                        this.currentChat = val[index];
                        this.activityHistories = val[index].activityHistory;
                    }
                })
            }
            else if (this.openedRequest.type == 'email') {
                store.select('emails').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if(index >= 0) {
                        this.currentEmail = val[index];
                        this.activityHistories = val[index].activityHistory;
                    }
                })
            }
            else if (this.openedRequest.type == 'voice') {
                store.select('voices').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if(index >= 0) {
                        this.currentVoice = val[index];
                        this.activityHistories = val[index].activityHistory;
                    }
                })
            }
        })
    }

    ngOnInit(): void {
        this.filterValues = {
            time: {
                value: 'today'
            },
            channel: {
                whatsapp: '',
                facebookMessenger: '',
                sms: '',
                webchat: '',
                skype: '',
                msTeams: '',
                hangOut: '',
            },
            type: {
                chat: '',
                voiceCall: '',
                email: '',
            }
        }
    }

    handleChathistory(action: any) {
        if (action == 'Edit Interaction') {
            this.editInteraction_page = true;

        }
        else if (action == 'View Transcript') {
            this.viewTranscript_page = true;
        }

    }
    handleEditHistory(action: any) {
        if (action == 'Close') {
            this.editInteraction_page = false;
        }
    }
    handleTranscriptPage(action: any) {
        if (action == 'Close') {
            this.viewTranscript_page = false;
        }
    }
    changeFilter(filterValues) {
        this.filterValues = filterValues;
    }
}
export interface Filter {
    time: {
        value: string;
    },
    channel: {
        whatsapp: string;
        facebookMessenger: string;
        sms: string;
        webchat: string;
        skype: string;
        msTeams: string;
        hangOut: string;
    },
    type: {
        chat: string;
        voiceCall: string;
        email: string;
    }
}