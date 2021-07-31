import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Call } from './../models/call.model'

// define the const
export const UPDATE_CALL = '[Call] Update'
export const CREATE_CALL = '[Call] Create'
export const CREATE_MAIN_CALL = '[Call] CreateMainCall'
export const DELETE_CALL = '[Call] Delete'

export class CreateCall implements Action {
    readonly type = CREATE_CALL
    constructor(public payload: Call) { }
}

export class CreateMainCall implements Action {
    readonly type = CREATE_MAIN_CALL
    constructor(public payload: Call) { }
}
export class UpdateCall implements Action {
    readonly type = UPDATE_CALL
    constructor(public payload: Call, public index: number) { }
}

export class DeleteCall implements Action {
    readonly type = DELETE_CALL
    constructor(public payload: number) { }
}

export type Actions = CreateCall | CreateMainCall | UpdateCall | DeleteCall
