import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyTransferProgressComponent } from './agency-transfer-progress.component';

describe('AgencyTransferProgressComponent', () => {
  let component: AgencyTransferProgressComponent;
  let fixture: ComponentFixture<AgencyTransferProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyTransferProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyTransferProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
