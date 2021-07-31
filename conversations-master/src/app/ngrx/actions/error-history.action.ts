import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ErrorHistory } from './../models/error-history.model'

// define the const
export const ADD_HISTORY = '[ERRORHISTORY] ADD'
export const CLEAR_HISTORY = '[ERRORHISTORY] CLEAR'
export const UPDATE_HISTORY = '[ERRORHISTORY] UPDATE'
export const DELETE_HISTORY = '[ERRORHISTORY] DELETE'

export class AddErrorHistory implements Action {
    readonly type = ADD_HISTORY
    constructor(public payload: ErrorHistory) { }
}

export class ClearErrorHistories implements Action {
    readonly type = CLEAR_HISTORY
    constructor() { }
}

export class UpdateErrorHistory implements Action {
    readonly type = UPDATE_HISTORY
    constructor(public payload: ErrorHistory) { }
}

export class DeleteErrorHistory implements Action {
    readonly type = DELETE_HISTORY
    constructor(public payload: ErrorHistory) { }
}


export type Actions = AddErrorHistory | ClearErrorHistories | UpdateErrorHistory | DeleteErrorHistory
