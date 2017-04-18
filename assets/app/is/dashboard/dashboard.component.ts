import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Emp} from "./emp";
import {Menu} from "./menu";

@Component({
    selector: 'dashboard',
    template: `
            <!-- Sidebar -->
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <div class="sidebar-brand">
                        <div class="title">
                            <img src="./images/ava.png" alt="ava">
                            <a class="name"><b></b></a>
                            <a class="user"></a>
                        </div>
                    </div>
                    <ul class="sidebar-nav nav">
                        <li class="firstLiSidebar">
                            <a [routerLink]="['Dashboard']" ><i class="material-icons">dashboard</i> <span class="fontWeight300">DASHBOARD</span></a>
                        </li>
                        <li>
                            <a [routerLink]="['AllSubs']" ><i class="material-icons">people</i> <span class="fontWeight300">SUBSCRIBE</span></a>
                        </li>
                        <li>
                            <a [routerLink]="['AllBill']" ><i class="material-icons">announcement</i> <span class="fontWeight300">BILLING</span></a>
                        </li>
                        <li>
                            <a [routerLink]="['Coverage']" ><i class="material-icons">room</i> <span class="fontWeight300">COVERAGE AREA</span></a>
                        </li>
                        <li>
                            <a [routerLink]="['AllEngineer']"><i class="material-icons">recent_actors</i> <span class="fontWeight300">ENGINEER</span></a>
                        </li>
                        <li>
                            <a [routerLink]="['Information']" ><i class="material-icons">info</i> <span class="fontWeight300">INFORMATION</span></a>
                        </li>
                        <li>
                            <a [routerLink]="['AllReport']" ><i class="material-icons">announcement</i> <span class="fontWeight300">REPORTS</span></a>
                        </li>
                        <li>
                            <a [routerLink]="['AllEmployee']" ><i class="material-icons">recent_actors</i> <span class="fontWeight300">EMPLOYEE</span></a>
                        </li>
                        <li>
                            <a [routerLink]="['AllStock']" ><i class="material-icons">widgets</i> <span class="fontWeight300">STOCK</span></a>
                        </li>
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
    //Session_ID = '58b6a0d77dfd7052a9fe53c9';
    content_access = '202';

    ngOnInit() {
        this.getAcountEmp();
        this.getContentMenu()
    }

    emps: any[] = [];
    menus: any[] = [];
    constructor(private http: Http) {}

    getAcountEmp() {
        this.http.get(`${this.API}/employee/detailemp`)
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
