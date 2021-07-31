import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialSearchModalComponent } from './dial-search-modal.component';

describe('DialSearchModalComponent', () => {
  let component: DialSearchModalComponent;
  let fixture: ComponentFixture<DialSearchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialSearchModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
