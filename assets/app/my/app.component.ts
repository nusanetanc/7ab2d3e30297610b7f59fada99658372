import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContentDashboardComponent} from "./dashboard/content/dashboard.component";
import {ContentBillingComponent} from "./dashboard/content/billing.component";
import {ContentReportComponent} from "./dashboard/content/report.component";
import {ContentInformationComponent} from "./dashboard/content/information.component";
import {ContentNewReportComponent} from "./dashboard/content/newreport.component";
import {ContentDetailBillingComponent} from "./dashboard/content/detailbilling.component";
import {ContentDetailInformationComponent} from "./dashboard/content/detailinformation.component";
import {ContentDetailReportComponent} from "./dashboard/content/detailreport.component";
import {ContentAccountComponent} from "./dashboard/content/account.component";


@Component({
   selector: 'my-app',
   template: `
    <!-- START CONTENT -->
    <div id="wrapper">
        <dashboard ></dashboard>
        <router-outlet></router-outlet>
    </div >
    <!-- END CONTENT -->
    `,
    directives: [ DashboardComponent,
                  ContentDashboardComponent,
                  ContentBillingComponent,
                  ContentReportComponent,
                  ContentInformationComponent,
                  ContentNewReportComponent,
                  ContentDetailBillingComponent,
                  ContentDetailInformationComponent,
                  ContentDetailReportComponent,

                  ROUTER_DIRECTIVES
    ],
})
@RouteConfig([
  { path: '/my', component:ContentDashboardComponent, name:'Dashboard'},
  { path: '/my/billing', component:ContentBillingComponent, name:'Billing'},
  { path: '/my/reports', component:ContentReportComponent, name:'Reports'},
  { path: '/my/newreport', component:ContentNewReportComponent, name:'Newreport'},
  { path: '/my/detailbilling/:id', component:ContentDetailBillingComponent, name:'Detailbilling'},
  { path: '/my/detailinformation', component:ContentDetailInformationComponent, name:'Detailinformation'},
  { path: '/my/detailreport/:id', component:ContentDetailReportComponent, name:'Detailreport'},
  { path: '/my/account', component:ContentAccountComponent, name:'Account'},
  { path: '/my/information', component:ContentInformationComponent, name:'Information'}

])

export class AppComponent {

}
