import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-direct-transfer',
  templateUrl: './direct-transfer.component.html',
  styleUrls: ['./direct-transfer.component.scss']
})
export class DirectTransferComponent implements OnInit {
  @Input() callbackFunction: (args: any) => void;
  interval ;
  timeCount = 0;
  name = 'Cornelia Goodman, Agent, Marketing Dpt, Lorem Inc';
  phone_number = '1986 134 7843';
  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.timeCount ++;
      if(this.timeCount == 3){
        this.timeCount = 0;
        this.doAction('TRANSFER PROGRESS');
        clearInterval(this.interval);
      }
    },1000);
  }

  doAction(action) {
    clearInterval(this.interval);
    this.callbackFunction(action);
  }
}
