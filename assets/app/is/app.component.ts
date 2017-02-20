import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
   selector: 'app',
   template: `
    <dashboard></dashboard>
`,
    directives: [AuthenticationComponent, DashboardComponent]
})

/*@RouteConfig([
  { path: '/is/login', component:SigninComponent, name:'Signin', useAsDefault:true}
  { path: '/is/isforgot', component:IsForgotComponent, name:'isforgot', useAsDefault:true}
])*/

export class AppComponent {

}
