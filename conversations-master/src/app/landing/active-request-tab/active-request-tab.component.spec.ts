import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRequestTabComponent } from './active-request-tab.component';

describe('ActiveRequestTabComponent', () => {
  let component: ActiveRequestTabComponent;
  let fixture: ComponentFixture<ActiveRequestTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRequestTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRequestTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
