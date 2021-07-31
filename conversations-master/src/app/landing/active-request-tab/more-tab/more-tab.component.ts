import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-more-tab',
  templateUrl: './more-tab.component.html',
  styleUrls: ['./more-tab.component.scss']
})
export class MoreTabComponent implements OnInit {

  constructor() { }
  @Input() activeRequests: any;
  @Input() length: Number;
  isShow:boolean = false;

  ngOnInit(): void {
  }

  // @HostListener('document:mousedown', ['$event'])
  // onGlobalClick(event): void {
  //   const clickedElement = event.target as HTMLElement;    
  //   if (clickedElement.classList[0] !== 'multi-level-dropdown__status') {
  //     this.isShow = false;
  //   }
  // }

  toggleDropdown(): void {
    this.isShow = !this.isShow;
  }

}
