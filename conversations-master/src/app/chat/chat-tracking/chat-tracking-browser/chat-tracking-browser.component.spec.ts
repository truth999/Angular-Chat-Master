import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTrackingBrowserComponent } from './chat-tracking-browser.component';

describe('ChatTrackingBrowserComponent', () => {
  let component: ChatTrackingBrowserComponent;
  let fixture: ComponentFixture<ChatTrackingBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTrackingBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTrackingBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
