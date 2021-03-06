import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
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
                    <a id="menu-toggle" onClick="menuToggle()"  style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                    </a>
                    &nbsp; Coverage Area <b>City</b>
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
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add City</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="formNewReport marginLR20">
                                            <form class="form" [ngFormModel]="myForm">
                                                <input [ngFormControl]="myForm.find('cityname')" #cityname type="text" class="form-control inputForm" id="cityname" placeholder="New City" style="box-shadow:none;">
                                                <br/>
                                                <div class="g-recaptcha" data-sitekey="6LdqYiMUAAAAAG24p30ejQSqeWdvTpD0DK4oj5wv"></div>
                                                <button [disabled]="!myForm.valid" type="submit" (click)="addCity(cityname.value)" class="btn btn-default buttonOrange">
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
export class ContentAddCityComponent implements OnInit {

myForm: ControlGroup;

API = 'http://202.162.207.164:3000';
cities: City[];
emps: any[] = [];
  ngOnInit() {
      this.getAllCity();
      this.getAcountEmp();
      this.myForm = this._fb.group({
        cityname: ['', Validators.required]
      })
  }
  constructor(private _fb:FormBuilder, private http: Http) {}
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
