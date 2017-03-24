import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { City } from './cities';
import { Property } from './property';
import { Cluster } from './cluster';

@Component({
    selector: 'form-coveragecluster',
    template: `
    <!-- Page content -->
        <div id="page-content-wrapper">
            <div class="content-header">
                <h3 id="home">
                    <a [routerLink]="['Coverage']" id="menu-toggle" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                    </a>
                    &nbsp; Add Coverage Area
                </h3>

            </div>

            <div class="page-content inset" data-spy="scroll" data-target="#spy">
                <div class="row marginB20 marginR0">
                    <div class="col-sm-12">
                        <a href="coverage.html" class="btn btn-default buttonBack" type="button">
                            BACK
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row headerList paddingLR30">
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add City</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="formNewReport marginLR20">
                                            <form>
                                                <input #cityname type="text" class="form-control inputForm" id="cityname" placeholder="New City">
                                                <br/>
                                            </form>
                                            <button type="submit" (click)="addCity(cityname.value)" class="btn btn-default buttonOrange">
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
                                <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>List City</strong></div>
                            </div>
                            <div class="row subInfo">
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-sm-6">
                                          <div class="row">
                                              <div class="col-sm-12" *ngFor="#city of cities">
                                                  <div class="row subInfo">
                                                      <div class="col-sm-8 invoiceList"><span>{{city.name}}</span></div>
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
        </div><!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCoverageClusterComponent implements OnInit {
API = 'http://202.162.207.164:3000';

// Declare empty list of people
cities: any[] = [];
propertys: any[] = [];
clusters: any[] = [];

constructor(private http: Http) {}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
    this.getAllCity();
    this.getAllProperty();
    this.getAllCluster();
}
// Get all City from the API
    getAllCity() {
        this.http.get(`${this.API}/city/listcity`)
            .map(res => res.json())
            .subscribe(cities => {
                this.cities = cities
            })
    }
    // Get all Property from the API
        getAllProperty() {
            this.http.get(`${this.API}/property/listproperty`)
                .map(res => res.json())
                .subscribe(propertys => {
                    this.propertys = propertys
                })
        }
    // Get all Property from the API
        getAllCluster() {
            this.http.get(`${this.API}/cluster/listcluster`)
                .map(res => res.json())
                .subscribe(clusters => {
                    this.clusters = clusters
                })
        }
    addCluster(clustername, clusterproperty) {

        var body = `name=${clustername}&property=${clusterproperty}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/cluster/addcluster`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Cluster Success');
                this.getAllCluster();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }
}
