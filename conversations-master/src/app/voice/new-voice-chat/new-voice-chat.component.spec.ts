import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVoiceChatComponent } from './new-voice-chat.component';

describe('NewVoiceChatComponent', () => {
  let component: NewVoiceChatComponent;
  let fixture: ComponentFixture<NewVoiceChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVoiceChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVoiceChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
