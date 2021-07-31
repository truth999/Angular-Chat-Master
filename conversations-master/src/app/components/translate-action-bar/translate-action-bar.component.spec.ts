import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateActionBarComponent } from './translate-action-bar.component';

describe('TranslateActionBarComponent', () => {
  let component: TranslateActionBarComponent;
  let fixture: ComponentFixture<TranslateActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
