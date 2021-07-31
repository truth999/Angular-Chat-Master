import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../_service/auth.service';
import { LastTenInteractionsService } from './../../_service/last-ten-interactions.service';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { ActiveRequest } from '../../ngrx/models/active-request.model';
import { Store } from '@ngrx/store';
import { Agent } from '../../ngrx/models/agent.model';
import { Channel } from '../../ngrx/models/channel.model';
import { ErrorHistory } from '../../ngrx/models/error-history.model';
import { AddErrorHistory } from '../../ngrx/actions/error-history.action';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    agent: Agent;
    channel: Channel;
    username: string;
    password: string;
    extension: string;
    isLogin: boolean = false;
    login_failed: boolean = false;
    show_alert = false;
    alert_type = 'danger';
    alert_message;
    alert_message_type = 'credentialError';
    show_spinner = false;
    interval;
    timeCount = 0;
    openedRequest: ActiveRequest;
    errorHistories: ErrorHistory[];

    constructor(private store: Store<AppState>, private router: Router, public authService: AuthService, public lastTenInteractionsService: LastTenInteractionsService) {
        store.select('channel').subscribe(val => this.channel = val);
        store.select('agent').subscribe((val) => {
            this.agent = val
            if (this.show_spinner == true) {
                if (val.loggedIn == true) {
                    this.show_spinner = false;

                    lastTenInteractionsService.loadLastTenInteractions().then((status: any) => { // load last ten interactions history                  
                    }).catch((error: any) => {
                        alert("can't load last interaction's history")
                    });

                    if (this.channel.chat.agentStatus.currentState == 'NOT_READY' && this.channel.voice.agentStatus.currentState == 'NOT_READY' && this.channel.email.agentStatus.currentState == 'NOT_READY') {
                        // Go to dashboard
                        this.router.navigate(['home'], { skipLocationChange: true });
                    } else {
                        // Go to Queue
                        localStorage.setItem('tab_id', '0');
                        this.router.navigate(['home/queue'], { skipLocationChange: true });
                    }
                } else if (val.loggedIn == false) {
                    // this.alert_message = "Something went wrong. Please try again!"
                    //Add Login failed Error history to Error History list.
                    var currentDate = new Date();

                    var date = currentDate.getDate();
                    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
                    var year = currentDate.getFullYear();

                    let dateString = date + "-" + (month + 1) + "-" + year;
                    // let currentTimeStamp = date.getTime();
                    let errorHistory: ErrorHistory
                    errorHistory = {
                        channel: 'common',
                        message: 'Login Failed',
                        time: dateString,
                        flash: true,
                    }
                    this.store.dispatch(new AddErrorHistory(errorHistory));
                    store.select('errorHistories').subscribe(data => {
                        this.errorHistories = [...data];

                    });
                    // this.alert_message = 'somethingWrong';
                    this.login_failed = true;
                    this.show_alert = true;
                    this.show_spinner = false;
                    this.isLogin = false;
                }
            }
        });
    }

    login(): void {
        this.show_spinner = true;
        this.isLogin = true;
        this.login_failed = false;
        this.show_alert = false;
        //call the api
        this.authService.signIn(this.username, this.password, this.extension)
    }

    go_to_ar() {
        this.store.select('activeRequests').subscribe(val => {
            if (val.length > 0) {
                this.openedRequest = val[0];
                localStorage.setItem('openedRequest', JSON.stringify(this.openedRequest));
                this.router.navigate(["home/ardetailcontent"], { skipLocationChange: true });
            }
        });
    }
    closeAlert(action: any) {
        this.show_alert = false;
        this.alert_type = 'closed';
        this.login_failed = false;
    }

    ngOnInit() {
    }

}

