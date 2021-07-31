import { AfterViewChecked, ElementRef, ViewChild, Component, OnInit, Input } from '@angular/core';
import { NotesComponent } from 'src/app/common/notes/notes.component';
import { Chat } from '../../ngrx/models/chat.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { UpdateChat } from 'src/app/ngrx/actions/chat.actions';
import { UpdateEmail } from 'src/app/ngrx/actions/email.actions';
import { UpdateVoice } from 'src/app/ngrx/actions/voice.actions';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { Email } from 'src/app/ngrx/models/email.model';
import { Voice } from 'src/app/ngrx/models/voice.model';
import { NewVoiceChatComponent } from 'src/app/voice/new-voice-chat/new-voice-chat.component';

@Component({
    selector: 'app-chat-notes',
    templateUrl: './chat-notes.component.html',
    styleUrls: ['./chat-notes.component.scss']
})
export class ChatNotesComponent implements OnInit {

    show_add_note_template: boolean = false;
    add_note_template_type: string = 'Add';
    edit_note_index: number;
    scrollcheck: boolean = false;

    currentChat: Chat;
    currentEmail: Email;
    currentVoice: Voice;
    openedRequest: ActiveRequest;
    sessionNotes;
    @Input() type: string = 'normal';

    @ViewChild('noteArea') private noteArea: ElementRef;
    constructor(private store: Store<AppState>) {
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
            if (this.openedRequest.type == 'chat') {
                store.select('chats').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if (index >= 0) {
                        this.currentChat = val[index];
                        this.sessionNotes = [...this.currentChat.sessionNotes]
                    }
                })
            }
            else if (this.openedRequest.type == 'email') {
                store.select('emails').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if (index >= 0) {
                        this.currentEmail = val[index];
                        this.sessionNotes = [...this.currentEmail.sessionNotes]
                    }
                })
            }

            else if (this.openedRequest.type == 'voice') {
                store.select('voices').subscribe(val => {
                    let index = val.findIndex(element => element.callId === opendRequestData.callId)
                    if (index >= 0) {
                        this.currentVoice = val[index];
                        this.sessionNotes = [...this.currentVoice.sessionNotes]
                    }

                })
            }
            this.scrollcheck = false;
        })
    }

    notes = [
        {
            'id': 5009,
            'name': 'Joseph',
            'date': 'Jun 20, 2020',
            'time': '2:45 PM',
            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
        },
        {
            'id': 5009,
            'name': 'Joseph',
            'date': 'Jun 20, 2020',
            'time': '2:45 PM',
            'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            'id': 5009,
            'name': 'Joseph',
            'date': 'Jun 20, 2020',
            'time': '2:45 PM',
            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
        },
        {
            'id': 5009,
            'name': 'Joseph',
            'date': 'Jun 20, 2020',
            'time': '2:45 PM',
            'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            'id': 5009,
            'name': 'Joseph',
            'date': 'Jun 20, 2020',
            'time': '2:45 PM',
            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
        },
        {
            'id': 5009,
            'name': 'Joseph',
            'date': 'Jun 20, 2020',
            'time': '2:45 PM',
            'text': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
    ];
    ngOnInit(): void {
    }

    ngAfterViewChecked() {
        if (this.scrollcheck == false) {
            this.scrollToBottom();
            this.scrollcheck = true;
        }
    }

    scrollToBottom() {
        try {
            this.noteArea.nativeElement.scrollTop = this.noteArea.nativeElement.scrollHeight;
        } catch (err) { }
        // alert("abc");           
    }

    addNote() {
        this.show_add_note_template = true;
        this.add_note_template_type = 'Add';
    }

    closeAddNoteSection() {
        this.show_add_note_template = false;
    }
    handleNoteText(data) {
        if (data.type == 'Add') { // Add Note
            this.show_add_note_template = false;

            var time = new Date();
            var year = time.getFullYear();
            var month = time.getMonth();
            var day = time.getUTCDate();
            // var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // var monthStringFormated = months[month];
            // var strDate = month + '/' + day + '/' + year;
            var strDate = year + '/' + month + '/' + day;

            var hours = time.getHours();
            var minutes = time.getMinutes();
            var second = time.getSeconds();
            // var ampm = hours >= 12 ? 'pm' : 'am';
            // hours = hours % 12;
            // hours = hours ? hours : 12;
            // minutes = minutes < 10 ? minutes : minutes;
            // var strTime = hours + ':' + minutes + ' ' + ampm;
            var strTime = hours + ':' + minutes + ':' + second

            var localDateTime = strDate + 'T' + strTime
            if (this.openedRequest.type == 'chat') {
                let sessionNotes = [...this.currentChat.sessionNotes, {
                    notes: data.text,
                    conversationId: this.currentChat.Name,
                    timestamp: '1602832803000',
                    localDate: localDateTime,
                    localDateTime: localDateTime,
                    fromHistory: true,
                    filterName: '',
                    channel: 'CHAT',
                }]
                let newChat = { ...this.currentChat, sessionNotes: sessionNotes }
                this.store.dispatch(new UpdateChat({
                    callId: this.currentChat.callId,
                    chat: newChat
                }))
            }
            else if (this.openedRequest.type == 'email') {
                let sessionNotes = [...this.currentEmail.sessionNotes, {
                    notes: data.text,
                    conversationId: this.currentEmail.Name,
                    timestamp: '1602832803000',
                    localDate: localDateTime,
                    localDateTime: localDateTime,
                    fromHistory: true,
                    filterName: '',
                    channel: 'EMAIL',
                }]
                let newEmail = { ...this.currentEmail, sessionNotes: sessionNotes }
                this.store.dispatch(new UpdateEmail({
                    callId: this.currentEmail.callId,
                    email: newEmail
                }))
            }

            else if (this.openedRequest.type == 'voice') {
                let sessionNotes = [...this.currentVoice.sessionNotes, {
                    notes: data.text,
                    conversationId: this.currentVoice.Name,
                    timestamp: '1602832803000',
                    localDate: localDateTime,
                    localDateTime: localDateTime,
                    fromHistory: true,
                    filterName: '',
                    channel: 'EMAIL',
                }]
                let newVoice = { ...this.currentVoice, sessionNotes: sessionNotes }
                this.store.dispatch(new UpdateVoice({
                    callId: this.currentVoice.callId,
                    voice: newVoice
                }))
            }


            this.scrollcheck = false;
        }
        else if (data.type == 'Edit') { // edit Note
            this.show_add_note_template = false;
            if (this.openedRequest.type == 'chat') {
                let sessionNotes = [...this.currentChat.sessionNotes]
                let editedNote = { ...sessionNotes[this.edit_note_index], notes: data.text }
                sessionNotes = sessionNotes.map((note, i) => i == this.edit_note_index ? editedNote : sessionNotes[i])
                let newChat = { ...this.currentChat, sessionNotes: sessionNotes }
                this.store.dispatch(new UpdateChat({
                    callId: this.currentChat.callId,
                    chat: newChat
                }))
            }
            else if (this.openedRequest.type == 'email') {
                let sessionNotes = [...this.currentEmail.sessionNotes]
                let editedNote = { ...sessionNotes[this.edit_note_index], notes: data.text }
                sessionNotes = sessionNotes.map((note, i) => i == this.edit_note_index ? editedNote : sessionNotes[i])
                let newEmail = { ...this.currentEmail, sessionNotes: sessionNotes }
                this.store.dispatch(new UpdateEmail({
                    callId: this.currentEmail.callId,
                    email: newEmail
                }))
            }
            else if (this.openedRequest.type == 'voice') {
                let sessionNotes = [...this.currentVoice.sessionNotes]
                let editedNote = { ...sessionNotes[this.edit_note_index], notes: data.text }
                sessionNotes = sessionNotes.map((note, i) => i == this.edit_note_index ? editedNote : sessionNotes[i])
                let newVoice = { ...this.currentVoice, sessionNotes: sessionNotes }
                this.store.dispatch(new UpdateVoice({
                    callId: this.currentVoice.callId,
                    voice: newVoice
                }))
            }
        }
        else if (data.type == 'Cancel') {
            this.show_add_note_template = false;
        }
    }
    editNote(index) {
        this.show_add_note_template = true;
        this.add_note_template_type = 'Edit';
        this.edit_note_index = index;
    }

    deleteNote(index) {
        // this.notes = this.notes.filter((note, i) => i != index);
        if (this.openedRequest.type == 'chat') {
            let sessionNotes = this.currentChat.sessionNotes.filter((note, i) => i != index);
            let newChat = { ...this.currentChat, sessionNotes: sessionNotes }
            this.store.dispatch(new UpdateChat({
                callId: this.currentChat.callId,
                chat: newChat
            }))
        }
        else if (this.openedRequest.type == 'email') {
            let sessionNotes = this.currentEmail.sessionNotes.filter((note, i) => i != index);
            let newEmail = { ...this.currentEmail, sessionNotes: sessionNotes }
            this.store.dispatch(new UpdateEmail({
                callId: this.currentEmail.callId,
                email: newEmail
            }))
        }

        else if (this.openedRequest.type == 'voice') {
            let sessionNotes = this.currentVoice.sessionNotes.filter((note, i) => i != index);
            let newVoice = { ...this.currentVoice, sessionNotes: sessionNotes }
            this.store.dispatch(new UpdateVoice({
                callId: this.currentVoice.callId,
                voice: newVoice
            }))
        }

    }
}
