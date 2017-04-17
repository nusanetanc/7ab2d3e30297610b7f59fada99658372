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
<h1>tes</h1><br/><h1>tes</h1><br/><h1>tes</h1>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent implements OnInit{
    // Link to our api, pointing to localhost
      API = 'http://202.162.207.164:3000';

      // Declare empty list of people
      subs: any[] = [];
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
          this.getAllSub();
          this.getAllCity();
          this.getAllProperty();
          this.getAllType();
          this.getAllCluster();
          this.getAllBLokfloor();
          this.getAllHome();
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
    // Get all BLo
    kfloor from the API
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
