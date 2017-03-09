import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContentDashboardComponent} from "./dashboard/content/dashboard.component";
import {ContentAllSubsComponent} from "./dashboard/content/allsubs.component";
import {ContentAddSubsComponent} from "./dashboard/content/addsubs.component";
import {ContentInformationComponent} from "./dashboard/content/information.component";
import {ContentSubscribeComponent} from "./dashboard/content/subscribe.component";
import {SigninComponent} from "./authentication/signin.component";

@Component({
   selector: 'is-app',
   template: `
   <!-- START CONTENT -->
   <div id="wrapper">
   <dashboard></dashboard>
   <router-outlet></router-outlet>
        
   <div id="failed" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="alert alert-danger alert-dismissible fade in" role=alert>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4>Gagal, coba lagi !!!</h4>
            </div>
        </div>
    </div>
    <div id="success" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="alert alert-success alert-dismissible fade in" role=alert>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4>Berhasil !!!</h4>
            </div>
        </div>
    </div>
        
   </div><!-- END CONTENT -->
`,
    directives: [DashboardComponent, ContentAllSubsComponent, ContentDashboardComponent, ContentInformationComponent, ContentSubscribeComponent, SigninComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/is/allsubs', component:ContentAllSubsComponent, name:'AllSubs'},
  { path: '/is/addsubs', component:ContentAddSubsComponent, name:'AddSubs'},
  { path: '/is', component:ContentDashboardComponent, name:'Dashboard'},
  { path: '/is/subscribe/:id', component:ContentSubscribeComponent, name:'Subscribe'},
  { path: '/is/information', component:ContentInformationComponent, name:'Information'},
  { path: '/is/signin', component:SigninComponent, name:'Signin'},
])

export class AppComponent {

}
