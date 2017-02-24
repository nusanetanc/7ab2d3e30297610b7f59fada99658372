import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
//import {ContentDashboardComponent} from "./dashboard/content/dashboard.component";

@Component({
   selector: 'my-app',
   template: `
   <!-- START CONTENT -->
     <div id="wrapper">
    <dashboard></dashboard>
    
  </div><!-- END CONTENT -->
`,
    directives: [DashboardComponent,ROUTER_DIRECTIVES],
})

export class AppComponent {

}
