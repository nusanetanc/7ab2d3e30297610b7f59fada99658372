import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
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
