import { Action } from '@ngrx/store'
import { OpenedRequestDetail } from './../models/opened-requestdetail.model';
import * as ChangeOpenedRequest from './../actions/opened-requestdetail.actions';

const initailOpenArDetail: OpenedRequestDetail = {
    callId: '',
};

export function openedRequestDetailReducer(state: OpenedRequestDetail = initailOpenArDetail, action: any) {
    switch (action.type) {
        case ChangeOpenedRequest.CHANGE_OPENEDREQUEST:
            return { callId: action.payload }
        default:
            return state;
    }
}
