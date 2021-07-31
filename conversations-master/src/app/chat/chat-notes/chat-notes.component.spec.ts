import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNotesComponent } from './chat-notes.component';

describe('ChatNotesComponent', () => {
  let component: ChatNotesComponent;
  let fixture: ComponentFixture<ChatNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
