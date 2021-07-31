import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceCallingScreenComponent } from './conference-calling-screen.component';

describe('ConferenceCallingScreenComponent', () => {
  let component: ConferenceCallingScreenComponent;
  let fixture: ComponentFixture<ConferenceCallingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceCallingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceCallingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
