import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemNamingComponent } from './bem-naming.component';

describe('BemNamingComponent', () => {
  let component: BemNamingComponent;
  let fixture: ComponentFixture<BemNamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemNamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BemNamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
