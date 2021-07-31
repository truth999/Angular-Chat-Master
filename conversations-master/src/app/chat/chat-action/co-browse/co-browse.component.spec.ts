import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoBrowseComponent } from './co-browse.component';

describe('CoBrowseComponent', () => {
  let component: CoBrowseComponent;
  let fixture: ComponentFixture<CoBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
