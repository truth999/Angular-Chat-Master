import { Action } from '@ngrx/store'
import { Call } from './../models/call.model'
import * as CallActions from './../actions/call.actions'

// const initialState: Channel = {

// }

export function callReducer(state: Call[] = [], action: CallActions.Actions) {
    switch (action.type) {
        case CallActions.CREATE_CALL:
            return [...state, action.payload];
        case CallActions.CREATE_MAIN_CALL:
            return [action.payload, ...state];
        case CallActions.UPDATE_CALL:
            let nextState = [...state];
            nextState[action.index - 1] = action.payload;
            return nextState;
        case CallActions.DELETE_CALL:
            // state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
