import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContentDashboardComponent} from "./dashboard/content/dashboard.component";
//import {AuthenticationComponent} from "./authentication/authentication.component";
/import {ContentDashboardComponent} from "./dashboard/dashboard.component";

@Component({
   selector: 'my-app',
   template: `
   <!-- START CONTENT -->
     <div id="wrapper">
    <dashboard></dashboard>
    <router-outlet></router-outlet>
  </div><!-- END CONTENT -->
`,
    directives: [DashboardComponent, ContentDashboardComponent,  ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/my', component:ContentDashboardComponent, name:'Dashboard'}
])

export class AppComponent {

}
