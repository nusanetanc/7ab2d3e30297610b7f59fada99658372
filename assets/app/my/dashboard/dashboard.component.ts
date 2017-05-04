import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './content/subs';
import { Menu } from './menu';
@Component({
    selector: 'dashboard',
    template: `
    <!-- Sidebar -->
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <div class="sidebar-brand">
                        <div class="row" style="padding: 10px; color: #FFFFFF;">
                           <div class="col-sm-12">
                              <div class="col-sm-4" style="padding: 10px;">
                                 <img class="img-nav-profile" src="./images/ava.png" alt="ava">
                              </div>
                              <div class="col-sm-8" style="padding: 10px;">
                                 <div class="row" style="padding: 5px 0px;">
                                    <div class="col-sm-9">
                                       <a [routerLink]="['Account']" class="nav-name">{{ subs.name }}</a>
                                    </div>
                                    <div class="col-sm-2 hid">
                                       <span class="caret"></span>
                                    </div>
                                 </div>
                                 <div class="row" style="padding: 5px 0px;">
                                    <div class="col-sm-12">
                                       <span class="nav-tit">Subscriber - Level {{ subs.packlev }}</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                    </div>
                    <ul class="sidebar-nav nav">

                        <li class="firstLiSidebar">
                          <a [routerLink]="['Dashboard']" class="collapse" ><i class="material-icons">dashboard</i> <span class="fontWeight300">DASHBOARD</span></a>
                        </li>
                        <li>
                          <a [routerLink]="['Billing']" class="collapse"><i class="material-icons">supervisor_account</i> <span class="fontWeight300">BILLING</span></a>
                        </li>
                        <li>
                          <a [routerLink]="['Reports']" class="collapse"><i class="material-icons">announcement</i> <span class="fontWeight300">REPORTS</span></a>
                        </li>
                        <li>
                          <a [routerLink]="['Information']" class="collapse"><i class="material-icons">info</i> <span class="fontWeight300">INFORMATION</span></a>
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


subs: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAcountSub();
  }

getAcountSub() {
  this.http.get(`${this.API}/subscribe/detailsub`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
    })
}
}
