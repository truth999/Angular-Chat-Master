import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
'@angular/core';
@Component({
    selector: 'app-to-agency',
    templateUrl: './to-agency.component.html',
    styleUrls: ['./to-agency.component.scss']
})
export class ToAgencyComponent implements OnInit {
    // @Input() callbackFunction: (args: any) => void;
    @Output() callbackFunction: EventEmitter<{ action: any, name: string, number: string }> = new EventEmitter();
    @Input() type: string;
    show_call_menu: boolean = false;
    isTransferShow: boolean = false;
    search_modal_show: boolean = false;
    dialNumber: string = '';
    name: string = '';
    contactsFormControl: boolean = false;
    contactsButtonControl: boolean = false;
    hover: boolean = false;

    @ViewChild('contactsButton') contactsButton: ElementRef;
    @ViewChild('contactsMenu') contactsMenu: ElementRef;

    @ViewChild('#DialNumberButton') DialNumberButton: ElementRef;
    @ViewChild('#DropMenuCo') DropMenuCo: ElementRef;

    constructor(private renderer: Renderer2) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.contactsButtonControl == true) {
            }
            else if (this.contactsFormControl == false) {
                this.search_modal_show = false;
            }
            if (this.hover == false) {
                this.show_call_menu = false;
            }
        });

    }

    ngOnInit(): void {
    }

    showCallMenu() {
        this.show_call_menu = !this.show_call_menu;
    }
    doAction(action) {
        let name = this.name;
        let number = this.dialNumber;
        this.callbackFunction.emit({ action, name, number });
    }

    cancelCall = (): void => {
        this.isTransferShow = false;
    }

    onContacts() {
        this.search_modal_show = !this.search_modal_show;
    }

    numberButtonClick(number) {
        this.dialNumber += number;
        if (this.dialNumber.length == 4 || this.dialNumber.length == 8) {
            this.dialNumber += ' ';
        }
    }
    phoneNumberAutoComplete(contact) {
        this.dialNumber = contact.number;
        this.name = contact.name;
        this.search_modal_show = false;
    }
    contactsButtonleave() {
        this.contactsButtonControl = false;
    }
    contactsButtonenter() {
        this.contactsButtonControl = true;
    }
    contactsFormleave() {
        this.contactsFormControl = false;

    }
    contactsFormenter() {
        this.contactsFormControl = true;

    }
    hoverStatus(): void {
        this.hover = true;
    }
    hoveroutStatus(): void {
        this.hover = false;
    }

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    @HostListener('document:keyup', ['$event'])
    handleDeleteKeyboardEvent(event: KeyboardEvent) {
        if (event.key === 'Backspace') {
            if (this.dialNumber[this.dialNumber.length - 1] == ' ') {
                this.dialNumber = this.dialNumber.slice(0, -1);
            }
        }
    }
}
