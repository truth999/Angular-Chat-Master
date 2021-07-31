import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
    selector: 'app-add-note-template',
    templateUrl: './add-note-template.component.html',
    styleUrls: ['./add-note-template.component.scss']
})
export class AddNoteTemplateComponent implements OnInit {
    noteText: string = '';
    @Output() callBackFunction: EventEmitter<{ type: string, text: string }> = new EventEmitter();
    @Input() type: string = 'Add';
    @Input() currentText: string = '';
    constructor() {

    }

    ngOnInit(): void {
        this.noteText = this.currentText;
    }

    add() {
        let text = this.noteText;
        let type = this.type;
        this.callBackFunction.emit({ type, text });
        this.noteText = '';
    }
    cancel() {
        let type = 'Cancel';
        let text = '';
        this.callBackFunction.emit({ type, text });
    }
}
