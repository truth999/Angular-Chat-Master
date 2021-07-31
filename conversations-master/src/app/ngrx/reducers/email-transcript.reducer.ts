import { Action } from '@ngrx/store'
import { EmailTranscript } from './../models/email-transcript.model'
import * as EmailTranscriptActions from './../actions/email-transcript.actions'

const initialState: EmailTranscript = {
    isReply: false,
    isHolded: false,
    countTimer: 0,
    mainCallFlag: false,
    conferenceCallFlag: 0,
    voiceCountUp: 0,
    chatCountUp: 0,
    emailCountUp: 0,
    transferCallFlag: 0,

}

export function emailTranscriptReducer(state: EmailTranscript = initialState, action: EmailTranscriptActions.Actions) {
  switch (action.type) {
    case EmailTranscriptActions.REPLY_ACTION:
        return {...state, isReply: true }
    case EmailTranscriptActions.CLOSE_REPLY:
        return {...state, isReply: false }
    case EmailTranscriptActions.HOLD_CALL:
      return { ...state, isHolded: true }
    case EmailTranscriptActions.RETREIVE_CALL:
      return {...state, isHolded: false};
    case EmailTranscriptActions.INIT_TIMER:
      return {...state, countTimer: 0};
    case EmailTranscriptActions.INCREASE_TIMER:
      return {...state, countTimer: state.countTimer + 1 }
    case EmailTranscriptActions.START_MAINCALL:
      return {...state, mainCallFlag: true};
    case EmailTranscriptActions.RECEIVED_CALL:
      return {...state, mainCallFlag: false};
    case EmailTranscriptActions.START_CONFERENCECALL:
      return {...state, conferenceCallFlag: 1}
    case EmailTranscriptActions.RECEIVED_CONFERENCECALL:
      return {...state, conferenceCallFlag: 2}
    case EmailTranscriptActions.CLOSE_CONFERENCECALL:
      return {...state, conferenceCallFlag: 0}
    case EmailTranscriptActions.FINISH_CONFERENCECALL:
      return {...state, conferenceCallFlag: 4}


    case EmailTranscriptActions.START_TRANSFERCALL:
      return {...state, transferCallFlag: 1}
    case EmailTranscriptActions.RECEIVED_TRANSFERCALL:
      return {...state, transferCallFlag: 2}
    case EmailTranscriptActions.CLOSE_TRANSFERCALL:
      return {...state, transferCallFlag: 0}
    case EmailTranscriptActions.FINISH_TRANSFERCALL:
      return {...state, transferCallFlag: 4}
  
    default:
      return state;
  }
}
