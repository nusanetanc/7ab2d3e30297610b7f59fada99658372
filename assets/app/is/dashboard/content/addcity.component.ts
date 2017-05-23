import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { City } from './cities';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
        <div  *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '6' || emps.accessrole == '601'" id="page-content-wrapper">
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
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add City</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="formNewReport marginLR20">
                                            <form>
                                                <input #cityname type="text" class="form-control inputForm" id="cityname" placeholder="New City">
                                                <br/>
                                            </form>
                                            <button type="submit" (click)="addCity(cityname.value)" class="btn btn-default buttonOrange">
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
                                <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>List City</strong></div>
                            </div>
                            <div class="row subInfo">
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-sm-6">
                                          <div class="row">
                                              <div class="col-sm-12" *ngFor="#city of cities">
                                                  <div class="row subInfo">
                                                      <div class="col-sm-8 invoiceList"><span>{{city.name}}</span></div>
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
        </div><!-- END CONTENT -->
        <div *ngIf="emps.accessrole != '0' || emps.accessrole != '1' || emps.accessrole != '6' || emps.accessrole != '601'">
            <div class="center"><span style="font-size: 72px; font-weight: 700; color: #c1c1c1;"><center>404</center> PAGE NOT FOUND</span><br><hr class="hr1"></div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddCityComponent implements OnInit {
API = 'http://202.162.207.164:3000';
cities: City[];
emps: any[] = [];
  ngOnInit() {
      this.getAllCity();
      this.getAcountEmp();
  }
  constructor(private http: Http) {}
  // Get all City from the API
      getAllCity() {
          this.http.get(`${this.API}/city/listcity`)
              .map(res => res.json())
              .subscribe(cities => {
                  this.cities = cities
              })
      }
  addCity(cityname) {

      var body = `name=${cityname}`;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http
          .post(`${this.API}/city/addcity`,
              body, {
                  headers: headers
              })
          .subscribe(data => {
              alert('Add City Success');
              this.getAllCity();
          }, error => {
              console.log(JSON.stringify(error.json()));
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
