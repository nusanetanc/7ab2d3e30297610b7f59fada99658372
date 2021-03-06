import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
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
    selector: 'form-signin',
    template: `
    <!-- Content -->
    <div class="jumbotron signup-jumbotron">
       <div class="container">
          <div class="row">
             <div class="col-md-12">
                <!-- header SignUp -->
                <h3>Sign Up</h3>
             </div>
             <!-- .header SignUp -->
          </div>
          <div class="row" *ngIf="clickedItemSignUp.name == 'regArea'">
             <div class="col-md-4 col-md-offset-4">
                <form>
                   <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)" class="inputForm">
                   <option value="0" disabled>-- Select your city --</option>
                   <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                   </select><br/>
                </form>
             </div>
             <div class="col-md-4 col-md-offset-4">
                <form>
                   <select [(ngModel)]="selectedProperty._id" (change)="onSelectProperty($event.target.value)">
                   <option value="0" disabled>-- Select your property --</option>
                   <option *ngFor="#property of properties" value={{property._id}}>{{ property.name }}</option>
                   </select><br/>
                </form>
             </div>
             <div class="col-md-4 col-md-offset-4">
                <form>
                   <select [(ngModel)]="selectedCluster._id" (change)="onSelectCluster($event.target.value)">
                   <option value="0" disabled>-- Select your clusters or apartemen --</option>
                   <option *ngFor="#cluster of clusters" value={{cluster._id}}>{{ cluster.name }}</option>
                   </select><br/>
                </form>
             </div>
             <div class="col-md-4 col-md-offset-4">
                <form>
                   <select [(ngModel)]="selectedStreet._id" (change)="onSelectStreet($event.target.value)">
                     <option value="0" disabled>-- Select your street name or Tower 1--</option>
                     <option *ngFor="#streetname of streetnames" value={{streetname._id}}>{{ streetname.name }}  - Blok {{ streetname.blok }}</option>
                   </select><br/>
                </form>
             </div>
             <div class="col-md-4 col-md-offset-4">
                <form>
                    <select [(ngModel)]="selectedHome._id" (change)="onSelectHome($event.target.value)" #subgroovyid id="subgroovyid" class="inputForm" name="cars">
                        <option value="0" disabled>-- Select Home Number --</option>
                        <option *ngFor="#home of homes" [value]=home._id>{{ home.nohome }}</option>
                    </select><br/>
                   <br/>
                </form>
             </div>
          </div>
          <div class="row" *ngIf="clickedItemSignUp.name == 'regPack'">
             <div class="col-md-4 col-md-offset-4">
                <form>
                   <select [(ngModel)]="selectedPackage._id" (change)="onSelectPackage($event.target.value)" #subpacklev id="subpacklev" name="package" class="inputForm">
                   <option value="0">-- Select Package --</option>
                   <option *ngFor="#package of packages" value="{{ package._id }}">Level {{package.level}} - Monthly - {{package.price | currency:'IDR':true}}</option>
                   </select><br/>
                </form>
             </div>
          </div>
          <div class="row" *ngIf="clickedItemSignUp.name == 'regInst'">
             <div class="col-md-4 col-md-offset-4">
                <p>Please select a installation date</p>
                <input (change)="onSelectDateIns($event.target.value)" #subdateinst id="subdateinst" type="date" class="form-control formInput" />
             </div>
             <div class="col-md-4 col-md-offset-4">
                <p>Please select a available timeslot for that date</p>
                <div class="col-sm-6 col-sm-offset-4">
                   <form action="">
                      <input (change)="onSelectTimeIns($event.target.value)" type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="9:00 am" /> 9:00 am<br>
                      <input (change)="onSelectTimeIns($event.target.value)" type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="10:00 am" /> 10:00 am<br>
                      <input (change)="onSelectTimeIns($event.target.value)" type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="11:00 am" /> 11:00 am<br>
                      <input (change)="onSelectTimeIns($event.target.value)" type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="12:00 am" /> 12:00 am<br>
                      <input (change)="onSelectTimeIns($event.target.value)" type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="1:00 pm" /> 1:00 pm<br>
                      <input (change)="onSelectTimeIns($event.target.value)" type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="2:00 pm" /> 2:00 pm<br>
                      <input (change)="onSelectTimeIns($event.target.value)" type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="3:00 pm" /> 3:00 pm<br>
                      <input (change)="onSelectTimeIns($event.target.value)" type="radio" name="subtimeinst" id="subtimeinst" #subtimeinst value="4:00 pm" /> 4:00 pm
                   </form>
                </div>
             </div>
          </div>
          <div class="row" *ngIf="clickedItemSignUp.name == 'regData'">
             <div class="col-md-4 col-md-offset-4">
                <form>
                   <div class="form-group">
                      <input #subname id="subname" type="text" class="form-control"  placeholder="Full Name">
                      <input #subphone id="subphone" type="text" class="form-control" placeholder="Handphone">
                      <input #subemail id="subemail" type="email" class="form-control" placeholder="Email">
                      <input #subdatebirth id="subdatebirth" type="date" class="form-control inputForm" placeholder="Date of Birth">
                      <input #subidnumber id="subidnumber" type="text" class="form-control inputForm" placeholder="National Id Card Number">
                      <button (click)="onItemClicked2(Inst)" class="back btn btn-default dropdown-toggle" *ngIf="clickedItemSignUp.name == 'regData'">
                          CANCEL
                      </button>
                      <button *ngIf="clickedItemSignUp.name == 'regData'" type="submit" (click)="addSub(subname.value, subphone.value, subemail.value, subdatebirth.value, subidnumber.value)" class="buttonNext btn btn-default dropdown-toggle" data-toggle="modal" data-target="#success">
                      REGISTER
                      </button>
                   </div>

                </form>
             </div>
          </div>
          <div class="row" *ngIf="clickedItemSignUp.name == 'regDone'">
             <div class="col-md-12">
                <div class="row" style="margin-bottom: 10px; text-align: center;">
                   All Set! We Will See You At The Date And Time You Chose
                   And A Confirmation Email Was Sent With Details Below.
                </div>
             </div>
          </div>
          <div class="row">
             <div class="col-md-4 col-md-offset-4">
                <button (click)="onItemClicked1(Area)" class="buttonNext btn btn-default dropdown-toggle" *ngIf="clickedItemSignUp.name == 'regArea'">
                NEXT
                </button>
                <button (click)="onItemClicked0(early)" class="back btn btn-default dropdown-toggle" *ngIf="clickedItemSignUp.name == 'regInst'">
                    BACK
                </button>
                <button (click)="onItemClicked2(Inst)" class="buttonNext btn btn-default dropdown-toggle" *ngIf="clickedItemSignUp.name == 'regInst'">
                NEXT
                </button>
                <button (click)="onItemClicked1(Area)" class="back btn btn-default dropdown-toggle" *ngIf="clickedItemSignUp.name == 'regPack'">
                    BACK
                </button>
                <button (click)="onItemClicked3(Pack)" class="buttonNext btn btn-default dropdown-toggle" *ngIf="clickedItemSignUp.name == 'regPack'">
                NEXT
                </button>
             </div>
          </div>
       </div>
    </div>
    <!-- /Content -->
`,
    directives: [ROUTER_DIRECTIVES],
})
export class SignupComponent implements OnInit{

public clickedItemSignUp = {name: "regArea"};

onItemClicked0(early) {
   this.clickedItemSignUp = {name: "regArea"};
}
onItemClicked1(Area) {
   this.clickedItemSignUp = {name: "regInst"};
}

onItemClicked2(Inst) {
   this.clickedItemSignUp = {name: "regPack"};
}

onItemClicked3(Pack) {
   this.clickedItemSignUp = {name: "regData"};
}

selectedCity: City = new City(0, 'dummy');
selectedProperty: City = new City(0, 'dummy');
selectedCluster: City = new City(0, 'dummy');
selectedStreet: City = new City(0, 'dummy');
selectedPackage: Package = new Package(0, 'dummy');
selectedHome: City = new City(0, 'dummy');

packagechange:string;
onSelectPackage(_id) {
    console.log(_id)
    this.packagechange = _id
}
homechange:string;
onSelectHome(_id) {
    console.log(_id)
    this.homechange = _id
}
dateinschange:string;
onSelectDateIns(_id) {
    console.log(_id)
    this.dateinschange = _id
}
timeinschange:string;
onSelectTimeIns(_id) {
    console.log(_id)
    this.timeinschange = _id
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

// Link to our api, pointing to localhost
API = 'http://202.162.207.164:3000';

// Declare empty list of people
cities: any[] = [];
properties: any[] = [];
clusters: any[] = [];
subs: any[] = [];
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


// Add one person to the API
addSub(subname, subphone, subemail, subdatebirth, subidnumber) {
    var body = `name=${subname}&phone=${subphone}&email=${subemail}&datebirth=${subdatebirth}&idnumber=${subidnumber}&package=${this.packagechange}&groovyid=${this.homechange}&dateinst=${this.dateinschange}&timeinst=${this.timeinschange}`;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
        .post(`${this.API}/subscribe/addsub`,
            body, {
                headers: headers
            })
        .subscribe(data => {
            this.clickedItemSignUp = {name: "regDone"};;
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

// Get all Package from the API
getAllPackage() {
    this.http.get(`${this.API}/package/listpackage`)
        .map(res => res.json())
        .subscribe(packages => {
            this.packages = packages
        })
}

}
