import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-co-browse',
  templateUrl: './co-browse.component.html',
  styleUrls: ['./co-browse.component.scss']
})
export class CoBrowseComponent implements OnInit {
  @Input() closeCobrowse: () => void;
  session_id: string;
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    // alert("abc");
    this.closeCobrowse();
  }
}
