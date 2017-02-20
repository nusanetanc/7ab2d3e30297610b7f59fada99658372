import {Component} from 'angular2/core';
import {Routes, ROUTER_DIRECTIVES} from 'angular2/router';
import {SidebarComponent} from "./sidebar.component";
import {ContentDashboardComponent} from "./content/dashboard.component";
import {ContentAllSubsComponent} from "./content/allsubs.component";
@Component({
    selector: 'dashboard',
    template: `
    <!-- START CONTENT -->
    <div id="wrapper">
      <sidebar></sidebar>
      <router-outlet></router-outlet>
    </div><!-- END CONTENT -->
    `,
    directives: [ContentDashboardComponent,ContentAllSubsComponent, SidebarComponent,ROUTER_DIRECTIVES],
})

@Routes([
    { path: '/', component: ContentDashboardComponent },
    { path: '/allsubs', component: ContentAllSubsComponent }
])
export class DashboardComponent {

}
