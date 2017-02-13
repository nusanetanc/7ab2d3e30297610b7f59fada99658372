import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {SigninComponent} from "./user/signin.component";

@Component({
   selector: 'my-app',
   template: `
   <h1>Tes</h1>
       <header>
            <a [routerLink]=" ['SignIn'] ">Login</a>
       </header>
        <main>
          <router-outlet></router-outlet>
        </main>
`,
    directives: [SigninComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/signin', component: SigninComponent, name: 'SignIn', useAsDefault: true}
])

export class AppComponent {

}
