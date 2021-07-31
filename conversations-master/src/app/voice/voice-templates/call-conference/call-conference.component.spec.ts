import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallConferenceComponent } from './call-conference.component';

describe('CallConferenceComponent', () => {
  let component: CallConferenceComponent;
  let fixture: ComponentFixture<CallConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
