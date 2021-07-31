import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalldialtonesFooterComponent } from './calldialtones-footer.component';

describe('CalldialtonesFooterComponent', () => {
  let component: CalldialtonesFooterComponent;
  let fixture: ComponentFixture<CalldialtonesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalldialtonesFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalldialtonesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
