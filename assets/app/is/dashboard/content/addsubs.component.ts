import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './subs';
import { City } from './cities';
import { Property } from './property';
import { Type } from './type';
import { Cluster } from './cluster';
//import { Blokfloor } from './blokfloor';
import { Home } from './home';
import {Package} from "./package";
import {Streetname} from "./street_name";

@Component({
    selector: 'form-addsubs',
    template: `
    <!-- Page content -->
    <div *ngIf="emps.accessrole == '0' || emps.accessrole == '202' || emps.accessrole == '601'" id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; New Subscribers
            </h3>
        </div>
        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row subInfo">
                <div class="col-sm-12">
                  <form class="form" [ngFormModel]="myForm">
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
                                            <input #subname id="subname" maxlength="50" type="text" minlength="10" class="form-control inputForm" placeholder="Full Name" required>
                                            <input #subphone id="subphone" type="text" maxlength="14" class="form-control inputForm" placeholder="Handphone" required>
                                            <input #subemail id="subemail" type="email" maxlength="50" class="form-control inputForm" placeholder="Email" required>
                                            <input #subdatebirth id="subdatebirth" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" class="form-control inputForm" placeholder="Date Of Birth" required>
                                            <input #subidnumber id="subidnumber" maxlength="20" type="text" class="form-control inputForm" placeholder="National Identity Card Number" required>
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
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
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
                                            <option *ngFor="#cluster of clusters" value={{cluster._id}}>{{ cluster.name }} - {{ cluster.building }}</option>
                                        </select><br/>
                                    </div>
                                    <div class="marginT20 paddingR30">
                                        <select [(ngModel)]="selectedStreet._id" (change)="onSelectStreet($event.target.value)" class="inputForm" name="cars">
                                            <option value="0">-- Select Street Name --</option>
                                            <option *ngFor="#streetname of streetnames" value={{streetname._id}}>{{ streetname.name }} - Blok {{streetname.blok}}</option>
                                        </select><br/>
                                    </div>
                                    <div class="marginT20 paddingR30">
                                        <select [(ngModel)]="selectedHome._id" (change)="onSelectHome($event.target.value)" #subgroovyid id="subgroovyid" class="inputForm" name="cars">
                                            <option value="0">-- Select Home Number --</option>
                                            <option *ngFor="#home of homes" [value]=home._id>{{ home.nohome }}</option>
                                        </select><br/> {{variabletest}}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <h4 class="titleH4">SUBSCRIPTION PLAN</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 paddingL35">
                                    <div class="marginT20 paddingR30">
                                      <select [(ngModel)]="selectedPackage.level" (change)="onSelectPackage($event.target.value)" #subpackage id="subpackage" name="package" class="inputForm">
                                          <option value="0">-- Select Package --</option>
                                          <option *ngFor="#promopackage of promopackages" [value]=promopackage._id>Level {{promopackage.level}} Promo - Monthly - {{promopackage.price | currency:'IDR':true}}</option>
                                          <option *ngFor="#defaultpackage of defaultpackages" [value]=defaultpackage._id>Level {{defaultpackage.level}} Regular - Monthly - {{defaultpackage.price | currency:'IDR':true}}</option>
                                      </select><br/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <h4 class="titleH4">SUBSCRIPTION REFERENCE</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 paddingL35">
                                    <div class="marginT20 paddingR30">
                                      <select  class="inputForm">
                                          <option value="0" disabled selected>-- Select Reference --</option>
                                          <option value="Media Sosial">Media Sosial</option>
                                          <option value="Website">Website</option>
                                          <option value="Event">Event</option>
                                          <option value="Sales">Sales</option>
                                      </select><br/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 paddingL35">
                                    <div class="marginT20 paddingR30">
                                      <select  class="inputForm">
                                          <option value="0" disabled selected>-- Select Sales --</option>
                                          <option *ngFor="#sale of sales">{{sale.name}}</option>
                                      </select><br/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 paddingR45">
                                    <div class="g-recaptcha" data-sitekey="6LdqYiMUAAAAAG24p30ejQSqeWdvTpD0DK4oj5wv"></div>
                                    <!-- Small modal -->
                                    <span id="label-success" class="label label-success right" style="display: none;">Success</span>
                                    <button type="submit" id="submit" (click)="addSub(subname.value, subphone.value, subemail.value, subdateinst.value, subtimeinst.value, subgroovyid.value, subdatebirth.value, subidnumber.value, subpackage.value)" class="btn btn-default buttonOrange right" data-toggle="modal">REGISTER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div *ngIf="emps.accessrole == '2' || emps.accessrole == '201' ||  emps.accessrole == '3' || emps.accessrole == '301' || emps.accessrole == '4' || emps.accessrole == '401' || emps.accessrole == '402' || emps.accessrole == '5' || emps.accessrole == '501' || emps.accessrole == '502' || emps.accessrole == '7' || emps.accessrole == '701' || emps.accessrole == '702' || emps.accessrole == '8' || emps.accessrole == '801'" class='fullscreenDiv'>
        <div class="center"><span style="font-size: 72px; font-weight: 700; color: #c1c1c1;"><center>404</center> PAGE NOT FOUND</span><br><hr class="hr1"></div>
    </div>
    <!-- Modal -->
    <div id="failed" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog" role="document" style="float: left; padding-left: 44%;">
        <div class="text-center" style="padding: 5px; background-color: #FC592E; width: 200px; float: left; box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0);">
          <h5 id="message" style="color: #FFF;"></h5>
        </div>
      </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddSubsComponent implements OnInit {

myForm: ControlGroup;

    selectedCity: City = new City(0, 'dummy');
    selectedProperty: City = new City(0, 'dummy');
    selectedCluster: City = new City(0, 'dummy');
    //selectedBlok: City = new City(0, 'dummy');
    selectedStreet: City = new City(0, 'dummy');
    selectedPackage: Package = new Package(0, 'dummy');
    selectedHome: Home = new Home(0, 'dummy');

    onSelectPackage(level) {
        console.log(level)
    }
    onSelectHome(_id) {
        console.log(nohome)
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
    this.streetnames = this.getAllStreetByCluster(){
        this.http.get(`${this.API}/streetname/streetnamebycluster/${_id}`)
            .map(res => res.json())
            .subscribe(streetnames => {
                this.streetnames = streetnames
            })
    }
        this.defaultpackages = this.getAllPackagesDefault(){
            this.http.get(`${this.API}/package/list/Default`)
                .map(res => res.json())
                .subscribe(defaultpackages => {
                    this.defaultpackages = defaultpackages
                })
        }

        this.promopackages = this.getAllPackagesPromo(){
            this.http.get(`${this.API}/package/list/Promo/59152634f2c0f31ac56ada67`)
                .map(res => res.json())
                .subscribe(promopackages => {
                    this.promopackages = promopackages
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
    onSelectHome(_id) {
      variabletest = 'test';
    }
    /*$(document).ready(function(){
        $("#submit").click(function(){
            $("#label-success").css({ display: "block" });
        });
    });*/

// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';
    TEST = 'B';
    // Declare empty list of people
    cities: any[] = [];
    properties: any[] = [];
    clusters: any[] = [];
    subs: any[] = [];
    blokfloors: any[] = [];
    homes: any[] = [];
    packages: any[] = [];
    streetnames: any[] = [];
    detailclusters: any[] = [];
    emps: any[] = [];
    defaultpackages: any[] = [];
    promopackages: any[] = [];
    sales: any[] = [];

    constructor(private _fb:FormBuilder, private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllSub();
        this.getAllCity();
        this.getAcountEmp();
        this.getSales();
        this.myForm = this._fb.group({
          subname: ['', Validators.required]
        })
    }


// Add one person to the API
    addSub(subname, subphone, subemail, subdateinst, subtimeinst, subgroovyid, subdatebirth, subidnumber, subpackage.value) {
        var body = `name=${subname}&phone=${subphone}&email=${subemail}&dateinst=${subdateinst}&timeinst=${subtimeinst}&groovyid=${subgroovyid}&datebirth=${subdatebirth}&idnumber=${subidnumber}&package=${subpackage}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/subscribe/addsubs`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add New Subscribe Success');
                this.getAllSubss();
            }, error => {
                document.getElementById("message").innerHTML = error.text();
                $('#failed').modal('show');
                $('.modal-backdrop').removeClass("modal-backdrop");
                //console.log(JSON.stringify(error.json()));
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
    getAllStreetByCluster() {
        this.http.get(`${this.API}/streetname/streetnamebycluster/${this.cluster_id}`)
            .map(res => res.json())
            .subscribe(streetnames => {
                this.streetnames = streetnames
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


    getAllPackagesDefault(){
        this.http.get(`${this.API}/package/list/Default`)
            .map(res => res.json())
            .subscribe(defaultpackages => {
                this.defaultpackages = defaultpackages
            })
    }
    getAllPackagesPromo(){
        this.http.get(`${this.API}/package/list/Promo/59152634f2c0f31ac56ada67`)
            .map(res => res.json())
            .subscribe(promopackages => {
                this.promopackages = promopackages
            })
    }
    getAcountEmp() {
        this.http.get(`${this.API}/subscribe/detailemp`)
            .map(res => res.json())
            .subscribe(emps => {
                this.emps = emps
            }
          )
    }
    getSales() {
        this.http.get(`${this.API}/employee/list/Sales`)
            .map(res => res.json())
            .subscribe(sales => {
                this.sales = sales
            })
    }
    private isEmail(control: Control): { [s: string]: boolean} {
      var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|id|ida|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
      if(!control.value.match(re)){
        console.log(control.value);
        return {invalidEmail: true};
      }
    }
}
