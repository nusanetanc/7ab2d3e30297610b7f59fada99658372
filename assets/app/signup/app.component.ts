import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {SignupComponent} from "./content/signup.component";

@Component({
    selector: 'my-app',
    template: `

    <my-header></my-header><br>
        <router-outlet></router-outlet>
    <my-footer></my-footer>
    
    `,
    directives: [HeaderComponent, FooterComponent, SignupComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/signup-beta', name: 'Signup', component: SignupComponent, useAsDefault: true},
])

export class AppComponent{
}
