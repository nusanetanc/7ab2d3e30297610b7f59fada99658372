import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { City } from './cities';
import { Property } from './property';
import { Cluster } from './cluster';
//import { Blokfloor } from './blokfloor';
import { Street } from './street';

@Component({
    selector: 'form-coveragehome',
    template: `
    <!-- Page content -->
    <div *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '6' || emps.accessrole == '601'" id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Coverage Area <b>Home</b>
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
            <div *ngIf="emps.accessrole == '0' || emps.accessrole == '6' || emps.accessrole == '601'" class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add Home Number</strong></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="formNewReport marginLR20">
                                    <form [ngFormModel]="myForm">
                                      <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)" #homecity id="homecity">
                                          <option value="0" disabled="true">-- Select City --</option>
                                          <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                                      </select><br/><br/>
                                      <select #homeproperty id="homeproperty" [(ngModel)]="selectedProperty._id" (change)="onSelectProperty($event.target.value)">
                                          <option value="0" disabled="true">-- Select Property --</option>
                                          <option *ngFor="#property of properties" value={{property._id}}>{{ property.name }}</option>
                                      </select><br/><br/>
                                      <select #homecluster id="homecluster" [(ngModel)]="selectedCluster._id" (change)="onSelectCluster($event.target.value)">
                                          <option value="0" disabled="true">-- Select Cluster --</option>
                                          <option *ngFor="#cluster of clusters" value={{cluster._id}}>{{ cluster.name }}</option>
                                      </select><br/><br/>
                                    <select [ngFormControl]="myForm.find('homestreet')" #homestreet id="homestreet" [(ngModel)]="selectedStreet._id" (change)="onSelectStreet($event.target.value)">
                                        <option value="0" disabled="true">-- Select Street --</option>
                                        <option *ngFor="#streetname of streetnames" value={{streetname._id}}>{{ streetname.name }} - Blok {{streetname.blok}}</option>
                                    </select><br/><br/>
                                        <input [ngFormControl]="myForm.find('homeno')" type="number" class="form-control inputForm" id="homeno" #homeno placeholder="Home Number"><br/>
                                        <div class="g-recaptcha" data-sitekey="6LdqYiMUAAAAAG24p30ejQSqeWdvTpD0DK4oj5wv"></div>
                                        <button [disabled]="!myForm.valid" type="submit" (click)="addBlock(homecity.value, homeproperty.value, homecluster.value, homestreet.value, homeno.value)" class="btn btn-default buttonOrange">
                                            SEND
                                        </button>
                                      </form>
                                    </div>
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
                      <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>List Home</strong></div>
                  </div>
                  <div *ngIf="emps.accessrole == '1'" class="row subInfo">
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="formNewReport marginLR20">
                                <form [ngFormModel]="myForm">
                                  <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)" #homecity id="homecity">
                                      <option value="0" disabled="true">-- Select City --</option>
                                      <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                                  </select><br/><br/>
                                  <select #homeproperty id="homeproperty" [(ngModel)]="selectedProperty._id" (change)="onSelectProperty($event.target.value)">
                                      <option value="0" disabled="true">-- Select Property --</option>
                                      <option *ngFor="#property of properties" value={{property._id}}>{{ property.name }}</option>
                                  </select><br/><br/>
                                  <select #homecluster id="homecluster" [(ngModel)]="selectedCluster._id" (change)="onSelectCluster($event.target.value)">
                                      <option value="0" disabled="true">-- Select Cluster --</option>
                                      <option *ngFor="#cluster of clusters" value={{cluster._id}}>{{ cluster.name }}</option>
                                  </select><br/><br/>
                                <select #homestreet id="homestreet" [(ngModel)]="selectedStreet._id" (change)="onSelectStreet($event.target.value)">
                                    <option value="0" disabled="true">-- Select Street --</option>
                                    <option *ngFor="#streetname of streetnames" value={{streetname._id}}>{{ streetname.name }} - Blok {{streetname.blok}}</option>
                                </select><br/><br/>
                                  </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row subInfo">
                      <div class="col-sm-12">
                          <div class="row">
                              <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-12" *ngFor="#home of homes">
                                        <div class="row subInfo">
                                            <div class="col-sm-2 invoiceList"><span></span><b>No</b> {{home.nohome}}</div>
                                            <div class="col-sm-2 invoiceList"><span></span><b>groovyid</b> {{home.groovyid}}</div>
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
    <div *ngIf="emps.accessrole == '2' || emps.accessrole == '201' || emps.accessrole == '202' || emps.accessrole == '3' || emps.accessrole == '301' || emps.accessrole == '4' || emps.accessrole == '401' || emps.accessrole == '402' || emps.accessrole == '5' || emps.accessrole == '501' || emps.accessrole == '502' || emps.accessrole == '7' || emps.accessrole == '701' || emps.accessrole == '702' || emps.accessrole == '8' || emps.accessrole == '801'">
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
export class ContentCoverageHomeComponent implements OnInit {

myForm: ControlGroup;
API = 'http://202.162.207.164:3000';

selectedCity: City = new City(0, 'dummy');
selectedProperty: City = new City(0, 'dummy');
selectedCluster: City = new City(0, 'dummy');
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
    this.streetnames = this.getAllStreetByCluster(){
        this.http.get(`${this.API}/streetname/streetnamebycluster/${_id}`)
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
//blokfloors: any[] = [];
streetnames: any[] = [];
emps: any[] = [];

constructor(private _fb:FormBuilder, private http: Http) {}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
this.getAllCity();
this.getAllPropertyByCity();
this.getAllClusterByProperty();
this.getAllStreetByCluster();
this.getAllHomeByStreet();
this.getAcountEmp();
this.myForm = this._fb.group({
  homeno: ['', Validators.required],
  homestreet: ['0', Validators.required]
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

    addBlock(homecity, homeproperty, homecluster, homestreet, homeno) {
        var body = `city=${homecity}&property=${homeproperty}&cluster=${homecluster}&streetname=${homestreet}&nohome=${homeno}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/home/addhome`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Home Success');
                this.getAllHome();
            }, error => {
                document.getElementById("message").innerHTML = error.text();
                $('#failed').modal('show');
                $('.modal-backdrop').removeClass("modal-backdrop");
                //console.log(JSON.stringify(error.json()));
            });
    }
    getAcountEmp() {
        this.http.get(`${this.API}/subscribe/detailemp`)
            .map(res => res.json())
            .subscribe(emps => {
                this.emps = emps
            }
          )
    }
}
