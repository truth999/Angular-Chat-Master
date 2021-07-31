import { Action } from '@ngrx/store'
import { ErrorHistory } from './../models/error-history.model'
import * as ErrorActions from './../actions/error-history.action'

const initialState: ErrorHistory[] = [];

export function errorHistoryReducer(state: ErrorHistory[] = initialState, action: any) {
    switch (action.type) {
        case ErrorActions.ADD_HISTORY:

            return [action.payload, ...state];
        case ErrorActions.CLEAR_HISTORY:
            return state = [];
        case ErrorActions.UPDATE_HISTORY:
            let index = state.findIndex(element => (element.message == action.payload.message && element.time == action.payload.time));
            let newArray = [...state];
            newArray[index] = { ...newArray[index], ...action.payload }
            return state = newArray;
        case ErrorActions.DELETE_HISTORY:
            let deleteIndex = state.findIndex(element => (element.message == action.payload.message && element.time == action.payload.time));
            let newState = state.filter((element, i) => i !== deleteIndex);
            return state = newState;
        default:
            return state;
    }
}