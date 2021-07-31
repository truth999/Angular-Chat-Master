import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-emailreply-footer',
    templateUrl: './emailreply-footer.component.html',
    styleUrls: ['./emailreply-footer.component.scss']
})
export class EmailreplyFooterComponent implements OnInit {
    isEsmenuShow: boolean = false;
    isLetterToolbox: boolean = false;
    hoverLetterToolbox: boolean = false;
    hoverLetterToolboxButton: boolean = false;
    is_right_menu: boolean = false;
    hoverFooterStatus: boolean = false;
    isShowPlusMenu: boolean = false;
    hoverPlusMenu: boolean = false;

    blockedWordsEnabled: boolean = false;
    isPlainText: boolean = false;
    selectedAttachment: string = '';

    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
    @Output() toggleToolbar: EventEmitter<any> = new EventEmitter();
    @Input() blockedWordsCheck: boolean = false;
    @Input() attachment: any = [];
    @Output() attachmentChange = new EventEmitter<any>();

    @ViewChild('letterToolbox') letterToolbox: ElementRef;
    @ViewChild('FileSelectInputDialog') FileSelectInputDialog: ElementRef;
    constructor(private renderer: Renderer2) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hoverFooterStatus == false) {
                this.isEsmenuShow = false;
            }
            if (this.hoverPlusMenu == false) {
                this.isShowPlusMenu = false;
            }
        });
    }

    ngOnInit(): void {
    }

    showLetterToolbox() {
        this.isLetterToolbox = !this.isLetterToolbox;
        this.toggleToolbar.emit(this.isLetterToolbox);
    }

    sendEmail() {
        this.callbackFunction.emit('Send Email');
    }

    doAction(action) {
        if (action == 'Discard') {
            this.callbackFunction.emit('Discard');
        }

    }
    showEsMenu() {
        this.isEsmenuShow = !this.isEsmenuShow;
    }
    showSubMenu() {
        this.is_right_menu = true;
    }
    hideSubMenu() {
        this.is_right_menu = false;
    }
    hoverinFooter() {
        this.hoverFooterStatus = true;
    }
    hoveroutFooter() {
        this.hoverFooterStatus = false;
    }
    showFileSelector() {
        const e: HTMLElement = this.FileSelectInputDialog.nativeElement;
        e.click();
    }

    // addAttachment() {
    //     console.log(this.selectedAttachment);
    //     let attachment = this.selectedAttachment;
    //     if (this.selectedAttachment != '') {
    //         const splits = attachment.split("\\", 30)
    //         let fileName = splits[splits.length - 1]
    //         this.attachment = [...this.attachment, {
    //             attachment: attachment,
    //             fileName: fileName,
    //         }]
    //         this.attachmentChange.emit(this.attachment);
    //     }
    // }

    onFileChange(event) {
        //add multiple attachments when select files on file selector
        this.attachment = [...this.attachment, ...event.target.files]
        this.attachmentChange.emit(this.attachment)
        this.callbackFunction.emit('Attachment Action')
    }
    saveDraft() {
        this.isEsmenuShow = false;
        this.callbackFunction.emit('Save Draft');
    }
    goToPlainText() {
        this.isPlainText = !this.isPlainText;
        this.callbackFunction.emit('Set Plain Text Mode');
    }
    toggleBlockedWords() {
        if (this.blockedWordsEnabled == false) {
            this.callbackFunction.emit('Enable Blocked Words');
        }
        else if (this.blockedWordsEnabled == true) {
            this.callbackFunction.emit("Disable Blocked Words");
        }
        this.blockedWordsEnabled = !this.blockedWordsEnabled;

    }
    togglePlusMenu() {
        this.isShowPlusMenu = !this.isShowPlusMenu;
    }
    hoverInPlusMenu() {
        this.hoverPlusMenu = true;
    }
    hoverOutPlusMenu() {
        this.hoverPlusMenu = false;
    }
}
