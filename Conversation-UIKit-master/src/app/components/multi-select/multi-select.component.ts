import { Component, OnInit, Renderer2, ElementRef, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  fromEmailAddressList = [
      {
          'name': 'Thomas Smith',
          'email': 'thomas_smith@yahoo.com',
      },
      {
          'name': 'Calvin Hogan',
          'email': 'lavada_kuhic@janice.biz',
      },
      {
          'name': 'Jay Mathis',
          'email': 'eusebio.haag@jolie.tv',
      },
      {
          'name': 'Hilda West',
          'email': 'bauch_valerie@hillard.co.uk',
      },
      {
          'name': 'Thomas Smith',
          'email': 'thomas_smith@yahoo.com',
      },
  ];
  isFromEmailAutoComplete: boolean = false;
  autocompleteForm_control: boolean = false;
  fromEmail: string;
  fromEmailTemp: string = '';
  searchText: string = "";

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
        if (this.autocompleteForm_control == false) {
            this.isFromEmailAutoComplete = false;
        }
    });
   }

  ngOnInit(): void {
  }

  autocompleteFormleave() {
    this.autocompleteForm_control = false;
  }
  autocompleteFormenter() {
      this.autocompleteForm_control = true;
  }

  showFromEmailAutocomplete() {
      this.isFromEmailAutoComplete = true;
  }

  autoCompleteFromEmail(list) {
      this.fromEmail = list.email + '; ';
      this.fromEmailTemp += this.fromEmail;
      this.isFromEmailAutoComplete = false;
  }
  
}
