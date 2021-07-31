import { Action } from '@ngrx/store'
import { Email } from './../models/email.model'
import * as EmailActions from './../actions/email.actions'

const initialState: Email[] = [];

export function emailReducer(state: Email[] = initialState, action: any) {
    switch (action.type) {
        case EmailActions.ADD_EMAIL:
            return [...state, action.payload];
        case EmailActions.CLEAR_EMAILS:
            return state = [];
        case EmailActions.UPDATE_EMAIL:
            let index = state.findIndex(element => element.callId == action.payload.callId);
            let newArray = [...state];
            newArray[index] = { ...newArray[index], ...action.payload.email }
            return state = newArray;
        case EmailActions.DELETE_EMAIL:
            let newState = state.filter(element => element.callId != action.payload);
            return state = newState;
        default:
            return state;
    }
}