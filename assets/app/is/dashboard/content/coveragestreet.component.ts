import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { City } from './cities';
import { Property } from './property';
import { Cluster } from './cluster';
import { Blokfloor } from './blokfloor';
import { Street } from './street';

@Component({
    selector: 'form-coveragestreet',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Add Coverage Area
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['Coverage']" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add Street</strong></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="formNewReport marginLR20">
                                    <form>
                                        <select #streetcity id="streetcity">
                                            <option class="option" disabled="true" selected="true">-- Select City Name --</option>
                                            <option *ngFor="#city of cities">{{ city.name }}</option>
                                        </select><br/>
                                    </form>
                                    <form>
                                        <select #streetproperty id="streetproperty">
                                            <option class="option" disabled="true" selected="true">-- Select Property Name --</option>
                                            <option *ngFor="#property of propertys" >{{ property.name }}</option>
                                        </select><br/>
                                    </form>
                                    <form>
                                        <select #streetcluster id="streetcluster">
                                            <option class="option" disabled="true" selected="true">-- Select Cluster Name --</option>
                                            <option *ngFor="#cluster of clusters" >{{ cluster.name }}</option>
                                        </select><br/>
                                    </form>
                                    <form>
                                        <select #streetblok id="streetblok">
                                            <option class="option" disabled="true" selected="true">-- Select Block Name --</option>
                                            <option *ngFor="#blokfloor of blokfloors" >{{ blokfloor.name }}</option>
                                        </select><br/>
                                    </form>
                                        <input type="text" class="form-control inputForm" #streetname id="streetname" placeholder="Street Name">
                                        <button type="submit" (click)="addBlock(streetname.value, streetblok.value)" class="btn btn-default buttonOrange">
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
                          <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>List Jalan</strong></div>
                      </div>
                      <div class="row subInfo">
                          <div class="col-sm-12">
                              <div class="row">
                                  <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-sm-12" *ngFor="#street of streetnames">
                                            <div class="row subInfo">
                                                <div class="col-sm-3 invoiceList"><span>{{street.city}}</span></div>
                                                <div class="col-sm-4 invoiceList"><span>{{street.cluster}}, Blok {{street.blokfloor}}</span></div>
                                                <div class="col-sm-5 invoiceList"><span>{{street.name}}</span></div>
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
    <!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCoverageStreetComponent implements OnInit {
API = 'http://202.162.207.164:3000';

// Declare empty list of people
cities: any[] = [];
propertys: any[] = [];
clusters: any[] = [];
blokfloors: any[] = [];
blokfloors: any[] = [];
streetnames: any[] = [];

constructor(private http: Http) {}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
    this.getAllCity();
    this.getAllProperty();
    this.getAllCluster();
    this.getAllBlock();
    this.getAllStreet();
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
      // Get all BLock from the API
          getAllBlock() {
              this.http.get(`${this.API}/blokfloor/listblokfloor`)
                  .map(res => res.json())
                  .subscribe(blokfloors => {
                      this.blokfloors = blokfloors
                  })
          }
      // Get all BLock from the API
          getAllStreet() {
              this.http.get(`${this.API}/streetname/liststreetname`)
                  .map(res => res.json())
                  .subscribe(streetnames => {
                      this.streetnames = streetnames
                  })
          }
    addBlock(streetname, blokfloor) {

        var body = `name=${streetname}&blokfloor=${streetblok}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/streetname/addstreetname`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Street Success');
                this.getAllStreet();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }
}
