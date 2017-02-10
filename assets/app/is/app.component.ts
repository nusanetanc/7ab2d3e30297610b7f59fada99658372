import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
   selector: 'my-app',
   template: `

`
})

@RouteConfig([
  { path: '/signin', component: SigninComponent, name: 'Sign In Is' },
])

export class AppComponent {

}
