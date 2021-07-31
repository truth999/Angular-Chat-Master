import { Action } from '@ngrx/store'
import { Chat } from './../models/chat.model'
import * as ChatActions from './../actions/chat.actions'

const initialState: Chat[] = [];

export function chatReducer(state: Chat[] = initialState, action: any) {
    switch (action.type) {
        case ChatActions.ADD_CHAT:
            return [...state, action.payload];
        case ChatActions.CLEAR_CHATS:
            return state = [];
        case ChatActions.UPDATE_CHAT:
            let index = state.findIndex(element => element.callId == action.payload.callId);
            let newArray = [...state];
            newArray[index] = { ...newArray[index], ...action.payload.chat }
            return state = newArray;
        case ChatActions.DELETE_CHAT:
            let newState = state.filter(element => element.callId != action.payload);
            return state = newState;
        default:
            return state;
    }
}