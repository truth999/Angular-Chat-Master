import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteTemplateComponent } from './add-note-template.component';

describe('AddNoteTemplateComponent', () => {
  let component: AddNoteTemplateComponent;
  let fixture: ComponentFixture<AddNoteTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoteTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
