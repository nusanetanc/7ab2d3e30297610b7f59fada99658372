import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import {Report} from './allreports';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
          <div id="page-content-wrapper">
              <div class="content-header">
                  <h3 id="home" class="fontWeight300">
                      <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                      </a>
                      &nbsp; Dashboard (Helpdesk)
                  </h3>
              </div>

              <div class="page-content inset" data-spy="scroll" data-target="#spy">
                  <div class="row">
                      <div class="col-sm-12">
                          <div class="row marginLR15">
                              <div class="col-sm-4">
                                <a [routerLink]="['AddInformation']">
                                  <div class="cardDashboardSub">
                                      <div class="row marginB10">
                                          <div class="col-sm-12 text-center">
                                              <i class="material-icons font100Margin30">mode_edit</i>
                                              <h4 class="marginLR20 fontWeight300">POST MAINTENANCE INFORMATION</h4>
                                          </div>
                                      </div>
                                  </div>
                                </a>
                              </div>
                              <div class="col-sm-4">
                                <a [routerLink]="['Information']">
                                  <div class="cardDashboardSub">
                                      <div class="row marginB10">
                                          <div class="col-sm-12 text-center">
                                              <i class="material-icons font100Margin30">info</i>
                                              <h4 class="marginLR20 fontWeight300">VIEW ALL INFORMATIONS</h4>
                                          </div>
                                      </div>
                                  </div>
                                </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- Content List -->
                  <div class="row paddingLR15Margin20">
                      <div class="col-sm-12">
                          <div class="row headerList paddingLR30">
                              <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>LATEST USER REPORT</strong></div>
                          </div>
                          <div class="row subInfo fontWeight300" *ngFor="#complaint of complaints">
                              <div class="col-sm-3 invoiceId"><span>{{complaint.dateopen}}</span></div>
                              <div class="col-sm-7 invoiceList"><span>{{complaint.subcategory}}</span></div>
                              <div class="col-sm-2 invoiceList"><span class="red">{{complaint.status}}</span></div>
                          </div>
                          <div class="row subInfo">
                              <div class="col-sm-12 invoiceId"><span><a class="linkViewAll fontWeight300" [routerLink]="['AllReport']">View all reports</a></span></div>
                          </div>
                      </div>
                  </div>
                  <!-- /Content List -->
              </div>
          </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDashboardHelpdeskComponent {
    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    complaints: any[] = [];
    subs: any[] = [];

    constructor(private http: Http) {}

    ngOnInit() {
        this.getAllReport();
        this.getAllSub();
    }

    // Get all users from the API
    getAllReport() {
        this.http.get(`${this.API}/complaint/listcomplaint`)
            .map(res => res.json())
            .subscribe(complaints => {
                this.complaints = complaints
            })
    }

    // Get all users from the API
    getAllSub() {
        this.http.get(`${this.API}/subscribe/listsub`)
            .map(res => res.json())
            .subscribe(subs => {
                this.subs = subs
            })
    }

}
