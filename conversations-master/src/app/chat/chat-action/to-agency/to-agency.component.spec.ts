import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAgencyComponent } from './to-agency.component';

describe('ToAgencyComponent', () => {
  let component: ToAgencyComponent;
  let fixture: ComponentFixture<ToAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
