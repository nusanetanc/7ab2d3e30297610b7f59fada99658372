import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";



@Component({
    selector: 'form-detailstock',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Information Stock
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a href="stock-information.html" class="btn btn-default buttonBack" type="button">
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
                        <div class="col-sm-11 invoiceId"><span>{{stocks.barcode}}</span></div>
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
                                <div class="col-xs-6 col-sm-4">
                                    <span>Name</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{stocks.name}}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Subscriber ID</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{stocks.subid}}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Address</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{stocks.address}} No.{{stocks.nohome}} ,<br>{{stocks.cluster}}, {{stocks.city}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDetailStockComponent {
  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    stocks: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    ngOnInit() {
      this.getAllStocks();
    }

  // Get all users from the API
  getAllStocks() {
    this.http.get(`${this.API}/stock/detail/${this._routeParams.get('id')}`)
      .map(res => res.json())
      .subscribe(stocks => {
        this.stocks = stocks
      })
  }
}
