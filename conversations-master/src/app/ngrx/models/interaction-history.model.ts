export interface InteractionHistory {
    type: string;
    name: string;
    callansweredtime__c: string;
    subject: string;
    callLog: {
        associatevals: {
            object: string,
            name: string,
            id: string,
            label: string,
            isLead: boolean
        }[],
        relatevals: {
            object: string,
            name: string,
            id: string,
            label: string,
            isLead: boolean
        }[],
        associated: {
            object: string,
            name: string,
            id: string,
            label: string,
            isLead: boolean
        },
        related: {
            object: string,
            name: string,
            id: string,
            label: string,
            isLead: boolean
        }
    },
    WrapUpCode: {
        chosen: string,
        available: {
            9?: string,
            10?: string,
        }
    },
    WrapUpComment: string,
    sessionNotes: {
        notes: string,
        conversationId: string,
        timestamp: number,
        localDate: string,
        localDateTime: string,
        fromHistory: boolean,
        filterName: string,
        channel: string,
    }[],
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
    }[],

    chatTranscript?: {
        senderId: String;
        message: String;
        timestamp: String;
        raisedBy: String;
    }[];

    emailContent?: {
        headers: {
            cc: { email: String }[];
            bcc: { email: String }[];
            'x-priority': String;
            subject: String;
            replyTo: {
                name: String;
                id: String;
            };
            from: {
                name: String;
                id: String;
            };
            'content-type': String;
            to: {
                name: String;
                id: String;
            }[];
            priority: String;
            lang: String;
            encoding: String;
            decodedTime: String;
        };
        body: String;
        bodyHtml: string;
        attachments: {
            attachmentId: String,
            name: String,
            href: String
        }[];
    };

    voiceTranscript?:
    {
        senderId: String,
        message: String,
        timestamp: String,
        raisedBy: String
    }[],
};