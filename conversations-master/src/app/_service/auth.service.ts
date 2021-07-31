import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse  } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AppState ,selectChannel} from '../ngrx/reducers/index.reducer';
import { Agent} from '../ngrx/models/agent.model';
import { Channel } from '../ngrx/models/channel.model';
import { UpdateAgentToken, UpdateAgent} from '../ngrx/actions/agent.actions';
import { UpdateChannel } from '../ngrx/actions/channel.actions';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';

const endpoint = 'https://reqres.in/api';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  agent: Agent;
  channel: Channel;
  constructor(
    private http: HttpClient, 
    private store: Store<AppState>,
    public router: Router,
    public dataService: DataService
  ) {
    store.select('agent').subscribe(val => this.agent = val);
    store.select('channel').subscribe(val => this.channel = val);
  }

  // Sign-in
  signIn(email: string, password: string, extension: string) { 
    this.dataService.loginRequest(email, password, extension)
  }

  getToken() {
    return this.agent.token
  }

  get isLoggedIn(): boolean {
    return (this.agent.token !== null && this.agent.token != '123456') ? true : false;
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
