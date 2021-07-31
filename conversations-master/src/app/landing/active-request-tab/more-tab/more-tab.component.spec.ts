import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTabComponent } from './more-tab.component';

describe('MoreTabComponent', () => {
  let component: MoreTabComponent;
  let fixture: ComponentFixture<MoreTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
