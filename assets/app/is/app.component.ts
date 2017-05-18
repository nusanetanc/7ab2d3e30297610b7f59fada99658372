import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, provideRouter} from 'angular2/router';
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
import {ContentAddInformationComponent} from "./dashboard/content/addinformation.component";
import {ContentAddReportComponent} from "./dashboard/content/addreport.component";
import {ContentAllEmployeeComponent} from "./dashboard/content/allemployee.component";
import {ContentAllEngineerComponent} from "./dashboard/content/allengineer.component";
import {ContentAllReportsComponent} from "./dashboard/content/allreports.component";
import {ContentAllStocksComponent} from "./dashboard/content/allstock.component";
import {ContentDetailInformationComponent} from "./dashboard/content/detailinformation.component";
import {ContentDetailReportComponent} from "./dashboard/content/detailreport.component";
import {ContentDetailStockComponent} from "./dashboard/content/detailstock.component";
import {ContentInfoStockComponent} from "./dashboard/content/infostock.component";
import {ContentEmployeeComponent} from "./dashboard/content/employee.component";
import {ContentProfileEngineerComponent} from "./dashboard/content/profileengineer.component";
import {ContentReplayReportComponent} from "./dashboard/content/replayreports.component";
import {ContentAllBillsComponent} from "./dashboard/content/allbills.component";
import {ContentCreateInvoiceComponent} from "./dashboard/content/createinvoice.component";
import {ContentDetailBillingComponent} from "./dashboard/content/detailbilling.component";
import {ContentTestComponent} from "./dashboard/content/testsort.component";
import {ContentCoverageComponent} from "./dashboard/content/coverage.component";
import {ContentAddCityComponent} from "./dashboard/content/addcity.component";
import {ContentCoveragePropertyComponent} from "./dashboard/content/coverageproperty.component";
import {ContentCoverageClusterComponent} from "./dashboard/content/coveragecluster.component";
import {ContentCoverageBlockComponent} from "./dashboard/content/coverageblock.component";
import {ContentCoverageStreetComponent} from "./dashboard/content/coveragestreet.component";
import {ContentCoverageHomeComponent} from "./dashboard/content/coveragehome.component";
import {ContentInvoiceComponent} from "./dashboard/content/invoice.component";
import {ContentBillSubscribeComponent} from "./dashboard/content/detailsubbill.component";
import {ContentAddEmpComponent} from "./dashboard/content/addemp.component";
import {ContentAddStocksComponent} from "./dashboard/content/addstock.component";
import {ContentUpdateStocksComponent} from "./dashboard/content/updatestock.component";
import {ContentEditSubsComponent} from "./dashboard/content/editsubs.component";
import {ContentPackagesComponent} from "./dashboard/content/packages.component";
import {ContentDashboardHelpdeskComponent} from "./dashboard/content/dashboard(helpdesk).component";
import {ContentDashboardBillingComponent} from "./dashboard/content/dashboard(billing).component";
import {ContentDetailJobComponent} from "./dashboard/content/detailbilling.component";

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
    directives: [
        DashboardComponent,
        ContentAddSubsComponent
        ContentDashboardHelpdeskComponent,
        ContentDashboardBillingComponent,
        ContentAllSubsComponent,
        ContentDashboardComponent,
        ContentSubscribeComponent,
        ContentAddInformationComponent,
        ContentAddReportComponent,
        ContentAllEmployeeComponent,
        ContentAllEngineerComponent,
        ContentAllInformationComponent,
        ContentAllReportsComponent,
        ContentAllStocksComponent,
        ContentDetailInformationComponent,
        ContentDetailReportComponent,
        ContentDetailStockComponent,
        ContentInfoStockComponent,
        //ContentEmployeeComponent,
        ContentProfileEngineerComponent,
        ContentReplayReportComponent,
        ContentAllBillsComponent,
        AuthenticationComponent,
        ContentCreateInvoiceComponent,
        ContentDetailBillingComponent,
        ContentTestComponent,
        ContentAddCityComponent,
        ContentCoverageComponent,
        ContentCoveragePropertyComponent,
        ContentCoverageClusterComponent,
        ContentCoverageBlockComponent,
        ContentCoverageStreetComponent,
        ContentCoverageHomeComponent,
        ContentInvoiceComponent,
        ContentBillSubscribeComponent,
        ContentAddEmpComponent,
        ContentAddStocksComponent,
        ContentUpdateStocksComponent,
        ContentEditSubsComponent,
        ContentPackagesComponent,
        ContentDetailJobComponent,
        ROUTER_DIRECTIVES
    ],
})
@RouteConfig([

    //{ path: '/is/emp', component:ContentEmployeeComponent, name:'ProfileEmployee'},
    { path: '/is/profileengineer/:id', component:ContentProfileEngineerComponent, name:'ProfileEngineer'},
    { path: '/is/replayreport/:id', component:ContentReplayReportComponent, name:'ReplyReport'},
    { path: '/is/testsort', component:ContentTestComponent, name:'TestSort'},
    { path: '/is/coverage', component:ContentCoverageComponent, name:'Coverage'},
    { path: '/is/addcity', component:ContentAddCityComponent, name:'AddCity'},
    { path: '/is/addcluster', component:ContentCoverageClusterComponent, name:'AddCluster'},
    { path: '/is/addblok', component:ContentCoverageBlockComponent, name:'AddBlock'},
    { path: '/is/addstreet', component:ContentCoverageStreetComponent, name:'AddStreet'},
    { path: '/is/addhome', component:ContentCoverageHomeComponent, name:'AddHome'},
    { path: '/is/addstock', component:ContentAddStocksComponent, name:'AddStock'},
    { path: '/is/createinvoice1', component:ContentInvoiceComponent, name:'Invoice'},
    { path: '/is/billsubscribe/:id', component:ContentBillSubscribeComponent, name:'BillSubscribe'},
    { path: '/is/updatestock/:id', component:ContentUpdateStocksComponent, name:'UpdateStock'},
    { path: '/is/helpdesk', component:ContentDashboardHelpdeskComponent, name:'DashboardHelpdesk'},
    { path: '/is/billing', component:ContentDashboardBillingComponent, name:'DashboardBilling'},
    { path: '/is/packages', component:ContentPackagesComponent, name:'Package'},
    { path: '/is/job/:id', component:ContentDetailJobComponent, name:'DetailJob'},
])

export class AppComponent {

}
