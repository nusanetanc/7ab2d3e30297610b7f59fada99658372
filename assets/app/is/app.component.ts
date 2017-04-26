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
import {ContentAddStockComponent} from "./dashboard/content/addstock.component";

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
        ContentAddStockComponent,
        ROUTER_DIRECTIVES
    ],
})
@RouteConfig([
    { path: '/is/allsubs', component:ContentAllSubsComponent, name:'AllSubs'},
    { path: '/is/addproperty', component:ContentCoveragePropertyComponent, name:'AddProperty'},
    { path: '/is/addemp', component:ContentAddEmpComponent, name:'AddEmp'},
    { path: '/is/createinvoice/:id', component:ContentCreateInvoiceComponent, name:'Createinvoice'},
    { path: '/is/detailbilling/:id', component:ContentDetailBillingComponent, name:'Detailbilling'},
    { path: '/is/addsubs', component:ContentAddSubsComponent, name:'AddSubs'},
    { path: '/is', component:ContentDashboardComponent, name:'Dashboard'},
    { path: '/is/subscribe/:id', component:ContentSubscribeComponent, name:'Subscribe'},
    { path: '/is/allinformation', component:ContentAllInformationComponent, name:'Information'},
    { path: '/is/signin', component:AuthenticationComponent, name:'Signin'},
    { path: '/is/addinformation', component:ContentAddInformationComponent, name:'AddInformation'},
    { path: '/is/addreport', component:ContentAddReportComponent, name:'AddReport'},
    { path: '/is/allbill', component:ContentAllBillsComponent, name:'AllBill'},
    { path: '/is/allemployee', component:ContentAllEmployeeComponent, name:'AllEmployee'},
    { path: '/is/allengineer', component:ContentAllEngineerComponent, name:'AllEngineer'},
    { path: '/is/allreport', component:ContentAllReportsComponent, name:'AllReport'},
    { path: '/is/allstock', component:ContentAllStocksComponent, name:'AllStock'},
    { path: '/is/detailinformation/:id', component:ContentDetailInformationComponent, name:'DetailInformation'},
    { path: '/is/detailreport', component:ContentDetailReportComponent, name:'DetailReport'},
    { path: '/is/detailstock', component:ContentDetailStockComponent, name:'DetailStock'},
    { path: '/is/infostock', component:ContentInfoStockComponent, name:'InfoStock'},
    //{ path: '/is/emp', component:ContentEmployeeComponent, name:'ProfileEmployee'},
    { path: '/is/profileengineer/:id', component:ContentProfileEngineerComponent, name:'ProfileEngineer'},
    { path: '/is/replayreport', component:ContentReplayReportComponent, name:'ReplayReport'},
    { path: '/is/testsort', component:ContentTestComponent, name:'TestSort'},
    { path: '/is/coverage', component:ContentCoverageComponent, name:'Coverage'},
    { path: '/is/addcity', component:ContentAddCityComponent, name:'AddCity'},
    { path: '/is/addcluster', component:ContentCoverageClusterComponent, name:'AddCluster'},
    { path: '/is/addblok', component:ContentCoverageBlockComponent, name:'AddBlock'},
    { path: '/is/addstreet', component:ContentCoverageStreetComponent, name:'AddStreet'},
    { path: '/is/addhome', component:ContentCoverageHomeComponent, name:'AddHome'},
    { path: '/is/addstock', component:ContentAddStockComponent, name:'AddStock'},
    { path: '/is/createinvoice1', component:ContentInvoiceComponent, name:'Invoice'},
    { path: '/is/billsubscribe/:id', component:ContentBillSubscribeComponent, name:'BillSubscribe'},
])

export class AppComponent {

}
