import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { EmailTranscript } from './../models/email-transcript.model'

// define the const
export const REPLY_ACTION = '[EMAILTRANSCRIPT] ReplyAction'
export const CLOSE_REPLY = '[EMAILTRANSCRIPT] CloseReply'
export const HOLD_CALL = '[VOICETRANSCRIPT] HoldCall'
export const RETREIVE_CALL = '[VOICETRANSCRIPT] RetreiveCall'
export const INIT_TIMER ='[VOICETRANSCRIPT] InitTimer'
export const INCREASE_TIMER = '[VOICETRANSCRIPT] IncreaseTimer'
export const START_MAINCALL = '[VOICETRANSCRIPT] StartMainCall'
export const RECEIVED_CALL = '[VOICETRANSCRIPT] ReceivedCall'
export const START_CONFERENCECALL = '[VOICETRANSCRIPT] StartConferenceCall'
export const RECEIVED_CONFERENCECALL = '[VOICETRANSCRIPT] ReceivedConferenceCall'
export const CLOSE_CONFERENCECALL = '[VOICETRANSCRIPT] CloseConferenceCall'
export const COUNTUP_TIMER = '[VOICETRANSCRIPT] CountUpTimer'
export const FINISH_CONFERENCECALL = '[VOICETRANSCRIPT] FinishConferenceCall'

export const START_TRANSFERCALL = '[VOICETRANSCRIPT] StartTransferCall'
export const RECEIVED_TRANSFERCALL = '[VOICETRANSCRIPT] ReceivedTransferCall'
export const CLOSE_TRANSFERCALL = '[VOICETRANSCRIPT] CloseTransferCall'
export const FINISH_TRANSFERCALL = '[VOICETRANSCRIPT] FinishTransferCall'

export class ReplyAction implements Action {
    readonly type = REPLY_ACTION

    constructor() {}
}
export class CloseReply implements Action {
    readonly type = CLOSE_REPLY
    
    constructor() {}
}

export class HoldCall implements Action {
    readonly type = HOLD_CALL

    constructor() {}
}
export class RetreiveCall implements Action {
    readonly type = RETREIVE_CALL

    constructor() {}
}

export class InitTimer implements Action {
    readonly type = INIT_TIMER
    constructor() {}
}

export class IncreaseTimer implements Action {
    readonly type = INCREASE_TIMER
    constructor() {}
}

export class StartMainCall implements Action {
    readonly type = START_MAINCALL
    constructor() {}
}
export class ReceivedCall implements Action {
    readonly type = RECEIVED_CALL
    constructor() {}

}

export class StartConferenceCall implements Action {
    readonly type = START_CONFERENCECALL
    constructor() {}
}

export class ReceiveConferenceCall implements Action {
    readonly type = RECEIVED_CONFERENCECALL;
    constructor() {}
}

export class CloseConferenceCall implements Action {
    readonly type = CLOSE_CONFERENCECALL;
    constructor() {}
}

export class FinishConferenceCall implements Action {
    readonly type = FINISH_CONFERENCECALL
}


export class StartTransferCall implements Action {
    readonly type = START_TRANSFERCALL
    constructor() {}
}

export class ReceiveTransferCall implements Action {
    readonly type = RECEIVED_TRANSFERCALL;
    constructor() {}
}

export class CloseTransferCall implements Action {
    readonly type = CLOSE_TRANSFERCALL;
    constructor() {}
}

export class FinishTransferCall implements Action {
    readonly type = FINISH_TRANSFERCALL
}

// export class CountUpTimer implements Action {
//     readonly = COUNTUP_TIMER;
//     constructor() {}
// }
export type Actions = ReplyAction | CloseReply | HoldCall | RetreiveCall | InitTimer | IncreaseTimer | StartMainCall | ReceivedCall | StartConferenceCall | ReceiveConferenceCall | CloseConferenceCall | FinishConferenceCall | StartTransferCall | ReceiveTransferCall | CloseTransferCall | FinishTransferCall
