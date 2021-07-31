import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Agent } from '../../ngrx/models/agent.model';
import { AppState } from '../../ngrx/reducers/index.reducer';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  
  agent: Agent;
  constructor(private store: Store<AppState>) { 
    store.select('agent').subscribe(val => {this.agent = val;});
  }

  ngOnInit(): void {
  }

}
