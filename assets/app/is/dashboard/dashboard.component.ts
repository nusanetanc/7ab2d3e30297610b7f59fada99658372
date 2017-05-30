
import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Emp} from "./emp";
//import {Menu} from "./menu";

@Component({
    selector: 'dashboard',
    template: `
            <!-- Sidebar -->
            <div *ngIf="emps.accessrole != null" id="sidebar-wrapper">
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
                                       <span class="nav-name">{{emps.name}}</span>
                                    </div>
                                    <div class="col-sm-2 hid">
                                       <span class="caret"></span>
                                    </div>
                                    <div class="dropdown-content" style="margin-top: 20px;">
                                      <a>Account</a>
                                      <a type="submit" (click)="Logout()">Logout</a>
                                    </div>
                                 </div>
                                 <div class="row" style="padding: 5px 0px;">
                                    <div class="col-sm-12">
                                       <span class="nav-tit">{{emps.titlejob}}</span>
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
                                <a [routerLink]="['Dashboard']" ><i class="material-icons">dashboard</i> <span class="fontWeight300">DASHBOARD</span></a>
                            </li>
                            <li>
                                <a [routerLink]="['AllSubs']" ><i class="material-icons">people</i> <span class="fontWeight300">SUBSCRIBE</span></a>
                            </li>
                            <li *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '5' || emps.accessrole == '501' || emps.accessrole == '502'">
                                <a [routerLink]="['AllBill']" ><i class="material-icons">announcement</i> <span class="fontWeight300">BILLING</span></a>
                            </li>
                            <li *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '6' || emps.accessrole == '601'">
                                <a [routerLink]="['Coverage']" ><i class="material-icons">room</i> <span class="fontWeight300">COVERAGE AREA</span></a>
                            </li>
                            <li *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '6' || emps.accessrole == '601'">
                                <a [routerLink]="['Package']" ><i class="material-icons">view_list</i> <span class="fontWeight300">PACKAGES</span></a>
                            </li>
                            <li *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '3' || emps.accessrole == '301' || emps.accessrole == '4' || emps.accessrole == '401' || emps.accessrole == '402' || emps.accessrole == '6' || emps.accessrole == '601'">
                                <a [routerLink]="['AllEngineer']"><i class="material-icons">contacts</i> <span class="fontWeight300">ENGINEER</span></a>
                            </li>
                            <li *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '2' || emps.accessrole == '201' || emps.accessrole == '202' || emps.accessrole == '6' || emps.accessrole == '601' || emps.accessrole == '7' || emps.accessrole == '701'">
                                <a><i class="material-icons">recent_actors</i> <span class="fontWeight300">MARKETING</span></a>
                            </li>
                            <li>
                                <a [routerLink]="['Information']" ><i class="material-icons">info</i> <span class="fontWeight300">INFORMATION</span></a>
                            </li>
                            <li *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '7' || emps.accessrole == '701'">
                                <a [routerLink]="['AllEmployee']" ><i class="material-icons">contacts</i> <span class="fontWeight300">EMPLOYEE</span></a>
                            </li>
                            <li *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '7' || emps.accessrole == '702'">
                                <a [routerLink]="['AllStock']" ><i class="material-icons">widgets</i> <span class="fontWeight300">STOCK</span></a>
                            </li>
                            <li *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '501' || emps.accessrole == '601' || emps.accessrole == '801' || emps.accessrole == '8' || emps.accessrole == '301' || emps.accessrole == '3'">
                                <a [routerLink]="['AllReport']" ><i class="material-icons">announcement</i> <span class="fontWeight300">REPORTS</span></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="row sidebar-footer" style="margin-right: 0px; bottom: 0px; position: absolute;">
                        <div class="col-sm-12">
                            <div class="row" style="border-top: 0.3px solid #B3B3B3;margin-right:-15px;">
                                <div class="col-sm-6 col-xs-6" style="padding: 15px 25px;">
                                    <img src="images/groovy-grayscale.png" alt="Groovy Logo" style="width: 100%;">
                                </div>
                                <div class="col-sm-6 col-xs-6" style="padding: 15px 25px 15px 0px;text-decoration: none;">
                                    <div class="row">
                                        <div class="col-sm-6 col-xs-6">
                                            <a href="http://www.groovy.id/privacy-policy" style="color: #FFF;font-weight: 300;">Privacy</a>
                                        </div>
                                        <div class="col-sm-6 col-xs-6">
                                            <a href="http://www.groovy.id/terms-of-use" style="color: #FFF;font-weight: 300;">Terms</a>
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
    directives: [ ROUTER_DIRECTIVES]
})


export class DashboardComponent implements OnInit {
    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';
    //Session_ID = '58b6a0d77dfd7052a9fe53c9';
    content_access = '202';

emps: any[] = [];
constructor(private http: Http) {}

    ngOnInit() {
        this.getAcountEmp();
    }

Logout(){
  var body = `account='emps'`;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http
      .post(`${this.API}/subscribe/is/logout`,
          body, {
              headers: headers
          })
      .subscribe(
          data => {
            this.getAcountEmp();
          });
    }

    getAcountEmp() {
        this.http.get(`${this.API}/subscribe/detailemp`)
            .map(res => res.json())
            .subscribe(emps => {
                this.emps = emps
            },
            error => {
              window.location.href = `/login`;
            }
          )
    }

}
