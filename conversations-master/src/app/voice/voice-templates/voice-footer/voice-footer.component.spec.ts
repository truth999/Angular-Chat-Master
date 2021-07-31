import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceFooterComponent } from './voice-footer.component';

describe('VoiceFooterComponent', () => {
  let component: VoiceFooterComponent;
  let fixture: ComponentFixture<VoiceFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
