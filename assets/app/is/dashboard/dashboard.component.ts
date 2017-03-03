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
                    <ul class="sidebar-nav nav">
                      <li class="sidebar-brand">
                        <div class="title">
                          <img src="./images/ava.png" alt="ava">
                          <a href="" style="margin-top: 20px;"><strong>{{emps.name}}</strong></a>
                          <a href="" style="margin-top: -20px;">{{emps.titlejob}}</a>
                        </div>
                      </li>
                      <li style="margin-top: 10px;">
                          <a [routerLink]="['Dashboard']" class="collapse"><i class="material-icons">dashboard</i><strong>DASHBOARD</strong></a>
                      </li>
                      <li  style="margin-top: 10px;">
                          <a [routerLink]="['AllSubs']" class="collapse"><i class="material-icons">supervisor_account</i><strong>SUBSCRIBERS</strong></a>
                      </li>
                      <li style="margin-top: 10px;">
                        <a href="report" class="collapse"><i class="material-icons">announcement</i> <strong>REPORTS</strong></a>
                      </li>
                      <li style="margin-top: 10px;">
                        <a [routerLink]="['Information']" class="collapse"><i class="material-icons">announcement</i> <strong>INFORMATION</strong></a>
                      </li>
                      <li style="margin-top: 10px;">
                        <a href="#" class="collapse"><i class="material-icons">announcement</i> <strong>test</strong></a>
                      </li>

                      <li class="sidebar-footer">
                        <div>
                          <img src="./images/groovy-grayscale.png" alt="ava">
                          <a href="">Privacy</a>

                          <a href="">Terms</a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
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
