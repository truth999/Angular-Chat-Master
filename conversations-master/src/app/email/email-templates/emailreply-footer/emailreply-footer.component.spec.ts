import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailreplyFooterComponent } from './emailreply-footer.component';

describe('EmailreplyFooterComponent', () => {
  let component: EmailreplyFooterComponent;
  let fixture: ComponentFixture<EmailreplyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailreplyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailreplyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
