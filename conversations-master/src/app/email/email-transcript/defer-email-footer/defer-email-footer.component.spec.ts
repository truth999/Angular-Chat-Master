import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferEmailFooterComponent } from './defer-email-footer.component';

describe('DeferEmailFooterComponent', () => {
  let component: DeferEmailFooterComponent;
  let fixture: ComponentFixture<DeferEmailFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeferEmailFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferEmailFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
