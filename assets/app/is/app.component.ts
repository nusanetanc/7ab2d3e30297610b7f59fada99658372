import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContentDashboardComponent} from "./dashboard/content/dashboard.component";
import {ContentAllSubsComponent} from "./dashboard/content/allsubs.component";
import {ContentAddSubsComponent} from "./dashboard/content/addsubs.component";
import {ContentAllInformationComponent} from "./dashboard/content/allinformations.component";
import {ContentSubscribeComponent} from "./dashboard/content/subscribe.component";
import {SigninComponent} from "./authentication/signin.component";
//import {ContentAddInformationComponent} from "./dashboard/content/addinformation.component";
//import {ContentAddReportComponent} from "./dashboard/content/addreport.component";
//import {ContentAllEmployeeComponent} from "./dashboard/content/allemployee.component";
//import {ContentAllEngineerComponent} from "./dashboard/content/allengineer.component";
//import {ContentAllReportsComponent} from "./dashboard/content/allreports.component";
//import {ContentAllStocksComponent} from "./dashboard/content/allstock.component";
//import {ContentDetailInformationComponent} from "./dashboard/content/detailinformation.component";
//import {ContentDetailReportComponent} from "./dashboard/content/detailreport.component";
//import {ContentDetailStockComponent} from "./dashboard/content/detailstock.component";
//import {ContentInfoStockComponent} from "./dashboard/content/infostock.component";
//import {ContentProfileEmployeeComponent} from "./dashboard/content/profileemployee.component";
//import {ContentProfileEngineerComponent} from "./dashboard/content/profileengineer.component";
//import {ContentReplayReportComponent} from "./dashboard/content/replayreports.component";
//import {ContentAllBillsComponent} from "./dashboard/content/allbills.component";

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
    directives: [DashboardComponent, ContentAllSubsComponent, ContentDashboardComponent, ContentAddSubsComponent, ContentAllInformationComponent, ContentSubscribeComponent, SigninComponent,  AuthenticationComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
    { path: '/is/allsubs', component:ContentAllSubsComponent, name:'AllSubs'},
    { path: '/is/addsubs', component:ContentAddSubsComponent, name:'AddSubs'},
    { path: '/is', component:ContentDashboardComponent, name:'Dashboard'},
    { path: '/is/subscribe/:id', component:ContentSubscribeComponent, name:'Subscribe'},
    { path: '/is/allinformation', component:ContentAllInformationComponent, name:'Information'},
    { path: '/is/signin', component:AuthenticationComponent, name:'Signin'}
])

export class AppComponent {

}
