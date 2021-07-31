import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { Chat } from '../../ngrx/models/chat.model';
import { Email } from '../../ngrx/models/email.model';
import { Voice } from '../../ngrx/models/voice.model';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { timer, Subscription } from "rxjs";

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
    totalIntents = []

    openArDetail = false;
    length = 0;
    chats: Chat[] = [];
    emails: Email[] = [];
    voices: Voice[] = [];
    activeRequests: ActiveRequest[];
    chatSkills = [];
    emailSkills = [];
    voiceSkills = [];
    Queues = [];

    constructor(private store: Store<AppState>) {
        store.select('openArDetail').subscribe(val => { this.openArDetail = val.visible });

        store.select('activeRequests').subscribe(opendRequestData => {
            this.totalIntents = [];
            store.select('chats').subscribe(val => {
                this.chats = val;
                this.countTotalIntents();
            })
            store.select('emails').subscribe(val => {
                this.emails = val;
                this.countTotalIntents();
            })
            store.select('voices').subscribe(val => {
                this.voices = val;
                this.countTotalIntents();
            })

        });

        this.changeQueueData();

    }

    countTotalIntents() {
        this.totalIntents = [];
        this.chatSkills = [];
        this.emailSkills = [];
        this.voiceSkills = [];
        // count all intents of all chats, emails, voices and save to totalIntents state && get skill names for chaat, voice, email.
        this.chats.map((chat, index) => { //for chats
            //add new intent to total intents if it is not registered to total intents already or count up count of intent if it is already registered.
            if (chat.customerIntents != null) {
                chat.customerIntents.map(customerIntent => {
                    let isRegistered = 0;
                    this.totalIntents.map((intent, index) => {
                        if (intent.name == customerIntent.aiName) {
                            isRegistered = 1;
                            this.totalIntents = [...this.totalIntents.slice(0, index), {
                                name: this.totalIntents[index].name,
                                count: this.totalIntents[index].count + 1,
                            }, ...this.totalIntents.slice(index + 1)]
                        }
                    })
                    if (isRegistered == 0) {
                        this.totalIntents = [...this.totalIntents, {
                            name: customerIntent.aiName,
                            count: 1,
                        }]
                    }
                })
            }
            //add skill names for chat if it is in top 4
            if (index >= (this.chats.length - 4)) {
                let skillName;
                if (chat.displayData != null) {
                    chat.displayData.map(data => {
                        if (data.name == 'skill_name') {
                            skillName = data.value;
                        }
                    })
                    if (skillName != '')
                        this.chatSkills = [...this.chatSkills, skillName];
                }
            }
        })
        this.emails.map((email, index) => { //for emails
            //add new intent to total intents if it is not registered to total intents already or count up count of intent if it is already registered.
            if (email.customerIntents != null) {
                email.customerIntents.map(customerIntent => {
                    let isRegistered = 0;
                    this.totalIntents.map((intent, index) => {
                        if (intent.name == customerIntent.aiName) {
                            isRegistered = 1;
                            this.totalIntents = [...this.totalIntents.slice(0, index), {
                                name: this.totalIntents[index].name,
                                count: this.totalIntents[index].count + 1,
                            }, ...this.totalIntents.slice(index + 1)]
                        }
                    })
                    if (isRegistered == 0) {
                        this.totalIntents = [...this.totalIntents, {
                            name: customerIntent.aiName,
                            count: 1,
                        }]
                    }
                })
            }
            //add skill names for email if it is in top 4
            if (index >= (this.emails.length - 4)) {
                let skillName;
                if (email.displayData != null) {
                    email.displayData.map(data => {
                        if (data.name == 'skill_name') {
                            skillName = data.value;
                        }
                    })
                    if (skillName != '')
                        this.emailSkills = [...this.emailSkills, skillName];
                }
            }
        })
        this.voices.map((voice, index) => { // for voices
            if (voice.customerIntents != null) {
                voice.customerIntents.map(customerIntent => {
                    let isRegistered = 0;
                    this.totalIntents.map((intent, index) => {
                        if (intent.name == customerIntent.aiName) {
                            isRegistered = 1;
                            this.totalIntents = [...this.totalIntents.slice(0, index), {
                                name: this.totalIntents[index].name,
                                count: this.totalIntents[index].count + 1,
                            }, ...this.totalIntents.slice(index + 1)]
                        }
                    })
                    if (isRegistered == 0) {
                        this.totalIntents = [...this.totalIntents, {
                            name: customerIntent.aiName,
                            count: 1,
                        }]
                    }
                })
            }
            //add skill names for voice if it is in top 4
            if (index >= (this.voices.length - 4)) {
                let skillName;
                if (voice.displayData != null) {
                    voice.displayData.map(data => {
                        if (data.name == 'skill_name') {
                            skillName = data.value;
                        }
                    })
                    if (skillName != '')
                        this.voiceSkills = [...this.voiceSkills, skillName];
                }
            }
        })
        //sort total intents by count of intent
        this.totalIntents = this.totalIntents.sort(function (a, b) {
            let countA = a.count;
            let countB = b.count;
            if (countA > countB) { return 1; }
            else if (countA < countB) { return -1; }
            return 0;
        })

    }

    changeQueueData() {
        this.store.select('activeRequests').subscribe(val => {
            //get queue data of chat, email, voice -- longest waiting time, QueueCount
            this.length = val.length; this.activeRequests = val;
            let chatChannelCount = 0;
            let emailChannelCount = 0;
            let voiceChannelCount = 0;
            let chatLongestWaitingTime = 0;
            let emailLongestWaitingTime = 0;
            let voiceLongestWaitingTime = 0;
            val.map(tab => {
                let incomingTime = 0;
                if (tab.callStatus == 'incoming')
                    incomingTime = (Date.now() - tab.startTime) / 1000;
                else if (tab.callStatus == 'accepted')
                    incomingTime = (tab.connectedTime - tab.startTime) / 1000;
                if (tab.type == 'chat') {
                    chatChannelCount++;
                    if (incomingTime > chatLongestWaitingTime) { chatLongestWaitingTime = incomingTime; }
                }
                else if (tab.type == 'email') {
                    emailChannelCount++;
                    if (incomingTime > emailLongestWaitingTime) { emailLongestWaitingTime = incomingTime; }
                }
                else if (tab.type == 'voice') {
                    voiceChannelCount++;
                    if (incomingTime > voiceLongestWaitingTime) { voiceLongestWaitingTime = incomingTime; }
                }
            })
            let chatLongestWaitingTimeString = '0 Mins';
            if (chatLongestWaitingTime > 60) {
                chatLongestWaitingTimeString = ((chatLongestWaitingTime - (chatLongestWaitingTime % 60)) / 60) + ' Mins'
            }
            if (chatLongestWaitingTime > 3600) {
                chatLongestWaitingTimeString = ((chatLongestWaitingTime - (chatLongestWaitingTime % 3600)) / 3600) + ' Hrs'
            }

            let emailLongestWaitingTimeString = '0 Mins';
            if (emailLongestWaitingTime > 60) {
                emailLongestWaitingTimeString = ((emailLongestWaitingTime - (emailLongestWaitingTime % 60)) / 60) + ' Mins'
            }
            if (emailLongestWaitingTime > 3600) {
                emailLongestWaitingTimeString = ((emailLongestWaitingTime - (emailLongestWaitingTime % 3600)) / 3600) + ' Hrs'
            }

            let voiceLongestWaitingTimeString = '0 Mins';
            if (voiceLongestWaitingTime > 60) {
                voiceLongestWaitingTimeString = ((voiceLongestWaitingTime - (voiceLongestWaitingTime % 60)) / 60) + ' Mins'
            }
            if (voiceLongestWaitingTime > 3600) {
                voiceLongestWaitingTimeString = ((voiceLongestWaitingTime - (voiceLongestWaitingTime % 3600)) / 3600) + ' Hrs'
            }
            let chatQueue = {
                type: 'Chats',
                num: chatChannelCount,
                time: chatLongestWaitingTimeString,
                up: true,
                skills: this.chatSkills,
            }
            let emailQueue = {
                type: 'Emails',
                num: emailChannelCount,
                time: emailLongestWaitingTimeString,
                up: true,
                skills: this.emailSkills,
            }
            let voiceQueue = {
                type: 'Calls',
                num: voiceChannelCount,
                time: voiceLongestWaitingTimeString,
                up: true,
                skills: this.voiceSkills,
            }
            this.Queues = [chatQueue, emailQueue, voiceQueue];
        });
    }
    ngOnInit(): void {
        // timer(0, 1000).subscribe(() => this.changeQueueData());
    }

}
