import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse  } from '@angular/common/http';
import { AppState ,selectChannel} from '../ngrx/reducers/index.reducer';
import { Store, select } from '@ngrx/store';
import { Agent} from '../ngrx/models/agent.model';
import { Channel } from '../ngrx/models/channel.model';
import { UpdateAgentToken, UpdateAgent} from '../ngrx/actions/agent.actions';
import { UpdateChannel } from '../ngrx/actions/channel.actions';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  agent: Agent;
  channel: Channel;

  constructor(private http: HttpClient, private store: Store<AppState>) { 
    store.select('agent').subscribe(val => this.agent = val);
  }

  loginRequest(email: string, password: string, extension: string){
    // return this.http.post('{C1_LOGIN_REQUEST_URL}', {email: email, password: password, extension: extension}).subscribe((result) =>{
        //Success Request
        //we can get websocket url and auth token from c1 login request url
        var url = 'ws://localhost:8080/auth';
        var token = '123456';
        
        // //Call Websocket service here
        // this._loginWS(url, token);

        //for Test purpose
        var that = this;
        setTimeout(function(){
          if(email == 'admin' && password == 'admin'){
            var agent = {...that.agent, loggedIn: true, token: '123456'}
            that.store.dispatch(new UpdateAgent(agent));
          }else{
            var agent = {...that.agent, loggedIn: false}
            that.store.dispatch(new UpdateAgent(agent));
          }
        }, 3000);
      // }, (error) => {
      //   //Catch Error exception
      //   var agent = {...this.agent, loggedIn: false}
      //   this.store.dispatch(new UpdateAgent(agent));
      // });    
  }

  _loginWS(socketURL: string, token: string) {
    var webSocket = new WebSocket(socketURL);
    
    //Send token to the websocket
    webSocket.send(token);

    webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };
    webSocket.onmessage = (event) => {
      var data = JSON.parse(event.data);
      //onmessage we check the return data if login status is success or not
      if (data.loginStatus == 'success') {
        //Update store value for login status
        var agent = {...this.agent, loggedIn: true, token: token}
        this.store.dispatch(new UpdateAgent(agent));

        //close websoket after return login status
        webSocket.close();  
      }else if(data.loginStatus == 'faliure'){
        //Update store value for login status
        var agent = {...this.agent, loggedIn: false}
        this.store.dispatch(new UpdateAgent(agent));

        //close websoket after return login status
        webSocket.close();
      }
    };
    webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }
}
