import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";

@Component({
    selector: 'form-infostock',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Stock Information
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a href="stock.html" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Bullet M5 (120 pcs)</strong></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-11 invoiceId"><span><a href="stock-detail.html" class="grey333">1109482746</a></span></div>
                        <div class="col-sm-1 invoiceList"><span class="red">In Use</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentInfoStockComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

  goods: any[] = [];

  constructor(private http: Http, private _routeParams: RouteParams) {}

  ngOnInit() {
    this.getAllGoods();
  }

// Get all users from the API
getAllStocks() {
  this.http.get(`${this.API}/stock/goods/${this._routeParams.get('id')}`)
    .map(res => res.json())
    .subscribe(goods => {
      this.goods = goods
    })
}
}
