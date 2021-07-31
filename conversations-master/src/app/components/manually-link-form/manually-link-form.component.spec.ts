import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuallyLinkFormComponent } from './manually-link-form.component';

describe('ManuallyLinkFormComponent', () => {
  let component: ManuallyLinkFormComponent;
  let fixture: ComponentFixture<ManuallyLinkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuallyLinkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuallyLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
