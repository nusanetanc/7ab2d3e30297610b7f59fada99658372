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
import {ContentProfileEmployeeComponent} from "./dashboard/content/profileemployee.component";
import {ContentProfileEngineerComponent} from "./dashboard/content/profileengineer.component";
import {ContentReplayReportComponent} from "./dashboard/content/replayreports.component";
import {ContentAllBillsComponent} from "./dashboard/content/allbills.component";
import {ContentCreateInvoiceComponent} from "./dashboard/content/createinvoice.component";
import {ContentDetailBillingComponent} from "./dashboard/content/detailbilling.component";
import {ContentTestComponent} from "./dashboard/content/testsort.component";
import {ContentCovergeComponent} from "./dashboard/content/coverge.component";
import {ContentAddCityComponent} from "./dashboard/content/addcity.component";
import {ContentCoverageCityComponent} from "./dashboard/content/coveragecity.component";
import {ContentCoveragePropertyComponent} from "./dashboard/content/coverageproperty.component";
import {ContentCoverageClusterComponent} from "./dashboard/content/coveragecluster.component";
import {ContentCoverageBlockComponent} from "./dashboard/content/coverageblock.component";
import {ContentCoverageStreetComponent} from "./dashboard/content/coveragestreet.component";
import {ContentCoverageHomeComponent} from "./dashboard/content/coveragehome.component";

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
        ContentProfileEmployeeComponent,
        ContentProfileEngineerComponent,
        ContentReplayReportComponent,
        ContentAllBillsComponent,
        AuthenticationComponent,
        ContentCreateInvoiceComponent,
        ContentDetailBillingComponent,
        ContentTestComponent,
        ContentAddCityComponent,
        ContentCovergeComponent,
        ContentCoverageCityComponent,
        ContentCoveragePropertyComponent,
        ContentCoverageClusterComponent,
        ContentCoverageBlockComponent,
        ContentCoverageStreetComponent,
        ContentCoverageHomeComponent,
        ROUTER_DIRECTIVES
    ],
})
@RouteConfig([
    { path: '/is/allsubs', component:ContentAllSubsComponent, name:'AllSubs'},
    { path: '/is/createinvoice', component:ContentCreateInvoiceComponent, name:'Createinvoice'},
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
    { path: '/is/detialinformation', component:ContentDetailInformationComponent, name:'DetailInformation'},
    { path: '/is/detailreport', component:ContentDetailReportComponent, name:'DeatailReport'},
    { path: '/is/detailstock', component:ContentDetailStockComponent, name:'DetailStock'},
    { path: '/is/infostock', component:ContentInfoStockComponent, name:'InfoStock'},
    { path: '/is/profileemployee', component:ContentProfileEmployeeComponent, name:'ProfileEmployee'},
    { path: '/is/profileengineer', component:ContentProfileEngineerComponent, name:'ProfileEngineer'},
    { path: '/is/replayreport', component:ContentReplayReportComponent, name:'ReplayReport'},
    { path: '/is/testsort', component:ContentTestComponent, name:'TestSort'},
    { path: '/is/coverge', component:ContentCovergeComponent, name:'Coverge'},
    { path: '/is/addcity', component:ContentAddCityComponent, name:'AddCity'},
    { path: '/is/covergeaddcity', component:ContentCoverageCityComponent, name:'CovergeAddCity'},
    { path: '/is/covergeaddproperty', component:ContentCoveragePropertyComponent, name:'CovergeAddProperty'},
    { path: '/is/covergeaddcluster', component:ContentCoverageClusterComponent, name:'CovergeAddCluster'},
    { path: '/is/covergeaddblock', component:ContentCoverageBlockComponent, name:'CovergeAddBlock'},
    { path: '/is/covergeaddstreet', component:ContentCoverageStreetComponent, name:'CovergeAddStreet'},
    { path: '/is/covergeaddhomenumber', component:ContentCoverageHomeComponent, name:'CovergeAddHomeNumber'},

])

export class AppComponent {
 provideRouter(routes)
}
