import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/reducers/index.reducer';
import { ActiveRequest } from '../ngrx/models/active-request.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  length = 0;
  arDetailOpened = false;
  openedRequest: ActiveRequest;
  
  constructor(private store: Store<AppState>) {
    store.select('activeRequests').subscribe(val => { this.length = val.length });
    store.select('openArDetail').subscribe(val => {
      this.arDetailOpened = val.visible;
      if(this.arDetailOpened){
        this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
      }
    });
  }

  ngOnInit(): void {
  }
}
