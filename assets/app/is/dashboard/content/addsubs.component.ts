import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './subs';
import { City } from './cities';
import { Property } from './property';
import { Type } from './type';
import { Cluster } from './cluster';
import { Blokfloor } from './blokfloor';
import { Home } from './home';
import {Package} from "./package";
import {Streetname} from "./street_name";

@Component({
    selector: 'form-addsubs',
    template: `
        <!-- Page content -->
        <div id="page-content-wrapper">
            <div class="content-header">
                <h3 id="home">
                    <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                    </a>
                    &nbsp; New Subscribers
                </h3>
            </div>

            <div class="page-content inset" data-spy="scroll" data-target="#spy">
                <div class="row subInfo">
                    <div class="col-sm-12">

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="titleH4">PERSONAL INFORMATION</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 paddingL35">
                                        <form class="paddingTB20 paddingR30">
                                            <div class="form-group">
                                                <input #subname id="subname" type="text" class="form-control inputForm" id="exampleInputName" placeholder="Full Name">
                                                <input #subphone id="subphone" type="text" class="form-control inputForm" id="exampleInputHp" placeholder="Handphone">
                                                <input #subemail id="subemail" type="email" class="form-control inputForm" id="exampleInputEmail1" placeholder="Email">
                                                <input #subdatebirth id="subdatebirth" type="text" class="form-control inputForm" id="exampleInputEmail1" placeholder="Date of Birth (yyyy/mm/dd)">
                                                <input #subidnumber id="subidnumber" type="text" class="form-control inputForm" id="exampleInputEmail1" placeholder="ID Number">
                                                <p>Upload your National Identity Card</p>
                                                <div class="form-control inputForm">
                                                    <button class="left" type="button">choose file</button>
                                                    <p class="left marginL5">No choose file</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="titleH4">INSTALLATION DATE</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 paddingL35">
                                        <p>Please select a installation date</p>
                                        <div class="form-group">
                                            <div class="input-group date paddingR30" id="datetimepicker1">
                                                <input #subdateinst id="subdateinst" type="text" class="form-control" />
                                                <span class="input-group-addon">
                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                </span>
                                            </div>
                                        </div>

                                        <p>Please select a available timeslot for that date</p>
                                        <div class="marginB20 col-sm-offset-4">
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="9:00 am" /> 9:00 am PST<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="10:00 am" /> 10:00 am PST<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="11:00 am" /> 11:00 am PST<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="12:00 am" /> 12:00 am PST<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="1:00 pm" /> 1:00 pm PST<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="2:00 pm" /> 2:00 pm PST<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="3:00 pm" /> 3:00 pm PST<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="4:00 pm" /> 4:00 pm PST
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="titleH4">SUBSCRIPTION PLAN</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 paddingL35">
                                        <div class="marginT20 paddingR30">
                                            <select #subpacklev id="subpacklev" name="package" class="inputForm">
                                                <option disabled="true" selected="true">-- Select Package --</option>
                                                <option *ngFor="#package of packages" value="{{ package.level }}">Level {{package.level}} - Monthly - {{package.price | currency:'IDR':true}}</option>
                                            </select><br/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="titleH4">ADDRESS</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 paddingL35">
                                        <div class="marginT20 paddingR30">
                                            <select [(ngModel)]="selectedCity._id" (change)="onSelect($event.target.value)" class="inputForm">
                                                <option value="0">-- Select your city --</option>
                                                <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select class="inputForm" name="cars">
                                                <option *ngIf='selectedCity._id == 0' value="0" disabled="true" selected="true">-- Select your property --</option>
                                                <option *ngFor="#property of properties" value={{property._id}}>{{ property.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select class="inputForm" name="cars">
                                                <option disabled="true" selected="true">-- Select your cluster --</option>
                                                <option *ngFor="#cluster of clusters">{{ cluster.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select class="inputForm" name="cars">
                                                <option disabled="true" selected="true">-- Select your blok or floor --</option>
                                                <option *ngFor="#blokfloor of blokfloors">{{ blokfloor.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select class="inputForm" name="cars">
                                                <option disabled="true" selected="true">-- Select your street name --</option>
                                                <option *ngFor="#streetname of streetnames">{{ streetname.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select #subgroovyid id="subgroovyid" class="inputForm" name="cars">
                                                <option disabled="true" selected="true">-- Select your no home --</option>
                                                <option *ngFor="#home of homes">{{ home.nohome }}</option>
                                            </select><br/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 paddingR45">
                                        <!-- Small modal -->
                                        <button type="submit" (click)="addSub(subname.value, subphone.value, subemail.value, subdateinst.value, subtimeinst.value, subpacklev.value, subgroovyid.value, subdatebirth.value, subidnumber.value)" class="btn btn-default buttonOrange right marginT125" data-toggle="modal" data-target="#success">REGISTER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddSubsComponent implements OnInit {
    selectedCity: City = new City(0, "dummy");

    cities: City[];
    properties: Property[];

    onSelect(_id) {
        console.log(_id)
        this.properties = this.getAllProperty(city : _id);
    }

// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    subs: any[] = [];
    typeproperties: any[] = [];
    clusters: any[] = [];
    blokfloors: any[] = [];
    homes: any[] = [];
    packages: any[] = [];
    streetnames: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllSub();
        this.getAllCity();
        this.getAllType();
        this.getAllCluster();
        this.getAllBLokfloor();
        this.getAllHome();
        this.getAllPackage();
        this.getAllStreet();
    }


// Add one person to the API
    addSub(subname, subphone, subemail, subdateinst, subtimeinst, subpacklev, subgroovyid, subdatebirth, subidnumber, streetname) {

        var body = `name=${subname}&phone=${subphone}&email=${subemail}&dateinst=${subdateinst}&timeinst=${subtimeinst}&packlev=${subpacklev}&groovyid=${subgroovyid}&datebirth=${subdatebirth}&idnumber=${subidnumber}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/subscribe/addsub`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add New Subscribe Success');
                this.getAllSub();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }

    // Get all Sub from the API
    getAllSub() {
        this.http.get(`${this.API}/subscribe/listsub`)
            .map(res => res.json())
            .subscribe(subs => {
                this.subs = subs
            })
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
    // Get all Type from the API
    getAllType() {
        this.http.get(`${this.API}/type/listtypeproperty`)
            .map(res => res.json())
            .subscribe(typeproperties => {
                this.typeproperties = typeproperties
            })

    }
    // Get all Type from the API
    getAllCluster() {
        this.http.get(`${this.API}/cluster/listcluster`)
            .map(res => res.json())
            .subscribe(clusters => {
                this.clusters = clusters
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

    // Get all Street from the API
    getAllStreet() {
        this.http.get(`${this.API}/streetname/liststreetname`)
            .map(res => res.json())
            .subscribe(streetnames => {
                this.streetnames = streetnames
            })
    }
}
