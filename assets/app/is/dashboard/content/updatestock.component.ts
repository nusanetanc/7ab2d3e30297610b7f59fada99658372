import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Stock } from './stocks';
import { Sub } from './sub';

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
                        <form>
                            <select [(ngModel)]="selectedSub._id" (change)="onSelectSub($event.target.value)" #inputSub id="inputSub">
                                <option class="option" disabled="true" value="0">-- Select Subscribe --</option>
                                <option *ngFor="#sub of subs" [value]=sub._id>{{ sub.name }}</option>
                            </select><br/>
                        </form>
                        <button type="submit" (click)="addStock(inputSub.value)" class="btn btn-default buttonOrange">
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

      constructor(private http: Http) {}

      ngOnInit() {
        this.getAllSubs();
        this.getAllStock();
      }
      selectedSub: Sub = new Sub(0, 'dummy');
      onSelectSub(_id) {
          this.stocks = this.getAllStock() {
            this.http.get(`${this.API}/stock/list`)
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
    getAllStock() {
      this.http.get(`${this.API}/stock//list`)
        .map(res => res.json())
        .subscribe(stocks => {
          this.stocks = stocks
        })
    }
    addStock(inputGoods) {

        var body = `goods=${inputSub}`;
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
