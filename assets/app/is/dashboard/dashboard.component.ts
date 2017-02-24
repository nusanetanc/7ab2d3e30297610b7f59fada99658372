import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
//import {ContentDashboardComponent} from "./content/dashboard.component";
//import {ContentAllSubsComponent} from "./content/allsubs.component";
@Component({
    selector: 'dashboard',
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
                      <li style="margin-top: 10px;">
                          <a [routerLink]="['Dashboard']" class="collapse"><i class="material-icons">dashboard</i><strong>DASHBOARD</strong></a>
                      </li>
                      <li  style="margin-top: 10px;">
                          <a [routerLink]="['AllSubs']" class="collapse"><i class="material-icons">supervisor_account</i><strong>ALL SUBSCRIBERS</strong></a>
                      </li>
                      <li style="margin-top: 10px;">
                          <a [routerLink]="['AddSubs']" class="collapse"><i class="material-icons">dashboard</i><strong>ADD SUBSCRIBERS</strong></a>
                      </li>
                      <li style="margin-top: 10px;">
                        <a href="reports"><i class="material-icons">announcement</i> <strong>REPORTS</strong></a>
                      </li>
                      <li style="margin-top: 10px;">
                        <a [routerLink]="['Information']" class="collapse"><i class="material-icons">announcement</i> <strong>INFORMATION</strong></a>
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
    `,
    directives: [ ROUTER_DIRECTIVES], providers: [],
})


export class DashboardComponent {

}
