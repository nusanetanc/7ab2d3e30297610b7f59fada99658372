import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
//import {SidebarComponent} from "./sidebar.component";
//import {ContentDashboardComponent} from "./content/dashboard.component";
import {ContentAllSubsComponent} from "./dashboard/content/allsubs.component";
@Component({
    selector: 'is-app',
    template: `
    <header>
                <a [routerLink]="['All']">Login</a>
           </header>
            <main>
              <router-outlet></router-outlet>
            </main>
    <main>
    <router-outlet></router-outlet>
    </main>
    `,
    directives: [ContentAllSubsComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/is/allsubs', component:ContentAllSubsComponent, name:'All'}
])

export class AppComponent {

}
