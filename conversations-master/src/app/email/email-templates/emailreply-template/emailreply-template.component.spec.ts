import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailreplyTemplateComponent } from './emailreply-template.component';

describe('EmailreplyTemplateComponent', () => {
  let component: EmailreplyTemplateComponent;
  let fixture: ComponentFixture<EmailreplyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailreplyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailreplyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
