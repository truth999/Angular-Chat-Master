import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewIntentComponent } from './create-new-intent.component';

describe('CreateNewIntentComponent', () => {
  let component: CreateNewIntentComponent;
  let fixture: ComponentFixture<CreateNewIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
