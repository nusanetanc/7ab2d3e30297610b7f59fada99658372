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
    { path: '/signin', component: SigninComponent }
])

export class AppComponentIs {

}
