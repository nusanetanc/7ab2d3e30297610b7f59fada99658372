import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {SigninComponent} from "./user/signin.component";

@Component({
   selector: 'my-app',
   template: `
   <h1>Tes</h1>
        <a [routerLink]=" ['SignIn'] ">Login</a>
        <main>
          <router-outlet></router-outlet>
        </main>
`
})

@RouteConfig([
  { path: '/signin', component: SigninComponent, name: 'SignIn' }
])

export class AppComponent {

}
