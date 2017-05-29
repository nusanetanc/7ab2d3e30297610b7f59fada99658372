import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Goods} from "./goods";
import {ContentGoodsNameComponent} from "./goodsname.component";

@Component({
    selector: 'form-detailmaintenance',
    template: `
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Job Description
            </h3>
        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['AllEngineer']" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row subInfo">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 style="color:#FC592E;">#{{ jobs.subid }}</h4>
                        </div>
                        <div class="col-sm-12">
                            <h4>PERSONAL INFORMATION</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Full Name</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ jobs.subname }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Email</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ jobs.submail }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Handphone</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ jobs.subphone }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Address</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{jobs.substreet}} No. {{jobs.subnohome}},<br>{{jobs.subcluster}}, {{jobs.subcity}}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>National Identy Card No.</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>test</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Date of Birth</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ jobs.subbirth }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-xs-6 col-md-3">
                                    <img class="avaProfile" src="images/{{ jobs._id }}.png" alt="{{ jobs._id }}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>GOODS USED</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div *ngFor="#usestock of usestocks"  class="col-sm-12">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-12 col-sm-2">
                                    <span>{{usestock.barcode}}</span>
                                </div>
                                <div class="col-xs-12 col-sm-3">
                                    <form-goods [idgoods]=usestock.goods></form-goods>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>ADD GOODS</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="formNewReport marginLR20">
                                <form>
                                    <select [(ngModel)]="selectedGoods._id" (change)="onSelectGoods($event.target.value)">
                                        <option class="option" disabled="true" selected="true" value="0">-- Select Goods Name --</option>
                                        <option *ngFor="#good of goods" class="option" value={{good._id}}>{{ good.name }}</option>
                                    </select><br/>
                                </form>
                                <form>
                                    <select #barcode id="barcode" (change)="onSelectBarcode($event.target.value)">
                                        <option class="option" disabled="true" selected="true" value="0">-- Select Barcode --</option>
                                        <option *ngFor="#stock of stocks" class="option" value={{stock.barcode}}>{{ stock.barcode }}</option>
                                    </select><br/>
                                </form>
                                <button type="submit" (click)="editStock(jobs._id, barcode.value)" class="btn btn-default buttonOrange">
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>TECHNICAL JOB</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Date</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ stringAsDate(jobs.date) }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Job</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{jobs.name}}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Detail Job</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ jobs.detail }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Field Engineer</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-sm-7">
                                    <span>- {{ jobs.emp1 }}</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- {{ jobs.emp2 }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Report Job</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ jobs.report }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Status</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ jobs.status }}</span>
                                </div>
                            </div>
                            <div *ngIf="jobs.status != 'Done'">
                              <div class="formNewReport marginLR20">
                                  <textarea #reportjob id="reporttjob" placeholder="Input Job Report" class="form-control inputForm" rows="4" cols="50" style="padding-top: 20px;"></textarea>
                                  <button type="submit" (click)="editJob(reportjob.value)" class="btn btn-default buttonOrange">
                                      JOB DONE
                                  </button>
                              </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    </div>
    `,
    directives: [ContentGoodsNameComponent, ROUTER_DIRECTIVES],
})
export class ContentDetailJobComponent implements OnInit {
    selectedGoods: Goods = new Goods(0, 'dummy');

    onSelectGoods(_id) {
        this.stocks = this.getAllStocks(){
            this.http.get(`${this.API}/stock/goods/${_id}`)
                .map(res => res.json())
                .subscribe(stocks => {
                    this.stocks = stocks
                })
        }
    }

    editStock(jobs, barcode) {
        var body = `jobs=${jobs}&barcode=${barcode}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .put(`${this.API}/stock/put/${barcode}`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Edit Status Succses');
                this.getStocksForJobs();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }

    editJob(reportjob) {
        var body = `report=${reportjob}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .put(`${this.API}/job/report/${this._routeParams.get('id')}`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Job is Done');
                this.getAllJob();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }

// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    jobs: any[] = [];
    goods: any[] = [];
    stocks: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllJob();
        this.getAllGoods();
        this.getAllStocks();
        this.getStocksForJobs();
    }

    stringAsDate(dateStr: string) {
        return new Date(dateStr);
    }

    // Get all users from the API
    getAllJob(){
        this.http.get(`${this.API}/job/job/${this._routeParams.get('id')}`)
            .map(res => res.json())
            .subscribe(jobs => {
                this.jobs = jobs
            })
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
    getAllStocks(){
        this.http.get(`${this.API}/stock/goods/${this.stock_id}`)
            .map(res => res.json())
            .subscribe(stocks => {
                this.stocks = stocks
            })
          }
  // Get all users from the API
  getStocksForJobs(){
      this.http.get(`${this.API}/stock/jobs/${this._routeParams.get('id')}`)
          .map(res => res.json())
          .subscribe(usestocks => {
              this.usestocks = usestocks
          })
        }
}
