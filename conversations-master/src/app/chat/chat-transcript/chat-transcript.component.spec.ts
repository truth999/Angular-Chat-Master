import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTranscriptComponent } from './chat-transcript.component';

describe('ChatTranscriptComponent', () => {
  let component: ChatTranscriptComponent;
  let fixture: ComponentFixture<ChatTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
