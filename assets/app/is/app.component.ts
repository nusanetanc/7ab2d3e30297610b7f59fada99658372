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
import {ContentAllMarketingComponent} from "./dashboard/content/allmarketing.component";
import {ContentAllReportsComponent} from "./dashboard/content/allreports.component";
import {ContentAllStocksComponent} from "./dashboard/content/allstock.component";
import {ContentDetailInformationComponent} from "./dashboard/content/detailinformation.component";
import {ContentDetailReportComponent} from "./dashboard/content/detailreport.component";
import {ContentDetailStockComponent} from "./dashboard/content/detailstock.component";
import {ContentInfoStockComponent} from "./dashboard/content/infostock.component";
import {ContentEmployeeComponent} from "./dashboard/content/employee.component";
import {ContentProfileEmpComponent} from "./dashboard/content/profileemp.component";
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
import {ContentDetailJobComponent} from "./dashboard/content/detailjob.component";
import {ContentDashboardHelpdeskComponent} from "./dashboard/content/dashboard(helpdesk).component";
import {ContentDashboardBillingComponent} from "./dashboard/content/dashboard(billing).component";
import {ContentDashboardCroComponent} from "./dashboard/content/dashboard-cro.component";
import {ContentDashboardHrdComponent} from "./dashboard/content/dashboard-hrd.component";
import {ContentDashboardManagerComponent} from "./dashboard/content/dashboard-manager.component";
import {ContentDashboardTechComponent} from "./dashboard/content/dashboard-technical.component";
import {ContentNotFoundComponent} from "./dashboard/content/not-found.component";

@Component({
   selector: 'is-app',
   template: `
   <!-- START CONTENT -->
   <div *ngIf="emps.accessrole != null" id="wrapper">
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

   </div>
   <style *ngIf="emps.accessrole == null">
       .load > img {
           bottom: 0;
           left: 0;
           margin: auto;
           position: absolute;
           right: 0;
           top: 0;
           height:159px;
           width:500px;
       }
   </style>
   <div *ngIf="emps.accessrole == null" class="load">
       <img src="images/logo-groovy.png">
   </div><!-- END CONTENT -->
`,
    directives: [
        DashboardComponent,
        ContentAddSubsComponent,
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
        ContentProfileEmpComponent,
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
        ContentDashboardCroComponent,
        ContentDashboardHrdComponent,
        ContentDashboardManagerComponent,
        ContentDashboardTechComponent,
        ContentNotFoundComponent,
        ContentAllMarketingComponent,
        ROUTER_DIRECTIVES
    ],
})
@RouteConfig([
    { path: '/is/editsubs/:id', component:ContentEditSubsComponent, name:'EditSubs'},
    { path: '/is/allsubs', component:ContentAllSubsComponent, name:'AllSubs'},
    { path: '/is/addproperty', component:ContentCoveragePropertyComponent, name:'AddProperty'},
    { path: '/is/addemp', component:ContentAddEmpComponent, name:'AddEmp'},
    { path: '/is/createinvoice/:id/:package', component:ContentCreateInvoiceComponent, name:'Createinvoice'},
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
    { path: '/is/allmarketing', component:ContentAllMarketingComponent, name:'AllMarketing'},
    { path: '/is/allreport', component:ContentAllReportsComponent, name:'AllReport'},
    { path: '/is/allstock', component:ContentAllStocksComponent, name:'AllStock'},
    { path: '/is/detailinformation/:id', component:ContentDetailInformationComponent, name:'DetailInformation'},
    { path: '/is/detailreport/:id', component:ContentDetailReportComponent, name:'DetailReport'},
    { path: '/is/detailstock/:id', component:ContentDetailStockComponent, name:'DetailStock'},
    { path: '/is/infostock/:id', component:ContentInfoStockComponent, name:'InfoStock'},
    //{ path: '/is/emp', component:ContentEmployeeComponent, name:'ProfileEmployee'},
    { path: '/is/profileemp/:id', component:ContentProfileEmpComponent, name:'ProfileEmp'},
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
    { path: '/is/packages', component:ContentPackagesComponent, name:'Package'},
    { path: '/is/job/:id', component:ContentDetailJobComponent, name:'DetailJob'},
    { path: '/is/helpdesk', component:ContentDashboardHelpdeskComponent, name:'DashboardHelpdesk'},
    { path: '/is/billing', component:ContentDashboardBillingComponent, name:'DashboardBilling'},
    { path: '/is/cro', component:ContentDashboardCroComponent, name:'DashboardCro'},
    { path: '/is/hrd', component:ContentDashboardHrdComponent, name:'DashboardHrd'},
    { path: '/is/manager', component:ContentDashboardManagerComponent, name:'DashboardManager'},
    { path: '/is/technical', component:ContentDashboardTechComponent, name:'DashboardTech'},
    { path: '/is/not-found', component:ContentNotFoundComponent, name:'NotFound'},
])

export class AppComponent {
// Link to our api, pointing to localhost
API = 'http://202.162.207.164:3000';
//Session_ID = '58b6a0d77dfd7052a9fe53c9';
content_access = '202';

emps: any[] = [];
constructor(private http: Http) {}

ngOnInit() {
    this.getAcountEmp();
}


getAcountEmp() {
    this.http.get(`${this.API}/subscribe/detailemp`)
        .map(res => res.json())
        .subscribe(emps => {
            this.emps = emps
        },
        error => {
          window.location.href = `/login`;
        }
      )
}

}
