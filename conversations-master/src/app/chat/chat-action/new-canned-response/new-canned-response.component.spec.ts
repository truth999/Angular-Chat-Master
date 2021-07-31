import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCannedResponseComponent } from './new-canned-response.component';

describe('NewCannedResponseComponent', () => {
  let component: NewCannedResponseComponent;
  let fixture: ComponentFixture<NewCannedResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCannedResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCannedResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
