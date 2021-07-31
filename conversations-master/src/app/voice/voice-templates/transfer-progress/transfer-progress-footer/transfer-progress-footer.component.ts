import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-transfer-progress-footer',
  templateUrl: './transfer-progress-footer.component.html',
  styleUrls: ['./transfer-progress-footer.component.scss']
})
export class TransferProgressFooterComponent implements OnInit {
  @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  completeTransfer() {
    this.callbackFunction.emit('Complete Transfer');
  }
}
