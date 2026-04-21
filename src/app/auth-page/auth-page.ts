import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-auth-page',
    imports: [RouterLink, NgOptimizedImage],
    templateUrl: './auth-page.html',
    styleUrl: './auth-page.scss',
})
export class AuthPage {
    loginWithDiscord(): void {
        console.log('d');
    }
}
