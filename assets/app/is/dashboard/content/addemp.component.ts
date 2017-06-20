import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
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
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Add Employee Groovy
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
                                        <form>
                                            <input #empid type="text" class="form-control inputForm" id="empid" placeholder="Employee ID">
                                            <input #empname type="text" class="form-control inputForm" id="empname" placeholder="Employe Name">
                                            <input #empemail type="text" class="form-control inputForm" id="empemail" placeholder="Employee Email">
                                            <input #empphone type="text" class="form-control inputForm" id="empphone" placeholder="Employee Phone">
                                            <select #empdepartement class="form-control inputForm" id="empdepartement">
                                              <option disabled="true" value="0">-- Select Departement --</option>
                                              <option *ngFor="#dep of deps">{{ dep.name }}</option>
                                            </select>
                                            <br/>
                                            <select #emptitlejob id="emptitlejob">
                                              <option disabled="true" value="0">-- Select Title Job --</option>
                                              <option *ngFor="#job of jobs">{{ job.name }}</option>
                                            </select>
                                            <br/><br/>
                                            <select #empcity id="empcity">
                                              <option disabled="true" selected="true">-- Select City Job --</option>
                                              <option>Jakarta</option>
                                              <option>Bandung</option>
                                            </select>
                                            <br/><br/>
                                            <select #empaccess id="empaccess">
                                              <option>-- Select Acces Role --</option>
                                              <option value="0">Admin Web</option>
                                              <option value="1">Direktur</option>
                                              <option value="2">Sales Manager</option>
                                              <option value="201">Sales Spv</option>
                                              <option value="202">Sales</option>
                                              <option value="3">Teknis Spv</option>
                                              <option value="301">Field Engineer</option>
                                              <option value="4">Network Spv</option>
                                              <option value="401">Network Staff</option>
                                              <option value="402">System Administator</option>
                                              <option value="5">Finnace Controler</option>
                                              <option value="501">Billing</option>
                                              <option value="502">Acounting - Tax</option>
                                              <option value="6">CRO Spv</option>
                                              <option value="601">CRO Staff</option>
                                              <option value="7">HR & GA Spv</option>
                                              <option value="701">HR</option>
                                              <option value="702">GA</option>
                                              <option value="8">Helpdesk Spv</option>
                                              <option value="801">Helpdesk Staff</option>
                                            </select>
                                            <br/>
                                        </form>
                                        <div class="g-recaptcha" data-sitekey="6LdqYiMUAAAAAG24p30ejQSqeWdvTpD0DK4oj5wv"></div>
                                        <button type="submit" (click)="addEmp(empid.value, empname.value, empemail.value, empphone.value, empdepartement.value, emptitlejob.value, empcity.value, empaccess.value)" class="btn btn-default buttonOrange">
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

        // Link to our api, pointing to localhost
        API = 'http://202.162.207.164:3000';

        // Declare empty list of people
        emps: any[] = [];
        accountemps: any[] = [];

        constructor(private http: Http) {}

        // Angular 2 Life Cycle event when component has been initialized
        ngOnInit() {

            this.getAllEmployee();
            this.getAcountEmp();
        }

        // Get all users from the API
        getAllEmployee() {
            this.http.get(`${this.API}/employee/listemp`)
                .map(res => res.json())
                .subscribe(emps => {
                    this.emps = emps
                })
        }

        public deps = [
            {name: "Sales", level: "2"},
            {name: "Technical", level: "3"},
            {name: "Network", level: "4"},
            {name: "Finnace", level: "5"},
            {name: "CRO", level: "6"},
            {name: "HR & GA", level: "7"},
            {name: "Helpdesk", level: "8"},
        ];

        public jobs = [
            {name: "Sales Manager", level: "2", sublevel: "2"},
            {name: "Sales Supervisior", level:"2", sublevel: "201"},
            {name: "Sales", level: "2", sublevel:"202"},
            {name: "Technical Supervisior", level: "3", sublevel: "3"},
            {name: "Field Enginner", level: "301", sublevel: "301"},
            {name: "Network Supervisior", level: "4", sublevel: "4"},
            {name: "Network Enginner", level: "4", sublevel: "401"},
            {name: "Finnace Controller", level: "5", sublevel: "5"},
            {name: "Billing", level: "5", sublevel: "501"},
            {name: "Pajak", level: "5", sublevel: "502"},
            {name: "CRO Manager", level: "6", sublevel: "6"},
            {name: "CRO", level: "6", sublevel: "601"},
            {name: "HR & GA Manager", level: "7", sublevel: "7"},
            {name: "HR", level: "7", sublevel: "701"},
            {name: "GA", level: "7", sublevel: "702"},
            {name: "Helpdesk", level: "8", sublevel: "8"},
            {name: "Helpdesk", level: "8", sublevel: "801"},
        ];

        addEmp(empid, empname, empemail, empphone, empdepartement, emptitlejob, empcity, empaccess) {
            var body = `idemployee=${empid}&name=${empname}&email=${empemail}&handphone=${empphone}&departement=${empdepartement}&titlejob=${emptitlejob}&city=${empcity}&accessrole=${empaccess}`;
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
