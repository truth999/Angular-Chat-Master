import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepWithoutIconsComponent } from './multi-step-without-icons.component';

describe('MultiStepWithoutIconsComponent', () => {
  let component: MultiStepWithoutIconsComponent;
  let fixture: ComponentFixture<MultiStepWithoutIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiStepWithoutIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepWithoutIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
