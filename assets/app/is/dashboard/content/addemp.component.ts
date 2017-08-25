import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { City } from './cities';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
    <div *ngIf="accountemps.accessrole == '0' || accountemps.accessrole == '1' || accountemps.accessrole == '7' || accountemps.accessrole == '702'" id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Add User Groovy
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['AllEmployee']" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add Employee</strong></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="formNewReport marginLR20">
                                        <form [ngFormModel]="myForm">
                                            <input [ngFormControl]="myForm.find('empid')" #empid type="text" class="form-control inputForm" id="empid" placeholder="Employee ID">
                                            <input [ngFormControl]="myForm.find('empname')" #empname type="text" class="form-control inputForm" id="empname" placeholder="Employe Name">
                                            <input [ngFormControl]="myForm.find('empemail')" #empemail type="text" class="form-control inputForm" id="empemail" placeholder="Employee Email">
                                            <input [ngFormControl]="myForm.find('empphone')" #empphone type="text" class="form-control inputForm" id="empphone" placeholder="Employee Phone">
                                            <br/>
                                            <select [ngFormControl]="myForm.find('emptitlejob')" #emptitlejob id="emptitlejob">
                                              <option disabled="true" value="none">-- Select Position Job --</option>
                                              <option *ngFor="#job of jobs" value={{job.sublevel}}><b>{{ job.divisi }}</b> - {{ job.name }}</option>
                                            </select>
                                            <br/><br/>
                                              <select  *ngIf="emptitlejob.value == '202'" [ngFormControl]="myForm.find('empcity')" #empcity id="empcity">
                                                <option disabled="true" selected="true" value="0">-- Select City Job --</option>
                                                <option *ngFor="#city of cities" value={{city.name}}>{{ city.name }}</option>
                                              </select>
                                            <br/>
                                            <select  *ngIf="emptitlejob.value ==! '202'" [ngFormControl]="myForm.find('empcity')" #empcity id="empcity" disabled="true">
                                              <option disabled="true" selected="true" value="0">-- Select City Job --</option>
                                            </select>
                                          <br/>
                                        </form>
                                        <div class="g-recaptcha" data-sitekey="6LdqYiMUAAAAAG24p30ejQSqeWdvTpD0DK4oj5wv"></div>
                                        <button [disabled]="!myForm.valid" type="submit" (click)="addEmp1(empid.value, empname.value, empemail.value, empphone.value, emptitlejob.value, empcity.value)" class="btn btn-default buttonOrange">
                                            CREATE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    </div><!-- END CONTENT -->
    <div *ngIf="accountemps.accessrole == '2' || accountemps.accessrole == '201' || accountemps.accessrole == '202' || accountemps.accessrole == '3' || accountemps.accessrole == '301' || accountemps.accessrole == '4' || accountemps.accessrole == '401' || accountemps.accessrole == '402' || accountemps.accessrole == '6' || accountemps.accessrole == '601' || accountemps.accessrole == '701' || accountemps.accessrole == '5' || emps.accessrole == '501' || emps.accessrole == '502' || accountemps.accessrole == '8' || accountemps.accessrole == '801'">
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
export class ContentAddEmpComponent implements OnInit {

myForm: ControlGroup;

        // Link to our api, pointing to localhost
        API = 'http://202.162.207.164:3000';

        // Declare empty list of people
        emps: any[] = [];
        cities: any[] = [];
        accountemps: any[] = [];

        constructor(private _fb:FormBuilder, private http: Http) {}

        // Angular 2 Life Cycle event when component has been initialized
        ngOnInit() {

            this.getAllEmployee();
            this.getAcountEmp();
            this.getAllCity();
            this.myForm = this._fb.group({
              empid: ['', Validators.required],
              empname: ['', Validators.required],
              empemail: ['', Validators.required],
              empphone: ['', Validators.required],
              emptitlejob: ['none', Validators.required],
              empcity: ['0', Validators.required]
            })
        }

        // Get all users from the API
        getAllEmployee() {
            this.http.get(`${this.API}/subscribe/listemp`)
                .map(res => res.json())
                .subscribe(emps => {
                    this.emps = emps
                })
        }
        getAllCity() {
            this.http.get(`${this.API}/city/listcity`)
                .map(res => res.json())
                .subscribe(cities => {
                    this.cities = cities
                })
        }
        public jobs = [
            {name: "Admin", level: "0", sublevel: "0", divisi:"ANC"},
            {name: "Direktur", level: "1", sublevel: "1", divisi:"Management"},
            {name: "Sales Manager", level: "2", sublevel: "2", divisi:"Sales"},
            {name: "Sales Supervisior", level:"2", sublevel: "201", divisi:"Sales"},
            {name: "Sales", level: "2", sublevel:"202", divisi:"Sales"},
            {name: "Technical Supervisior", level: "3", sublevel: "3", divisi:"Technical"},
            {name: "Field Enginner", level: "301", sublevel: "301", divisi:"Technical"},
            {name: "Network Supervisior", level: "4", sublevel: "4", divisi:"NOC"},
            {name: "Network Enginner", level: "4", sublevel: "401", divisi:"NOC"},
            {name: "Finnace Controller", level: "5", sublevel: "5", divisi:"Billing"},
            {name: "Billing", level: "5", sublevel: "501", divisi:"Billing"},
            {name: "Pajak", level: "5", sublevel: "502", divisi:"Billing"},
            {name: "CRO Manager", level: "6", sublevel: "6", divisi:"CRO"},
            {name: "CRO", level: "6", sublevel: "601", divisi:"CRO"},
            {name: "HR & GA Manager", level: "7", sublevel: "7", divisi:"HR & GA"},
            {name: "HR", level: "7", sublevel: "701", divisi:"HR & GA"},
            {name: "GA", level: "7", sublevel: "702", divisi:"HR & GA"},
            {name: "Helpdesk Spv", level: "8", sublevel: "8", divisi:"Helpdesk"},
            {name: "Helpdesk", level: "8", sublevel: "801", divisi:"Helpdesk"}
        ];
        addEmp(empid, empname, empemail, empphone, emptitlejob, empcity) {
            var body = `idemployee=${empid}&name=${empname}&email=${empemail}&handphone=${empphone}&titlejob=${emptitlejob}&city=${empcity}`;
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http
                .post(`${this.API}/employee/addemp`,
                    body, {
                    headers: headers
                })
                .subscribe(data => {
                    alert('Add Employee Success');
                    this.getAllEmployee();
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
                .subscribe(accountemps => {
                    this.accountemps = accountemps
                },
                error => {
                  window.location.href = `/login`;
                }
              )
        }
}
