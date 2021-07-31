import { Component, OnInit, Renderer2 } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-contacts-dropdown',
  templateUrl: './contacts-dropdown.component.html',
  styleUrls: ['./contacts-dropdown.component.scss']
})
export class ContactsDropdownComponent implements OnInit {

  contactsModal: boolean = false;
  contactsForm_control: boolean = false;
  contactSearchText: string = "";
  @ViewChild('contactsButton') contactsButton: ElementRef;
  contacts = [
    {
        'name': 'Calvin Hogan',
        'role': 'Supervisor, Marketing',
        'worknumber': '1-402-541-7564',
        'homenumber': '2-940-994-1081',
        'mobilenumber': '0-390-492-3892'

    },
    {
        'name': 'Genda Gina',
        'role': 'Supervisor, Marketing',
        'worknumber': '1-402-541-7564',
        'homenumber': '2-940-994-1081',
        'mobilenumber': '0-390-492-3892'

    },
    {
        'name': 'Nona Buma',
        'role': 'Supervisor, Marketing',
        'worknumber': '1-402-541-7564',
        'homenumber': '2-940-994-1081',
        'mobilenumber': '0-390-492-3892'

    },
    {
        'name': 'David Khan',
        'role': 'Supervisor, Marketing',
        'worknumber': '1-402-541-7564',
        'homenumber': '2-940-994-1081',
        'mobilenumber': '0-390-492-3892'

    },
    {
        'name': 'James Angels',
        'role': 'Supervisor, Marketing',
        'worknumber': '1-402-541-7564',
        'homenumber': '2-940-994-1081',
        'mobilenumber': '0-390-492-3892'

    },
    {
        'name': 'Hidra Toma',
        'role': 'Supervisor, Marketing',
        'worknumber': '1-402-541-7564',
        'homenumber': '2-940-994-1081',
        'mobilenumber': '0-390-492-3892'

    },

];
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
        if (e.target == this.contactsButton.nativeElement) {
        }
        else if (this.contactsForm_control == false) {
            this.contactsModal = false;
        }
    });
   }

  ngOnInit(): void {
  }

  showContactsModal() {
    if(this.contactsForm_control == false)
      this.contactsModal = !this.contactsModal;
  }
  contactsFormleave() {
      this.contactsForm_control = false;
      console.log('leave');
  }
  contactsFromenter() {
      this.contactsForm_control = true;
      console.log('enter');
  }
}
