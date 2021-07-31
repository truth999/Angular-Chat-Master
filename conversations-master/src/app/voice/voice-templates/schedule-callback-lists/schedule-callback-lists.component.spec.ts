import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCallbackListsComponent } from './schedule-callback-lists.component';

describe('ScheduleCallbackListsComponent', () => {
  let component: ScheduleCallbackListsComponent;
  let fixture: ComponentFixture<ScheduleCallbackListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCallbackListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCallbackListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
