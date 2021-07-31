import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailfooterActionComponent } from './emailfooter-action.component';

describe('EmailfooterActionComponent', () => {
    let component: EmailfooterActionComponent;
    let fixture: ComponentFixture<EmailfooterActionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmailfooterActionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmailfooterActionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
