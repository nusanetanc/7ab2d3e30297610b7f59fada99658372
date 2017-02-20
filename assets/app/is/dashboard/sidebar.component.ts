import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {ContentAllSubsComponent} from "./content/allsubs.component";
@Component({
    selector: 'sidebar',
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
              <a routerLink="/" ><i class="material-icons">dashboard</i> <strong>DASHBOARD</strong></a>
            </li>
            <li>
              <a role="button" data-toggle="collapse" [routerLink]="['AllSubs']"aria-expanded="false" aria-controls="collapseExample">
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
              <a href="information"><i class="material-icons">info</i> <strong>INFORMATION</strong></a>
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
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/is/allsubs', component:ContentAllSubsComponent, name:'AllSubs'}
])
export class SidebarComponent {

}
