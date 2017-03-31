import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { City } from './cities';
import { Property } from './property';

@Component({
    selector: 'form-coverageproperty',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Add Coverage Area
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
            <div class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add Property</strong></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="formNewReport marginLR20">
                                        <form>
                                            <select #propertycity id="propertycity">
                                                <option class="option" disabled="true" selected="true">-- Select City Name --</option>
                                                <option *ngFor="#city of cities" [value]="city._id">{{ city.name }}</option>
                                            </select><br/>
                                        </form>
                                        <input #propertyname type="text" class="form-control inputForm" id="propertyname" placeholder="Property Name">
                                        <button type="submit" (click)="addProperty(propertyname.value, propertycity.value)" class="btn btn-default buttonOrange">
                                            SEND
                                        </button>
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
                          <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Existing Property Data</strong></div>
                      </div>
                      <div class="row subInfo">
                          <div class="col-sm-12">
                              <div class="row">
                                  <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-sm-12" *ngFor="#property of propertys">
                                            <div class="row subInfo">
                                                <div class="col-sm-6 invoiceList"><span>{{property.name}}</span></div>
                                                <div class="col-sm-6 invoiceList"><span>{{property.city}}</span></div>
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
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCoveragePropertyComponent implements OnInit {
API = 'http://202.162.207.164:3000';

// Declare empty list of people
cities: any[] = [];
propertys: any[] = [];

constructor(private http: Http) {}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
    this.getAllCity();
    this.getAllProperty()
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
                .subscribe(propertys => {
                    this.propertys = propertys
                })
        }
        callType(value){
          console.log(value);
        }
    addProperty(propertyname, propertycity) {

        var body = `name=${propertyname}&city=${propertycity}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/property/addproperty`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Property Success');
                this.getAllProperty();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }
}
