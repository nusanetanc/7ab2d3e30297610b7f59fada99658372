import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from 'angular2/http';
import {Employee} from './employee';


@Component({
    selector: 'form-allempoloyee',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Employee
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a href="" class="btn btn-default buttonOrange">
                        ADD NEW EMPLOYEE
                    </a>
                    <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <div class="dropdown right">
                        <a class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            NAME
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#">NAME</a></li>
                            <li><a href="#">ID</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
              <div class="col-sm-12" *ngFor="#emp of emps">
                <a [routerLink]="['ProfileEmployee', {id: emp._id}]">
                  <div class="row subInfo fontWeight300">
                      <div class="col-sm-2 invoiceId"><span>{{emp.idemployee}}</span></div>
                      <div class="col-sm-4 invoiceList"><span>{{emp.name}}</span></div>
                      <div class="col-sm-3 invoiceList"><span>{{emp.departement}}</span></div>
                      <div class="col-sm-3 invoiceList"><span>{{emp.titlejob}}</span></div>
                  </div>
                </a>
              </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllEmployeeComponent {
  // Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  departement = 'technical';

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
}
