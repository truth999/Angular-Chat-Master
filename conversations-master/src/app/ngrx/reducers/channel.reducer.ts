import { Action } from '@ngrx/store'
import { Channel } from './../models/channel.model'
import * as ChannelActions from './../actions/channel.actions'

const initialState: Channel = {
  "chat": {
    "agentStatus": {
      "currentState": "READY",
      "currentReasonCode": "0",
      "availablewrapUp": false,
      "countUp": 0,
      "availableStates": [
        "READY",
        "NOT_READY",
        "MODE_WRAPUP",
        "OUT_OF_SERVICE"
      ],
      "logoutReasonCodes": [
        {
          "name": "End Of The Day",
          "value": "5"
        },
        {
          "name": "Meeting",
          "value": "6"
        }
      ],
      "notReadyReasonCodes": [
        {
          "name": "Default",
          "value": "0"
        },
        {
          "name": "Break",
          "value": "1"
        },
        {
          "name": "lunch",
          "value": "2"
        },
        {
          "name": "Meeting",
          "value": "3"
        }
      ],
      "wrapUpReasonCodes": [
        {
          "name": "Query resolved",
          "value": "9"
        },
        {
          "name": "New Query",
          "value": "10"
        }
      ]
    }
  },
  "email": {
    "agentStatus": {
      "currentState": "NOT_READY",
      "currentReasonCode": "1",
      "availablewrapUp": true,
      "countUp": 0,
      "availableStates": [
        "READY",
        "NOT_READY",
        "MODE_WRAPUP",
        "OUT_OF_SERVICE"
      ],
      "logoutReasonCodes": [
        {
          "name": "End Of The Day",
          "value": "5"
        },
        {
          "name": "Meeting",
          "value": "6"
        }
      ],
      "notReadyReasonCodes": [
        {
          "name": "Default",
          "value": "0"
        },
        {
          "name": "Break",
          "value": "1"
        },
        {
          "name": "lunch",
          "value": "2"
        },
        {
          "name": "Meeting",
          "value": "3"
        }
      ],
      "wrapUpReasonCodes": [
        {
          "name": "Query resolved",
          "value": "9"
        },
        {
          "name": "New Query",
          "value": "10"
        }
      ]
    }
  },
  "voice": {
    "agentStatus": {
      "currentState": "NOT_READY",
      "currentReasonCode": "2",
      "availablewrapUp": false,
      "countUp": 0,
      "availableStates": [
        "READY",
        "NOT_READY",
        "MODE_WRAPUP",
        "OUT_OF_SERVICE"
      ],
      "logoutReasonCodes": [
        {
          "name": "End Of The Day",
          "value": "5"
        },
        {
          "name": "Meeting",
          "value": "6"
        }
      ],
      "notReadyReasonCodes": [
        {
          "name": "Default",
          "value": "0"
        },
        {
          "name": "Break",
          "value": "1"
        },
        {
          "name": "lunch",
          "value": "2"
        },
        {
          "name": "Meeting",
          "value": "3"
        }
      ],
      "wrapUpReasonCodes": [
        {
          "name": "Query resolved",
          "value": "9"
        },
        {
          "name": "New Query",
          "value": "10"
        }
      ]
    }
  }
}

export function channelReducer(state: Channel = initialState, action: ChannelActions.Actions) {
  switch (action.type) {
    case ChannelActions.UPDATE_CHANNEL:
      return action.payload;

    default:
      return state;
  }
}
