import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmailContactComponent } from './add-email-contact.component';

describe('AddEmailContactComponent', () => {
  let component: AddEmailContactComponent;
  let fixture: ComponentFixture<AddEmailContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmailContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
