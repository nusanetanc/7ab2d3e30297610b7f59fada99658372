import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { City } from './cities';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
        <div id="page-content-wrapper">
            <div class="content-header">
                <h3 id="home" class="fontWeight300">
                    <a [routerLink]="['AllEmployee']" id="menu-toggle" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
                                                <select #empaccess id="empaccess">
                                                  <option disabled="true" value="0">-- Select Acces Role --</option>
                                                  <option *ngFor="#job of jobs">{{ job.sublevel }} - {{ job.name }}</option>
                                                </select>
                                                <br/>
                                            </form>
                                            <button type="submit" (click)="addEmp(empid.value, empname.value, empemail.value, empphone.value, empdepartement.value, emptitlejob.value, empaccess.value)" class="btn btn-default buttonOrange">
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
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddEmpComponent implements OnInit {

        // Link to our api, pointing to localhost
        API = 'http://202.162.207.164:3000';

        // Declare empty list of people
        emps: any[] = [];

        constructor(private http: Http) {}

        // Angular 2 Life Cycle event when component has been initialized
        ngOnInit() {

            this.getAllEmployee();
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

        addEmp(empid, empname, empemail, empphone, empdepartement, emptitlejob, empaccess) {
            var body = `accessrole=${empaccess}&titlejob=${emptitlejob}&departement=${empdepartement}&email=${empemail}&idemployee=${empid}&name=${empname}&empaccess=${empaccess}`;
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
                console.log(JSON.stringify(error.json()));
            });
        }
}
