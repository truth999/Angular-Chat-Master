import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTranscriptComponent } from './email-transcript.component';

describe('EmailTranscriptComponent', () => {
  let component: EmailTranscriptComponent;
  let fixture: ComponentFixture<EmailTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
