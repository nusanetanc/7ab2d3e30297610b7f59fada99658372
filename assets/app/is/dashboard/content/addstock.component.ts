import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Stock } from './stock';

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
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add City</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="formNewReport marginLR20">
                                            <form>
                                                <select [(ngModel)]="selectedGoods._id" (change)="onSelectGoods($event.target.value)" #inputGoods id="inputGoods">
                                                    <option class="option" disabled="true" value="0">-- Select Goods Name --</option>
                                                    <option *ngFor="#good of goods" value={{good._id}}>{{ good.name }}</option>
                                                </select><br/>
                                            </form>
                                            <input #idbarcode type="text" class="form-control inputForm" id="idbarcode" placeholder="Code Barcode">
                                            <button type="submit" (click)="addStock(propertyname.value, propertycity.value)" class="btn btn-default buttonOrange">
                                                SEND
                                            </button>
                                        </div>
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

      constructor(private http: Http) {}

      ngOnInit() {
        this.getAllGoods();
      }

    // Get all users from the API
    getAllGoods() {
      this.http.get(`${this.API}/goods/list`)
        .map(res => res.json())
        .subscribe(goods => {
          this.goods = goods
        })
    }
  addCity(cityname) {

      var body = `name=${cityname}`;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http
          .post(`${this.API}/city/addcity`,
              body, {
                  headers: headers
              })
          .subscribe(data => {
              alert('Add City Success');
              this.getAllCity();
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
  }
}
