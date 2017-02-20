import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SidebarComponent} from "./sidebar.component";
import {ContentDashboardComponent} from "./content/dashboard.component";
import {ContentAllSubComponent} from "./content/allsub.component";
@Component({
    selector: 'dashboard',
    template: `
    <!-- START CONTENT -->
    <div id="wrapper">
      <sidebar></sidebar>
      <form-dashboard></form-dashboard>
    </div><!-- END CONTENT -->
    `,
    directives: [ContentDashboardComponent,SidebarComponent,ROUTER_DIRECTIVES],
})
export class DashboardComponent {

}
