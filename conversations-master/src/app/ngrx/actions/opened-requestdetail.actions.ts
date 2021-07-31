import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { OpenedRequestDetail } from '../models/opened-requestdetail.model'

// define the const
export const CHANGE_OPENEDREQUEST = '[OPENDREQUEST] CHANGE'

export class ChangeOpenedRequest implements Action {
    readonly type = CHANGE_OPENEDREQUEST
    constructor(public payload: String) { }
}
