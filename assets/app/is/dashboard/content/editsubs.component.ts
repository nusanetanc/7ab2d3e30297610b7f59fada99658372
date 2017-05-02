import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
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
                <h3 id="home" class="fontWeight300">
                    <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                    </a>
                    &nbsp; Edit Subscribers
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
                                        <div class="paddingTB20 paddingR30">
                                            <div class="form-group">
                                                <input #subid id="subid" type="text" class="form-control inputForm" placeholder="Subscribe ID" required value="{{subs.subid}}">
                                                <input #subname id="subname" type="text" class="form-control inputForm" placeholder="Full Name" required>
                                                <input #subphone id="subphone" type="text" class="form-control inputForm" placeholder="Handphone" required>
                                                <input #subemail id="subemail" type="email" class="form-control inputForm" placeholder="Email" required>
                                                <input #subdatebirth id="subdatebirth" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" class="form-control inputForm" placeholder="Date Of Birth" required>
                                                <input #subidnumber id="subidnumber" type="text" class="form-control inputForm" placeholder="National Identity Card Number" required>
                                                <input #subnova id="subnova" type="text" class="form-control inputForm" placeholder="No VA" required>

                                                <!--<p>Upload your National Identity Card</p>
                                                <input #subcardid id="subcardid" class="inputForm" type="file" placeholder="Upload file..." />-->

                                                <!-- komen -->

                                            </div>
                                        </div>
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
                                        <div class="form-group paddingR30">
                                                <input #subdateinst id="subdateinst" type="date" class="form-control inputForm" />
                                        </div>
                                        <p>Please select a available timeslot for that date</p>
                                        <div class="marginB20 col-sm-offset-4">
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="9:00 am" /> 9:00 AM<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="10:00 am" /> 10:00 AM<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="11:00 am" /> 11:00 AM<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="12:00 am" /> 12:00 AM<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="1:00 pm" /> 1:00 PM<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="2:00 pm" /> 2:00 PM<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="3:00 pm" /> 3:00 PM<br>
                                            <input type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="4:00 pm" /> 4:00 PM
                                        </div>
                                        <p>Please input a active date</p>
                                        <div class="form-group paddingR30">
                                                <input #subdateactive id="subdateactive" type="date" class="form-control inputForm" />
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
                                            <select [(ngModel)]="selectedPackage.level" (change)="onSelectPackage($event.target.value)" #subpacklev id="subpacklev" name="package" class="inputForm">
                                                <option value="0">-- Select Package --</option>
                                                <option *ngFor="#package of packages" value="{{ package.level }}">Level {{package.level}} - Monthly - {{package.price | currency:'IDR':true}}</option>
                                            </select><br/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 paddingL35">
                                        <div class="marginT20 paddingR30">
                                            <input #subpromo id="subpromo" type="text" class="form-control inputForm" placeholder="PROMO" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="titleH4">REGISTRATION DETAIL</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 paddingL35">
                                        <div class="marginT20 paddingR30">
                                            <select #subregisref id="subregisref" name="package" class="inputForm">
                                                <option value="0" disabled="true" selected="true">-- Select Referensi Registrasi --</option>
                                                <option value="sales">Sales</option>
                                                <option value="0" disabled="true">-- Media Sosial --</option>
                                                <option value="Facebook">Facebook</option>
                                                <option value="Instagram">Instagram</option>
                                                <option value="Twitter">Twitter</option>
                                                <option value="Youtube">Youtube</option>
                                                <option value="Other">Other</option>
                                            </select><br/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 paddingL35">
                                        <div class="marginT20 paddingR30">
                                            <select #subregisby id="subregisby" name="package" class="inputForm">
                                                <option value="0" disabled="true" selected="true">-- Select Registrasi By --</option>
                                                <option value="Personal">-- Personal --</option>
                                                <option value="0" disabled="true">-- Sales --</option>
                                                <option *ngFor="#emp of emps">{{emp.name}}</option>
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
                                            <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)" class="inputForm">
                                                <option value="0">-- Select City --</option>
                                                <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select [(ngModel)]="selectedProperty._id" (change)="onSelectProperty($event.target.value)" class="inputForm" name="cars">
                                                <option value="0">-- Select Property --</option>
                                                <option *ngFor="#property of properties" value={{property._id}}>{{ property.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select [(ngModel)]="selectedCluster._id" (change)="onSelectCluster($event.target.value)" class="inputForm" name="cars">
                                                <option value="0">-- Select Clusters --</option>
                                                <option *ngFor="#cluster of clusters" value={{cluster._id}}>{{ cluster.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select [(ngModel)]="selectedBlok._id" (change)="onSelectBlok($event.target.value)" class="inputForm" name="cars">
                                                <option value="0">-- Select Blok or Floor --</option>
                                                <option *ngFor="#blokfloor of blokfloors" value={{blokfloor._id}}>{{ blokfloor.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select [(ngModel)]="selectedStreet._id" (change)="onSelectStreet($event.target.value)" class="inputForm" name="cars">
                                                <option value="0">-- Select Street Name --</option>
                                                <option *ngFor="#streetname of streetnames" value={{streetname._id}}>{{ streetname.name }}</option>
                                            </select><br/>
                                        </div>
                                        <div class="marginT20 paddingR30">
                                            <select #subgroovyid id="subgroovyid" class="inputForm" name="cars">
                                                <option value="0">-- Select Home Number --</option>
                                                <option *ngFor="#home of homes" value="{{home.nohome}}">{{ home.nohome }}</option>
                                            </select><br/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 paddingR45">
                                        <!-- Small modal -->
                                        <button type="submit" (click)="addSub(subname.value, subphone.value, subemail.value, subdateinst.value, subtimeinst.value, subpacklev.value, subgroovyid.value, subdatebirth.value, subidnumber.value)" class="btn btn-default buttonOrange right marginT125" data-toggle="modal" data-target="#success">SUBMIT</button>
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
export class ContentEditSubsComponent implements OnInit {
    selectedCity: City = new City(0, 'dummy');
    selectedProperty: City = new City(0, 'dummy');
    selectedCluster: City = new City(0, 'dummy');
    selectedBlok: City = new City(0, 'dummy');
    selectedStreet: City = new City(0, 'dummy');
    selectedPackage: Package = new Package(0, 'dummy');

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

// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    cities: any[] = [];
    properties: any[] = [];
    clusters: any[] = [];
    subs: any[] = [];
    blokfloors: any[] = [];
    homes: any[] = [];
    packages: any[] = [];
    streetnames: any[] = [];
    emps: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllSub();
        this.getAllCity();
        this.getAllPackage();
        this.getAllEmployee();
    }


// Add one person to the API
    addSub(subname, subphone, subemail, subdateinst, subtimeinst, subpacklev, subgroovyid, subdatebirth, subidnumber) {

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
    getSub() {
        this.http.get(`${this.API}/subscribe/id/${this._routeParams.get('id')}`)
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

    // Get all Home from the API
    getAllHomeByStreet() {
        this.http.get(`${this.API}/home/homebystreet/${this.street_id}`)
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
    // Get all users from the API
    getAllEmployee() {
        this.http.get(`${this.API}/employee/list/sales`)
            .map(res => res.json())
            .subscribe(emps => {
                this.emps = emps
            })
    }
}
