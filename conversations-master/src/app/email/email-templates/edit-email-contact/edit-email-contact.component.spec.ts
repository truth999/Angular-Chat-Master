import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailContactComponent } from './edit-email-contact.component';

describe('EditEmailContactComponent', () => {
  let component: EditEmailContactComponent;
  let fixture: ComponentFixture<EditEmailContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmailContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
