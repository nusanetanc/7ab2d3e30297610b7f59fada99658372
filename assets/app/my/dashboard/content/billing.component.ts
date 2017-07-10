import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Bill } from './bills';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Billing
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Content Card -->
                    <div class="row contCard">
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <h4>SUBSCRIBBER PLAN</h4>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-4">
                                        Current Plan
                                    </div>
                                    <div class="col-xs-6 col-sm-1">
                                        :
                                    </div>
                                    <div class="col-xs-6 col-sm-7">
                                        Level {{ subs.packlev }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-4">
                                        Account Status
                                    </div>
                                    <div class="col-xs-6 col-sm-1">
                                        :
                                    </div>
                                    <div class="col-xs-6 col-sm-7">
                                        <span style="color: #92C889;">{{ subs.status }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <h4><a href="billing-information.html">BILLING INFO</a></h4>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3">
                                        Fullname
                                    </div>
                                    <div class="col-xs-6 col-sm-1">
                                        :
                                    </div>
                                    <div class="col-xs-6 col-sm-8">
                                        {{ subs.name }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3">
                                        Email
                                    </div>
                                    <div class="col-xs-6 col-sm-1">
                                        :
                                    </div>
                                    <div class="col-xs-6 col-sm-8">
                                        {{ subs.email }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3">
                                        Address
                                    </div>
                                    <div class="col-xs-6 col-sm-1">
                                        :
                                    </div>
                                    <div class="col-xs-6 col-sm-8">
                                        {{ subs.address }} No. {{ subs.nohome }},<br>{{ subs.cluster }}, {{ subs.city }}, Indonesia
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Content Card -->

                    <!-- Content List -->
                    <div class="row contList">
                        <div class="col-md-12">
                            <div class="row hid">
                                <div class="col-sm-4 invoiceIdHeader"><strong>Invoice ID</strong></div>
                                <div class="col-sm-4 invoiceListHeader"><strong>Total</strong></div>
                                <div class="col-sm-4 invoiceListHeader"><strong>Status</strong></div>
                            </div>
                            <div *ngFor="#bill of bills">
                            <a [routerLink]="['Detailbilling', {id: bill._id}]">
                            <div class="row">
                                <div class="col-sm-4 invoiceList paddingL35"><span>{{ bill.noinvoice }}</span></div>
                                <div class="col-sm-4 invoiceList"><span>Rp. {{ bill.totalpay | number:'2.2-4' }}</span></div>
                                <div class="col-sm-4 invoiceList"><span class="red">{{ bill.status }}</span></div>
                            </div>
                            </a>
                            </div>
                        </div>
                    </div>
                    <!-- /Content List -->

                    <!-- Paging -->
                    <div class="row contPage">
                        <div class="col-sm-12">
                            <nav aria-label="Page navigation">
                                <ul>
                                    <li class="prevBillPage">
                                        <a href="billing-detail.html" aria-label="Previous">
                                            <i class="material-icons">chevron_left</i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="billing-detail.html">1</a>
                                    </li>
                                    <li>
                                        <a href="billing-detail.html">2</a>
                                    </li>
                                    <li>
                                        <a href="billing-detail.html">3</a>
                                    </li>
                                    <li class="nextBillPage">
                                        <a href="billing-detail.html" aria-label="Next">
                                            <i class="material-icons">chevron_right</i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!-- /Paging -->
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentBillingComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

  bills: any[] = [];
  subs: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllBills();
    this.getAcountSub();
  }

// Get all users from the API
getAllBills() {
  this.http.get(`${this.API}/subscribe/bill`)
    .map(res => res.json())
    .subscribe(bills => {
      this.bills = bills
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
