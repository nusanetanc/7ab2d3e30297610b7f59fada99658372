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
    selector: 'form-addinformation',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; New Information
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                      <a [routerLink]="['Information']" class="btn btn-default buttonBack" type="button">
                          BACK
                      </a>
                </div>
            </div>
            <div class="row subInfo">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>TYPE OF PROBLEMS</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="formNewReport marginLR20">
                                <form>
                                  <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)" #homecity id="homecity">
                                      <option value="0" disabled="true">-- Select your city --</option>
                                      <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                                  </select><br/>
                                </form>
                                <form>
                                  <select #homeproperty id="homeproperty" [(ngModel)]="selectedProperty._id" (change)="onSelectProperty($event.target.value)">
                                      <option value="0" disabled="true">-- Select your property --</option>
                                      <option *ngFor="#property of properties" value={{property._id}}>{{ property.name }}</option>
                                  </select><br/>
                                </form>
                                <form>
                                  <select #homecluster id="homecluster" [(ngModel)]="selectedCluster._id" (change)="onSelectCluster($event.target.value)">
                                      <option value="0" disabled="true">-- Select your clusters --</option>
                                      <option *ngFor="#cluster of clusters" value={{cluster._id}}>{{ cluster.name }}</option>
                                  </select><br/>
                                </form>
                                <form>
                                <select #homeblok id="homeblok" [(ngModel)]="selectedBlok._id" (change)="onSelectBlok($event.target.value)">
                                    <option value="0" disabled="true">-- Select your blok or floor --</option>
                                    <option *ngFor="#blokfloor of blokfloors" value={{blokfloor._id}}>{{ blokfloor.name }}</option>
                                </select><br/>
                                </form>
                                <form>
                                <select #homestreet id="homestreet" [(ngModel)]="selectedStreet._id" (change)="onSelectStreet($event.target.value)">
                                    <option value="0" disabled="true">-- Select Street --</option>
                                    <option *ngFor="#streetname of streetnames" value={{streetname._id}}>{{ streetname.name }}</option>
                                </select><br/>
                                </form>
                                <form>
                                    <select name="internetProblem">
                                        <option class="option" disabled="true" selected="true">-- Select Information Category --</option>
                                        <option value="volvo">Internet Problem</option>
                                        <option value="saab">TV Problem</option>
                                        <option value="fiat">Billing Problem</option>
                                        <option value="fiat">Account Problem</option>
                                    </select><br/>
                                </form>
                                <textarea id="message" class="input width100" name="message" rows="10" placeholder="*note"></textarea>
                                <a href="" class="btn btn-default">
                                    SEND
                                </a>
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
export class ContentAddInformationComponent implements OnInit {
    API = 'http://202.162.207.164:3000';

    selectedCity: City = new City(0, 'dummy');
    selectedProperty: City = new City(0, 'dummy');
    selectedCluster: City = new City(0, 'dummy');
    selectedBlok: City = new City(0, 'dummy');
    selectedStreet: City = new City(0, 'dummy');

    onSelectPackage(level) {
        console.log(level)
    }

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

    onSelectCluster(_id) {
        console.log(_id);
        this.blokfloors = this.getAllBLokfloorByCluster(){
            this.http.get(`${this.API}/blokfloor/blokfloorbycluster/${_id}`)
                .map(res => res.json())
                .subscribe(blokfloors => {
                    this.blokfloors = blokfloors
                })
        }
    }

    onSelectBlok(_id) {
        this.streetnames = this.getAllStreetByBlok(){
            this.http.get(`${this.API}/streetname/streetnamebyblok/${_id}`)
                .map(res => res.json())
                .subscribe(streetnames => {
                    this.streetnames = streetnames
                })
        }
    }

    onSelectStreet(_id) {
        this.homes = this.getAllHomeByStreet(){
            this.http.get(`${this.API}/home/homebystreet/${_id}`)
                .map(res => res.json())
                .subscribe(homes => {
                    this.homes = homes
                })
        }
    }


    // Declare empty list of people
    cities: any[] = [];
    properties: any[] = [];
    clusters: any[] = [];
    blokfloors: any[] = [];
    streetnames: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
    this.getAllCity();
    this.getAllPropertyByCity();
    this.getAllClusterByProperty();
    this.getAllBLokfloorByCluster();
    this.getAllStreetByBlok();
    this.getAllHomeByStreet();
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

    // Get all Street from the API
    getAllStreetByBlok() {
        this.http.get(`${this.API}/streetname/streetnamebyblok/${this.blok_id}`)
            .map(res => res.json())
            .subscribe(streetnames => {
                this.streetnames = streetnames
            })
    }

    // Get all BLokfloor from the API
    getAllBLokfloorByCluster() {
        this.http.get(`${this.API}/blokfloor/blokfloorbycluster/${this.cluster_id}`)
            .map(res => res.json())
            .subscribe(blokfloors => {
                this.blokfloors = blokfloors
            })
    }

    // Get all Home from the API
    getAllHomeByStreet() {
        this.http.get(`${this.API}/home/homebystreet/${this.street_id}`)
            .map(res => res.json())
            .subscribe(homes => {
                this.homes = homes
            })
    }
}
