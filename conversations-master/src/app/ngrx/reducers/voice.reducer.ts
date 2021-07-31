import { Action } from '@ngrx/store'
import { Voice } from './../models/voice.model'
import * as VoiceActions from './../actions/voice.actions'

const initialState: Voice[] = [];

export function voiceReducer(state: Voice[] = initialState, action: any) {
    switch (action.type) {
        case VoiceActions.ADD_VOICE:
            return [...state, action.payload];
        case VoiceActions.CLEAR_VOICE:
            return state = [];
        case VoiceActions.UPDATE_VOICE:
            let index = state.findIndex(element => element.callId == action.payload.callId);
            let newArray = [...state];
            newArray[index] = { ...newArray[index], ...action.payload.voice }
            return state = newArray;
        case VoiceActions.DELETE_VOICE:
            let newState = state.filter(element => element.callId != action.payload);
            return state = newState;
        default:
            return state;
    }
}