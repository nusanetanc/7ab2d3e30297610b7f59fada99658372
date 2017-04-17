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
<h1>tes</h1>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent implements OnInit{

    // Add one person to the API
    addSub(subname, subphone, subemail, subdateinst, subtimeinst, subpacklev, subgroovyid, subdatebirth, subidnumber) {

        var body = name=${subname}&phone=${subphone}&email=${subemail}&dateinst=${subdateinst}&timeinst=${subtimeinst}&packlev=${subpacklev}&groovyid=${subgroovyid}datebirth=${subdatebirth}&idnumber=${subidnumber};
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


/*    selectedCity: City;
    selectedProperty: Property;
    selectedCluster: Cluster;
    selectedBlok: Blokfloor;
    selectedNo: Home;
    selectedPackage: Package;


    onChangeCity(deviceValue): void{
        console.log(deviceValue);
        this.selectedCity = deviceValue;
    }
    onChangeProperty(deviceValue): void{
        console.log(deviceValue);
        this.selectedProperty = deviceValue;
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
    onChangePackage(deviceValue): void{
        console.log(deviceValue);
        this.selectedPackage = deviceValue;
    }
    */

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
