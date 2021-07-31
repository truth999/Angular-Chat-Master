import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceTranscriptComponent } from './voice-transcript.component';

describe('VoiceTranscriptComponent', () => {
  let component: VoiceTranscriptComponent;
  let fixture: ComponentFixture<VoiceTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
