import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-cpackages',
    template: `
    <!-- Page content -->
        <div *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '6' || emps.accessrole == '601'" id="page-content-wrapper">
            <div class="content-header">
                <h3 id="home" class="fontWeight300">
                    <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                    </a>
                    &nbsp; Add Packages
                </h3>

            </div>

            <div class="page-content inset" data-spy="scroll" data-target="#spy">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row headerList paddingLR30">
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add Packages</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="formNewReport marginLR20">
                                            <form>
                                                <input style="margin:0px !important" #level type="text" class="form-control inputForm" id="level" placeholder="Level">
                                                <br/>
                                                <select #clusterlevel id="clusterlevel" name="package">
                                                    <option disabled="true" selected="true">-- Select Cluster Level --</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                </select><br/><br/>
                                                <select #detail id="detail" name="package">
                                                    <option disabled="true" selected="true">-- Select Detail --</option>
                                                    <option value="Internet">Internet</option>
                                                    <option value="Internet + T">Internet + TV</option>
                                                    <option value="Internet + TV + Voice">Internet + TV + Voice</option>
                                                </select><br/><br/>
                                                <input #price type="text" class="form-control inputForm" id="price" placeholder="Price">
                                                <br/>
                                            </form>
                                            <button type="submit" (click)="addPackage(level.value, clusterlevel.value, detail.value, price.value)" class="btn btn-default buttonOrange">
                                                SEND
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row headerList paddingLR30">
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>List Package</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-12" *ngFor="#package of packages">
                                                <div class="row subInfo">
                                                    <div class="col-sm-6 invoiceList"><span>Level {{package.level}} - Cluster {{package.clusterlevel}}</span></div>
                                                    <div class="col-sm-3 invoiceList"><span>{{package.price}}</span></div>
                                                    <div class="col-sm-3 invoiceList"><span>{{package.detail}}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div *ngIf="emps.accessrole != '0' || emps.accessrole != '1' || emps.accessrole != '6' || emps.accessrole != '601'">
            <div class="center"><span style="font-size: 72px; font-weight: 700; color: #c1c1c1;"><center>404</center> PAGE NOT FOUND</span><br><hr class="hr1"></div>
        </div><!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentPackagesComponent implements OnInit {

API = 'http://202.162.207.164:3000';
emps: any[] = [];
constructor(private http: Http) {}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
    this.getAllPackages();
    this.getAcountEmp();
}
// Get all Property by city from the API
getAllPackages() {
    this.http.get(`${this.API}/package/listpackage`)
        .map(res => res.json())
        .subscribe(packages => {
            this.packages = packages
        })
}
    addPackage(level, clusterlevel, detail, price) {

        var body = `level=${level}&clusterlevel=${clusterlevel}&detail=${detail}&price=${price}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/package/addpackage`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Packages Success');
                this.getAllPackages();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
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
