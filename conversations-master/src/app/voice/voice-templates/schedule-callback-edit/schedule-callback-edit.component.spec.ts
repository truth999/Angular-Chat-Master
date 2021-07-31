import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCallbackEditComponent } from './schedule-callback-edit.component';

describe('ScheduleCallbackEditComponent', () => {
  let component: ScheduleCallbackEditComponent;
  let fixture: ComponentFixture<ScheduleCallbackEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCallbackEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCallbackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
