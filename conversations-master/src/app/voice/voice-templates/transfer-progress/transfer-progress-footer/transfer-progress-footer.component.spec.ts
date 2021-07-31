import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferProgressFooterComponent } from './transfer-progress-footer.component';

describe('TransferProgressFooterComponent', () => {
  let component: TransferProgressFooterComponent;
  let fixture: ComponentFixture<TransferProgressFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferProgressFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferProgressFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
