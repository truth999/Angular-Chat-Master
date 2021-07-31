import { Component, OnInit, EventEmitter, Output, Input, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActiveRequest } from 'src/app/ngrx/models/active-request.model';
import { AppState } from '../../ngrx/reducers/index.reducer';
import { AddActiveRequest, ClearActiveRequests } from 'src/app/ngrx/actions/active-request.actions';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';

@Component({
    selector: 'app-manually-link-form',
    templateUrl: './manually-link-form.component.html',
    styleUrls: ['./manually-link-form.component.scss']
})
export class ManuallyLinkFormComponent implements OnInit {

    @Output() callbackFunction: EventEmitter<any> = new EventEmitter();

    link_id: string;
    isNameAutoComplete: boolean = false;
    autocompleteForm_control: boolean = false;
    linkedtoInput_control: boolean = false;
    isAutoCompleteForm: boolean = false;
    linked_to: String = '';
    linked_to_currentId: number;
    displayData;
    linked_callId;

    activeRequests: ActiveRequest[];
    openedRequest: ActiveRequest;

    constructor(private renderer: Renderer2, private store: Store<AppState>) {
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.linkedtoInput_control != true && this.autocompleteForm_control == false) {
                this.isAutoCompleteForm = false;
                // this.isAssociatedAutoComplete = false;
            }
        });
        store.select('activeRequests').subscribe(val => { this.activeRequests = val; });

        store.select('openedRequestDetail').subscribe(opendRequestData => {
            this.openedRequest = JSON.parse(localStorage.getItem('openedRequest'));
        });


    }
    ngOnInit(): void {

    }

    showAutoCompleteForm() {
        this.isAutoCompleteForm = !this.isAutoCompleteForm;
    }
    linkedtoInputleave() {
        this.linkedtoInput_control = false;
    }
    linkedtoInputenter() {
        this.linkedtoInput_control = true;
    }

    autoCompleteLinkedTo(data) {
        this.linked_to = data.data;
        this.linked_callId = data.id;
        this.isAutoCompleteForm = false;
    }

    autocompleteFormleave() {
        this.autocompleteForm_control = false;
    }

    autocompleteFormenter() {
        this.autocompleteForm_control = true;
    }

    close() {
        // alert("abc");
        this.callbackFunction.emit('close');
    }
    manualLink() {
        //Manual Link
        let tempData = this.activeRequests;
        let current_index;
        this.activeRequests.map((tab, index) => {
            if (tab.callId == this.openedRequest.callId) {
                current_index = index;
                let updatedTab = tab;
                updatedTab = { ...updatedTab, linkedTo: this.linked_callId }
                tempData = tempData.filter(request => request.callId != updatedTab.callId)
                tempData.splice(index, 0, updatedTab);
            }
        })
        this.activeRequests.map((tab, index) => {
            if (tab.callId == this.linked_callId) {
                tempData = tempData.filter(request => request.callId != this.linked_callId)

                if (index < current_index) {
                    tempData.splice(current_index - 1, 0, tab);
                }
                else {
                    tempData.splice(current_index, 0, tab);
                }
                localStorage.setItem('openedRequest', JSON.stringify(tab));
            }
        })

        this.store.dispatch(new ClearActiveRequests());
        for (var i = 0; i < tempData.length; i++) {
            this.store.dispatch(new AddActiveRequest(tempData[i]))
        }
        this.store.dispatch(new ChangeOpenedRequest(this.openedRequest.callId));

        this.callbackFunction.emit('close');
    }
}
