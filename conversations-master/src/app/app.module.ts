import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { MiniChatboxComponent } from './mini-chatbox/mini-chatbox.component';
import { NavBarComponent } from './landing/nav-bar/nav-bar.component';
import { FrameBarComponent } from './landing/frame-bar/frame-bar.component';
import { ActiveRequestTabComponent } from './landing/active-request-tab/active-request-tab.component';
import { ActionsTabComponent } from './home/actions-tab/actions-tab.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChannelComponent, FormatTimePipe } from './components/channel/channel.component';
import { MoreDropdownComponent } from './components/more-dropdown/more-dropdown.component';
import { ChatTabsComponent } from './chat/chat-tabs/chat-tabs.component';
import { IncomingChatComponent } from './chat/incoming-chat/incoming-chat.component';
import { ChatTranscriptComponent } from './chat/chat-transcript/chat-transcript.component';
import { EmailTabsComponent } from './email/email-tabs/email-tabs.component';
import { MoreTabComponent } from './landing/active-request-tab/more-tab/more-tab.component';
import { EmailContentComponent } from './email/email-content/email-content.component';
import { VoiceTabsComponent } from './voice/voice-tabs/voice-tabs.component';
import { VoiceTranscriptComponent } from './voice/voice-transcript/voice-transcript.component';
import { NotesComponent } from './common/notes/notes.component';
import { InfoComponent } from './common/info/info.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

//import other modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableModule } from '@ng-stack/contenteditable';

//for ngrx
import { StoreModule } from '@ngrx/store';
import { AuthInterceptor } from './_service/authconfig.interceptor';

import { reducers } from './ngrx/reducers/index.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ArDetailComponent } from './components/ar-detail/ar-detail.component';
import { ArActionsComponent } from './components/ar-actions/ar-actions.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LoginComponent } from './landing/login/login.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { QueueComponent } from './home/queue/queue.component';
import { HistoryComponent } from './home/history/history.component';
import { HelpComponent } from './home/help/help.component';
import { HistoryDetailComponent } from './home/history-detail/history-detail.component';
import { CardQueueComponent } from './components/card-queue/card-queue.component';
import { ArDetailContentComponent } from './components/ar-detail-content/ar-detail-content.component';
import { MyStatusComponent } from './home/analytics/my-status/my-status.component';
import { TeamStatusComponent } from './home/analytics/team-status/team-status.component';
import { BottomModalComponent } from './components/bottom-modal/bottom-modal.component';
import { CoBrowseComponent } from './chat/chat-action/co-browse/co-browse.component';
import { EscalateComponent } from './chat/chat-action/escalate/escalate.component';
import { ToAgencyComponent } from './chat/chat-action/to-agency/to-agency.component';
import { DirectTransferComponent } from './chat/chat-action/to-agency/direct-transfer/direct-transfer.component';
import { AgencyTransferProgressComponent } from './chat/chat-action/to-agency/agency-transfer-progress/agency-transfer-progress.component';
import { CustomAlertComponent } from './custom-alert/custom-alert.component';
import { DialSearchModalComponent } from './components/dial-search-modal/dial-search-modal.component';
import { ChatTemplateComponent } from './chat/chat-action/chat-template/chat-template.component';
import { AccountDetailsComponent } from './chat/chat-action/account-details/account-details.component';
import { NewCannedResponseComponent } from './chat/chat-action/new-canned-response/new-canned-response.component';
import { ChatInfoComponent } from './chat/chat-info/chat-info.component';
import { InputAutocompleteComponent } from './chat/chat-info/info-actions/input-autocomplete/input-autocomplete.component';
import { FooterActionComponent } from './chat/chat-action/footer-action/footer-action.component';
import { ChatHistoryComponent } from './chat/chat-history/chat-history.component';
import { EmailhistoryTemplateComponent } from './chat/chat-history/history-templates/emailhistory-template/emailhistory-template.component';
import { CallhistoryTemplateComponent } from './chat/chat-history/history-templates/callhistory-template/callhistory-template.component';
import { FilterButtonComponent } from './chat/chat-history/history-templates/filter-button/filter-button.component';
import { EditHistoryPageComponent } from './chat/chat-history/history-templates/edit-history-page/edit-history-page.component';
import { TranscriptPageComponent } from './chat/chat-history/history-templates/transcript-page/transcript-page.component';
import { EmailTranscriptComponent } from './email/email-transcript/email-transcript.component';
import { EmailfooterActionComponent } from './email/email-templates/emailfooter-action/emailfooter-action.component';
import { EmailreplyTemplateComponent } from './email/email-templates/emailreply-template/emailreply-template.component';
import { EmailreplyFooterComponent } from './email/email-templates/emailreply-footer/emailreply-footer.component';
import { FloatInputComponent } from './components/float-input/float-input.component';
import { CallTranscriptComponent } from './voice/voice-templates/call-transcript/call-transcript.component';
import { CallDialtonesComponent } from './voice/voice-templates/call-dialtones/call-dialtones.component';
import { CallConferenceComponent } from './voice/voice-templates/call-conference/call-conference.component';
import { CallTransferComponent } from './voice/voice-templates/call-transfer/call-transfer.component';
import { CalltranscriptFooterComponent } from './voice/voice-templates/calltranscript-footer/calltranscript-footer.component';
import { CalldialtonesFooterComponent } from './voice/voice-templates/calldialtones-footer/calldialtones-footer.component';
import { ChatNotesComponent } from './chat/chat-notes/chat-notes.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NewVoiceChatComponent } from './voice/new-voice-chat/new-voice-chat.component';
import { CallingScreenComponent } from './voice/voice-templates/calling-screen/calling-screen.component';
import { ConferenceCallingScreenComponent } from './voice/voice-templates/conference-calling-screen/conference-calling-screen.component';
import { ConferenceProgressComponent } from './voice/voice-templates/conference-progress/conference-progress.component';
import { WrapupChatComponent } from './components/wrapup-chat/wrapup-chat.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { WrapupBeforeComponent } from './components/wrapup-before/wrapup-before.component';
import { DashboardChannelComponent } from './components/dashboard-channel/dashboard-channel.component';
import { LetterToolboxComponent } from './email/email-templates/emailreply-footer/letter-toolbox/letter-toolbox.component';
import { EmailContactsFormComponent } from './email/email-templates/emailreply-template/email-contacts-form/email-contacts-form.component';
import { EmailDiscardTemplateComponent } from './email/email-templates/emailreply-template/email-discard-template/email-discard-template.component';
import { SelectLanguageFormComponent } from './email/email-transcript/select-language-form/select-language-form.component';
import { DeferEmailFooterComponent } from './email/email-transcript/defer-email-footer/defer-email-footer.component';
import { MergeCallsScreenComponent } from './voice/voice-templates/merge-calls-screen/merge-calls-screen.component';
import { TransferProgressComponent } from './voice/voice-templates/transfer-progress/transfer-progress.component';
import { TransferProgressFooterComponent } from './voice/voice-templates/transfer-progress/transfer-progress-footer/transfer-progress-footer.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { IntentComponent } from './components/intent/intent.component';
import { AutosizeModule } from 'ngx-autosize';
import { CreateNewIntentComponent } from './components/create-new-intent/create-new-intent.component';
import { AddNoteTemplateComponent } from './components/add-note-template/add-note-template.component';
import { IncomingCallComponent } from './voice/incoming-call/incoming-call.component';
import { IncomingEmailComponent } from './email/incoming-email/incoming-email.component';
import { QuillModule } from 'ngx-quill'
import { ErrorHistoryComponent } from './home/error-history/error-history.component';
import { AddEmailContactComponent } from './email/email-templates/add-email-contact/add-email-contact.component';
import { EditEmailContactComponent } from './email/email-templates/edit-email-contact/edit-email-contact.component';
import { AddNumbrContactComponent } from './voice/voice-templates/add-numbr-contact/add-numbr-contact.component';
import { ManuallyLinkFormComponent } from './components/manually-link-form/manually-link-form.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { TimelineDetailComponent } from './home/timeline-detail/timeline-detail.component';
import { TotalDashboardComponent } from './home/total-dashboard/total-dashboard.component';
import { VoiceFooterComponent } from './voice/voice-templates/voice-footer/voice-footer.component';
import { ScheduleCallbackComponent } from './voice/voice-templates/schedule-callback/schedule-callback.component';
import { ChatTrackingComponent } from './chat/chat-tracking/chat-tracking.component';
import { ChatTrackingBrowserComponent } from './chat/chat-tracking/chat-tracking-browser/chat-tracking-browser.component';
import { ChatTrackingBehaviorComponent } from './chat/chat-tracking/chat-tracking-behavior/chat-tracking-behavior.component';
import { ScheduleCallbackListsComponent } from './voice/voice-templates/schedule-callback-lists/schedule-callback-lists.component';
import { ScheduleCallbackEditComponent } from './voice/voice-templates/schedule-callback-edit/schedule-callback-edit.component';
import { TranslateActionBarComponent } from './components/translate-action-bar/translate-action-bar.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
// import { LetterToolboxComponent } from './email/email-templates/emailreply-template/letter-toolbox/letter-toolbox.component';
// import { BottomModalComponent } from './bottom-modal/bottom-modal.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        ContainerComponent,
        MiniChatboxComponent,
        FrameBarComponent,
        ActiveRequestTabComponent,
        ActionsTabComponent,
        SearchBarComponent,
        ChannelComponent,
        MoreDropdownComponent,
        FormatTimePipe,
        ChatTabsComponent,
        IncomingChatComponent,
        ChatTranscriptComponent,
        VoiceTranscriptComponent,
        EmailTabsComponent,
        MoreTabComponent,
        EmailContentComponent,
        VoiceTabsComponent,
        NotesComponent,
        InfoComponent,
        ArDetailComponent,
        ArActionsComponent,
        DashboardComponent,
        LoginComponent,
        SearchResultComponent,
        QueueComponent,
        HistoryComponent,
        HelpComponent,
        HistoryDetailComponent,
        CardQueueComponent,
        ArDetailContentComponent,
        MyStatusComponent,
        TeamStatusComponent,
        BottomModalComponent,
        CoBrowseComponent, EscalateComponent, ToAgencyComponent, DirectTransferComponent, AgencyTransferProgressComponent, CustomAlertComponent, DialSearchModalComponent, ChatTemplateComponent, AccountDetailsComponent, NewCannedResponseComponent, ChatInfoComponent, InputAutocompleteComponent, FooterActionComponent, ChatHistoryComponent, EmailhistoryTemplateComponent, CallhistoryTemplateComponent, FilterButtonComponent, EditHistoryPageComponent, TranscriptPageComponent, EmailTranscriptComponent, EmailfooterActionComponent, EmailreplyTemplateComponent, EmailreplyFooterComponent, CallTranscriptComponent, CallDialtonesComponent, CallConferenceComponent, CallTransferComponent, CalltranscriptFooterComponent, CalldialtonesFooterComponent, ChatNotesComponent, FloatInputComponent, SpinnerComponent, NewVoiceChatComponent, CallingScreenComponent, ConferenceCallingScreenComponent, ConferenceProgressComponent, WrapupChatComponent, CheckBoxComponent, WrapupBeforeComponent, DashboardChannelComponent, LetterToolboxComponent, EmailContactsFormComponent, EmailDiscardTemplateComponent, SelectLanguageFormComponent, DeferEmailFooterComponent, MergeCallsScreenComponent, TransferProgressComponent, TransferProgressFooterComponent, IntentComponent, CreateNewIntentComponent, AddNoteTemplateComponent, IncomingCallComponent, IncomingEmailComponent, ErrorHistoryComponent, AddEmailContactComponent, EditEmailContactComponent, AddNumbrContactComponent, ManuallyLinkFormComponent, TimelineComponent, TimelineDetailComponent, TotalDashboardComponent, VoiceFooterComponent, ScheduleCallbackComponent, ChatTrackingComponent, ChatTrackingBrowserComponent, ChatTrackingBehaviorComponent, ScheduleCallbackListsComponent, ScheduleCallbackEditComponent, TranslateActionBarComponent, HistoryCardComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ChartsModule,
        CKEditorModule,
        AutosizeModule,
        // ngx-translate and the loader module
        HttpClientModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        QuillModule.forRoot({
            customOptions: [{
                import: 'formats/font',
                whitelist: ['DM_Sans', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
            }]
        }),
        // ContenteditableModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        FormatTimePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
