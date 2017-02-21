import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
//import {SidebarComponent} from "./sidebar.component";
import {ContentDashboardComponent} from "./dashboard/content/dashboard.component";
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
                      <li class="active" style="margin-top: 20px;">
                          <a class="collapse"><i class="material-icons">dashboard</i><strong>DASHBOARD</strong></a>
                      </li>
                        <div class="dropdown">
                          <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                          <span class="caret"></span></button>
                          <ul class="collapse dropdown-menu">
                            <li><a [routerLink]="['All']"><strong>ALL SUBSCRIBERS</strong></a></li>
                            <li><a [routerLink]="['All']"><strong>ADD NEW</strong></a></li>
                          </ul>
                        </div>
                      <li>
                        <a href="reports"><i class="material-icons">announcement</i> <strong>REPORTS</strong></a>
                      </li>
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
    directives: [ContentAllSubsComponent, ContentDashboardComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/is/allsubs', component:ContentAllSubsComponent, name:'All'},
  { path: '/is', component:ContentDashboardComponent, name:'Dashboard'}
])

export class AppComponent {

}
