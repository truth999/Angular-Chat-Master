import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ScheduleCallback } from './../models/schedule-callback.model'

// define the const
export const UPDATE_CALLBACK = '[CALLBACK] Update'
export const ADD_CALLBACK = '[CALLBACK] ADD'
export const DELETE_CALLBACK = '[CALLBACK] DELETE'

export class AddCallback implements Action {
    readonly type = ADD_CALLBACK
    constructor(public payload: ScheduleCallback) { }
}

export class UpdateCallback implements Action {
    readonly type = UPDATE_CALLBACK
    constructor(public payload: ScheduleCallback, public index: number) { }
}

export class DeleteCallback implements Action {
    readonly type = DELETE_CALLBACK
    constructor(public index: number) { }
}
export type Actions = AddCallback | UpdateCallback | DeleteCallback
