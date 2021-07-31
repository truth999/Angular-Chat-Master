import { Action } from '@ngrx/store'
import { AppStatus } from './../models/app-status.model'
import * as AppStatusActions from './../actions/app-status.actions'

const initialState: AppStatus = {
    isReply: false,
    isHolded: false,
    countTimer: 0,
    mainCallFlag: false,
    conferenceCallFlag: 0,
    voiceCountUp: 0,
    chatCountUp: 0,
    emailCountUp: 0,
    transferCallFlag: 0,
    editScheduleCallbackIndex: 0,
    scheduleCallbackPageStatus: 'scheduleCallbackListPage',

}

export function AppStatusReducer(state: AppStatus = initialState, action: AppStatusActions.Actions) {
    switch (action.type) {
        case AppStatusActions.REPLY_ACTION:
            return { ...state, isReply: true }
        case AppStatusActions.CLOSE_REPLY:
            return { ...state, isReply: false }
        case AppStatusActions.HOLD_CALL:
            return { ...state, isHolded: true }
        case AppStatusActions.RETREIVE_CALL:
            return { ...state, isHolded: false };
        case AppStatusActions.INIT_TIMER:
            return { ...state, countTimer: 0 };
        case AppStatusActions.INCREASE_TIMER:
            return { ...state, countTimer: state.countTimer + 1 }
        case AppStatusActions.START_MAINCALL:
            return { ...state, mainCallFlag: true };
        case AppStatusActions.RECEIVED_CALL:
            return { ...state, mainCallFlag: false };
        case AppStatusActions.START_CONFERENCECALL:
            return { ...state, conferenceCallFlag: 1 }
        case AppStatusActions.RECEIVED_CONFERENCECALL:
            return { ...state, conferenceCallFlag: 2 }
        case AppStatusActions.CLOSE_CONFERENCECALL:
            return { ...state, conferenceCallFlag: 0 }
        case AppStatusActions.FINISH_CONFERENCECALL:
            return { ...state, conferenceCallFlag: 4 }


        case AppStatusActions.START_TRANSFERCALL:
            return { ...state, transferCallFlag: 1 }
        case AppStatusActions.RECEIVED_TRANSFERCALL:
            return { ...state, transferCallFlag: 2 }
        case AppStatusActions.CLOSE_TRANSFERCALL:
            return { ...state, transferCallFlag: 0 }
        case AppStatusActions.FINISH_TRANSFERCALL:
            return { ...state, transferCallFlag: 4 }

        case AppStatusActions.SHOW_NEW_SCHEDULE_CALLBACK_PAGE:
            return { ...state, scheduleCallbackPageStatus: 'newScheduleCallbackPage' }
        case AppStatusActions.SHOW_EDIT_SCHEDULE_CALLBACK_PAGE:
            return { ...state, scheduleCallbackPageStatus: 'editScheduleCallbackPage', editScheduleCallbackIndex: action.index }
        case AppStatusActions.SHOW_SCHEDULE_CALLBACK_LIST_PAGE:
            return { ...state, scheduleCallbackPageStatus: 'scheduleCallbackListPage' }

        default:
            return state;
    }
}
