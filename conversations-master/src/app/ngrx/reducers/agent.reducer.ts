import { Action } from '@ngrx/store'
import { Agent } from '../models/agent.model'
import * as AgentActions from '../actions/agent.actions'

const initialState: Agent = {
    user_name: "test",
    user_password: '',
    user_dn: '1111',
    rq_clientId: '4111222194',
    rq_windowId: 1602529647415,
    token: '',
    loggedIn: false
}

export function agentReducer(state: Agent = initialState, action: AgentActions.Actions) {
    switch (action.type) {
        case AgentActions.UPDATE_AGENT:
            return action.payload;
        case AgentActions.UPDATE_AGENT_TOKEN:
            return {...state,auth_token:action.payload};
        default:
            return state;
    }
  }