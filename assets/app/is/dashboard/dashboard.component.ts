
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
                        <div class="row" style="padding: 15px; color: #FFFFFF; margin-right: 0px;">
                           <div class="col-sm-12">
                              <div class="col-sm-4" style="padding: 10px;">
                                 <img class="img-nav-profile" src="./images/ava.png" alt="ava">
                              </div>
                              <div class="col-sm-8" style="padding: 10px;">
                                 <div class="row" style="padding: 5px 0px;">
                                    <div class="col-sm-9">
                                       <a class="nav-name"></a>
                                    </div>
                                    <div class="col-sm-2 hid">
                                       <span class="caret"></span>
                                    </div>
                                 </div>
                                 <div class="row" style="padding: 5px 0px;">
                                    <div class="col-sm-12">
                                       <span class="nav-tit"></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                    </div>
                    <div class="row" style="margin-right: 0px;">
                      <div class="col-sm-12">
                          <ul class="sidebar-nav nav" style="margin-right: -15px">
    
                              <li class="active firstLiSidebar">
                                  <a href="index.html" ><i class="material-icons">dashboard</i> <strong>DASHBOARD</strong></a>
                              </li>
                              <li>
                                  <a href="subscribers.html"><i class="material-icons">people</i> <strong>SUBSCRIBERS</strong></a>
                              </li>
                              <li>
                                  <a href="reportshistory.html"><i class="material-icons">announcement</i> <strong>REPORTS</strong></a>
                              </li>
                              <li>
                                  <a href="information.html"><i class="material-icons">info</i> <strong>INFORMATION</strong></a>
                              </li>
                              <li>
                                  <a href="coverage.html"><i class="material-icons">room</i> <strong>ADD COVERAGE AREA</strong></a>
                              </li>
    
                          </ul>
                      </div>
                  </div>
                  <div class="row sidebar-footer" style="margin-right: 0px; bottom: 0px; position: absolute;">
                      <div class="col-sm-12">
                          <div class="row" style="border-top: 0.3px solid #B3B3B3;margin-right:-15px;">
                              <div class="col-sm-6 col-xs-6" style="padding: 15px 25px;">
                                  <img src="images/groovy-grayscale.png" alt="ava" style="width: 100%;">
                              </div>
                              <div class="col-sm-6 col-xs-6" style="padding: 15px 25px 15px 0px;text-decoration: none;">
                                  <div class="row">
                                      <div class="col-sm-6 col-xs-6">
                                          <a href="" style="color: #FFF;font-weight: 300;">Privacy</a>
                                      </div>
                                      <div class="col-sm-6 col-xs-6">
                                          <a href="" style="color: #FFF;font-weight: 300;">Terms</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
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
