import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './content/subs';
//import { Menu } from './menu';
@Component({
    selector: 'dashboard',
    template: `
    <!-- Sidebar -->
            <div id="sidebar-wrapper">
                <nav id="spy">
                    <div class="sidebar-brand">
                        <div class="row" style="padding: 10px; color: #FFFFFF; margin-right: 0px;">
                           <div class="col-sm-12">
                              <div class="col-sm-4 col-xs-6" style="padding: 10px;">
                                 <img class="img-nav-profile" src="./images/ava.png" alt="ava">
                              </div>
                              <div class="col-sm-8 col-xs-6" style="padding: 10px;">
                                 <div class="row dropdown" style="padding: 3px 0px;">
                                    <div class="col-sm-9">
                                       <span class="nav-name">{{ subs.name }}</span>
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
                    <div class="row" style="margin-right: 0px;">
                        <div class="col-sm-12">
                            <ul class="sidebar-nav nav" style="margin-right: -15px">

                                <li class="firstLiSidebar">
                                  <a [routerLink]="['Dashboard']" class="collapse" ><i class="material-icons">dashboard</i> <span class="fontWeight300">DASHBOARD</span></a>
                                </li>
                                <li>
                                  <a [routerLink]="['Account']" class="collapse" ><i class="material-icons">perm_identity</i> <span class="fontWeight300">ACCOUNT INFO</span></a>
                                </li>
                                <li>
                                  <a [routerLink]="['Billing']" class="collapse"><i class="material-icons">credit_card</i> <span class="fontWeight300">PAYMENT INFO</span></a>
                                </li>
                                <li>
                                  <a [routerLink]="['Reports']" class="collapse"><i class="material-icons">announcement</i> <span class="fontWeight300">FEEDBACK</span></a>
                                </li>
                                <li>
                                  <a [routerLink]="['Information']" class="collapse"><i class="material-icons">info</i> <span class="fontWeight300">LATEST INFO</span></a>
                                </li>
                                <li>
                                  <a type="submit" (click)="Logout()" class="collapse"><i class="material-icons">power_settings_new</i> <span class="fontWeight300">SIGN OUT</span></a>
                                </li>
                                <hr style="border-top: 1px solid #FFF;">
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


subs: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAcountSub();
  }

  Logout(){
    var body = `account='emps'`;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
        .post(`${this.API}/subscribe/my/logout`,
            body, {
                headers: headers
            })
        .subscribe(
            data => {
              this.getAcountSub();
            });
      }

getAcountSub() {
  this.http.get(`${this.API}/subscribe/detailsub`)
    .map(res => res.json())
    .subscribe(
      subs => {
          this.subs = subs
    },
    error => {
      window.location.href = `/signin`;
    }
    );
}
}
