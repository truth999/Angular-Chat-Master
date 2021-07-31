import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActiveRequest } from '../../../ngrx/models/active-request.model';
import { Chat } from '../../../ngrx/models/chat.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/reducers/index.reducer';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';
import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';

@Component({
    selector: 'app-chat-template',
    templateUrl: './chat-template.component.html',
    styleUrls: ['./chat-template.component.scss']
})
export class ChatTemplateComponent implements OnInit {
    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    @Output() insertTemplate: EventEmitter<{ template: any, type: any }> = new EventEmitter();
    tabindex = 1;
    hover = 1;
    currentTextIndex = 0;
    currentActionIndex = 0;
    currentCardIndex = 0;
    textSearchText: string = "";
    actionSearchText: string = "";
    cardSearchText: string = "";
    newCannedHeader: string = "";
    newCannedContent: string = "";

    texts = [
        {
            'title': 'Thank You!',
            'content': 'Ut enim,\n\n Ad muip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
        },
        {
            'title': 'Welcome Back',
            'content': 'Dolar Sit,\n\n Ad minim veniam, quis nostrud exercitation ullamco modo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
        },
        {
            'title': 'End Chat Final Message',
            'content': 'Lobo Mono,\n\n x ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
        },
        {
            'title': 'Basic Question1',
            'content': 'Lorem Ipsum,\n\n Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
        },
        {
            'title': 'Basic Question2',
            'content': 'Exerciation Ullamco,\n\n  sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
        },
        {
            'title': 'Service Template',
            'content': 'Gettng mino,\n\n Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
        },
    ];

    actions = [
        {
            'title': 'Email Notification Bug',
            'buttons': [
                {
                    'name': 'Email Notification',
                },
                {
                    'name': 'Email',
                },
                {
                    'name': 'Email Notification Bug'
                }
            ],
        },
        {
            'title': 'Account Security',
            'buttons': [
                {
                    'name': 'Account',
                },
                {
                    'name': 'Account Security',
                },
                {
                    'name': 'Account Security Action'
                },
                {
                    'name': 'Account Security',
                },
                {
                    'name': 'Account Security Action'
                }
            ],
        },
        {
            'title': 'End Chat Final Message',
            'buttons': [
                {
                    'name': 'End Chat',
                },
                {
                    'name': 'End Chat Final Message',
                },
                {
                    'name': 'Chat Final Message'
                }
            ],
        },


    ];

    cards = [
        {
            'name': 'Excepteur Sint',
            'price': '75.08',
            'products': [
                {
                    'description': "Excepteur sint occaecat cupidatat non.",
                    'price': '75.08'
                },
                {
                    'description': "Excepteur sint occaecat cupidatat non.",
                    'price': '75.08'
                }
            ]
        },
        {
            'name': 'Lorem Ipsum',
            'price': '81.93',
            'products': [
                {
                    'description': "Lorem Ipsum occaecat cupidatat non.",
                    'price': '75.08'
                },
                {
                    'description': "Lorem Ipsum occaecat cupidatat non1.",
                    'price': '75.08'
                }
            ]
        },

    ];

    selectedActions = [];
    selectedActionNames = [];
    selectedCardIndexes = [];
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

    ngOnInit(): void {

    }

    CarouselHover() {
        this.hover = 2;
    }
    CarouselLeave() {
        this.hover = 1;
    }
    close() {
        this.callbackFunction.emit('Close');
    }
    newText() {
        this.callbackFunction.emit('NEW TEXT');
    }
    changeTab(index) {
        this.tabindex = index;
    }
    selectTextItem(index) {
        this.currentTextIndex = index;
    }
    selectActionItem(index) {
        this.currentActionIndex = index;
    }
    selectCardItem(index) {
        this.currentCardIndex = index;
    }
    selectCard(index) {
        if (!(this.selectedCardIndexes.includes(index)))
            this.selectedCardIndexes = [...this.selectedCardIndexes, index]
        else
            this.selectedCardIndexes = this.selectedCardIndexes.filter(cardIndex => cardIndex != index)
    }
    clickActionButton(clickedAction) {
        // if (this.selectedActionNames.includes(clickedAction.display)) {
        //     this.selectedActions = this.selectedActions.filter((action) => action.display != clickedAction.display)
        //     this.selectedActionNames = this.selectedActionNames.filter((actionName) => actionName != clickedAction.display)
        // }
        // else {
        //     this.selectedActions = [...this.selectedActions, {
        //         display: clickedAction.display,
        //         action: clickedAction.action,
        //         type: clickedAction.type,
        //     }]
        //     this.selectedActionNames = [...this.selectedActionNames, clickedAction.display];
        // }

        this.callbackFunction.emit('Close');
    }
    insert() {
        let template, type;
        if (this.tabindex == 1) {
            template = this.currentChat.cannedResponse.availableTextResponses[this.currentTextIndex].text;
            type = 'TEXT';
            this.insertTemplate.emit({ template, type });
        }
        else if (this.tabindex == 2) {
            type = 'ACTION';
            // let template = this.selectedActions;
            let template = this.currentChat.cannedResponse.availableActionResponses[this.currentActionIndex].attachment.message;
            this.insertTemplate.emit({ template, type });
        }
        else if (this.tabindex == 3) {
            type = 'CARDS'
            let selectedCard = []
            this.selectedCardIndexes.map(selectedCardIndex => {
                selectedCard = [...selectedCard, this.cards[this.currentCardIndex].products[selectedCardIndex]]
            })

            let template = selectedCard
            this.insertTemplate.emit({ template, type })
        }
    }
}
