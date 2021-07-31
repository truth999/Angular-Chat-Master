import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowTabComponent } from './overflow-tab.component';

describe('OverflowTabComponent', () => {
  let component: OverflowTabComponent;
  let fixture: ComponentFixture<OverflowTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverflowTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
