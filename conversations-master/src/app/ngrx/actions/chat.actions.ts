import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Chat } from './../models/chat.model'

// define the const
export const ADD_CHAT = '[Chat] Add'
export const CLEAR_CHATS = '[Chat] CLEAR'
export const UPDATE_CHAT = '[Chat] UPDATE'
export const DELETE_CHAT = '[Chat] DELETE'

export class AddChat implements Action {
    readonly type = ADD_CHAT
    constructor(public payload: Chat) { }
}

export class ClearChats implements Action {
    readonly type = CLEAR_CHATS
    constructor() { }
}

export class UpdateChat implements Action {
    readonly type = UPDATE_CHAT
    constructor(public payload: { callId: String, chat: any }) { }
}

export class DeleteChat implements Action {
    readonly type = DELETE_CHAT
    constructor(public payload: String) { }
}


export type Actions = AddChat | ClearChats | UpdateChat | DeleteChat
