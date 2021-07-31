import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptPageComponent } from './transcript-page.component';

describe('TranscriptPageComponent', () => {
  let component: TranscriptPageComponent;
  let fixture: ComponentFixture<TranscriptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
