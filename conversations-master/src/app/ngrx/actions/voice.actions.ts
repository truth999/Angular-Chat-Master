import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Voice } from './../models/voice.model'

// define the const
export const ADD_VOICE = '[Voice] Add'
export const CLEAR_VOICE = '[Voice] CLEAR'
export const UPDATE_VOICE = '[Voice] UPDATE'
export const DELETE_VOICE = '[Voice] DELETE'

export class AddVoice implements Action {
    readonly type = ADD_VOICE
    constructor(public payload: Voice) { }
}

export class ClearVoice implements Action {
    readonly type = CLEAR_VOICE
    constructor() { }
}

export class UpdateVoice implements Action {
    readonly type = UPDATE_VOICE
    constructor(public payload: { callId: String, voice: any }) { }
}

export class DeleteVoice implements Action {
    readonly type = DELETE_VOICE
    constructor(public payload: String) { }
}


export type Actions = AddVoice | ClearVoice | UpdateVoice | DeleteVoice
