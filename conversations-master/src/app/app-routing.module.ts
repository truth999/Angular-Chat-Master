import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './landing/login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { TotalDashboardComponent } from './home/total-dashboard/total-dashboard.component';
import { QueueComponent } from './home/queue/queue.component';
import { ErrorHistoryComponent } from './home/error-history/error-history.component';
import { HistoryComponent } from './home/history/history.component';
import { HistoryDetailComponent } from './home/history-detail/history-detail.component';
import { HelpComponent } from './home/help/help.component';
import { ArDetailContentComponent } from './components/ar-detail-content/ar-detail-content.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { ContainerComponent } from './container/container.component';
import { TeamStatusComponent } from './home/analytics/team-status/team-status.component';
import { MyStatusComponent } from './home/analytics/my-status/my-status.component';
import { IncomingChatComponent } from './chat/incoming-chat/incoming-chat.component';
import { IncomingCallComponent } from './voice/incoming-call/incoming-call.component';
import { IncomingEmailComponent } from './email/incoming-email/incoming-email.component';
import { NewVoiceChatComponent } from './voice/new-voice-chat/new-voice-chat.component';
import { IntentComponent } from './components/intent/intent.component';
import { CreateNewIntentComponent } from './components/create-new-intent/create-new-intent.component';
import { AddEmailContactComponent } from './email/email-templates/add-email-contact/add-email-contact.component';
import { AddNumbrContactComponent } from './voice/voice-templates/add-numbr-contact/add-numbr-contact.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { TimelineDetailComponent } from './home/timeline-detail/timeline-detail.component';
import { CallingScreenComponent } from './voice/voice-templates/calling-screen/calling-screen.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'home',
        component: ContainerComponent,
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'search', component: SearchResultComponent },
            { path: 'ardetailcontent', component: ArDetailContentComponent },
            { path: 'queue', component: TotalDashboardComponent },
            { path: 'history-detail/:id', component: HistoryDetailComponent },
            { path: 'incoming-chat', component: IncomingChatComponent },
            { path: 'incoming-email', component: IncomingEmailComponent },
            { path: 'incoming-call', component: IncomingCallComponent },
            { path: 'newcall', component: NewVoiceChatComponent },
            { path: 'intent', component: IntentComponent },
            { path: 'new-intent', component: CreateNewIntentComponent },
            { path: 'new-email-contact', component: AddEmailContactComponent },
            { path: 'new-number-contact', component: AddNumbrContactComponent },
            { path: 'error-histories', component: ErrorHistoryComponent },
            { path: 'timeline', component: TimelineComponent },
            { path: 'timeline-detail/:id', component: TimelineDetailComponent },
            { path: 'outgoing-maincall', component: CallingScreenComponent },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
