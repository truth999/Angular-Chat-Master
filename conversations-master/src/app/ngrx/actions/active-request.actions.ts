import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ActiveRequest } from './../models/active-request.model'

// define the const
export const ADD_ACTIVEREQUEST = '[ActiveRequest] Add'
export const ADD_LINKEDTOACTIVEREQUEST = '[ActiveRequest] AddLinkedto'
export const CLEAR_ACTIVEREQUESTS = '[ActiveRequest] CLEAR'
export const UPDATE_ACTIVEREQUEST = '[ActiveRequest] UPDATE'
export const DELETE_ACTIVEREQUEST = '[ActiveRequest] DELETE'
export const ADD_ACTIVEREQUEST_TO_FIRST = '[ActiveRequest] AddToFirst'

export class AddActiveRequest implements Action {
    readonly type = ADD_ACTIVEREQUEST
    constructor(public payload: ActiveRequest) { }
}

export class ClearActiveRequests implements Action {
    readonly type = CLEAR_ACTIVEREQUESTS
    constructor() { }
}

export class UpdateActiveRequest implements Action {
    readonly type = UPDATE_ACTIVEREQUEST
    constructor(public payload: ActiveRequest) { }
}

export class DeleteActiveRequest implements Action {
    readonly type = DELETE_ACTIVEREQUEST
    constructor(public payload: ActiveRequest) { }
}
export class AddLinkedtoActiveRequest implements Action {
    readonly type = ADD_LINKEDTOACTIVEREQUEST
    constructor(public payload: ActiveRequest, linkedtoId: string) { }
}

export class AddActiveRequestToFirst implements Action {
    readonly type = ADD_ACTIVEREQUEST_TO_FIRST
    constructor(public payload: ActiveRequest) { }
}


export type Actions = AddActiveRequest | ClearActiveRequests | UpdateActiveRequest | DeleteActiveRequest | AddLinkedtoActiveRequest | AddActiveRequestToFirst
