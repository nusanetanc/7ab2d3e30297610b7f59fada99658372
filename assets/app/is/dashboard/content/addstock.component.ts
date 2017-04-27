import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
//import { Goods } from './goods';
//import { Stock } from './stock';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Stock
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
        <div class="row marginB20 marginR0">
            <div class="col-sm-12">
               <a [routerLink]="['AddStock']" class="btn btn-default buttonOrange">
                    ADD NEW STOCK
                </a>
                <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                <div class="dropdown right">
                    <a class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        DATE
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">NAME</a></li>
                        <li><a href="#">ID</a></li>
                    </ul>
                </div>
            </div>
        </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#good of goods">
                    <a [routerLink]="['InfoStock', {id: good._id}]">
                      <div class="row subInfo fontWeight300">
                          <div class="col-sm-11 invoiceId"><span>{{ good.name }}</span></div>
                          <div class="col-sm-1 invoiceList"><span>{{ good.stock }}</span></div>
                      </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddStockComponent implements OnInit {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

  goods: any[] = [];
  //stocks: any[] = [];
  constructor(private http: Http) {}

  ngOnInit() {
    getAllGoods();
  }

// Get all users from the API
getAllGoods() {
  this.http.get(`${this.API}/goods/list`)
    .map(res => res.json())
    .subscribe(goods => {
      this.goods = goods
    })
}
}
