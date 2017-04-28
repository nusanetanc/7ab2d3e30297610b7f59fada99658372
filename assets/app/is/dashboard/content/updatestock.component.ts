import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";
import { Stock } from './stocks';
import { Sub } from './subs';

@Component({
    selector: 'form-updatestocks',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Update Stock
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row">
                <div class="col-sm-6">
                    <div class="formNewReport marginLR20">
                      <input value="{{stocks.goods}}" #idgoods type="text" class="form-control inputForm" id="idgoods" placeholder="Goods" disabled="true" /><br/>
                      <input value="{{stocks.barcode}}" #idbarcode type="number" class="form-control inputForm" id="idbarcode" placeholder="Barcode" disabled="true" />
                        <form>
                            <select [(ngModel)]="selectedSub._id" (change)="onSelectSub($event.target.value)" #inputSub id="inputSub">
                                <option selected="true"  [value]="0">-- Select Subscribe --</option>
                                <option *ngFor="#sub of subs" [value]=sub._id>{{ sub.subid }} - {{ sub.name }}</option>
                            </select><br/>
                        </form>
                        <button type="submit" (click)="UpdateStock(inputSub.value, idgoods.value, idbarcode.value)" class="btn btn-default buttonOrange">
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
export class ContentUpdateStocksComponent implements OnInit {
    // Link to our api, pointing to localhost
      API = 'http://202.162.207.164:3000';

      subs: any[] = [];
      stocks: any[] = [];

      constructor(private http: Http, private _routeParams: RouteParams) {}

      ngOnInit() {
        this.getAllSubs();
        this.getStock();
      }
      selectedSub: Sub = new Sub(0, 'dummy');
      onSelectSub(_id) {
          this.stocks = this.getStock() {
            this.http.get(`${this.API}/stock/${this._routeParams.get('id')}`)
              .map(res => res.json())
              .subscribe(stocks => {
                this.stocks = stocks
              })
          }
      }
    // Get all users from the API
    getAllSubs() {
      this.http.get(`${this.API}/subscribe/listsub`)
        .map(res => res.json())
        .subscribe(subs => {
          this.subs = subs
        })
    }
    // Get all users from the API
    getStock() {
      this.http.get(`${this.API}/stock/id/${this._routeParams.get('id')}`)
        .map(res => res.json())
        .subscribe(stocks => {
          this.stocks = stocks
        })
    }
    UpdateStock(inputSub, idgoods, idbarcode) {
        var body = `sub=${inputSub}&goods=${idgoods}&barcode=${idbarcode}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .put(`${this.API}/stock/put/${this._routeParams.get('id')}`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Edit Stock Success');
                window.location.href = `/is/detailstock/${this._routeParams.get('id')}`;
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }
}
