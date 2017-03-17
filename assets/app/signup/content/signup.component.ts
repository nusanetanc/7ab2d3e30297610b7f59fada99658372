import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from '../subs';
import {City} from "./cities";
import {Property} from "./property";
import {TypeProperty} from "./type";
import {Cluster} from "./cluster";
import {Blokfloor} from "./blokfloor";
import {Home} from "./home";

@Component({
    selector: 'form-signin',
    template: `
            <div class="jumbotron signup-jumbotron">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12"><!-- header SignUp -->
                            <h3>Sign Up</h3>
                        </div><!-- .header SignUp -->
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-md-offset-4">
                            <form>
                                <select *ngIf="!selectedCity" style="" name="cars" (change)="onChangeCity($event.target.value)">
                                    <option disabled="true" selected="true" style="height: 30px;">Select your city</option>
                                    <option *ngFor="#city of cities" value="{{ city._id }}">{{ city.name }}</option>
                                </select>
                                 <select *ngIf="selectedCity !selectedNo" (change)="onChangeProperty($event.target.value)" name="property">
                                    <option class="option" disabled="true" selected="true">-- Select Property Name --</option>
                                    <option *ngFor="#property of properties" value="{{ property._id }}">{{property.name}}</option>
                                </select>
                                <select *ngIf="selectedProperty" (change)="onChangeType($event.target.value)" name="type">
                                    <option class="option" disabled="true" selected="true">-- Select Type --</option>
                                    <option *ngFor="#typeproperty of typeproperties" value="{{ typeproperty._id }}">{{ typeproperty.name }}</option>      
                                </select>
                                <select *ngIf="selectedType" (change)="onChangeCluster($event.target.value)" name="cluster">
                                    <option class="option" disabled="true" selected="true">-- Select Cluster --</option>
                                    <option *ngFor="#cluster of clusters" value="{{ cluster._id }}">{{ cluster.name }}</option>
                                </select>
                                <select *ngIf="selectedCluster" (change)="onChangeBlok($event.target.value)" name="block">
                                    <option class="option" disabled="true" selected="true">-- Select Block --</option>
                                    <option *ngFor="#blokfloor of blokfloors" value="{{ blokfloor._id }}">{{ blokfloor.name }}</option>
                                </select>
                                <select *ngIf="selectedBlok" (change)="onChangeNo($event.target.value)" name="no">
                                    <option class="option" disabled="true" selected="true">-- Select No. --</option>
                                    <option *ngFor="#home of homes" value="{{ home.groovyid }}">{{ home.nohome }}</option>
                                </select>
                            </form>
                                <a class="next btn btn-default dropdown-toggle" style="">
                                    NEXT
                                </a>
                        </div>
                    </div>
                </div>
            </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent implements OnInit{

    selectedCity: City;
    selectedProperty: Property;
    selectedType: TypeProperty;
    selectedCluster: Cluster;
    selectedBlok: Blokfloor;
    selectedNo: Home;


    onChangeCity(deviceValue): void{
        console.log(deviceValue);
        this.selectedCity = deviceValue;
    }
    onChangeProperty(deviceValue): void{
        console.log(deviceValue);
        this.selectedProperty = deviceValue;
    }
    onChangeType(deviceValue): void{
            console.log(deviceValue);
            this.selectedType = deviceValue;
        }
    onChangeCluster(deviceValue): void{
                console.log(deviceValue);
                this.selectedCluster = deviceValue;
            }
    onChangeBlok(deviceValue): void{
                console.log(deviceValue);
                this.selectedBlok = deviceValue;
            }
    onChangeNo(deviceValue): void{
                console.log(deviceValue);
                this.selectedNo = deviceValue;
            }


// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    cities: any[] = [];
    properties: any[] = [];
    typeproperties: any[] = [];
    clusters: any[] = [];
    blokfloors: any[] = [];
    homes: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllCity();
        this.getAllProperty();
        this.getAllType();
        this.getAllCluster();
        this.getAllBLokfloor();
        this.getAllHome();

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
            .subscribe(properties => {
                this.properties = properties
            })
    }
// Get all Cluster from the API
    getAllCluster() {
        this.http.get(`${this.API}/cluster/listcluster`)
            .map(res => res.json())
            .subscribe(clusters => {
                this.clusters = clusters
            })
    }

    // Get all Type from the API
    getAllType() {
        this.http.get(`${this.API}/type/listtypeproperty`)
            .map(res => res.json())
            .subscribe(typeproperties => {
                this.typeproperties = typeproperties
            })
    }
// Get all BLokfloor from the API
    getAllBLokfloor() {
        this.http.get(`${this.API}/blokfloor/listblokfloor`)
            .map(res => res.json())
            .subscribe(blokfloors => {
                this.blokfloors = blokfloors
            })
    }
// Get all Home from the API
    getAllHome() {
        this.http.get(`${this.API}/home/listhome`)
            .map(res => res.json())
            .subscribe(homes => {
                this.homes = homes
            })
    }
}