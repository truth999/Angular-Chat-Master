import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoryPageComponent } from './edit-history-page.component';

describe('EditHistoryPageComponent', () => {
  let component: EditHistoryPageComponent;
  let fixture: ComponentFixture<EditHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
