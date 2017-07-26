import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { City } from './cities';
import { Property } from './property';
import { Cluster } from './cluster';
import { Blokfloor } from './blokfloor';
import { Street } from './street';

@Component({
    selector: 'form-coveragestreet',
    template: `

    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCoverageStreetComponent implements OnInit {

myForm: ControlGroup;

API = 'http://202.162.207.164:3000';

selectedCity: City = new City(0, 'dummy');
selectedProperty: City = new City(0, 'dummy');
selectedCluster: City = new City(0, 'dummy');
selectedBlok: City = new City(0, 'dummy');

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


// Declare empty list of people
cities: any[] = [];
properties: any[] = [];
clusters: any[] = [];
blokfloors: any[] = [];
streetnames: any[] = [];
emps: any[] = [];

constructor(private _fb:FormBuilder, private http: Http) {}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
this.getAllCity();
this.getAllPropertyByCity();
this.getAllClusterByProperty();
//this.getAllBLokfloorByCluster();
//this.getAllStreetByBlok();
this.getAcountEmp();
this.myForm = this._fb.group({
  streetname: ['', Validators.required],
  streetblok: ['0', Validators.required]
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
// getAllStreetByBlok() {
//    this.http.get(`${this.API}/streetname/streetnamebyblok/${this.blok_id}`)
//        .map(res => res.json())
//        .subscribe(streetnames => {
//            this.streetnames = streetnames
//        })
// }

// Get all BLokfloor from the API
// getAllBLokfloorByCluster() {
//    this.http.get(`${this.API}/blokfloor/blokfloorbycluster/${this.cluster_id}`)
//        .map(res => res.json())
//        .subscribe(blokfloors => {
//            this.blokfloors = blokfloors
//        })
// }
    addBlock(streetname, streetblok, streetcluster) {

        var body = `name=${streetname}&blok=${streetblok}&cluster=${streetcluster}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/streetname/addstreetname`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Street Success');
                //this.getAllStreet();
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
