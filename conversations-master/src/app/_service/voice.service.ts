import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AppState, selectChannel } from '../ngrx/reducers/index.reducer';
import { ActiveRequest } from '../ngrx/models/active-request.model';
import { AddActiveRequest, AddLinkedtoActiveRequest, AddActiveRequestToFirst } from '../ngrx/actions/active-request.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Voice } from '../ngrx/models/voice.model';
import { AddVoice } from '../ngrx/actions/voice.actions';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';
import { CreateCall, UpdateCall, DeleteCall, CreateMainCall } from './../ngrx/actions/call.actions';
import { ReceivedCall, StartMainCall } from './../ngrx/actions/email-transcript.actions';

const endpoint = 'https://reqres.in/api';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable({
    providedIn: 'root'
})
export class VoiceService {
    activeRequest: ActiveRequest;
    voice: Voice;
    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        public router: Router
    ) { }

    //New Voice
    newVoice() {
        return new Promise((resolve, reject) => {
            this.http.post<string>(`${endpoint}/login`, { email: "eve.holt@reqres.in", password: "cityslicka" })
                .subscribe(
                    data => {
                        //sample return format - you should use 'data' as the live real data.
                        //add Incoming Voice
                        let callId = Date.now().toString()
                        this.activeRequest = {
                            id: 'Siva-wc1',
                            name: 'Siva',
                            callId: callId,
                            customerId: '12004000009',
                            type: "voice",
                            callType: "INBOUND",
                            callStatus: 'incoming',
                            startTime: Date.now(),
                            connectedTime: 0,
                            endTime: 0,
                            incomingTime: 0,
                            isActive: true,
                            isDefered: false,
                            linkedTo: '',
                        }
                        this.store.dispatch(new AddActiveRequestToFirst(this.activeRequest))
                        this.addVoiceData(callId, '');

                        //add New Voice
                        let callId1 = Date.now().toString() + '123'
                        this.activeRequest = {
                            id: 'Siva-wc1',
                            name: 'Siva',
                            callId: callId1,
                            customerId: '12004000009',
                            type: "voice",
                            callType: "INBOUND",
                            callStatus: 'new',
                            startTime: Date.now(),
                            connectedTime: 0,
                            endTime: 0,
                            incomingTime: 0,
                            isActive: true,
                            isDefered: false,
                            linkedTo: '',
                        }
                        this.store.dispatch(new AddActiveRequestToFirst(this.activeRequest))
                        this.addVoiceData(callId1, '');
                        resolve("success"); //if success, return success
                    },
                    err => {
                        console.log(err)
                        reject("failed");
                    },
                )
        });
    }

    createLinkedVoice(type, name = '', number = '') {
        return new Promise((resolve, reject) => {
            this.http.post<string>(`${endpoint}/login`, { email: "eve.holt@reqres.in", password: "cityslicka" })
                .subscribe(
                    data => {
                        //sample return format - you should use 'data' as the live real data.
                        //add Incoming Email
                        let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
                        let callId = Date.now().toString()
                        this.activeRequest = {
                            id: 'Siva-wc1',
                            name: 'Siva',
                            callId: callId,
                            customerId: 'Jmiller1984@gmail.com',
                            type: "voice",
                            callType: "OUTBOUND",
                            callStatus: type,
                            startTime: Date.now(),
                            connectedTime: 0,
                            endTime: 0,
                            incomingTime: 0,
                            isActive: true,
                            isDefered: false,
                            linkedTo: openedRequest.callId,
                        }
                        this.addVoiceData(callId, '');
                        this.store.dispatch(new AddLinkedtoActiveRequest(this.activeRequest, openedRequest.callId))

                        this.store.dispatch(new StartMainCall);
                        this.store.dispatch(new CreateMainCall({
                            destname: name, phoneNumber: number, type: 'customer', status: 'talking',
                            holdTime: 0, talkingTime: 0
                        }));

                        this.store.dispatch(new ChangeOpenedRequest(callId));
                        resolve("success"); //if success, return success
                    },
                    err => {
                        console.log(err)
                        reject("failed");
                    },
                )
        });
    }

    createConsultantVoice(type) {
        return new Promise((resolve, reject) => {
            this.http.post<string>(`${endpoint}/login`, { email: "eve.holt@reqres.in", password: "cityslicka" })
                .subscribe(
                    data => {
                        //sample return format - you should use 'data' as the live real data.
                        //add Incoming Email
                        let openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
                        let callId = Date.now().toString()
                        this.activeRequest = {
                            id: 'Siva-wc1',
                            name: 'Siva',
                            callId: callId,
                            customerId: 'Jmiller1984@gmail.com',
                            type: "voice",
                            callType: "INBOUND",
                            callStatus: type,
                            startTime: Date.now(),
                            connectedTime: 0,
                            endTime: 0,
                            incomingTime: 0,
                            isActive: true,
                            isDefered: false,
                            linkedTo: '',
                        }
                        this.store.dispatch(new AddActiveRequestToFirst(this.activeRequest))

                        this.addVoiceData(callId, openedRequest.callId);

                        this.store.dispatch(new ChangeOpenedRequest(callId));
                        resolve("success"); //if success, return success
                    },
                    err => {
                        console.log(err)
                        reject("failed");
                    },
                )
        });
    }

    addVoiceData(callId, originalCallId) {
        this.voice = {
            "id": "00001020931587140730",
            "Name": "Siva",
            "type": "voice",
            "callId": callId,
            "conversationId": "00001020931587140730",
            "customerInfo": {
                "name": "Siva",
                "id": "12004000009"
            },
            "callType": "INBOUND",
            "callSubType": "NONE",
            "filtertype": "VOICE",
            "EstablishConversation": false,
            "startDate": "2020-10-20T16:39:21.827Z",
            "endDate": "2020-10-21T16:39:21.827Z",
            "WrapUpCode": "",
            "WrapUpComment": "",
            "EnableTranscript": true,
            "originalCallId": originalCallId,
            "voiceTranscript": [
                {
                    "senderId": "unknownContact-9196727633",
                    "message": "hi",
                    "timestamp": "2020-03-24T01:25:04.635Z",
                    "raisedBy": "user"
                },
                {
                    "senderId": "AI",
                    "message": "Hello, I am your C1Bot. What can I help you with today? Here is something I can do for you.",
                    "timestamp": "2020-03-24T01:25:06.070Z",
                    "raisedBy": ""
                },
                {
                    "senderId": "AI",
                    "message": "",
                    "timestamp": "2020-03-24T01:25:06.480Z",
                    "raisedBy": ""
                },
                {
                    "senderId": "unknownContact-9196727633",
                    "message": "make a payment",
                    "timestamp": "2020-03-24T01:25:16.086Z",
                    "raisedBy": "user"
                },
                {
                    "senderId": "AI",
                    "message": "You will need to log into your account before I can process that request. Please tell me your account number",
                    "timestamp": "2020-03-24T01:25:17.034Z",
                    "raisedBy": ""
                },
                {
                    "senderId": "unknownContact-9196727633",
                    "message": "7889-88559-44455-5522",
                    "timestamp": "2020-03-24T01:25:20.360Z",
                    "raisedBy": "user"
                },
                {
                    "senderId": "AI",
                    "message": "Your last payment of $50 was received on 3/1/2020. Your account is past due.",
                    "timestamp": "2020-03-24T01:25:29.448Z",
                    "raisedBy": ""
                },
                {
                    "senderId": "unknownContact-9196727633",
                    "message": "agent please",
                    "timestamp": "2020-03-24T01:26:04.586Z",
                    "raisedBy": "user"
                },
                {
                    "senderId": "AI",
                    "message": "Please wait while we transfer you to an agent.",
                    "timestamp": "2020-03-24T01:26:06.047Z",
                    "raisedBy": ""
                },
                {
                    "senderId": "AI",
                    "message": "You are now queued for an agent.",
                    "timestamp": "2020-03-24T01:26:06.247Z",
                    "raisedBy": ""
                }
            ],
            "cannedResponse": {
                "availableTextResponses": [
                    {
                        "skill": "12002000001",
                        "name": "Config1",
                        "text": "Canned message from config1",
                        "type": "agent",
                        "timestamp": 1547140040709
                    },
                    {
                        "skill": "12002000001",
                        "name": "Config2",
                        "text": "There are various configurations for the product you are looking at.\n Please let us know which of the below would you prefer",
                        "type": "agent",
                        "timestamp": 1547140040709
                    }
                ],
                "availableActionResponses": [
                    {
                        "attachment": {
                            "type": "action",
                            "message": [
                                {
                                    "data": null,
                                    "display": "Make a payment",
                                    "action": "Make a payment",
                                    "type": "chatAction",
                                    "order": 1
                                },
                                {
                                    "data": null,
                                    "display": "View my payment history",
                                    "action": "Payment history",
                                    "type": "chatAction",
                                    "order": 2
                                },
                                {
                                    "data": null,
                                    "display": "Search google",
                                    "action": "https://www.google.com",
                                    "type": "link",
                                    "order": 3
                                }
                            ]
                        },
                        "skill": "global",
                        "name": "PaymentAction1",
                        "text": "Select an option below",
                        "type": "global",
                        "timestamp": 1594224317
                    }
                ],
                "selectedCannedResponse": "",
                "newCannedResponse": {
                    "name": "",
                    "text": ""
                }
            },
            "sessionNotes": [
                {
                    "notes": "Could you please brief about Galaxy TW and Apple SE? So that I could decide which one I want to go for.",
                    "conversationId": "Siva",
                    "timestamp": 1602832803000,
                    "localDate": "10/16/2020",
                    "localDateTime": "2020-10-16T07:20:03.000Z",
                    "fromHistory": true,
                    "filterName": "",
                    "channel": "CHAT"
                },
                {
                    "notes": "I want to buy a phone. Could you please help me with that?",
                    "conversationId": "Siva",
                    "timestamp": 1602832503000,
                    "localDate": "10/16/2020",
                    "localDateTime": "2020-10-16T07:15:03.000Z",
                    "fromHistory": true,
                    "filterName": "",
                    "channel": "CHAT"
                },
                {
                    "notes": "Sure, sir. Which phone do you want?",
                    "conversationId": "Siva",
                    "timestamp": 1602832323000,
                    "localDate": "10/16/2020",
                    "localDateTime": "2020-10-16T07:12:03.000Z",
                    "fromHistory": true,
                    "filterName": "",
                    "channel": "CHAT"
                },
                {
                    "notes": "Hello sir, welcome.",
                    "conversationId": "Siva",
                    "timestamp": 1602832203000,
                    "localDate": "10/16/2020",
                    "localDateTime": "2020-10-16T07:10:03.000Z",
                    "fromHistory": true,
                    "filterName": "",
                    "channel": "CHAT"
                },
                {
                    "notes": "Hey",
                    "conversationId": "Siva",
                    "timestamp": 1602831303000,
                    "localDate": "10/16/2020",
                    "localDateTime": "2020-10-16T06:55:03.000Z",
                    "fromHistory": true,
                    "filterName": "",
                    "channel": "CHAT"
                }
            ],
            "HistoryConversations": {},
            "activityHistory": [
                {
                    "dateTime": "5/28/2020, 10:28:23 PM",
                    "id": "1603521036417045",
                    "sortDateTime": 1590685103000,
                    "channel": "Voice",
                    "activityObjects": [
                        {
                            "key": "Description",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "whoid",
                            "value": "Johnny456",
                            "isValidUrl": false
                        },
                        {
                            "key": "subject",
                            "value": "5/28/2020, 10:27:48 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDurationInSeconds",
                            "value": 34,
                            "isValidUrl": false
                        },
                        {
                            "key": "HoldTimeInSeconds__c",
                            "value": 0,
                            "isValidUrl": false
                        },
                        {
                            "key": "CallAnsweredTime__c",
                            "value": "5/28/2020, 10:27:49 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDisconnectedTime__c",
                            "value": "5/28/2020, 10:28:23 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "Status",
                            "value": "Completed",
                            "isValidUrl": false
                        },
                        {
                            "key": "ringTimeInSeconds__c",
                            "value": 1,
                            "isValidUrl": false
                        },
                        {
                            "key": "conversationId",
                            "value": "9196727644",
                            "isValidUrl": false
                        },
                        {
                            "key": "agentId",
                            "value": "22194",
                            "isValidUrl": false
                        },
                        {
                            "key": "channelName",
                            "value": "Voice",
                            "isValidUrl": false
                        },
                        {
                            "key": "timestamp",
                            "value": 1590685103017,
                            "isValidUrl": false
                        },
                        {
                            "key": "CallObject",
                            "value": "1603521036417045",
                            "isValidUrl": false
                        }
                    ]
                },
                {
                    "dateTime": "5/28/2020, 10:20:55 PM",
                    "id": "00001010641547143526",
                    "sortDateTime": 1590684655000,
                    "channel": "Chat",
                    "activityObjects": [
                        {
                            "key": "Subject",
                            "value": "5/28/2020, 10:17:43 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDurationInSeconds",
                            "value": 192,
                            "isValidUrl": false
                        },
                        {
                            "key": "CallType",
                            "value": "INBOUND",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallObject",
                            "value": "00001010641547143526",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDisposition",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "Status",
                            "value": "Completed",
                            "isValidUrl": false
                        },
                        {
                            "key": "Phone",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "whoid",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "whatid",
                            "value": "592da091dbbc1c9070013445f3961903",
                            "isValidUrl": false
                        },
                        {
                            "key": "Description",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "ActivityDate",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "SFChatTranscript__c",
                            "value": "https://sgcapccsconv01.transcom.com/DataStorage/ConversationHistory?conversationId=Siva-wc1&agentId=22194&startTime=1590684466672&finishTime=1590684655787&count=1000",
                            "isValidUrl": true
                        },
                        {
                            "key": "SFChatSessionNotes__c",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "Type",
                            "value": "GHS",
                            "isValidUrl": false
                        },
                        {
                            "key": "HoldTimeInSeconds__c",
                            "value": 0,
                            "isValidUrl": false
                        },
                        {
                            "key": "ringTimeInSeconds__c",
                            "value": 3,
                            "isValidUrl": false
                        },
                        {
                            "key": "CallWrapupTime__c",
                            "value": "5/28/2020, 10:20:53 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallInitiatedTime__c",
                            "value": "5/28/2020, 10:17:43 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "talkTimeInSeconds__c",
                            "value": 187,
                            "isValidUrl": false
                        },
                        {
                            "key": "WrapupTimeInSeconds__c",
                            "value": 1,
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDisconnectedTime__c",
                            "value": "5/28/2020, 10:20:55 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallAnsweredTime__c",
                            "value": "5/28/2020, 10:17:46 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "SFIntents__c",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "conversationId",
                            "value": "Siva-wc1",
                            "isValidUrl": false
                        },
                        {
                            "key": "agentId",
                            "value": "22194",
                            "isValidUrl": false
                        },
                        {
                            "key": "channelName",
                            "value": "chat bot",
                            "isValidUrl": false
                        },
                        {
                            "key": "timestamp",
                            "value": 1590684655792,
                            "isValidUrl": false
                        }
                    ]
                },
                {
                    "dateTime": "7/25/2019, 2:01:25 PM",
                    "id": "00001036401564077163",
                    "sortDateTime": 1564043485000,
                    "channel": "EMail",
                    "activityObjects": [
                        {
                            "key": "HoldTimeInSeconds__c",
                            "value": 5,
                            "isValidUrl": false
                        },
                        {
                            "key": "agentId",
                            "value": "22194",
                            "isValidUrl": false
                        },
                        {
                            "key": "Description",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDisposition",
                            "value": "QueryResolved",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallType",
                            "value": "INBOUND",
                            "isValidUrl": false
                        },
                        {
                            "key": "WrapupTimeInSeconds__c",
                            "value": 3,
                            "isValidUrl": false
                        },
                        {
                            "key": "threadId",
                            "value": "T_wy1NG9gx98mq",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDisconnectedTime__c",
                            "value": "7/25/2019, 2:01:25 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallAnsweredTime__c",
                            "value": "7/25/2019, 2:00:55 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "Phone",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "customerId",
                            "value": "SivarajP",
                            "isValidUrl": false
                        },
                        {
                            "key": "talkTimeInSeconds__c",
                            "value": 22,
                            "isValidUrl": false
                        },
                        {
                            "key": "SFIntents__c",
                            "value": "auto loan payment,late loan payment-agent transfer,current context,DEMODATA,Mortgage,CD Rates,Apple test,payment,Payments",
                            "isValidUrl": false
                        },
                        {
                            "key": "timestamp",
                            "value": 1564077685916,
                            "isValidUrl": false
                        },
                        {
                            "key": "Status",
                            "value": "Completed",
                            "isValidUrl": false
                        },
                        {
                            "key": "ringTimeInSeconds__c",
                            "value": 3,
                            "isValidUrl": false
                        },
                        {
                            "key": "whoid",
                            "value": "0031U000005YrEo",
                            "isValidUrl": false
                        },
                        {
                            "key": "ActivityDate",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDurationInSeconds",
                            "value": 34,
                            "isValidUrl": false
                        },
                        {
                            "key": "conversationId",
                            "value": "SPalanisamy@convergeone.com",
                            "isValidUrl": false
                        },
                        {
                            "key": "whatid",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "SFChatSessionNotes__c",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallWrapupTime__c",
                            "value": "7/25/2019, 2:01:22 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "messageId",
                            "value": "GmailId16c2a429d95dc9e2",
                            "isValidUrl": false
                        },
                        {
                            "key": "Subject",
                            "value": "2019-07-25T18:00:51.350Z",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallObject",
                            "value": "00001036401564077163",
                            "isValidUrl": false
                        },
                        {
                            "key": "Type",
                            "value": "EML",
                            "isValidUrl": false
                        },
                        {
                            "key": "SFChatTranscript__c",
                            "value": "https://c1bottomcat.ngrok.io/EmailTranscripts/?conversationId=SPalanisamy@convergeone.com&agentId=22194&startTime=1564027200000&finishTime=1564077685914&count=1000&messageId=GmailId16c2a429d95dc9e2",
                            "isValidUrl": true
                        },
                        {
                            "key": "CallInitiatedTime__c",
                            "value": "7/25/2019, 2:00:51 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "channelName",
                            "value": "EMail",
                            "isValidUrl": false
                        }
                    ]
                },
                {
                    "dateTime": "7/22/2019, 6:20:03 PM",
                    "id": "00001032701563832895",
                    "sortDateTime": 1563799803000,
                    "channel": "EMail",
                    "activityObjects": [
                        {
                            "key": "HoldTimeInSeconds__c",
                            "value": 638,
                            "isValidUrl": false
                        },
                        {
                            "key": "agentId",
                            "value": "22194",
                            "isValidUrl": false
                        },
                        {
                            "key": "Description",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDisposition",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallType",
                            "value": "INBOUND",
                            "isValidUrl": false
                        },
                        {
                            "key": "WrapupTimeInSeconds__c",
                            "value": 0,
                            "isValidUrl": false
                        },
                        {
                            "key": "threadId",
                            "value": "T_mpz3Z85ZN1VY",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDisconnectedTime__c",
                            "value": "7/22/2019, 6:20:03 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallAnsweredTime__c",
                            "value": "7/22/2019, 6:09:14 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "Phone",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "customerId",
                            "value": "SivarajP",
                            "isValidUrl": false
                        },
                        {
                            "key": "talkTimeInSeconds__c",
                            "value": 10,
                            "isValidUrl": false
                        },
                        {
                            "key": "SFIntents__c",
                            "value": "auto loan payment,late loan payment-agent transfer,current context,DEMODATA,Mortgage,CD Rates,Payments,Apple test,payment",
                            "isValidUrl": false
                        },
                        {
                            "key": "timestamp",
                            "value": 1563834003927,
                            "isValidUrl": false
                        },
                        {
                            "key": "Status",
                            "value": "Completed",
                            "isValidUrl": false
                        },
                        {
                            "key": "ringTimeInSeconds__c",
                            "value": 3,
                            "isValidUrl": false
                        },
                        {
                            "key": "whoid",
                            "value": "0031U000005YrEo",
                            "isValidUrl": false
                        },
                        {
                            "key": "ActivityDate",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallDurationInSeconds",
                            "value": 652,
                            "isValidUrl": false
                        },
                        {
                            "key": "conversationId",
                            "value": "SPalanisamy@convergeone.com",
                            "isValidUrl": false
                        },
                        {
                            "key": "whatid",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "SFChatSessionNotes__c",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallWrapupTime__c",
                            "value": "",
                            "isValidUrl": false
                        },
                        {
                            "key": "messageId",
                            "value": "GmailId16c1bb3d2984443b",
                            "isValidUrl": false
                        },
                        {
                            "key": "Subject",
                            "value": "2019-07-22T22:09:11.488Z",
                            "isValidUrl": false
                        },
                        {
                            "key": "CallObject",
                            "value": "00001032701563832895",
                            "isValidUrl": false
                        },
                        {
                            "key": "Type",
                            "value": "EML",
                            "isValidUrl": false
                        },
                        {
                            "key": "SFChatTranscript__c",
                            "value": "https://c1bottomcat.ngrok.io/EmailTranscripts/?conversationId=SPalanisamy@convergeone.com&agentId=22194&startTime=1563768000000&finishTime=1563834003926&count=1000&messageId=GmailId16c1bb3d2984443b",
                            "isValidUrl": true
                        },
                        {
                            "key": "CallInitiatedTime__c",
                            "value": "7/22/2019, 6:09:11 PM",
                            "isValidUrl": false
                        },
                        {
                            "key": "channelName",
                            "value": "EMail",
                            "isValidUrl": false
                        }
                    ]
                }
            ],
            "channelInfo": [
                {
                    "WEBCHAT": "939ad968-e4f8-4a3b-9d46-dfd813874684"
                }
            ],
            "signalingVars": {
                "meta_ucid": "00001020931587140730",
                "call_id": "00001020931587140730",
                "meta_mediatype": "%3F%08%00%23%3F*%5E%3F%3E%03",
                "auto_in_enabled": "true",
                "meta_dnis": "13039523219",
                "meta_ani": "9196727633",
                "call_status": "RINGING",
                "wrapup_enabled": true,
                "call_sub_type": "NONE",
                "src_addr": "9196727633",
                "meta_original_ucid": "00000000000000000000",
                "meta_skill": "5123200",
                "call_type": "INBOUND",
                "dst_addr": "13039523219",
                "meta_tsapi_call_id": "2266",
                "meta_delivering_acd": "5123200",
                "meta_uui": "%3F%08%00%23%3F*%5E%3F%3E%03",
                "ev_name": "EV_CALL_STATUS",
                "meta_skill_name": "Converge One CA Skill",
                "media_type": "voice"
            },
            "displayData": [
                {
                    "name": "ani",
                    "value": "12004000009",
                    "type": "string"
                },
                {
                    "name": "uui",
                    "value": "T%7CCO%2CID%7C1603521036417035%2CF%7CFBB%2CNM%7CSiva",
                    "type": "string"
                },
                {
                    "name": "skill",
                    "value": "12001000001",
                    "type": "string"
                },
                {
                    "name": "dnis",
                    "value": "16125090781",
                    "type": "string"
                },
                {
                    "name": "ucid",
                    "value": "00001010641547143526",
                    "type": "string"
                },
                {
                    "name": "vdn",
                    "value": "16125090781",
                    "type": "string"
                },
                {
                    "name": "skill_name",
                    "value": "OmniChannel 10",
                    "type": "string"
                },
                {
                    "name": "Duration",
                    "value": 1603298366914,
                    "type": "timer"
                },
                {
                    "name": "Hold",
                    "type": "timer"
                },
                {
                    "name": "Wrapup",
                    "type": "timer"
                },
                {
                    "name": "dnis_name",
                    "value": "OmniChannel 10",
                    "type": "string"
                },
                {
                    "name": "Held Duration",
                    "type": "interval"
                }
            ],
            "callLog": {
                "associatevals": [],
                "relatevals": [
                    {
                        "object": "account",
                        "name": "INC0327222",
                        "id": "592da091dbbc1c9070013445f3961903",
                        "label": "account:INC0327222",
                        "isLead": false
                    },
                    {
                        "object": "account",
                        "name": "INC0789012",
                        "id": "592da091dbbc1c9070013445f1234567",
                        "label": "account:INC0789012",
                        "isLead": false
                    }
                ],
                "associated": null,
                "related": {
                    "object": "account",
                    "name": "INC0327222",
                    "id": "592da091dbbc1c9070013445f3961903",
                    "label": "account:INC0327222",
                    "isLead": false
                }
            },
            "customerIntents": [
                {
                    "aiName": "loanInterest",
                    "lastUpdate": "2019-08-21T18:33:03.709Z",
                    "customerId": "siva",
                    "name": "loanInterest",
                    "lastComment": "loanInterest update",
                    "id": "siva_1566410954545",
                    "state": "Closed",
                    "createddatetime": "2019-08-21T18:09:14.545Z",
                    "lastActor": {
                        "name": "Siva",
                        "id": "22198"
                    },
                    "friendlyName": "loanInterest",
                    "relevance": "Wed Aug 21 2019 23:39:14 GMT+0530 (India Standard Time)",
                    "displayAllowed": false
                }, {
                    "aiName": "Cdrates",
                    "lastUpdate": "2019-08-21T18:29:55.947Z",
                    "customerId": "siva",
                    "name": "Cdrates",
                    "lastComment": "Cdrates  update 2",
                    "id": "siva_1566317182305",
                    "state": "Open",
                    "lastActor": {
                        "name": "Siva",
                        "id": "22198"
                    },
                    // "status": "failed",
                    "friendlyName": "Cdrates",
                    "displayAllowed": true
                }, {
                    "aiName": "Payment",
                    // "conversationId": "Siva-wc1",
                    "lastUpdate": "2019-05-09T14:01:41.807Z",
                    "customerId": "Siva",
                    "name": "payment",
                    "lastComment": "payment",
                    "mediaType": "VOICE",
                    "id": "Siva_1557410501751",
                    "state": "Closed",
                    "lastActor": {
                        "name": "Siva",
                        "id": "22207"
                    },
                    "friendlyName": "payment",
                    "relevance": "Thu May 09 2019 10:01:41 GMT-0400 (Eastern Daylight Time)",
                    "displayAllowed": false
                }, {
                    "aiName": "CJ.ContextTest1",
                    "lastUpdate": "2019-08-20T15:43:06.405Z",
                    "customerId": "siva",
                    "lastActor": {
                        "name": "Siva",
                        "id": "210200"
                    },
                    "contexts": [
                        {
                            "lifespan": 5,
                            "name": "cjct1",
                            "parameters": {
                                "zipcode": "27159.0",
                                "zipcode_original": "27159",
                                "location": {
                                    "country": "",
                                    "city": "London",
                                    "admin-area": "",
                                    "business-name": "",
                                    "street-address": "",
                                    "zip-code": "",
                                    "shortcut": "",
                                    "island": "",
                                    "subadmin-area": ""
                                },
                                "location_original": "\"london\""
                            }
                        },
                        {
                            "lifespan": 4,
                            "name": "mortgage",
                            "parameters": {
                                "zipcode": "27159.0",
                                "zipcode_original": "27159",
                                "location": {
                                    "country": "",
                                    "city": "London",
                                    "admin-area": "",
                                    "business-name": "",
                                    "street-address": "",
                                    "zip-code": "",
                                    "shortcut": "",
                                    "island": "",
                                    "subadmin-area": ""
                                },
                                "location_original": "\"london\""
                            }
                        },
                        {
                            "lifespan": 4,
                            "name": "mortgage-entername",
                            "parameters": {
                                "zipcode": "27159.0",
                                "zipcode_original": "27159",
                                "location": {
                                    "country": "",
                                    "city": "London",
                                    "admin-area": "",
                                    "business-name": "",
                                    "street-address": "",
                                    "zip-code": "",
                                    "shortcut": "",
                                    "island": "",
                                    "subadmin-area": ""
                                },
                                "location_original": "london"
                            }
                        },
                        {
                            "lifespan": 3,
                            "name": "2factorauthacctbalancecardtypewait",
                            "parameters": {
                                "zipcode": "27159.0",
                                "zipcode_original": "27159",
                                "location": {
                                    "country": "",
                                    "city": "London",
                                    "admin-area": "",
                                    "business-name": "",
                                    "street-address": "",
                                    "zip-code": "",
                                    "shortcut": "",
                                    "island": "",
                                    "subadmin-area": ""
                                },
                                "location_original": "london"
                            }
                        },
                        {
                            "lifespan": 8,
                            "name": "account",
                            "parameters": {
                                "zipcode": "27159.0",
                                "zipcode_original": "27159",
                                "location": {
                                    "country": "",
                                    "city": "London",
                                    "admin-area": "",
                                    "business-name": "",
                                    "street-address": "",
                                    "zip-code": "",
                                    "shortcut": "",
                                    "island": "",
                                    "subadmin-area": ""
                                },
                                "location_original": "london"
                            }
                        }
                    ],
                    "id": "CJ.ContextTest1_siva",
                    "state": "Open",
                    "friendlyName": "CJ.ContextTest1",
                    "displayAllowed": true
                }, {
                    "aiName": "LatePayment",
                    "lastUpdate": "2020-03-11T15:53:37.640Z",
                    "customerId": "siva",
                    "name": "Late Payment",
                    "lastComment": "Late payment udpate",
                    "id": "siva_1566267967146",
                    "state": "Closed",
                    "lastActor": {
                        "name": "Siva",
                        "id": "210200"
                    },
                    "friendlyName": "Late Payment",
                    "displayAllowed": false
                }
            ],
            "masterIntentsList": [
                {
                    "aiName": "loanInterest",
                    "name": "loanInterest",
                    "friendlyName": "loanInterest"
                },
                {
                    "aiName": "Cdrates",
                    "name": "Cdrates",
                    "friendlyName": "Cdrates"
                }
            ],
            "screenPopDone": true,
            "isVerifiedAfterRefresh": true,
            "isActive": true,
            "wrapupInProgress": false,
            "enableManualScreenpop": true,
            "historyReuestResponseCount": 0,
            "startTime": 1603298368421,
            "customerList": [
                {
                    "alternateCustomer": [],
                    "name": "Fan ",
                    "id": "Fan",
                    "contacts": [
                        {
                            "filter": "WEBCHAT",
                            "name": "Fan",
                            "id": "939ad968-e4f8-4a3b-9d46-dfd813874684"
                        },
                        {
                            "filter": "EML",
                            "name": "Fan",
                            "id": "FZhi@abc.com"
                        }
                    ]
                },
                {
                    "alternateCustomer": [],
                    "name": "Fan2 ",
                    "id": "Fan2",
                    "contacts": [
                        {
                            "filter": "WEBCHAT",
                            "name": "Fan2",
                            "id": "939ad968-e4f8-4a3b-9d46-346458658"
                        },
                        {
                            "filter": "EML",
                            "name": "Fan2",
                            "id": "FKan@abc.com"
                        }
                    ]
                }
            ],
            "selectedCustomer": {
                "alternateCustomer": [],
                "name": "Fan ",
                "id": "Fan",
                "contacts": [
                    {
                        "filter": "WEBCHAT",
                        "name": "Fan",
                        "id": "939ad968-e4f8-4a3b-9d46-dfd813874684"
                    },
                    {
                        "filter": "EML",
                        "name": "Fan",
                        "id": "FZhi@abc.com"
                    }
                ]
            },
            "btns": {
                "answer": true,
                "retrieve": true,
                "hold": true,
                "endcall": true,
                "xfer_complete": true,
                "conf_complete": true,
                "conf": true,
                "xfer": true,
                "makecall": true,
                "dtmf": true,
                "divert": true,
                "schedule_callback": true,
            }
        }
        this.store.dispatch(new AddVoice(this.voice))
    }

}
