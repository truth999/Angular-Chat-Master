import { AfterViewChecked, ElementRef, ViewChild, Component, OnInit, IterableDiffers } from '@angular/core';
import { ActiveRequest } from '../../../ngrx/models/active-request.model';
import { Voice } from '../../../ngrx/models/voice.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/reducers/index.reducer';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';
import { UpdateVoice } from 'src/app/ngrx/actions/voice.actions';
import { timestamp } from 'rxjs/operators';

@Component({
    selector: 'app-call-transcript',
    templateUrl: './call-transcript.component.html',
    styleUrls: ['./call-transcript.component.scss']
})
export class CallTranscriptComponent implements OnInit {
    calltranscripts = [
        {
            'type': 0,
            'name': 'Hilda',
            'txt': 'Hello, Good Morning!',
            'time': '11:20am'
        },
        {
            'type': 1,
            'name': 'AI',
            'txt': 'Good Morning! Hilda. How can I assit you?',
            'time': '11:20am'
        },
        {
            'type': 0,
            'name': 'Hilda',
            'txt': "I need help with my account. I can't log in. It gives me an error message.",
            'time': '11:20am'
        },
        {
            'type': 1,
            'name': 'AI',
            'txt': 'What is the error message you get?',
            'time': '11:20am'
        },
        {
            'type': 0,
            'name': 'Hilda',
            'txt': 'Can not connect to your account at this time, please try again later.',
            'time': '11:20am'
        },
        {
            'type': 1,
            'name': 'AI',
            'txt': 'Thanks. Let me find an expert to better assist you',
            'time': '11:20am'
        }
    ];
    transcripts;
    scrollcheck: boolean = false;
    currentVoice: Voice;

    @ViewChild('transcriptArea') private transcriptArea: ElementRef;
    constructor(private store: Store<AppState>) {
        store.select('openedRequestDetail').subscribe(opendRequestData => {
            store.select('voices').subscribe(val => {
                let index = val.findIndex(element => element.callId === opendRequestData.callId)
                // console.log(index);
                if (index >= 0) {
                    this.transcripts = val[index].voiceTranscript;
                    this.currentVoice = val[index];
                    this.transcripts = this.transcripts.map(transcript => {
                        let time = transcript.timestamp.split('T', 2)[1];
                        let hour = time.split(':')[0];

                        time = time.split(':')[0] + ':' + time.split(':')[1];
                        if ((hour - 0) < 12) {
                            time += 'am';
                        }
                        else {
                            time += 'pm';
                        }
                        return { ...transcript, timestamp: time };
                    })

                    this.scrollToBottom();
                    this.scrollcheck = false;
                }

            })

        })
    }

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
            this.transcriptArea.nativeElement.scrollTop = this.transcriptArea.nativeElement.scrollHeight;
        } catch (err) { }
        // alert("abc");           
    }


}
