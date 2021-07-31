export interface Channel {
    chat: {
      agentStatus: {
        currentState: string,
        currentReasonCode: string,
        availableStates: string[],
        availablewrapUp: boolean,
        countUp: number,
        logoutReasonCodes: {
          name: string,
          value: string
        }[],
        notReadyReasonCodes: {
          name: string,
          value: string
        }[],
        wrapUpReasonCodes: {
          name: string,
          value: string
        }[],
      }
    },
    email: {
      agentStatus: {
        currentState: string,
        currentReasonCode: string,
        availableStates: string[],
        availablewrapUp: boolean,
        countUp: number,
        logoutReasonCodes: {
          name: string,
          value: string
        }[],
        notReadyReasonCodes: {
          name: string,
          value: string
        }[],
        wrapUpReasonCodes: {
          name: string,
          value: string
        }[],
      }
    },
    voice: {
      agentStatus: {
        currentState: string,
        currentReasonCode: string,
        availableStates: string[],
        availablewrapUp: boolean,
        countUp: number,
        logoutReasonCodes: {
          name: string,
          value: string
        }[],
        notReadyReasonCodes: {
          name: string,
          value: string
        }[],
        wrapUpReasonCodes: {
          name: string,
          value: string
        }[],
      }
    }
}
