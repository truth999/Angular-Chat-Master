import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, selectChannel } from '../ngrx/reducers/index.reducer';
import { AddInteractionHistories } from 'src/app/ngrx/actions/interaction-history.action';

const endpoint = 'https://reqres.in/api';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class LastTenInteractionsService {

    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        public router: Router
    ) { }

    loadLastTenInteractions() {
        return new Promise((resolve, reject) => {
            this.http.post<string>(`${endpoint}/login`, { email: "eve.holt@reqres.in", password: "cityslicka" })
                .subscribe(
                    data => {
                        let lastInteractionHistories = [
                            {
                                "type": "chat",
                                "name": "xyz",
                                "callansweredtime__c": "12/23/2020, 5:10:09 PM",
                                "subject": "12/23/2020, 5:10:05 PM",
                                "callLog": {
                                    "associatevals": [
                                        {
                                            "object": "account",
                                            "name": "222",
                                            "id": "592da091dbbc1c9070013445f3961903",
                                            "label": "account:222",
                                            "isLead": false
                                        },
                                        {
                                            "object": "account",
                                            "name": "INC03273422",
                                            "id": "5bc1c9070013445f3961903",
                                            "label": "account:INC03273422",
                                            "isLead": false
                                        }
                                    ],
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
                                            "name": "INC03273422",
                                            "id": "5bc1c9070013445f3961903",
                                            "label": "account:INC03273422",
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
                                "WrapUpCode": {
                                    "chosen": "9",
                                    "available": {
                                        "9": "Query",
                                        "10": "Closed"
                                    }
                                },
                                "WrapUpComment": "Test wrapup comment",
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
                                    }
                                ],
                                "chatTranscript": [
                                    {
                                        "senderId": "Siva",
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
                                        "senderId": "Siva",
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
                                        "senderId": "Siva",
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
                                        "senderId": "AI",
                                        "message": "You will need to log into your account before I can process that request. Please tell me your account number",
                                        "timestamp": "2020-03-24T01:25:17.034Z",
                                        "raisedBy": ""
                                    },
                                    {
                                        "senderId": "Siva",
                                        "message": "7889-88559-44455-5522",
                                        "timestamp": "2020-03-24T01:25:20.360Z",
                                        "raisedBy": "user"
                                    },
                                    {
                                        "senderId": "AI",
                                        "message": "Your last payment of $50 was received on 3/1/2020. Your account is past due.",
                                        "timestamp": "2020-03-24T01:25:29.448Z",
                                        "raisedBy": ""
                                    }
                                ]
                            },

                            {
                                "type": "email",
                                "name": "spalanisamy@convergeone.com",
                                "callansweredtime__c": "12/22/2020, 5:10:09 PM",
                                "subject": "12/23/2020, 5:10:05 PM",
                                "callLog": {
                                    "associatevals": [
                                        {
                                            "object": "account",
                                            "name": "222",
                                            "id": "592da091dbbc1c9070013445f3961903",
                                            "label": "account:222",
                                            "isLead": false
                                        },
                                        {
                                            "object": "account",
                                            "name": "INC03273422",
                                            "id": "5bc1c9070013445f3961903",
                                            "label": "account:INC03273422",
                                            "isLead": false
                                        }
                                    ],
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
                                            "name": "INC03273422",
                                            "id": "5bc1c9070013445f3961903",
                                            "label": "account:INC03273422",
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
                                "WrapUpCode": {
                                    "chosen": "9",
                                    "available": {
                                        "9": "Query",
                                        "10": "Closed"
                                    }
                                },
                                "WrapUpComment": "Test wrapup comment",
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
                                    }
                                ],
                                "emailContent": {
                                    "headers": {
                                        "cc": [],
                                        "bcc": [],
                                        "x-priority": "",
                                        "subject": "test 102 [T_OawXR4V3G9Py]",
                                        "replyTo": {
                                            "name": "Sivaraj Palanisamy",
                                            "id": "spalanisamy@convergeone.com"
                                        },
                                        "from": {
                                            "name": "Sivaraj Palanisamy",
                                            "id": "spalanisamy@convergeone.com"
                                        },
                                        "content-type": "multipart/alternative; \r\n\tboundary=_000_ed73b46bf38a4a3db17a0217db293324NACR503nacrcom_",
                                        "to": [
                                            {
                                                "name": "finance@c1cx.cloud",
                                                "id": "finance@c1cx.cloud"
                                            }
                                        ],
                                        "priority": "",
                                        "lang": "en-US",
                                        "encoding": "",
                                        "decodedTime": "Saturday  4/18/2020, 1:16:08 AM"
                                    },
                                    "bodyHtml": {
                                        "changingThisBreaksApplicationSecurity": "<html xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" xmlns:m=\"http://schemas.microsoft.com/office/2004/12/omml\" xmlns=\"http://www.w3.org/TR/REC-html40\"><head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=us-ascii\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style><!--\r\n/ Font Definitions /\r\n@font-face\r\n\t{font-family:\"Cambria Math\";\r\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;}\r\n@font-face\r\n\t{font-family:Calibri;\r\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;}\r\n@font-face\r\n\t{font-family:Verdana;\r\n\tpanose-1:2 11 6 4 3 5 4 4 2 4;}\r\n@font-face\r\n\t{font-family:Calibri-Bold;\r\n\tpanose-1:0 0 0 0 0 0 0 0 0 0;}\r\n/ Style Definitions /\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0in;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif;}\r\na:link, span.MsoHyperlink\r\n\t{mso-style-priority:99;\r\n\tcolor:#0563C1;\r\n\ttext-decoration:underline;}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{mso-style-priority:99;\r\n\tcolor:#954F72;\r\n\ttext-decoration:underline;}\r\nspan.EmailStyle17\r\n\t{mso-style-type:personal-compose;\r\n\tfont-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext;}\r\n.MsoChpDefault\r\n\t{mso-style-type:export-only;\r\n\tfont-family:\"Calibri\",sans-serif;}\r\n@page WordSection1\r\n\t{size:8.5in 11.0in;\r\n\tmargin:1.0in 1.0in 1.0in 1.0in;}\r\ndiv.WordSection1\r\n\t{page:WordSection1;}\r\n--></style><!--[if gte mso 9]><xml>\r\n<o:shapedefaults v:ext=\"edit\" spidmax=\"1026\" />\r\n</xml><![endif]--><!--[if gte mso 9]><xml>\r\n<o:shapelayout v:ext=\"edit\">\r\n<o:idmap v:ext=\"edit\" data=\"1\" />\r\n</o:shapelayout></xml><![endif]-->\r\n</head>\r\n<body lang=\"EN-US\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">Test 102<o:p></o:p></p>\r\n<p class=\"MsoNormal\"><o:p>&nbsp;</o:p></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><span style=\"font-size:10.0pt;font-family:&quot;Verdana&quot;,sans-serif;color:#002D5B\">Thanks</span><span style=\"font-size:8.0pt;font-family:&quot;Verdana&quot;,sans-serif;color:#002D5B\">,<o:p></o:p></span></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><b><span style=\"font-size:13.5pt;font-family:&quot;Calibri-Bold&quot;,serif;color:#002D5B\">Sivaraj (Siva) Palanisamy<o:p></o:p></span></b></p>\r\n<p class=\"MsoNormal\"><span style=\"color:#00AEEF\">Director</span><span style=\"font-size:10.0pt;color:#00AEEF\"> &#8211;\r\n</span><span style=\"font-size:10.0pt;color:#00B0F0\">Application Development</span><span style=\"font-size:10.0pt;color:#00B0F0\"><o:p></o:p></span></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><span style=\"color:#00B0F0\">CTO Organization</span><b><span style=\"color:#00AEEF\">\r\n<o:p></o:p></span></b></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><b><span style=\"font-size:9.0pt;font-family:&quot;Calibri-Bold&quot;,serif;color:#00AEEF\">O\r\n</span></b><span style=\"color:#58595B\">919.582.6463<o:p></o:p></span></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><b><span style=\"font-size:9.0pt;font-family:&quot;Calibri-Bold&quot;,serif;color:#00AEEF\">M\r\n</span></b><span style=\"color:#58595B\">919.672.7633<o:p></o:p></span></p>\r\n<p class=\"MsoNormal\"><b><span style=\"font-size:10.0pt;font-family:&quot;Calibri-Bold&quot;,serif;color:#00AEEF\">convergeone.com</span></b><span style=\"font-size:10.0pt;color:#1F497D\"><o:p></o:p></span></p>\r\n<p class=\"MsoNormal\"><o:p>&nbsp;</o:p></p>\r\n</div>\r\n\r\n<div>\r\nNOTICE:  This email message and any attachments hereto may contain confidential<br>\r\ninformation.  Any unauthorized review, use, disclosure, or distribution of such<br>\r\ninformation is prohibited.  If you are not the intended recipient, please contact<br>\r\nthe sender by reply email and destroy the original message and all copies of it.<br>\r\n</div></body>\r\n</html>\r\n"
                                    },
                                    "attachments": []
                                }
                            },
                            {
                                "type": "voice",
                                "name": "12345",
                                "callansweredtime__c": "12/23/2020, 5:10:09 PM",
                                "subject": "12/23/2020, 5:10:05 PM",
                                "callLog": {
                                    "associatevals": [
                                        {
                                            "object": "account",
                                            "name": "222",
                                            "id": "592da091dbbc1c9070013445f3961903",
                                            "label": "account:222",
                                            "isLead": false
                                        },
                                        {
                                            "object": "account",
                                            "name": "INC03273422",
                                            "id": "5bc1c9070013445f3961903",
                                            "label": "account:INC03273422",
                                            "isLead": false
                                        }
                                    ],
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
                                            "name": "INC03273422",
                                            "id": "5bc1c9070013445f3961903",
                                            "label": "account:INC03273422",
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
                                "WrapUpCode": {
                                    "chosen": "9",
                                    "available": {
                                        "9": "Query",
                                        "10": "Closed"
                                    }
                                },
                                "WrapUpComment": "Test wrapup comment",
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
                                    }
                                ],
                                "voiceTranscript": [
                                    {
                                        "senderId": "Siva",
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
                                        "senderId": "Siva",
                                        "message": "make a payment",
                                        "timestamp": "2020-03-24T01:25:16.086Z",
                                        "raisedBy": "user"
                                    },
                                    {
                                        "senderId": "AI",
                                        "message": "You will need to log into your account before I can process that request. Please tell me your account number",
                                        "timestamp": "2020-03-24T01:25:17.034Z",
                                        "raisedBy": ""
                                    }
                                ]
                            }
                        ]
                        this.store.dispatch(new AddInteractionHistories(lastInteractionHistories))
                    }
                )
        })
    }
}
