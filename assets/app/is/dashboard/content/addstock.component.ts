import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Stock } from './stocks';


@Component({
    selector: 'form-addstocks',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Add Stock
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
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
                        <button type="submit" (click)="addStock(inputGoods.value, idbarcode.value)" class="btn btn-default buttonOrange">
                            SUBMIT
                        </button>
                    </div>
                </div>
              </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddStocksComponent implements OnInit {
    // Link to our api, pointing to localhost
      API = 'http://202.162.207.164:3000';

      goods: any[] = [];]
      stocks: any[] = [];

      constructor(private http: Http) {}

      ngOnInit() {
        this.getAllGoods();
        this.getAllStock();
      }

    // Get all users from the API
    getAllGoods() {
      this.http.get(`${this.API}/goods/list`)
        .map(res => res.json())
        .subscribe(goods => {
          this.goods = goods
        })
    }
    // Get all users from the API
    getAllStock() {
      this.http.get(`${this.API}/stock/list`)
        .map(res => res.json())
        .subscribe(stocks => {
          this.stocks = stocks
        })
    }
    addStock(inputGoods, idbarcode) {

        var body = `goods=${inputGoods}&barcode=${idbarcode}&status='onstock'`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/stock/add`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Stock Success');
                this.getAllStock();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }
}
