import { Action } from '@ngrx/store'
import { ActiveRequest } from './../models/active-request.model'
import * as ActiveRequestActions from './../actions/active-request.actions'

const initialState: ActiveRequest[] = [];

export function activeRequestReducer(state: ActiveRequest[] = initialState, action: any) {
    switch (action.type) {
        case ActiveRequestActions.ADD_ACTIVEREQUEST:
            return [...state, action.payload];
            // return [action.payload, ...state];
        case ActiveRequestActions.ADD_ACTIVEREQUEST_TO_FIRST:
            return [action.payload, ...state];
        case ActiveRequestActions.ADD_LINKEDTOACTIVEREQUEST:
            let indexOfParent = state.findIndex(element => element.callId == action.payload.linkedTo);
            let updatedArray = [...state];
            if (indexOfParent == 4) {
                updatedArray.splice(3, 0, state[indexOfParent]);
                updatedArray.splice(4, 0, action.payload);
            }
            else {
                updatedArray.splice(indexOfParent + 1, 0, action.payload);
            }

            // console.log(updatedArray);
            return state = updatedArray;
        case ActiveRequestActions.CLEAR_ACTIVEREQUESTS:
            return state = [];
        case ActiveRequestActions.UPDATE_ACTIVEREQUEST:
            let index = state.findIndex(element => element.callId == action.payload.callId);
            let newArray = [...state];
            newArray[index] = action.payload
            return state = newArray;
        case ActiveRequestActions.DELETE_ACTIVEREQUEST:
            let newState = state.filter(request => request.callId != action.payload.callId);
            return state = newState;
        default:
            return state;
    }
}