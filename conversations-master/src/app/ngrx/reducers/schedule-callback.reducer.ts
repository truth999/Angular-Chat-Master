import { Action } from '@ngrx/store'
import { ScheduleCallback } from './../models/schedule-callback.model'
import * as ScheduleCallbackActions from './../actions/schedule-callbacks.actions'

const initialState: ScheduleCallback[] = [];

export function ScheduleCallbackReducer(state: ScheduleCallback[] = initialState, action: any) {
    switch (action.type) {
        case ScheduleCallbackActions.ADD_CALLBACK:
            return [...state, action.payload];
        case ScheduleCallbackActions.UPDATE_CALLBACK:
            // state[action.index] = action.payload;

            let newStateValue = [...state];
            newStateValue[action.index] = action.payload;
            return state = newStateValue;
        case ScheduleCallbackActions.DELETE_CALLBACK:
            let newState = state.filter((element, index) => index != action.index)
            return newState;
        default:
            return state;
    }
}