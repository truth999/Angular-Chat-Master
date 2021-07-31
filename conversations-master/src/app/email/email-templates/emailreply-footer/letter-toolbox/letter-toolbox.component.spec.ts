import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterToolboxComponent } from './letter-toolbox.component';

describe('LetterToolboxComponent', () => {
  let component: LetterToolboxComponent;
  let fixture: ComponentFixture<LetterToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
