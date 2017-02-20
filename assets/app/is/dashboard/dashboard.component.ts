import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SidebarComponent} from "./sidebar.component";
import {ContentDashboardComponent} from "./content/content.component";
@Component({
    selector: 'dashboard',
    template: `
    <sidebar></sidebar>
    <form-content></form-contentcontent>
    `,
    directives: [SidebarComponent, ContentDashboardComponent, ROUTER_DIRECTIVES],
})
export class DashboardComponent {

}
