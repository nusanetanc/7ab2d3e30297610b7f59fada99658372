import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";
import {ContentEmpsNameComponent} from './empsname.component';

@Component({
    selector: 'form-detailstock',
    template: `
    <!-- Page content -->
    <div *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '7' || emps.accessrole == '702'" id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Information Stock
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['InfoStock', {id: stocks.goodsid}]" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>{{stocks.goodsname}}</strong></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-11 invoiceId"><span><h3>{{stocks.barcode}}</h3></span></div>
                        <div class="col-sm-1 invoiceList"><span class="red">{{stocks.status}}</span></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12 invoiceId roboto">
                            <span><b>USE BY</b></span>
                        </div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-2">
                                    <span>Name</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-3">
                                    <span>{{stocks.name}}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-2">
                                    <span>Subscriber ID</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-3">
                                    <span>{{stocks.subid}}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-2">
                                    <span>Address</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-3">
                                    <span>{{stocks.address}} No.{{stocks.nohome}} ,<br>{{stocks.cluster}}, {{stocks.city}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12 invoiceId roboto">
                            <span><b>PIC</b></span>
                        </div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-2">
                                    <span>Name</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-3">
                                    <form-emps [idemps]=stocks.emp1></form-emps>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-2">
                                    <span></span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span></span>
                                </div>
                                <div class="col-xs-12 col-md-3">

                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-2">
                                    <span>Jobs Name</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-3">
                                    <span>{{stocks.jobname}}</span>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div *ngIf="emps.accessrole == '2' || emps.accessrole == '201' || emps.accessrole == '202' || emps.accessrole == '3' || emps.accessrole == '301' || emps.accessrole == '4' || emps.accessrole == '401' || emps.accessrole == '402' || emps.accessrole == '6' || emps.accessrole == '601' || emps.accessrole == '701' || emps.accessrole == '5' || emps.accessrole == '501' || emps.accessrole == '502' || emps.accessrole == '8' || emps.accessrole == '801'">
            <div class="center"><span style="font-size: 72px; font-weight: 700; color: #c1c1c1;"><center>404</center> PAGE NOT FOUND</span><br><hr class="hr1"></div>
        </div>
    `,
    directives: [ContentEmpsNameComponent, ROUTER_DIRECTIVES],
})
export class ContentDetailStockComponent {
  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    stocks: any[] = [];
    emps: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    ngOnInit() {
      this.getAllStocks();
      this.getAcountEmp();
    }

  // Get all users from the API
  getAllStocks() {
    this.http.get(`${this.API}/stock/detail/${this._routeParams.get('id')}`)
      .map(res => res.json())
      .subscribe(stocks => {
        this.stocks = stocks
      })
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
