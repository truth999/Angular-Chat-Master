import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypologyComponent } from './typology.component';

describe('TypologyComponent', () => {
  let component: TypologyComponent;
  let fixture: ComponentFixture<TypologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
