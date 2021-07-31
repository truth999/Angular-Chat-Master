import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceProgressComponent } from './conference-progress.component';

describe('ConferenceProgressComponent', () => {
  let component: ConferenceProgressComponent;
  let fixture: ComponentFixture<ConferenceProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
