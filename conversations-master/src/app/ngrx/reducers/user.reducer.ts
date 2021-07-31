import { Action } from '@ngrx/store'
import { User } from './../models/user.model'
import * as UserActions from './../actions/user.actions'

const initialState: User = {
    user_id: 1,
    first_name: 'Vernon',
    last_name: 'Grant',
    email: 'solutionarchitect00@gmail.com',
    auth_token: '123456',
    status: 'active',
    is_active: true
}

export function userReducer(state: User = initialState, action: UserActions.Actions) {
    switch (action.type) {
        case UserActions.UPDATE_USER:
            return action.payload;
        case UserActions.UPDATE_USER_TOKEN:
            return {...state,auth_token:action.payload};
        default:
            return state;
    }
  }