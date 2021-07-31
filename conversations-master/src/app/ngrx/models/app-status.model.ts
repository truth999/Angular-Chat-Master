export interface AppStatus {
    isReply: boolean;
    isHolded: boolean;
    countTimer: number;
    mainCallFlag: boolean;
    conferenceCallFlag: number;
    voiceCountUp: number;
    chatCountUp: number;
    emailCountUp: number;
    transferCallFlag: number;
    editScheduleCallbackIndex: number;
    scheduleCallbackPageStatus: string;
}
