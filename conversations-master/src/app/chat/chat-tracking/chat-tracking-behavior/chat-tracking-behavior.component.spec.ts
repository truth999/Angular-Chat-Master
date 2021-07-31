import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTrackingBehaviorComponent } from './chat-tracking-behavior.component';

describe('ChatTrackingBehaviorComponent', () => {
  let component: ChatTrackingBehaviorComponent;
  let fixture: ComponentFixture<ChatTrackingBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTrackingBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTrackingBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
