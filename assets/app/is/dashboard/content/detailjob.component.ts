import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Goods } from 'goods'

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
                    <a class="btn btn-default buttonBack" type="button">
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
                                    <span>test No. test,<br>test, test</span>
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
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-12 col-sm-6">
                                    <span>Router</span>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <span>05803480678573</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-12 col-sm-6">
                                    <span>Bullet</span>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <span>0636364364573</span>
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
                                    <select (change)="onSelectGoods($event.target.value)">
                                        <option class="option" disabled="true" selected="true" value="0">-- Select Goods Name --</option>
                                        <option class="option" value={{ good._id }} *ngFor="#good of goods">{{ good.name }}</option>
                                    </select><br/>
                                </form>
                                <form>
                                    <select #typestatus id="typestatus">
                                        <option class="option" disabled="true" selected="true" value="0">-- Select Barcode --</option>
                                        <option class="option" value="Account Active" *ngFor="#stock of stocks">{{ stock.barcode }}</option>
                                    </select><br/>
                                </form>
                                <button type="submit" (click)="editStatus(typestatus.value)" class="btn btn-default buttonOrange">
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
                                    <span>{{ jobs.date }}</span>
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
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>{{ jobs.emp1 }}</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>{{ jobs.emp2 }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
            </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDetailJobComponent implements OnInit {
    onSelectGoods(_id) {
        this.stocks = this.getAllStocks(){
            this.http.get(`${this.API}/stock/goods/${_id}`)
                .map(res => res.json())
                .subscribe(stocks => {
                    this.stocks = stocks
                })
        }
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
    getAllStocks() {
        this.http.get(`${this.API}/stock/goods/${this.stock_id}`)
            .map(res => res.json())
            .subscribe(stocks => {
                this.stocks = stocks
            })
    }
}

