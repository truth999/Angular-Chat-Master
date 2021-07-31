import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLanguageFormComponent } from './select-language-form.component';

describe('SelectLanguageFormComponent', () => {
  let component: SelectLanguageFormComponent;
  let fixture: ComponentFixture<SelectLanguageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLanguageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLanguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
