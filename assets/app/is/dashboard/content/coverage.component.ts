import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Emp} from "./emp";

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
    <div *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '6' || emps.accessrole == '601'" id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Coverage Area
            </h3>
        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row marginLR15">
                        <div class="col-sm-4">
                            <a [routerLink]="['AddCity']">
                                <div class="cardDashboardCover">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <img class="imageCoverage" src="./images/city.png" alt="city">
                                            <h4 class="text-center grey333 fontWeight300">CITY</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-4">
                        <a [routerLink]="['AddProperty']">
                            <div class="cardDashboardCover">
                                <div class="row white">
                                    <div class="col-sm-12 paddingT15">
                                        <img class="imageCoverage" src="./images/property.png" alt="property">
                                        <h4 class="text-center grey333 fontWeight300">PROPERTY</h4>
                                    </div>
                                </div>
                            </div>
                          </a>
                        </div>
                        <div class="col-sm-4">
                            <a [routerLink]="['AddCluster']">
                                <div class="cardDashboardCover">
                                    <div class="row white">
                                        <div class="col-sm-12 paddingT30">
                                            <img class="imageCoverage" src="./images/cluster.png" alt="cluster">
                                            <h4 class="text-center grey333 fontWeight300">CLUSTER/APARTEMENT</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row marginLR15">
                        <!-- <div class="col-sm-4">
                            <a [routerLink]="['AddBlock']">
                                <div class="cardDashboardCover">
                                    <div class="row white">
                                        <div class="col-sm-12 paddingT15">
                                            <img class="imageCoverage" src="./images/block.png" alt="block / floor">
                                            <h4 class="text-center grey333 fontWeight300">ADD BLOCK / FLOOR</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div> -->
                        <div class="col-sm-4">
                        <a [routerLink]="['AddStreet']">
                            <div class="cardDashboardCover">
                                <div class="row white">
                                    <div class="col-sm-12  paddingT15">
                                        <img class="imageCoverage" src="./images/street.png" alt="street">
                                        <h4 class="text-center grey333 fontWeight300">STREET/TOWER</h4>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                        <div class="col-sm-4">
                            <a [routerLink]="['AddHome']">
                                <div class="cardDashboardCover">
                                    <div class="row white">
                                        <div class="col-sm-12 paddingT15">
                                            <img class="imageCoverage" src="./images/home.png" alt="home">
                                            <h4 class="text-center grey333 fontWeight300">HOME NUMBER</h4>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div *ngIf="emps.accessrole == '2' || emps.accessrole == '201' || emps.accessrole == '202' || emps.accessrole == '3' || emps.accessrole == '301' || emps.accessrole == '4' || emps.accessrole == '401' || emps.accessrole == '402' || emps.accessrole == '5' || emps.accessrole == '501' || emps.accessrole == '502' || emps.accessrole == '7' || emps.accessrole == '701' || emps.accessrole == '702' || emps.accessrole == '8' || emps.accessrole == '801'">
        <div class="center"><span style="font-size: 72px; font-weight: 700; color: #c1c1c1;"><center>404</center> PAGE NOT FOUND</span><br><hr class="hr1"></div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCoverageComponent {
// Link to our api, pointing to localhost
API = 'http://202.162.207.164:3000';

emps: any[] = [];
constructor(private http: Http) {}

ngOnInit() {
    this.getAcountEmp();
}
getAcountEmp() {
    this.http.get(`${this.API}/subscribe/detailemp`)
        .map(res => res.json())
        .subscribe(emps => {
            this.emps = emps
        }
      )
}
}
