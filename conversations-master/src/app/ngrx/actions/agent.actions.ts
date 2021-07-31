import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Agent } from '../models/agent.model'

// define the const
export const UPDATE_AGENT = '[Agent] Update'
export const UPDATE_AGENT_TOKEN = '[Agent] UpdateToken'

export class UpdateAgent implements Action {
    readonly type = UPDATE_AGENT
    constructor(public payload: Agent) {}
}

export class UpdateAgentToken implements Action {
    readonly type = UPDATE_AGENT_TOKEN
    constructor(public payload: string) {}
}

export type Actions = UpdateAgent | UpdateAgentToken
