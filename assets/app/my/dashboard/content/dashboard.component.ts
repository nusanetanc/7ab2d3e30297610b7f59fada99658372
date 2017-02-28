import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Information } from './informations';
import { Sub } from './subs';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
      <div id="page-content-wrapper">
          <div class="content-header">
              <h3 id="home">
                  <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                  </a>
                  &nbsp; Dashboard
              </h3>

          </div>

          <div class="page-content inset" data-spy="scroll" data-target="#spy">
              <div class="row">
                  <div class="col-sm-12">
                      <div class="row marginLR15">
                          <div class="col-sm-4">
                          <a [routerLink]="['Dashboard']">
                              <div class="cardDashboardSub">
                                  <div class="row margin10White">
                                      <div class="col-sm-12 text-center">
                                          <i class="material-icons font100Margin30">announcement</i>
                                          <h4>REPORT PROBLEM</h4>
                                      </div>
                                  </div>
                              </div>
                          </a>
                          </div>
                          <div class="col-sm-4">
                              <div class="cardDashboardSub">
                                  <div class="row margin10White">
                                      <div class="col-sm-12 text-center">
                                          <i class="material-icons font100Margin30">credit_card</i>
                                          <h4>BILLING</h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-sm-4">
                              <div class="cardDashboardSub">
                                  <div class="row">
                                      <div class="col-sm-12 marginTop40">
                                          <div class="row marginBL10White">
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
                                          <div class="row marginBL10White">
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
                                          <div class="row marginBL10White">
                                              <div class="col-xs-6 col-sm-5">
                                                  Next Billing Date
                                              </div>
                                              <div class="col-xs-6 col-sm-1">
                                                  :
                                              </div>
                                              <div class="col-xs-6 col-sm-5">
                                                  March, 12 2017
                                              </div>
                                          </div>
                                          <div class="row marginB10White">
                                              <div class="col-sm-12">
                                                  <h4 class="text-center">SUBSCRIPTION PLAN</h4>
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
              <div class="row paddingLR15Margin20">
                  <div class="col-sm-12">
                      <div class="row headerList paddingLR30">
                          <div class="col-sm-12 invoiceId hid headerSubList"><strong>INFORMATION</strong></div>
                      </div>
                      <div *ngFor="#information of informations">
                        <div class="row subInfo">
                            <div class="col-sm-2 invoiceId"><span><a class="grey333">{{ information.date }}</a></span></div>
                            <div class="col-sm-8 invoiceList"><span><a href="information-detail.html" class="grey333">{{ information.subject }}</a></span></div>
                            <div class="col-sm-2 invoiceList"><span class="red">{{ information.status }}</span></div>
                        </div>
                      </div>
                      <div class="row subInfo">
                          <div class="col-sm-12 invoiceId"><span><a href="information.html" class="linkViewAll"><b>View all informaiton</b></a></span></div>
                      </div>
                  </div>
              </div>
              <!-- /Content List -->

          </div>
      </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDashboardComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Session_ID = '58b3cdac45912d052e2c85a5';

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
  this.http.get(`${this.API}/subscribe/sub/${this.Session_ID}`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
    })
}
}
