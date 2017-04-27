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
                    <a [routerLink]="['Coverage']" id="menu-toggle" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                    </a>
                    &nbsp; Add Stock
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
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add Stock</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="formNewReport marginLR20">
                                            <form>
                                                <select #inputGoods id="inputGoods">
                                                    <option class="option" disabled="true">-- Select Goods Name --</option>
                                                    <option *ngFor="#good of goods" >{{ good._id }}</option>
                                                </select><br/>
                                            </form>
                                            <input #idbarcode type="text" class="form-control inputForm" id="idbarcode" placeholder="Code Barcode">
                                            <button type="submit" class="btn btn-default buttonOrange">
                                                SEND
                                            </button>
                                        </div>
                                        <ul *ngFor="#good of goods">
                                          <li>{{ good._id }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
        </div><!-- END CONTENT -->
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
