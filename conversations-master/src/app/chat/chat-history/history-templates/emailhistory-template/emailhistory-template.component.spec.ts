import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailhistoryTemplateComponent } from './emailhistory-template.component';

describe('EmailhistoryTemplateComponent', () => {
  let component: EmailhistoryTemplateComponent;
  let fixture: ComponentFixture<EmailhistoryTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailhistoryTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailhistoryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
