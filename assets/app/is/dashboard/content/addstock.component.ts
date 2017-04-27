import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Stock } from './stocks';
import { Goods } from './goods';

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
                            <select [(ngModel)]="selectedGoods._id" (change)="onSelectGoods($event.target.value)" #inputGoods id="inputGoods">
                                <option class="option" disabled="true" value="0">-- Select Goods Name --</option>
                                <option *ngFor="#good of goods" value={{ good._id }}>{{ good._id }}</option>
                            </select><br/>
                        </form>
                        <input #idbarcode type="number" class="form-control inputForm" id="idbarcode" placeholder="Barcode">
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
      selectedGoods: Goods = new Goods(0, 'dummy');
      onSelectGoods(_id) {
          this.stocks = this.getAllStock() {
            this.http.get(`${this.API}/stock/goods/${_id}`)
              .map(res => res.json())
              .subscribe(stocks => {
                this.stocks = stocks
              })
          }
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
      this.http.get(`${this.API}/stock/goods/${this.good_id}`)
        .map(res => res.json())
        .subscribe(stocks => {
          this.stocks = stocks
        })
    }
    addStock(inputGoods, idbarcode) {

        var body = `goods=${inputGoods}&barcode=${idbarcode}`;
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
