import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltranscriptFooterComponent } from './calltranscript-footer.component';

describe('CalltranscriptFooterComponent', () => {
  let component: CalltranscriptFooterComponent;
  let fixture: ComponentFixture<CalltranscriptFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalltranscriptFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalltranscriptFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
