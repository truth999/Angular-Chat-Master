export interface Voice {
    id: String,
    Name: String,
    type: String,
    callId: String,
    conversationId: String,
    customerInfo: {
        name: String,
        id: String
    },
    callType: String,
    callSubType: String,
    filtertype: String,
    EstablishConversation: boolean,
    startDate: String,
    endDate: String,
    WrapUpCode: String,
    WrapUpComment: String,
    EnableTranscript: boolean,
    originalCallId: string,
    voiceTranscript:
    {
        senderId: String,
        message: String,
        timestamp: String,
        raisedBy: String
    }[],
    cannedResponse: {
        availableTextResponses:
        {
            skill: String,
            name: String,
            text: String,
            type: String,
            timestamp: Number
        }[],

        availableActionResponses: [
            {
                attachment: {
                    type: String,
                    message:
                    {
                        data: boolean,
                        display: String,
                        action: String,
                        type: String,
                        order: Number
                    }[],
                },
                skill: String,
                name: String,
                text: String,
                type: String,
                timestamp: Number
            }
        ],
        selectedCannedResponse: String,
        newCannedResponse: {
            name: String,
            text: String
        }
    },
    sessionNotes:
    {
        notes: String,
        conversationId: String,
        timestamp: Number,
        localDate: String,
        localDateTime: String,
        fromHistory: boolean,
        filterName: String,
        channel: String
    }[],
    HistoryConversations: {},
    activityHistory:
    {
        dateTime: String,
        id: String,
        sortDateTime: Number,
        channel: String,
        activityObjects:
        {
            key: String,
            value: any,
            isValidUrl: boolean
        }[],
    }[],
    channelInfo: [{}],
    signalingVars: {
        meta_ucid: String,
        call_id: String,
        meta_mediatype: String,
        auto_in_enabled: any,
        meta_dnis: String,
        meta_ani: String,
        call_status: String,
        wrapup_enabled: boolean,
        call_sub_type: String,
        src_addr: String,
        meta_original_ucid: String,
        meta_skill: String,
        call_type: String,
        dst_addr: String,
        meta_tsapi_call_id: String,
        meta_delivering_acd: String,
        meta_uui: String,
        ev_name: String,
        meta_skill_name: String,
        media_type: String
    },
    displayData:
    {
        name: String,
        value?: any,
        type: String
    }[],
    callLog: {
        associatevals: [],
        relatevals:
        {
            object: String,
            name: String,
            id: String,
            label: String,
            isLead: boolean
        }[],
        associated: boolean,
        related: {
            object: String,
            name: String,
            id: String,
            label: String,
            isLead: boolean
        }
    },
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
        status?: String;
        conversationId?: String;
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
    screenPopDone: boolean,
    isVerifiedAfterRefresh: boolean,
    isActive: boolean,
    wrapupInProgress: boolean,
    enableManualScreenpop: boolean,
    historyReuestResponseCount: Number,
    startTime: Number,
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
    btns: {
        answer: boolean,
        retrieve: boolean,
        hold: boolean,
        endcall: boolean,
        xfer_complete: boolean,
        conf_complete: boolean,
        conf: boolean,
        xfer: boolean,
        makecall: boolean,
        dtmf: boolean,
        divert: boolean,
        schedule_callback: boolean,
    }
}