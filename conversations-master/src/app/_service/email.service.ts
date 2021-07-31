import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AppState, selectChannel } from '../ngrx/reducers/index.reducer';
import { ActiveRequest } from '../ngrx/models/active-request.model';
import { AddActiveRequest, AddLinkedtoActiveRequest, AddActiveRequestToFirst } from '../ngrx/actions/active-request.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Email } from '../ngrx/models/email.model';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';
import { AddEmail } from '../ngrx/actions/email.actions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const endpoint = 'https://reqres.in/api';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable({
    providedIn: 'root'
})
export class EmailService {

    activeRequest: ActiveRequest;
    email: Email;
    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        public router: Router
    ) { }
    //New Email
    newEmail() {
        return new Promise((resolve, reject) => {
            this.http.post<string>(`${endpoint}/login`, { email: "eve.holt@reqres.in", password: "cityslicka" })
                .subscribe(
                    data => {
                        //sample return format - you should use 'data' as the live real data.
                        //add Incoming Email
                        let callId = Date.now().toString()
                        this.activeRequest = {
                            id: 'Siva-wc1',
                            name: 'SPalanisamy@convergeone.com740',
                            callId: callId,
                            customerId: 'Jmiller1984@gmail.com',
                            type: "email",
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
                        this.addEmailData(callId);

                        //add outgoing email
                        let callId1 = Date.now().toString() + '123'
                        this.activeRequest = {
                            id: 'Siva-wc1',
                            name: 'Siva',
                            callId: callId1,
                            customerId: '12004000009',
                            type: "email",
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
                        this.addEmailData(callId1);

                        resolve("success"); //if success, return success
                    },
                    err => {
                        console.log(err)
                        reject("failed");
                    },
                )
        });
    }

    createLinkedEmail(type) {
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
                            type: "email",
                            callType: "INBOUND",
                            callStatus: type,
                            startTime: Date.now(),
                            connectedTime: 0,
                            endTime: 0,
                            incomingTime: 0,
                            isActive: true,
                            isDefered: false,
                            linkedTo: openedRequest.callId,
                        }
                        this.store.dispatch(new AddLinkedtoActiveRequest(this.activeRequest, openedRequest.callId))

                        this.addEmailData(callId);

                        let currentEmail;
                        this.store.select('emails').subscribe(val => {
                            let index = val.findIndex(element => element.callId === openedRequest.callId)
                            currentEmail = val[index];

                        })
                        let newEmail = { ...currentEmail, callId: callId };
                        // console.log(newEmail);
                        this.store.dispatch(new AddEmail(newEmail))
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

    addEmailData(callId) {
        this.email = {
            "id": "SPalanisamy@convergeone.com740",
            "messageId": "740",
            "threadId": "T_OawXR4V3G9Py",
            "Name": "Siva",
            "type": "email",
            "callId": callId,
            "conversationId": "SPalanisamy@convergeone.com",
            "customerInfo": {
                "name": "SPalanisamy@convergeone.com",
                "id": "12004000004"
            },
            "callType": "INBOUND",
            "callSubType": "NONE",
            "filtertype": "EML",
            "EstablishConversation": false,
            "startDate": "2020-10-20T16:52:00.037Z",
            "endDate": "2020-10-21T16:52:00.037Z",
            "WrapUpCode": "",
            "WrapUpComment": "",
            "channelInfo": [],
            "wrapupInProgress": false,
            "screenPopDone": false,
            "cannedResponse": {
                "availableCannedResponses": [
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
            "signalingVars": {
                "meta_ucid": "00001021171587152771",
                "meta_dnis_name": "OmniChannel 2",
                "call_id": "00001021171587152771",
                "meta_distributing_vdn": "16125090781",
                "meta_mediatype": "EM",
                "meta_customername": "",
                "meta_threadid": "T_OawXR4V3G9Py",
                "meta_dnis": "16125090781",
                "meta_ani": "12004000004",
                "call_status": "RINGING",
                "meta_vdnname": "OmniChannel 2",
                "call_sub_type": "NONE",
                "src_addr": "12004000004",
                "meta_original_ucid": "00000000000000000000",
                "meta_skill": "12001000002",
                "meta_messageid": "740",
                "call_type": "INBOUND",
                "dst_addr": "16125090781",
                "meta_tsapi_call_id": "2117",
                "meta_delivering_acd": "12001000002",
                "meta_uui": "T%7CEM%2CID%7CSPalanisamy%40convergeone.com%2CF%7CEML%2CNM%7C%2CMID%7C740%2CTID%7CT_OawXR4V3G9Py%2CCID%7CSPalanisamy%40converg",
                "meta_filtertype": "EML",
                "meta_conversationid": "SPalanisamy@convergeone.com",
                "ev_name": "EV_CALL_STATUS",
                "meta_skill_name": "OmniChannel 2",
                "meta_ani_name": "Monitoring 4",
                "callinitiatedtime__c": "10/21/2020, 10:22:00 PM",
                "callinitiatedtimeiso": "2020-10-21T16:52:00.030Z",
                "callinitiatedtime": 1603299120030,
                "subject": "2020-10-21T16:52:00.037Z",
                "status": "Completed",
                "calltype": "",
                "callobject": "00001021171587152771",
                "callansweredtime__c": "10/21/2020, 10:22:05 PM",
                "callansweredtimeiso": "2020-10-21T16:52:05.116Z",
                "callansweredtime": 1603299125116
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
                    "value": '1603298366914',
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
                "associatevals": [
                    {
                        name: 'Siva'
                    },
                    {
                        name: 'Ivan'
                    }
                ],
                "relatevals": [
                    {
                        "object": "account",
                        "name": "INC0327222",
                        "id": "592da091dbbc1c9070013445f3961903",
                        "label": "account:INC0327222",
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
            "emailType": "",
            "state": "Active",
            "emailContent": {
                "headers": {
                    "cc": [
                        {
                            'email': 'work@gmail.com'
                        },
                    ],
                    "bcc": [
                        {
                            'email': 'nice@gmail.com'
                        },
                        {
                            'email': 'best@gmail.com'
                        }
                    ],
                    "x-priority": "",
                    "subject": "test 102 [T_OawXR4V3G9Py]",
                    "replyTo": {
                        "name": "Sivaraj Palanisamy",
                        "id": "SPalanisamy@convergeone.com"
                    },
                    "from": {
                        "name": "Sivaraj Palanisamy",
                        "id": "SPalanisamy@convergeone.com"
                    },
                    "content-type": "multipart/alternative; \r\n\tboundary=_000_ed73b46bf38a4a3db17a0217db293324NACR503nacrcom_",
                    "to": [{
                        "name": "finance@c1cx.cloud",
                        "id": "finance@c1cx.cloud"
                    }
                    ],
                    "priority": "",
                    "lang": "en-US",
                    "encoding": "",
                    "decodedTime": "Saturday  4/18/2020, 1:16:08 AM"
                },
                "body": "Test 102 Thanks, Sivaraj (Siva) Palanisamy Director – Application Development CTO Organization O 919.582.6463 M 919.672.7633 convergeone.com NOTICE: This email message and any attachments hereto may contain confidential information. Any unauthorized review, use, disclosure, or distribution of such information is prohibited. If you are not the intended recipient, please contact the sender by reply email and destroy the original message and all copies of it.",
                "bodyHtml": '<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml" xmlns="http://www.w3.org/TR/REC-html40"><head>\
                    <meta http-equiv="Content-Type" content="text/html; charset=us-ascii">\
                    <meta name="Generator" content="Microsoft Word 15 (filtered medium)">\
                    <style><!--\
                    /* Font Definitions */\
                    @font-face\
                        {font-family:"Cambria Math";\
                        panose-1:2 4 5 3 5 4 6 3 2 4;}\
                    @font-face\
                        {font-family:Calibri;\
                        panose-1:2 15 5 2 2 2 4 3 2 4;}\
                    @font-face\
                        {font-family:Verdana;\
                        panose-1:2 11 6 4 3 5 4 4 2 4;}\
                    @font-face\
                        {font-family:Calibri-Bold;\
                        panose-1:0 0 0 0 0 0 0 0 0 0;}\
                    /* Style Definitions */\
                    p.MsoNormal, li.MsoNormal, div.MsoNormal\
                        {margin:0in;\
                        margin-bottom:.0001pt;\
                        font-size:11.0pt;\
                        font-family:"Calibri",sans-serif;}\
                    a:link, span.MsoHyperlink\
                        {mso-style-priority:99;\
                        color:#0563C1;\
                        text-decoration:underline;}\
                    a:visited, span.MsoHyperlinkFollowed\
                        {mso-style-priority:99;\
                        color:#954F72;\
                        text-decoration:underline;}\
                    span.EmailStyle17\
                        {mso-style-type:personal-compose;\
                        font-family:"Calibri",sans-serif;\
                        color:windowtext;}\
                    .MsoChpDefault\
                        {mso-style-type:export-only;\
                        font-family:"Calibri",sans-serif;}\
                    @page WordSection1\
                        {size:8.5in 11.0in;\
                        margin:1.0in 1.0in 1.0in 1.0in;}\
                    div.WordSection1\
                        {page:WordSection1;}\
                    --></style><!--[if gte mso 9]><xml>\
                    <o:shapedefaults v:ext="edit" spidmax="1026" />\
                    </xml><![endif]--><!--[if gte mso 9]><xml>\
                    <o:shapelayout v:ext="edit">\
                    <o:idmap v:ext="edit" data="1" />\
                    </o:shapelayout></xml><![endif]-->\
                    </head>\
                    <body lang="EN-US" link="#0563C1" vlink="#954F72">\
                    <div class="WordSection1">\
                    <p class="MsoNormal">Test 102ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd<o:p></o:p></p>\
                    <p class="MsoNormal"><o:p>&nbsp;</o:p></p>\
                    <p class="MsoNormal" style="text-autospace:none"><span style="font-size:10.0pt;font-family:&quot;Verdana&quot;,sans-serif;color:#002D5B">Thanks</span><span style="font-size:8.0pt;font-family:&quot;Verdana&quot;,sans-serif;color:#002D5B">,<o:p></o:p></span></p>\
                    <p class="MsoNormal" style="text-autospace:none"><b><span style="font-size:13.5pt;font-family:&quot;Calibri-Bold&quot;,serif;color:#002D5B">Sivaraj (Siva) Palanisamy<o:p></o:p></span></b></p>\
                    <p class="MsoNormal"><span style="color:#00AEEF">Director</span><span style="font-size:10.0pt;color:#00AEEF"> &#8211;\
                    </span><span style="font-size:10.0pt;color:#00B0F0">Application Development</span><span style="font-size:10.0pt;color:#00B0F0"><o:p></o:p></span></p>\
                    <p class="MsoNormal" style="text-autospace:none"><span style="color:#00B0F0">CTO Organization</span><b><span style="color:#00AEEF">\
                    <o:p></o:p></span></b></p>\
                    <p class="MsoNormal" style="text-autospace:none"><b><span style="font-size:9.0pt;font-family:&quot;Calibri-Bold&quot;,serif;color:#00AEEF">O\
                    </span></b><span style="color:#58595B">919.582.6463<o:p></o:p></span></p>\
                    <p class="MsoNormal" style="text-autospace:none"><b><span style="font-size:9.0pt;font-family:&quot;Calibri-Bold&quot;,serif;color:#00AEEF">M\
                    </span></b><span style="color:#58595B">919.672.7633<o:p></o:p></span></p>\
                    <p class="MsoNormal"><b><span style="font-size:10.0pt;font-family:&quot;Calibri-Bold&quot;,serif;color:#00AEEF">convergeone.com</span></b><span style="font-size:10.0pt;color:#1F497D"><o:p></o:p></span></p>\
                    <p class="MsoNormal"><o:p>&nbsp;</o:p></p>\
                    </div>\
                    \
                    <div>\
                    NOTICE:  This email message and any attachments hereto may contain confidential<br>\
                    information.  Any unauthorized review, use, disclosure, or distribution of such<br>\
                    information is prohibited.  If you are not the intended recipient, please contact<br>\
                    the sender by reply email and destroy the original message and all copies of it.<br>\
                    </div></body>\
                </html>',

                "attachments": [{
                    "attachmentId": "33333333333",
                    "name": "1.txt",
                    "href": "https://google.com"
                },
                {
                    "attachmentId": "555555555555555",
                    "name": "2.txt",
                    "href": "https://abc.com"
                }
                ]

            },
            "isActive": true,
            "customerList": [
                {
                    "alternateCustomer": [],
                    "name": "Fan ",
                    "id": "Fan",
                    "contacts": [
                        {
                            "filter": "EML",
                            "name": "Fan",
                            "id": "FZhi@abc.com"
                        },
                        {
                            "filter": "WEBCHAT",
                            "name": "Fan",
                            "id": "939ad968-e4f8-4a3b-9d46-dfd813874684"
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
                        "filter": "EML",
                        "name": "Fan",
                        "id": "FZhi@abc.com"
                    },
                    {
                        "filter": "WEBCHAT",
                        "name": "Fan",
                        "id": "939ad968-e4f8-4a3b-9d46-dfd813874684"
                    }
                ]
            }
        }
        this.store.dispatch(new AddEmail(this.email))
    }
}
