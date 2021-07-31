import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dial-pad',
  templateUrl: './dial-pad.component.html',
  styleUrls: ['./dial-pad.component.scss']
})
export class DialPadComponent implements OnInit {
  
  dialNumber = '';
  search_modal_show: boolean = false;
  contactsForm_control: boolean = false;
  
  @ViewChild('contactsForm') contactsForm: ElementRef;
  @ViewChild('contactsButton') contactsButton: ElementRef;
  
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
        if (e.target == this.contactsButton.nativeElement) {
        }
        else if (this.contactsForm_control == false) {
            this.search_modal_show = false;
        }
    });
  }

  ngOnInit(): void {
  }
  numberButtonClick(number) {
      this.dialNumber += number;
  }

  onContacts() {
    this.search_modal_show = true;
  }

  contactsFormleave() {
    this.contactsForm_control = false;
  }
  contactsFromenter() {
      this.contactsForm_control = true;
  }
  deleteDialNumber() {
    if (this.dialNumber[this.dialNumber.length - 1] == ' ') {
        this.dialNumber = this.dialNumber.slice(0, -1);
    }
    this.dialNumber = this.dialNumber.slice(0, -1);
  }
  phoneNumberAutoComplete(contact) {
      this.dialNumber = contact.number;
      this.search_modal_show = false;
  }
}
