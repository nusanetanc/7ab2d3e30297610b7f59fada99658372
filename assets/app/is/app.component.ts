import { Component } from 'angular2/core';
import { Routes, ROUTER_DIRECTIVES } from 'angular2/router';
import {SigninComponent}  from "./user/signin.component";

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/signin', component: SigninComponent }
])

export class AppComponentIs {

}
