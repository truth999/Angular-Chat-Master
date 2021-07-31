import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { User } from './../models/user.model'

// define the const
export const UPDATE_USER = '[User] Update'
export const UPDATE_USER_TOKEN = '[User] UpdateToken'

export class UpdateUser implements Action {
    readonly type = UPDATE_USER
    constructor(public payload: User) {}
}

export class UpdateUserToken implements Action {
    readonly type = UPDATE_USER_TOKEN
    constructor(public payload: string) {}
}

export type Actions = UpdateUser | UpdateUserToken
