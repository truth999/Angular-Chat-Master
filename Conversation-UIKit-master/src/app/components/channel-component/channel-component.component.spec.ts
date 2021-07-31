import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelComponentComponent } from './channel-component.component';

describe('ChannelComponentComponent', () => {
  let component: ChannelComponentComponent;
  let fixture: ComponentFixture<ChannelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
