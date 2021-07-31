import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDashboardComponent } from './total-dashboard.component';

describe('TotalDashboardComponent', () => {
  let component: TotalDashboardComponent;
  let fixture: ComponentFixture<TotalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
