import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { InteractionHistory } from './../models/interaction-history.model'

export const UPDATE_INTERACTION_HISTORY = '[INTERACTIONHISTORY] UPDATE'
export const ADD_INTERACTION_HISTORIES = '[INTERACTIONHISTORY] ADD'

export class UpdateInteractionHistory implements Action {
    readonly type = UPDATE_INTERACTION_HISTORY
    constructor(public payload: { history: InteractionHistory, index: number }) { }
}

export class AddInteractionHistories implements Action {
    readonly type = ADD_INTERACTION_HISTORIES
    constructor(public payload: any) { }
}

export type Actions = UpdateInteractionHistory
