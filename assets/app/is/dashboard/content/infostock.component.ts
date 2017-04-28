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
                    <a [routerLink]="['AllStock']" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>{{goods.name}} (amount: {{goods.stock}})</strong></div>
                    </div>
                      <div class="row subInfo" *ngFor="#stock of stocks">
                        <a *ngIf="stock.status == 'inuse'" [routerLink]="['DetailStock', {id: stock._id}]">
                        <a *ngIf="stock.status == 'onstock'">
                          <div class="col-sm-11 invoiceId"><span>{{ stock.barcode }}</span></div>
                          <div class="col-sm-1 invoiceList"><span class="red">{{ stock.status }}</span></div>
                        </a *ngIf="stock.status == 'inuse'">
                        </a *ngIf="stock.status == 'onstock'">
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

  stocks: any[] = [];
  goods: any[] = [];

  constructor(private http: Http, private _routeParams: RouteParams) {}

  ngOnInit() {
    this.getAllStocks();
    this.getGoods();
  }

// Get all users from the API
getAllStocks() {
  this.http.get(`${this.API}/stock/goods/${this._routeParams.get('id')}`)
    .map(res => res.json())
    .subscribe(stocks => {
      this.stocks = stocks
    })
}
// Get all users from the API
getGoods() {
  this.http.get(`${this.API}/goods/detail/${this._routeParams.get('id')}`)
    .map(res => res.json())
    .subscribe(goods => {
      this.goods = goods
    })
}
}
