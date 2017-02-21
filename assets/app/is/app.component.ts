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
                <!-- Sidebar -->
                <div id="sidebar-wrapper">
                  <nav id="spy">
                    <ul class="sidebar-nav nav">
                      <li class="sidebar-brand">
                        <div class="title">
                          <img src="./images/ava.png" alt="ava">
                          <a href="" style="margin-top: 20px;"><strong>John Doe</strong></a>
                          <a href="" style="margin-top: -20px;">Acount Manager</a>
                        </div>
                      </li>
                          <a [routerLink]="['All']">Login</a>
                      <li class="active" style="margin-top: 20px;">
                        <a routerLink="/" ><i class="material-icons">dashboard</i> <strong>DASHBOARD</strong></a>
                      </li>
                      <ul class="nav navbar-nav">
                        <li [routerLinkActive]="['active']"> <a [routerLink]="['one']">One</a></li>
                        <li [routerLinkActive]="['active']"> <a [routerLink]="['second']">Second</a></li>
                      </ul>
                      <li>
                        <a role="button" data-toggle="collapse" [routerLink]="['All']" aria-expanded="false" aria-controls="collapseExample">
                          <i class="material-icons">supervisor_account</i> <strong>SUBSCRIBERS</strong>
                        </a>
                        <div class="collapse" id="subscribers">
                          <div class="listsub">
                            <a href="allsubscribers"><strong>ALL SUBSCRIBERS</strong></a>
                            <a href="newsubscribers"><strong>ADD NEW</strong></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="reports"><i class="material-icons">announcement</i> <strong>REPORTS</strong></a>
                      </li>
                      <li>
                        <a [routerLink]="['All']">Login</a>
                      </li>
<a [routerLink]="['All']"><i class="material-icons">info</i> <strong>INFORMATION</strong></a>
                      <li class="sidebar-footer">
                        <div>
                          <img src="./images/groovy-grayscale.png" alt="ava">
                          <a href="">Privacy</a>

                          <a href="">Terms</a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              <router-outlet></router-outlet>
    `,
    directives: [ContentAllSubsComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/is/allsubs', component:ContentAllSubsComponent, name:'All'}
])

export class AppComponent {

}
