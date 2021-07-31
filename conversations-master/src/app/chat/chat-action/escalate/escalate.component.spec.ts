import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalateComponent } from './escalate.component';

describe('EscalateComponent', () => {
  let component: EscalateComponent;
  let fixture: ComponentFixture<EscalateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
