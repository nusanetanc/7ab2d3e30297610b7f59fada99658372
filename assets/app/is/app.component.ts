import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContentDashboardComponent} from "./dashboard/content/dashboard.component";
import {ContentAllSubsComponent} from "./dashboard/content/allsubs.component";

@Component({
   selector: 'is-app',
   template: `
    <dashboard></dashboard>
`,
    directives: [DashboardComponent, ContentAllSubsComponent, ContentDashboardComponent, ROUTER_DIRECTIVES, [ROUTER_PROVIDERS]],
})

export class AppComponent {

}
