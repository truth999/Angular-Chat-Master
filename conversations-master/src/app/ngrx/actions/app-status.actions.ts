import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { AppStatus } from './../models/app-status.model'

// define the const
export const REPLY_ACTION = '[EmailInteraction] ReplyAction'
export const CLOSE_REPLY = '[EmailInteraction] CloseReply'
export const HOLD_CALL = '[VOICEINTERACTION] HoldCall'
export const RETREIVE_CALL = '[VOICEINTERACTION] RetreiveCall'
export const INIT_TIMER = '[VOICEINTERACTION] InitTimer'
export const INCREASE_TIMER = '[VOICEINTERACTION] IncreaseTimer'
export const START_MAINCALL = '[VOICEINTERACTION] StartMainCall'
export const RECEIVED_CALL = '[VOICEINTERACTION] ReceivedCall'
export const START_CONFERENCECALL = '[VOICEINTERACTION] StartConferenceCall'
export const RECEIVED_CONFERENCECALL = '[VOICEINTERACTION] ReceivedConferenceCall'
export const CLOSE_CONFERENCECALL = '[VOICEINTERACTION] CloseConferenceCall'
export const COUNTUP_TIMER = '[VOICEINTERACTION] CountUpTimer'
export const FINISH_CONFERENCECALL = '[VOICEINTERACTION] FinishConferenceCall'

export const START_TRANSFERCALL = '[VOICEINTERACTION] StartTransferCall'
export const RECEIVED_TRANSFERCALL = '[VOICEINTERACTION] ReceivedTransferCall'
export const CLOSE_TRANSFERCALL = '[VOICEINTERACTION] CloseTransferCall'
export const FINISH_TRANSFERCALL = '[VOICEINTERACTION] FinishTransferCall'

export const SHOW_NEW_SCHEDULE_CALLBACK_PAGE = '[VOICEINTERACTION] ShowNewScheduleCallbackPage'
export const SHOW_EDIT_SCHEDULE_CALLBACK_PAGE = '[VOICEINTERACTION] ShowEditScheduleCallbackPage'
export const SHOW_SCHEDULE_CALLBACK_LIST_PAGE = '[VOICEINTERACTION] ShowScheduleCallbackListPage'

export class ReplyAction implements Action {
    readonly type = REPLY_ACTION

    constructor() { }
}
export class CloseReply implements Action {
    readonly type = CLOSE_REPLY

    constructor() { }
}

export class HoldCall implements Action {
    readonly type = HOLD_CALL

    constructor() { }
}
export class RetreiveCall implements Action {
    readonly type = RETREIVE_CALL

    constructor() { }
}

export class InitTimer implements Action {
    readonly type = INIT_TIMER
    constructor() { }
}

export class IncreaseTimer implements Action {
    readonly type = INCREASE_TIMER
    constructor() { }
}

export class StartMainCall implements Action {
    readonly type = START_MAINCALL
    constructor() { }
}
export class ReceivedCall implements Action {
    readonly type = RECEIVED_CALL
    constructor() { }

}

export class StartConferenceCall implements Action {
    readonly type = START_CONFERENCECALL
    constructor() { }
}

export class ReceiveConferenceCall implements Action {
    readonly type = RECEIVED_CONFERENCECALL;
    constructor() { }
}

export class CloseConferenceCall implements Action {
    readonly type = CLOSE_CONFERENCECALL;
    constructor() { }
}

export class FinishConferenceCall implements Action {
    readonly type = FINISH_CONFERENCECALL
}


export class StartTransferCall implements Action {
    readonly type = START_TRANSFERCALL
    constructor() { }
}

export class ReceiveTransferCall implements Action {
    readonly type = RECEIVED_TRANSFERCALL;
    constructor() { }
}

export class CloseTransferCall implements Action {
    readonly type = CLOSE_TRANSFERCALL;
    constructor() { }
}

export class FinishTransferCall implements Action {
    readonly type = FINISH_TRANSFERCALL
}

export class ShowNewScheduleCallbackPage implements Action {
    readonly type = SHOW_NEW_SCHEDULE_CALLBACK_PAGE
    constructor() { }
}

export class ShowEditScheduleCallbackPage implements Action {
    readonly type = SHOW_EDIT_SCHEDULE_CALLBACK_PAGE
    constructor(public index: number) { }
}

export class ShowScheduleCallbackListPage implements Action {
    readonly type = SHOW_SCHEDULE_CALLBACK_LIST_PAGE
    constructor() { }
}
// export class CountUpTimer implements Action {
//     readonly = COUNTUP_TIMER;
//     constructor() {}
// }
export type Actions = ReplyAction | CloseReply | HoldCall | RetreiveCall | InitTimer | IncreaseTimer | StartMainCall | ReceivedCall | StartConferenceCall | ReceiveConferenceCall | CloseConferenceCall | FinishConferenceCall | StartTransferCall | ReceiveTransferCall | CloseTransferCall | FinishTransferCall | ShowNewScheduleCallbackPage | ShowScheduleCallbackListPage | ShowEditScheduleCallbackPage
