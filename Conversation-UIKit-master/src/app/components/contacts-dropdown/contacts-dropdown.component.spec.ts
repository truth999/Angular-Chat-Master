import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDropdownComponent } from './contacts-dropdown.component';

describe('ContactsDropdownComponent', () => {
  let component: ContactsDropdownComponent;
  let fixture: ComponentFixture<ContactsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
