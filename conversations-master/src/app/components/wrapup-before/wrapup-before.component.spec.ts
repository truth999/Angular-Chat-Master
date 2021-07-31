import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapupBeforeComponent } from './wrapup-before.component';

describe('WrapupBeforeComponent', () => {
  let component: WrapupBeforeComponent;
  let fixture: ComponentFixture<WrapupBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapupBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapupBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
