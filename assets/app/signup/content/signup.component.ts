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
    selector: 'form-signin',
    template: `
                  <!-- Content -->

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
                              <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)">
                                  <option value="0">-- Select your city --</option>
                                  <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                              </select><br/>
                          </form>
                      </div>
                      <div class="col-md-4 col-md-offset-4">
                          <form>
                          <select [(ngModel)]="selectedProperty._id" (change)="onSelectProperty($event.target.value)">
                              <option value="0">-- Select your property --</option>
                              <option *ngFor="#property of properties" value={{property._id}}>{{ property.name }}</option>
                          </select><br/>
                          </form>
                      </div>
                      <div class="col-md-4 col-md-offset-4">
                          <form>
                          <select [(ngModel)]="selectedCluster._id" (change)="onSelectCluster($event.target.value)">
                              <option value="0">-- Select your clusters --</option>
                              <option *ngFor="#cluster of clusters" value={{cluster._id}}>{{ cluster.name }}</option>
                          </select><br/>
                          </form>
                      </div>
                      <div class="col-md-4 col-md-offset-4">
                          <form>
                          <select [(ngModel)]="selectedBlok._id" (change)="onSelectBlok($event.target.value)">
                              <option value="0">-- Select your blok or floor --</option>
                              <option *ngFor="#blokfloor of blokfloors" value={{blokfloor._id}}>{{ blokfloor.name }}</option>
                          </select><br/>
                          </form>
                      </div>
                      <div class="col-md-4 col-md-offset-4">
                          <button class="next btn btn-default dropdown-toggle">
                              NEXT
                          </a>
                      </div>
                  </div>
              </div>
              </div>

              <!-- /Content -->
`,
    directives: [ROUTER_DIRECTIVES],
})
export class SignupComponent implements OnInit{

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

constructor(private http: Http) {}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
    this.getAllSub();
    this.getAllCity();
    this.getAllPackage();
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
}
