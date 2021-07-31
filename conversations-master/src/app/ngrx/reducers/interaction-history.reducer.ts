import { Action } from '@ngrx/store'
import { InteractionHistory } from './../models/interaction-history.model'
import * as InteractionHistoryActions from './../actions/interaction-history.action'

const initialState: InteractionHistory[] = [];

export function interactionHistoryReducer(state: InteractionHistory[] = initialState, action: any) {
    switch (action.type) {
        case InteractionHistoryActions.UPDATE_INTERACTION_HISTORY:
            let updatedState = [...state];
            updatedState[action.payload.index] = { ...updatedState[action.payload.index], ...action.payload.history }
            return state = updatedState;
        case InteractionHistoryActions.ADD_INTERACTION_HISTORIES:
            return state = action.payload;
        default:
            return state;
    }
}