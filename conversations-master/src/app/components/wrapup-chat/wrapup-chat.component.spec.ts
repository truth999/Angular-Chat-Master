import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapupChatComponent } from './wrapup-chat.component';

describe('WrapupChatComponent', () => {
  let component: WrapupChatComponent;
  let fixture: ComponentFixture<WrapupChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapupChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapupChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
