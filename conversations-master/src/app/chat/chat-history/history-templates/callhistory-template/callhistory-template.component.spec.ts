import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallhistoryTemplateComponent } from './callhistory-template.component';

describe('CallhistoryTemplateComponent', () => {
  let component: CallhistoryTemplateComponent;
  let fixture: ComponentFixture<CallhistoryTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallhistoryTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallhistoryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
