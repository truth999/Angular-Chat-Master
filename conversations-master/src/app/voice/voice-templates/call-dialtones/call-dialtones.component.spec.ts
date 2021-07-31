import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDialtonesComponent } from './call-dialtones.component';

describe('CallDialtonesComponent', () => {
  let component: CallDialtonesComponent;
  let fixture: ComponentFixture<CallDialtonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDialtonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDialtonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
