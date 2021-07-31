import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTrackingComponent } from './chat-tracking.component';

describe('ChatTrackingComponent', () => {
  let component: ChatTrackingComponent;
  let fixture: ComponentFixture<ChatTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
