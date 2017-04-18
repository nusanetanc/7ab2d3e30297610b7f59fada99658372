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
                <h3 id="home" class="fontWeight300">
                    <a [routerLink]="['Coverage']" id="menu-toggle" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add Cluster</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="formNewReport marginLR20">
                                            <form>
                                                <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)" #clustercity id="clustercity">
                                                    <option class="option" disabled="true" value="0">-- Select City Name --</option>
                                                    <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                                                </select><br/>
                                            </form>
                                            <form>
                                                <select  #clusterproperty id="clusterproperty" [(ngModel)]="selectedProperty._id" (change)="onSelectProperty($event.target.value)">
                                                    <option class="option" disabled="true"  value="0">-- Select Property Name --</option>
                                                    <option *ngFor="#property of properties" value={{property._id}}>{{ property.name }}</option>
                                                </select><br/>
                                            </form>
                                            <form>
                                                <input #clustername type="text" class="form-control inputForm" id="cityname" placeholder="New Cluster">
                                                <br/>
                                            </form>
                                            <button type="submit" (click)="addCluster(clusterproperty.value, clustername.value)" class="btn btn-default buttonOrange">
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
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>List Cluster</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-12" *ngFor="#cluster of clusters">
                                                <div class="row subInfo">
                                                    <div class="col-sm-6 invoiceList"><span>{{cluster.name}}</span></div>
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

selectedCity: City = new City(0, 'dummy');
selectedProperty: City = new City(0, 'dummy');

API = 'http://202.162.207.164:3000';

// Declare empty list of people
cities: any[] = [];
properties: any[] = [];
clusters: any[] = [];

constructor(private http: Http) {}

onSelectCity(_id) {
    this.properties = this.getAllPropertyByCity(){
        this.http.get(`${this.API}/property/propertybycity/${_id}`)
            .map(res => res.json())
            .subscribe(properties => {
                this.properties = properties
            })
    }
}

onSelectProperty(_id) {
    this.clusters = this.getAllClusterByProperty(){
        this.http.get(`${this.API}/cluster/clusterbyproperty/${_id}`)
            .map(res => res.json())
            .subscribe(clusters => {
                this.clusters = clusters
            })
    }
}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
    this.getAllCity();
    this.getAllPropertyByCity();
    this.getAllClusterByProperty();
}
// Get all City from the API
getAllCity() {
    this.http.get(`${this.API}/city/listcity`)
        .map(res => res.json())
        .subscribe(cities => {
            this.cities = cities
        })
}

// Get all Property by city from the API
getAllPropertyByCity() {
    this.http.get(`${this.API}/property/propertybycity/${this.city_id}`)
        .map(res => res.json())
        .subscribe(properties => {
            this.properties = properties
        })
}
// Get all Type from the API
getAllClusterByProperty() {
    this.http.get(`${this.API}/cluster/clusterbyproperty/${this.property_id}`)
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
