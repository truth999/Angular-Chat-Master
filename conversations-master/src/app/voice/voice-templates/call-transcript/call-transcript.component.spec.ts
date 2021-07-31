import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTranscriptComponent } from './call-transcript.component';

describe('CallTranscriptComponent', () => {
  let component: CallTranscriptComponent;
  let fixture: ComponentFixture<CallTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
