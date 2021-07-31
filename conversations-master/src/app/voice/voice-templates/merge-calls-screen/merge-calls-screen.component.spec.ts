import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeCallsScreenComponent } from './merge-calls-screen.component';

describe('MergeCallsScreenComponent', () => {
  let component: MergeCallsScreenComponent;
  let fixture: ComponentFixture<MergeCallsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeCallsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeCallsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
