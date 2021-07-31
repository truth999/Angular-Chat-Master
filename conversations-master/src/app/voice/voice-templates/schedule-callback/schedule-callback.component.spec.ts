import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCallbackComponent } from './schedule-callback.component';

describe('ScheduleCallbackComponent', () => {
  let component: ScheduleCallbackComponent;
  let fixture: ComponentFixture<ScheduleCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
