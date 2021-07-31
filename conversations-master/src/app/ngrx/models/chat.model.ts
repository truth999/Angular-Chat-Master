export interface Chat {
    id: String;
    Name: String;
    type: String; //chat, email, voice
    callId: String;
    conversationId: String;
    customerInfo: {
        name: String;
        id: String;
    };
    callType: String; //INBOUND or OUTBOUND
    callSubType: String;
    filtertype: String;
    EstablishConversation: Boolean;
    startDate: String;
    endDate: String;
    WrapUpCode: String;
    WrapUpComment: String;
    wrapupInProgress: Boolean;
    screenPopDone: Boolean;
    showCobrowseCriteria: Boolean; //for chat
    isWebChatFilter: Boolean; //for chat
    isVerifiedAfterRefresh: Boolean; // for chat
    blockWordsFound: Boolean; //for chat
    blockWordMessage: String; //for chat
    enableManualScreenpop: Boolean; //for chat
    agentCobrowseEnable: Boolean; //for chat
    historyReuestResponseCount: number; // for chat
    startTime: number; // for chat
    isActive: Boolean;
    channelInfo: { WEBCHAT: string }[]; //[{ "WEBCHAT": "939ad968-e4f8-4a3b-9d46-dfd813874684" }]
    chatTranscript: {
        senderId: String;
        message: String;
        timestamp: String;
        display?: String;
        action?: String;
        type?: String;
        description?: String;
        price?: String;
        raisedBy: String;
        url?: any;
    }[];
    // Last10MinsHistory: Boolean;
    cannedResponse: {
        availableTextResponses: {
            skill: String;
            name: String;
            text: String;
            type: String;
            timestamp: Number;
        }[];
        availableActionResponses: {
            attachment: {
                type: 'action';
                message: {
                    data?: String;
                    display: String;
                    action: String;
                    type: String;
                    order: Number;
                }[];
            };
            skill: String;
            name: String;
            text: String;
            type: String;
            timestamp: Number;
        }[];
        selectedCannedResponse: String;
        newCannedResponse: {
            name: String;
            text: String;
        };
    };
    sessionNotes: {
        notes: String;
        conversationId: String;
        timestamp: Number;
        localDate: String;
        localDateTime: String;
        fromHistory: Boolean;
        filterName: String;
        channel: String; //CHAT, EMAIL or VOICE
    }[];
    HistoryConversations: {};
    activityHistory: {
        dateTime: String;
        id: String;
        sortDateTime: Number;
        channel: String; //CHAT, EMAIL or VOICE
        activityObjects: {
            key: String;
            value: any;
            isValidUrl: Boolean;
        }[];
    }[];
    customerIntents: {
        aiName: String;

        lastUpdate: String;
        customerId: String;
        contexts?: {
            lifespan: Number;
            name: String;
            parameters: {
                zipcode: String;
                zipcode_original: String;
                location: {
                    country: String;
                    city: String;
                    'admin-area': String;
                    'business-name': String;
                    'street-address': String;
                    'zip-code': String;
                    shortcut: String;
                    island: String;
                    'subadmin-area': String;
                };
                location_original: String;
            };
        }[];
        name?: String;
        lastComment?: String;
        mediaType?: String;
        id: String;
        state: String; // Open, Closed
        createddatetime?: String;
        lastActor?: {
            name: String;
            id: String;
        };
        friendlyName: String;
        relevance?: String;
        displayAllowed: Boolean;
    }[];
    masterIntentsList: {
        aiName: String;
        name: String;
        friendlyName: String;
    }[];
    signalingVars: {
        meta_ucid: String;
        meta_dnis_name: String;
        call_id: String;
        meta_distributing_vdn: String;
        meta_mediatype: String;
        meta_customername: String;
        meta_dnis: String;
        meta_ani: String;
        call_status: String;
        meta_vdnname: String;
        call_sub_type: String;
        meta_sysid: String;
        src_addr: String;
        meta_original_ucid: String;
        meta_skill: String;
        call_type: String;
        dst_addr: String;
        meta_tsapi_call_id: String;
        meta_delivering_acd: String;
        meta_uui: String;
        meta_filtertype: String;
        meta_conversationid: String;
        ev_name: String;
        meta_skill_name: String;
        meta_ani_name: String;
        callinitiatedtime__c: String;
        callinitiatedtimeiso: String;
        callinitiatedtime: Number;
        meta_autoassociatequeryval: String;
        subject: String;
        status: String;
        calltype: String;
        callobject: String;
        auto_in_enabled: String;
        wrapup_enabled: String;
        callansweredtime__c: String;
        callansweredtimeiso: String;
        callansweredtime: Number;
    };
    displayData: {
        name: String;
        value?: String;
        type: String; //string, timer, interval
    }[];
    callLog: {
        associatevals: [];
        relatevals: {
            object: String;
            name: String;
            id: String;
            label: String;
            isLead: Boolean;
        }[];
        associated?: String;
        related: {
            object: String;
            name: String;
            id: String;
            label: String;
            isLead: Boolean;
        };
    };

    customerList: {
        alternateCustomer?: [];
        name: String;
        id: String;
        contacts: {
            filter: String;
            name: String;
            id: String;
        }[];
    }[];
    selectedCustomer: {
        alternateCustomer?: [];
        name: String;
        id: String;
        contacts: {
            filter: String;
            name: String;
            id: String;
        }[];
    };
}