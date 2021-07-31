import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemNamingComponent } from './pages/bem-naming/bem-naming.component';
import { FlexboxGridComponent } from './pages/flexbox-grid/flexbox-grid.component';
import { TypologyComponent } from './pages/typology/typology.component';
import { FormElementsComponent } from './pages/form-elements/form-elements.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { FormsModule } from '@angular/forms';
import { ContactsDropdownComponent } from './components/contacts-dropdown/contacts-dropdown.component';
import { UiComponentsComponent } from './pages/ui-components/ui-components.component';
import { EmailContactsFormComponent } from './components/email-contacts-form/email-contacts-form.component';
import { DialPadComponent } from './components/dial-pad/dial-pad.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ChipsComponent } from './components/chips/chips.component';
import { CannedResponseComponent } from './components/canned-response/canned-response.component';
import { ModalDropdownComponent } from './components/modal-dropdown/modal-dropdown.component';
import { StepperComponentComponent } from './components/stepper-component/stepper-component.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { OverflowTabComponent } from './components/overflow-tab/overflow-tab.component';
import { ChannelComponentComponent } from './components/channel-component/channel-component.component';
import { ChannelComponent, FormatTimePipe } from './components/channel/channel.component';
import { DialSearchModalComponent } from './components/dial-search-modal/dial-search-modal.component';
import { IconDropdownComponent } from './components/icon-dropdown/icon-dropdown.component';
import { MultiStepWithoutIconsComponent } from './components/multi-step-without-icons/multi-step-without-icons.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    BemNamingComponent,
    FlexboxGridComponent,
    TypologyComponent,
    FormElementsComponent,
    CheckBoxComponent,
    AutoCompleteComponent,
    ContactsDropdownComponent,
    UiComponentsComponent,
    EmailContactsFormComponent,
    DialPadComponent,
    ChartComponent,
    ChipsComponent,
    CannedResponseComponent,
    ModalDropdownComponent,
    StepperComponentComponent,
    MultiSelectComponent,
    FilterButtonComponent,
    AccordionComponent,
    TooltipComponent,
    OverflowTabComponent,
    ChannelComponentComponent,
    ChannelComponent,
    FormatTimePipe,
    DialSearchModalComponent,
    IconDropdownComponent,
    MultiStepWithoutIconsComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    DataTablesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
