import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
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
                <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
            <div class="row subInfo">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="formNewReport marginLR20">
                                <form [ngFormModel]="myForm">
                                    <select [ngFormControl]="myForm.find('inputGoods')" [(ngModel)]="selectedGoods._id" (change)="onSelectGoods($event.target.value)" #inputGoods id="inputGoods">
                                        <option class="option" disabled="true" value="0">-- Select Goods Name --</option>
                                        <option *ngFor="#good of goods" [value]=good._id>{{ good.name }}</option>
                                    </select><br/>
                                </form>
                                <input [ngFormControl]="myForm.find('idbarcode')" #idbarcode type="number" class="form-control inputForm" id="idbarcode" placeholder="Barcode">
                                <div class="g-recaptcha" data-sitekey="6LdqYiMUAAAAAG24p30ejQSqeWdvTpD0DK4oj5wv"></div>
                                <button [disabled]="!myForm.valid" type="submit" (click)="addStock(inputGoods.value, idbarcode.value)" class="btn btn-default buttonOrange">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div id="failed" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog" role="document" style="float: left; padding-left: 44%;">
        <div class="text-center" style="padding: 5px; background-color: #FC592E; width: 200px; float: left; box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0);">
          <h5 id="message" style="color: #FFF;"></h5>
        </div>
      </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddStocksComponent implements OnInit {
myForm: ControlGroup;
    // Link to our api, pointing to localhost
      API = 'http://202.162.207.164:3000';
    secret = "4b0b09d8941d66b5bbcb3a4ca3eaa296";

      goods: any[] = [];
      stocks: any[] = [];

      constructor(private _fb:FormBuilder, private http: Http) {}

      ngOnInit() {
        this.getAllGoods();
        this.getAllStock();
        this.myForm = this._fb.group({
          inputGoods: ['0', Validators.required],
          idbarcode: ['', Validators.required]
        })
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

        var body = `goods=${inputGoods}&barcode=${idbarcode}&barcode=${idbarcode}&secretkey=${this.secret}`;
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
                document.getElementById("message").innerHTML = error.text();
                $('#failed').modal('show');
                $('.modal-backdrop').removeClass("modal-backdrop");
                //console.log(JSON.stringify(error.json()));
            });
    }
}
