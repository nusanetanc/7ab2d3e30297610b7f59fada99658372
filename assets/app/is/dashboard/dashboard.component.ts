import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Emp} from "./emp";
import {Menu} from "./dashboard_menu";

//import {ContentDashboardComponent} from "./content/dashboard.component";
//import {ContentAllSubsComponent} from "./content/allsubs.component";
@Component({
    selector: 'dashboard',
template: `
            <!-- Sidebar -->
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <div class="sidebar-brand">
                        <div class="title">
                            <img src="./images/ava.png" alt="ava">
                            <a class="name"><b>{{emps.name}}</b></a>
                            <!-- Extra small button group -->
                            <div class="btn-group navbar-right">
                                <a class="dropdown-toggle name" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="account.html">account</a></li>
                                    <li><a href="">logout</a></li>
                                </ul>
                            </div>
                            <a class="user">{{emps.titlejob}}</a>
                        </div>
                    </div>
                    <ul class="sidebar-nav nav">

                        <li class="active firstLiSidebar">
                            <a [routerLink]="['Dashboard']" ><i class="material-icons">dashboard</i> <strong>DASHBOARD</strong></a>
                        </li>
                        <li>
                            <a [routerLink]="['AllSubs']"><i class="material-icons">people</i> <strong>SUBSCRIBERS</strong></a>
                        </li>
                        <li>
                            <a [routerLink]="['AllBill']"><i class="material-icons">supervisor_account</i> <strong>BILLING</strong></a>
                        </li>
                        <li>
                            <a [routerLink]="['AllBill']"><i class="material-icons">announcement</i> <strong>REPORTS</strong></a>
                        </li>
                        <li>
                            <a [routerLink]="['Information']"><i class="material-icons">info</i> <strong>INFORMATION</strong></a>
                        </li>
                        <li class="active">
                            <a [routerLink]="['AllBill']"><i class="material-icons">recent_actors</i> <strong>ENGINEER</strong></a>
                        </li>
                        <li>
                            <a href="employee.html"><i class="material-icons">recent_actors</i> <strong>EMPLOYEE</strong></a>
                        </li>
                        <li>
                            <a href="stock.html"><i class="material-icons">widgets</i> <strong>STOCK</strong></a>
                        </li>

                        <!--
                        <a href="#" class="collapse"><i class="material-icons">announcement</i> <strong>{{menu.title}}</strong></a>
                        <li *ngFor="#menu of menus" style="margin-top: 10px;">
                        </li>
                        --> 

                    </ul>
                    <div class="sidebar-footer">
                        <div>
                            <img src="./images/groovy-grayscale.png" alt="ava">
                            <a href="">Privacy</a>
                            <a href="">Terms</a>
                        </div>
                    </div>
                </nav>
            </div>
            <!-- /Sidebar -->
    `,
    directives: [ ROUTER_DIRECTIVES], providers: [],
})


export class DashboardComponent {
// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';
    Session_ID = '58b6a0d77dfd7052a9fe53c9';
    content_access = '202';

    ngOnInit() {
        this.getAcountEmp();
        this.getContentMenu()
    }

    emps: any[] = [];
    menus: any[] = [];
    constructor(private http: Http) {}

    getAcountEmp() {
        this.http.get(`${this.API}/employee/emp/${this.Session_ID}`)
            .map(res => res.json())
            .subscribe(emps => {
                this.emps = emps
            })
    }

    getContentMenu() {
        this.http.get(`${this.API}/menu/listmenu`)
            .map(res => res.json())
            .subscribe(menus => {
                this.menus = menus
            })
    }
}
