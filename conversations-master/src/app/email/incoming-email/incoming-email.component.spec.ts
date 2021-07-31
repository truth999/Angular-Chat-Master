import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingEmailComponent } from './incoming-email.component';

describe('IncomingEmailComponent', () => {
  let component: IncomingEmailComponent;
  let fixture: ComponentFixture<IncomingEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
