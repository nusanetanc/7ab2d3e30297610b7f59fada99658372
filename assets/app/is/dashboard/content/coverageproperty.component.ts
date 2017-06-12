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
    <div *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '6' || emps.accessrole == '601'" id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
                                            <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)" #propertycity id="propertycity">
                                                <option class="option" disabled="true" value="0">-- Select City Name --</option>
                                                <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                                            </select><br/>
                                        </form>
                                        <input #propertyname type="text" class="form-control inputForm" id="propertyname" placeholder="Property Name">
                                        <div class="g-recaptcha" data-sitekey="6LdqYiMUAAAAAG24p30ejQSqeWdvTpD0DK4oj5wv"></div>
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
                                        <div class="col-sm-12" *ngFor="#property of properties">
                                            <div class="row subInfo">
                                                <div class="col-sm-6 invoiceList"><span>{{property.name}}</span></div>
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
    <!-- -Page content- -->
    <div *ngIf="emps.accessrole == '2' || emps.accessrole == '201' || emps.accessrole == '202' || emps.accessrole == '3' || emps.accessrole == '301' || emps.accessrole == '4' || emps.accessrole == '401' || emps.accessrole == '402' || emps.accessrole == '5' || emps.accessrole == '501' || emps.accessrole == '502' || emps.accessrole == '7' || emps.accessrole == '701' || emps.accessrole == '702' || emps.accessrole == '8' || emps.accessrole == '801'">
        <div class="center"><span style="font-size: 72px; font-weight: 700; color: #c1c1c1;"><center>404</center> PAGE NOT FOUND</span><br><hr class="hr1"></div>
    </div>
    <!-- Modal -->
    <div id="failed" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="alert alert-danger alert-dismissible fade in" role=alert>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4>An error occured</h4>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCoveragePropertyComponent implements OnInit {
API = 'http://202.162.207.164:3000';

// Declare empty list of people
cities: any[] = [];
propertys: any[] = [];
emps: any[] = [];

constructor(private http: Http) {}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
    this.getAllCity();
    this.getAllPropertyByCity();
    this.getAcountEmp();
}
selectedCity: City = new City(0, 'dummy');
onSelectCity(_id) {
    this.properties = this.getAllPropertyByCity(){
        this.http.get(`${this.API}/property/propertybycity/${_id}`)
            .map(res => res.json())
            .subscribe(properties => {
                this.properties = properties
            })
    }
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
    getAllPropertyByCity() {
        this.http.get(`${this.API}/property/propertybycity/${this.city_id}`)
            .map(res => res.json())
            .subscribe(properties => {
                this.properties = properties
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
                $('#failed').modal('show');
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
