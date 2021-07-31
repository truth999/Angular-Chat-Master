import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  lists = [
      {
          'name': 'Calvin Hogan',
          'title': 'Account Inquiry, Login Issue',
          'type': 'Chat',
          'ticketNo': '34879'
      },
      {
          'name': 'David Shrute',
          'title': 'Unprocessed Order',
          'type': 'Email',
          'ticketNo': '11389'
      },
      {
          'name': 'Jay Mathis',
          'title': 'Payment Issue, Refund',
          'type': 'Call',
          'ticketNo': '50821'
      },
      {
          'name': 'Hilda Palmer',
          'title': 'Account Inquiry',
          'type': 'Call',
          'ticketNo': '03832'
      },
      {
          'name': 'Calvin Hogan',
          'title': 'Account Inquiry, Login Issue',
          'type': 'Chat',
          'ticketNo': '34879'
      },
      {
          'name': 'David Shrute',
          'title': 'Unprocessed Order',
          'type': 'Email',
          'ticketNo': '11389'
      },
      {
          'name': 'Jay Mathis',
          'title': 'Payment Issue, Refund',
          'type': 'Call',
          'ticketNo': '50821'
      },
      {
          'name': 'Hilda Palmer',
          'title': 'Account Inquiry',
          'type': 'Call',
          'ticketNo': '03832'
      },

  ];

  autocomplete_value: string = "";
  searchText: string = "";
  isShowDropdown: boolean = false;
  input_control: boolean = false;
  autocompleteDropdown_control: boolean = false;
  selected_index: number = -1;

  showDropdown() {
      this.isShowDropdown = !this.isShowDropdown;
  }

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
        if (this.input_control != true && this.autocompleteDropdown_control == false) {
            this.isShowDropdown = false;
        }
    });
   }

  dropdownMouseLeave() {
      this.autocompleteDropdown_control = false;
  }
  dropdownMouseEnter() {
      this.autocompleteDropdown_control = true;
  }

  inputMouseLeave() {
    this.input_control = false;
  }
  inputMouseEnter() {
      this.input_control = true;
  }

  autoComplete(list, id) {
    this.autocomplete_value = list.name + ' ' + list.title;
    this.isShowDropdown = false;
  }
  ngOnInit(): void {
  }

}
