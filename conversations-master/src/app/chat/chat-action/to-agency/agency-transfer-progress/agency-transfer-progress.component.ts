import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-agency-transfer-progress',
  templateUrl: './agency-transfer-progress.component.html',
  styleUrls: ['./agency-transfer-progress.component.scss']
})
export class AgencyTransferProgressComponent implements OnInit {
  @Input() callbackFunction: (args: any) => void;
  constructor() { }
  time = "00:02:00";
  user = "Cornelia Goodman, Agent, Mark";
  number = "1986 134 7843";
  ngOnInit(): void {
  }

  doAction(action) {
    this.callbackFunction(action);
  }

}
