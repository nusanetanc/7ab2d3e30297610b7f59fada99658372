import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {AuthenticationComponent} from "./user/authentication/authentication.component";

@Component({
   selector: 'my-app',
   template: `
    <authentication></authentication>
    <dashboard></dashboard>
`,
    directives: [AuthenticationComponent]
})

/*@RouteConfig([
  { path: '/is/login', component:SigninComponent, name:'Signin', useAsDefault:true}
  { path: '/is/isforgot', component:IsForgotComponent, name:'isforgot', useAsDefault:true}
])*/

export class AppComponent {

}
