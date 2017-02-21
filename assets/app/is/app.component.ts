import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
   selector: 'is-app',
   template: `
    <dashboard></dashboard>
`,
    directives: [DashboardComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {

}
