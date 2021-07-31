import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDiscardTemplateComponent } from './email-discard-template.component';

describe('EmailDiscardTemplateComponent', () => {
  let component: EmailDiscardTemplateComponent;
  let fixture: ComponentFixture<EmailDiscardTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailDiscardTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDiscardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
