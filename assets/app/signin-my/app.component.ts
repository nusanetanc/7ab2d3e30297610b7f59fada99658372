import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {SigninComponent} from "./signin.component";

@Component({
    selector: 'my-app',
    template: `
            <my-header></my-header><br>
            <router-outlet></router-outlet>
            <my-footer></my-footer>
`,
    directives: [HeaderComponent, FooterComponent, SigninComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/signin', name: 'Signin', component: SigninComponent, useAsDefault: true}
])

export class AppComponent{
  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';


  subs: any[] = [];

    constructor(private http: Http) {}

    ngOnInit() {
      this.getAcountSub();
    }

  getAcountSub() {
    this.http.get(`${this.API}/subscribe/detailsub`)
      .map(res => res.json())
      .subscribe(
        subs => {
            this.subs = subs
      },
      error => {
        window.location.href = `/signin`;
      }
      );
  }
}
