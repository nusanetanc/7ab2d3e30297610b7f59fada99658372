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
import {Package} from "./package";

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
                                 <select *ngIf="selectedCity" [hidden]="selectedNo" (change)="onChangeProperty($event.target.value)" name="property">
                                    <option class="option" disabled="true" selected="true">-- Select Property Name --</option>
                                    <option *ngFor="#property of properties" value="{{ property._id }}">{{property.name}}</option>
                                </select>
                                <select *ngIf="selectedProperty" [hidden]="selectedNo" (change)="onChangeType($event.target.value)" name="type">
                                    <option class="option" disabled="true" selected="true">-- Select Type --</option>
                                    <option *ngFor="#typeproperty of typeproperties" value="{{ typeproperty._id }}">{{ typeproperty.name }}</option>      
                                </select>
                                <select *ngIf="selectedType" [hidden]="selectedNo" (change)="onChangeCluster($event.target.value)" name="cluster">
                                    <option class="option" disabled="true" selected="true">-- Select Cluster --</option>
                                    <option *ngFor="#cluster of clusters" value="{{ cluster._id }}">{{ cluster.name }}</option>
                                </select>
                                <select *ngIf="selectedCluster" [hidden]="selectedNo" (change)="onChangeBlok($event.target.value)" name="block">
                                    <option class="option" disabled="true" selected="true">-- Select Block --</option>
                                    <option *ngFor="#blokfloor of blokfloors" value="{{ blokfloor._id }}">{{ blokfloor.name }}</option>
                                </select>
                                <select *ngIf="selectedBlok" [hidden]="selectedNo" (change)="onChangeNo($event.target.value)" name="no">
                                    <option class="option" disabled="true" selected="true">-- Select No. --</option>
                                    <option *ngFor="#home of homes" value="{{ home.groovyid }}">{{ home.nohome }}</option>
                                </select>
                                <select *ngIf="selectedNo" name="package">
                                    <option disabled="true" selected="true">-- Select Package --</option>
                                    <option *ngFor="#package of packages" value="{{ package._id }}">Level {{package.level}} - Monthly - {{package.price | currency:'IDR':true}}</option>
                                </select>
                                <div>
                                    <p>Please select a installation date</p>
                                    <div class="col-sm-6">
                                        <div class="container">
                                            <div class="row">
                                                <div class='col-sm-6'>
                                                    <div class="form-group">
                                                        <div class='input-group date' id='datetimepicker1'>
                                                            <input type='text' class="form-control" />
                                                            <span class="input-group-addon">
                                                                <span class="glyphicon glyphicon-calendar"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <script type="text/javascript">
                                                    $(function () {
                                                        $('#datetimepicker1').datetimepicker();
                                                    });
                                                </script>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>Please select a available timeslot for that date</p>
                                    <div class="col-sm-6 col-sm-offset-4">
                                        <form action="">
                                            <input type="radio" name="vehicle" value="Time" /> 9:00 am PST<br>
                                            <input type="radio" name="vehicle" value="Time" /> 10:00 am PST<br>
                                            <input type="radio" name="vehicle" value="Time" /> 11:00 am PST<br>
                                            <input type="radio" name="vehicle" value="Time" /> 12:00 am PST<br>
                                            <input type="radio" name="vehicle" value="Time" /> 1:00 pm PST<br>
                                            <input type="radio" name="vehicle" value="Time" /> 2:00 pm PST<br>
                                            <input type="radio" name="vehicle" value="Time" /> 3:00 pm PST<br>
                                            <input type="radio" name="vehicle" value="Time" /> 4:00 pm PST
                                        </form>
                                    </div>
                                </div>
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
    packages: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllCity();
        this.getAllProperty();
        this.getAllType();
        this.getAllCluster();
        this.getAllBLokfloor();
        this.getAllHome();
        this.getAllPackage();
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

    // Get all Package from the API
    getAllPackage() {
        this.http.get(`${this.API}/package/listpackage`)
            .map(res => res.json())
            .subscribe(packages => {
                this.packages = packages
            })
    }
}