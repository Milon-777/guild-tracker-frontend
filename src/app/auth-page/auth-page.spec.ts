import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPage } from './auth-page';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('AuthPage', () => {
    let component: AuthPage;
    let fixture: ComponentFixture<AuthPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AuthPage],
            providers: [provideZonelessChangeDetection(), provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(AuthPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
