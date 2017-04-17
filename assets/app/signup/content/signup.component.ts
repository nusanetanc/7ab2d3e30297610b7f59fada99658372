import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subscriber';
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
                                <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)" name="cars">
                                    <option value="0" style="height: 30px;">Select your city</option>
                                    <option *ngFor="#city of cities" value="{{ city._id }}">{{ city.name }}</option>
                                </select>
                            </form>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <form>
                                 <select [(ngModel)]="selectedProperty._id" (change)="onSelectProperty($event.target.value)" name="property">
                                    <option class="option" value="0">-- Select Property Name --</option>
                                    <option *ngFor="#property of properties" value="{{ property._id }}">{{property.name}}</option>
                                </select><br/>
                            </form>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <form>
                                <select [(ngModel)]="selectedCluster._id" (change)="onSelectCluster($event.target.value)" name="cluster">
                                    <option class="option" value="0">-- Select Cluster --</option>
                                    <option *ngFor="#cluster of clusters" value="{{ cluster._id }}">{{ cluster.name }}</option>
                                </select>
                            </form>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <form>
                                <select [(ngModel)]="selectedBlok._id" (change)="onSelectBlok($event.target.value)" name="block">
                                    <option class="option" value="0">-- Select Block --</option>
                                    <option *ngFor="#blokfloor of blokfloors" value="{{ blokfloor._id }}">{{ blokfloor.name }}</option>
                                </select>
                             </form>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <form>
                                <select [(ngModel)]="selectedStreet._id" (change)="onSelectStreet($event.target.value)" name="street">
                                    <option class="option" value="0">-- Select Street --</option>
                                    <option *ngFor="#streetname of streetnames" value={{streetname._id}}>{{ streetname.name }}</option>
                                </select>
                             </form>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <form>
                                <select #subgroovyid id="subgroovyid" name="no">
                                    <option class="option" disabled="true" selected="true">-- Select No. --</option>
                                    <option *ngFor="#home of homes" value="{{ home.groovyid }}">{{ home.nohome }}</option>
                                </select>
                            </form>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <form>
                                <select #subpacklev id="subpacklev" name="package">
                                    <option disabled="true" selected="true">-- Select Package --</option>
                                    <option *ngFor="#package of packages" value="{{ package.level }}">Level {{package.level}} - Monthly - {{package.price | currency:'IDR':true}}</option>
                                </select>
                            </form>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <p>Please select a installation date</p>
                                <div class="col-sm-6">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <div class="input-group date" id="datetimepicker1">
                                                        <input #subdateinst id="subdateinst" type="date" class="form-control" />
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
                        <div class="col-md-4 col-md-offset-4">
                            <p>Please select a available timeslot for that date</p>
                            <div class="col-sm-6 col-sm-offset-4">
                                    <input id="subtimeinst" #subtimeinst type="radio" name="vehicle" value="Time" /> 9:00 am<br>
                                    <input id="subtimeinst" #subtimeinst type="radio" name="vehicle" value="Time" /> 10:00 am<br>
                                    <input id="subtimeinst" #subtimeinst type="radio" name="vehicle" value="Time" /> 11:00 am<br>
                                    <input id="subtimeinst" #subtimeinst type="radio" name="vehicle" value="Time" /> 12:00 am<br>
                                    <input id="subtimeinst" #subtimeinst type="radio" name="vehicle" value="Time" /> 1:00 pm<br>
                                    <input id="subtimeinst" #subtimeinst type="radio" name="vehicle" value="Time" /> 2:00 pm<br>
                                    <input id="subtimeinst" #subtimeinst type="radio" name="vehicle" value="Time" /> 3:00 pm<br>
                                    <input id="subtimeinst" #subtimeinst type="radio" name="vehicle" value="Time" /> 4:00 pm
                            </div>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <p>Please Provide Your Contact Information Below. Your Address : <br> 112 Diamond Cove Terrace Unit 12, 94134</p>
                              <form>
                                    <div class="form-group">
                                        <input #subname id="subname" type="text" class="form-control" id="exampleInputName" placeholder="Full Name">
                                        <input #subphone id="subphone" type="text" class="form-control" id="exampleInputHp" placeholder="Handphone">
                                        <input #subemail id="subemail" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                                        <input #subdatebirth id="subdatebirth" type="text" class="form-control inputForm" id="exampleInputEmail1" placeholder="Date of Birth (yyyy/mm/dd)">
                                        <input #subidnumber id="subidnumber" type="text" class="form-control inputForm" id="exampleInputEmail1" placeholder="NIK">
                                        <!--<p>Upload your National Identity Card</p>
                                        <div class="form-control">
                                            <button type="button">choose file</button>
                                            <p>No choose file</p>
                                        </div>-->
                                    </div>
                                </form>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <button (click)="addSub(subname.value, subphone.value, subemail.value, subdateinst.value, subtimeinst.value, subpacklev.value, subgroovyid.value, subdatebirth.value, subidnumber.value)" class="next btn btn-default dropdown-toggle" style="">
                                NEXT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent implements OnInit{

    // Add one person to the API
    addSub(subname, subphone, subemail, subdateinst, subtimeinst, subpacklev, subgroovyid, subdatebirth, subidnumber) {

        var body = name=${subname}&phone=${subphone}&email=${subemail}&dateinst=${subdateinst}&timeinst=${subtimeinst}&packlev=${subpacklev}&groovyid=${subgroovyid}&datebirth=${subdatebirth}&idnumber=${subidnumber};
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

    selectedCity: City = new City(0, 'dummy');
    selectedProperty: City = new City(0, 'dummy');
    selectedCluster: City = new City(0, 'dummy');
    selectedBlok: City = new City(0, 'dummy');
    selectedStreet: City = new City(0, 'dummy');

    onSelectCity(_id) {
        this.properties = this.getAllPropertyByCity(){
            this.http.get(`${this.API}/property/propertybycity/${_id}`
 )
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
    subs: any[] = [];
    cities: any[] = [];
    properties: any[] = [];
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
        this.getAllPackage();
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
}
