import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-dropdown',
  templateUrl: './modal-dropdown.component.html',
  styleUrls: ['./modal-dropdown.component.scss']
})
export class ModalDropdownComponent implements OnInit {

  selectedProjects: any;
  groupName: any;
  groupAction: any = 'readOnly';
  constructor() { }

  ngOnInit(): void {
  }

}
