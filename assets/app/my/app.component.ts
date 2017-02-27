import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContentDashboardComponent} from "./dashboard/content/dashboard.component";
import 'rxjs/add/operator/map';
import { Sub } from './dashboard/content/subs';

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
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Session_ID = '58b3cdac45912d052e2c85a5';

subs: any[] = [];
  constructor(private http: Http) {}

  ngOnInit() {
    this.getAcountSub();
  }

getAcountSub() {
  this.http.get(`${this.API}/subscribe/sub/${this.Session_ID}`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
    })
}

}
