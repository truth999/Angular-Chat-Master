import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Email } from './../models/email.model'

// define the const
export const ADD_EMAIL = '[Email] Add'
export const CLEAR_EMAILS = '[Email] CLEAR'
export const UPDATE_EMAIL = '[Email] UPDATE'
export const DELETE_EMAIL = '[Email] DELETE'

export class AddEmail implements Action {
    readonly type = ADD_EMAIL
    constructor(public payload: Email) { }
}

export class ClearEmails implements Action {
    readonly type = CLEAR_EMAILS
    constructor() { }
}

export class UpdateEmail implements Action {
    readonly type = UPDATE_EMAIL
    constructor(public payload: { callId: String, email: any }) { }
}

export class DeleteEmail implements Action {
    readonly type = DELETE_EMAIL
    constructor(public payload: String) { }
}


export type Actions = AddEmail | ClearEmails | UpdateEmail | DeleteEmail
