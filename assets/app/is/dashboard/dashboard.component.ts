import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SidebarComponent} from "./sidebar.component";
//import {ContentDashboardComponent} from "./content/content.component";
@Component({
    selector: 'dashboard',
    template: `
    <sidebar></sidebar>
    `,
    directives: [SidebarComponent,ROUTER_DIRECTIVES],
})
export class DashboardComponent {

}
