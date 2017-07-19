import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Information } from './informations';
import { Sub } from './subs';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page Content -->
    <div id="page-content-wrapper">
       <div class="content-header">
          <h3 id="home">
             <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
             </a>
             &nbsp; Dashboard
          </h3>
       </div>
       <div class="page-content inset" data-spy="scroll" data-target="#spy">
          <div class="row">
             <div class="col-sm-12">
                <div class="row marginLR15">
                   <div class="col-sm-4">
                      <a [routerLink]="['Reports']">
                         <div class="cardDashboardSub">
                            <div class="row marginB10">
                               <div class="col-sm-12 text-center">
                                  <i class="material-icons font100Margin30">announcement</i>
                                  <h4 class="fontWeight300">FEEDBACK</h4>
                               </div>
                            </div>
                         </div>
                      </a>
                   </div>
                   <div class="col-sm-4">
                      <a [routerLink]="['Billing']">
                         <div class="cardDashboardSub">
                            <div class="row marginB10">
                               <div class="col-sm-12 text-center">
                                  <i class="material-icons font100Margin30">credit_card</i>
                                  <h4 class="fontWeight300">PAYMENT</h4>
                               </div>
                            </div>
                         </div>
                      </a>
                   </div>
                   <div class="col-sm-4">
                      <div class="cardDashboardSub paddingT20">
                         <div class="row">
                            <div class="col-sm-12">
                               <div class="row marginBL10">
                                  <div class="col-xs-6 col-sm-5">
                                     Current Plan
                                  </div>
                                  <div class="col-xs-6 col-sm-1">
                                     :
                                  </div>
                                  <div class="col-xs-6 col-sm-5">
                                     Level {{ subs.packlev}}
                                  </div>
                               </div>
                               <div class="row marginBL10">
                                  <div class="col-xs-6 col-sm-5">
                                     Account Status
                                  </div>
                                  <div class="col-xs-6 col-sm-1">
                                     :
                                  </div>
                                  <div class="col-xs-6 col-sm-5">
                                     {{ subs.status}}
                                  </div>
                               </div>
                               <div class="row marginB10">
                                  <div class="col-sm-12">
                                     <h4 class="text-center fontWeight300">SUBSCRIPTION PLAN</h4>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <!-- Content List -->
          <div class="row paddingLR15Margin20 fontWeight300">
             <div class="col-sm-12">
                <div class="row headerList paddingLR30">
                   <div class="col-sm-12 paddingT20 paddingL35 headerSubList">NEW INFORMATION</div>
                </div>
                <div *ngFor="#information of informations">
                  <a [routerLink]="['Detailinformation', {id: information._id}]">
                      <div class="row subInfo fontWeight300">
                          <div class="col-sm-3 invoiceId"><span><a class="grey333">{{ stringAsDate(information.date) | date }}</a></span></div>
                          <div class="col-sm-7 invoiceList"><span><a class="grey333">{{ information.subject }}</a></span></div>
                          <div class="col-sm-2 invoiceList"><span class="red">{{ information.status }}</span></div>
                      </div>
                  </a>
                </div>
                <div class="row subInfo">
                   <div class="col-sm-12 invoiceId"><span><a [routerLink]="['Information']" class="linkViewAll"><b>View all informaiton</b></a></span></div>
                </div>
             </div>
          </div>
          <!-- /Content List -->
       </div>
    </div>
    <!-- Page Content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDashboardComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

    stringAsDate(dateStr: string) {
        return new Date(dateStr);
    }

  informations: any[] = [];
subs: any[] = [];
  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllInformation();
    this.getAcountSub();
  }

// Get all information from the API
getAllInformation() {
  this.http.get(`${this.API}/information/listinformation`)
    .map(res => res.json())
    .subscribe(informations => {
      this.informations = informations
    })
}
getAcountSub() {
  this.http.get(`${this.API}/subscribe/detailsub`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
    })
}
}
