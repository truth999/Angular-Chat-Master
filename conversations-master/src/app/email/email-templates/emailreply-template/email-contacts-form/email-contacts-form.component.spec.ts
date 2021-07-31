import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailContactsFormComponent } from './email-contacts-form.component';

describe('EmailContactsFormComponent', () => {
  let component: EmailContactsFormComponent;
  let fixture: ComponentFixture<EmailContactsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailContactsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailContactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
