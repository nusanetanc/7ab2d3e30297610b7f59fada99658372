import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContentDashboardComponent} from "./dashboard/content/dashboard.component";
import {ContentAllSubsComponent} from "./dashboard/content/allsubs.component";
import {ContentAddSubsComponent} from "./dashboard/content/addsubs.component";
import {ContentInformationComponent} from "./dashboard/content/information.component";
import {ContentSubscribeComponent} from "./dashboard/content/subscribe.component";
import {SigninComponent} from "./authentication/signin.component";

@Component({
   selector: 'is-app',
   template: `
   <!-- START CONTENT -->
     <div id="wrapper">
    <dashboard></dashboard>
    <router-outlet></router-outlet>
  </div><!-- END CONTENT -->
`,
    directives: [DashboardComponent, ContentAllSubsComponent, ContentDashboardComponent, ContentInformationComponent, ContentSubscribeComponent, AuthenticationComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/is/allsubs', component:ContentAllSubsComponent, name:'AllSubs'},
  { path: '/is/addsubs', component:ContentAddSubsComponent, name:'AddSubs'},
  { path: '/is', component:ContentDashboardComponent, name:'Dashboard'},
  { path: '/is/subscribe/:id', component:ContentSubscribeComponent, name:'Subscribe'},
  { path: '/is/information', component:ContentInformationComponent, name:'Information'},
  { path: '/is/signin', component:AuthenticationComponent, name:'Signin'},
])

export class AppComponent {

}
