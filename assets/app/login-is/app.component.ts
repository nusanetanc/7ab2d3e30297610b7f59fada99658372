import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';
import {LoginComponent} from "./login.component";

@Component({
    selector: 'my-app',
    template: `
            <router-outlet></router-outlet>
`,
    directives: [LoginComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true}
])

export class AppComponent{
}
