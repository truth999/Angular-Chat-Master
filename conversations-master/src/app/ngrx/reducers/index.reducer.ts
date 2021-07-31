import { activeRequestReducer } from './active-request.reducer'
import { channelReducer } from './channel.reducer'
import { openActiveRequestDetailReducer } from './open-ar-detail.reducer'
import { agentReducer } from './agent.reducer'
import { ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { ActiveRequest } from './../models/active-request.model'
import { InteractionHistory } from './../models/interaction-history.model'
import { Channel } from './../models/channel.model'
import { OpenArDetail } from './../models/open-ar-detail.model'
import { Agent } from '../models/agent.model'
import { EmailTranscript } from './../models/email-transcript.model'
import { emailTranscriptReducer } from './email-transcript.reducer'
import { Call } from './../models/call.model'
import { callReducer } from './../reducers/call.reducer'
import { Chat } from './../models/chat.model'
import { chatReducer } from './../reducers/chat.reducer'
import { Email } from './../models/email.model'
import { emailReducer } from './../reducers/email.reducer'
import { Voice } from './../models/voice.model'
import { voiceReducer } from './../reducers/voice.reducer'
import { ErrorHistory } from './../models/error-history.model'
import { errorHistoryReducer } from './../reducers/error-history.reducer'
import { interactionHistoryReducer } from './../reducers/interaction-history.reducer'
import { OpenedRequestDetail } from './../models/opened-requestdetail.model';
import { openedRequestDetailReducer } from './../reducers/opened-requestdetail.reducer'
import { ScheduleCallback } from './../models/schedule-callback.model'
import { ScheduleCallbackReducer } from './../reducers/schedule-callback.reducer'
import { AppStatus } from './../models/app-status.model'
import { AppStatusReducer } from './app-status.reducer'

export interface AppState {
    readonly activeRequests: ActiveRequest[];
    readonly channel: Channel;
    readonly openArDetail: OpenArDetail;
    readonly agent: Agent;
    readonly emailTranscript: EmailTranscript;
    readonly calls: Call[];
    readonly chats: Chat[];
    readonly emails: Email[];
    readonly voices: Voice[];
    readonly errorHistories: ErrorHistory[];
    readonly interactionHistory: InteractionHistory[];
    readonly openedRequestDetail: OpenedRequestDetail;
    readonly scheduleCallbacks: ScheduleCallback[];
    readonly appStatus: AppStatus;
}

export const reducers: ActionReducerMap<AppState> = {
    activeRequests: activeRequestReducer,
    channel: channelReducer,
    openArDetail: openActiveRequestDetailReducer,
    agent: agentReducer,
    emailTranscript: emailTranscriptReducer,
    appStatus: AppStatusReducer,
    calls: callReducer,
    chats: chatReducer,
    emails: emailReducer,
    voices: voiceReducer,
    openedRequestDetail: openedRequestDetailReducer,
    errorHistories: errorHistoryReducer,
    interactionHistory: interactionHistoryReducer,
    scheduleCallbacks: ScheduleCallbackReducer,
};

export const selectActiveRequest = (state: AppState) => state.activeRequests;

export const selectChannel = (state: AppState) => state.channel;

export const selectOpenArDetail = (state: AppState) => state.openArDetail;

export const selectAgent = (state: AppState) => state.agent;

export const selectEmailTranscript = (state: AppState) => state.emailTranscript;

export const selectCall = (state: AppState) => state.calls;

export const selectChat = (state: AppState) => state.chats;

export const selectEmail = (state: AppState) => state.emails;

export const selectVoice = (state: AppState) => state.voices;

export const selectErrorHistories = (state: AppState) => state.errorHistories;

export const selectOpenedRequestDetail = (state: AppState) => state.openedRequestDetail;

export const selectInteractionHistory = (state: AppState) => state.interactionHistory;

export const selectScheduleCallback = (state: AppState) => state.scheduleCallbacks;

export const selectAppStatus = (state: AppState) => state.appStatus;