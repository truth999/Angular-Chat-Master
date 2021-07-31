import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumbrContactComponent } from './add-numbr-contact.component';

describe('AddNumbrContactComponent', () => {
  let component: AddNumbrContactComponent;
  let fixture: ComponentFixture<AddNumbrContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNumbrContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNumbrContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
