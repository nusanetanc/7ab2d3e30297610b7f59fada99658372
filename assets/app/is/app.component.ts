import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import {SigninComponent}  from "./user/signin.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello World!</h1>
    `
})
@Routes([
    { path: '/', component: MessagesComponent },
    { path: '/signin', component: SigninComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/profile', component: ProfileComponent }
])

export class AppComponentIs {

}
