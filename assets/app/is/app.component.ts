import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import {SigninComponent}  from "./user/signin.component";

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
})
@Routes([
    { path: '/signin', component: SigninComponent }
])

export class AppComponentIs {

}
