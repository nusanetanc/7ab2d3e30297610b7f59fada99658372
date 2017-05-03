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
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Employee
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['AddEmp']" class="btn btn-default buttonOrange">
                        ADD NEW EMPLOYEE
                    </a>
                    <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <div class="dropdown right">
                      <button class="buttonDrop buttonSort">SORT BY &nbsp; <span href="" class="glyphicon glyphicon-chevron-down"></span></button>
                      <div class="dropdown-content">
                        <a (click)="sortByName()">NAME</a>
                        <a (click)="sortByDep()">DEPARMENT</a>
                        <a (click)="sortByTit()">TITLE JOB</a>
                      </div>
                    </div>
                </div>
            </div>
            <div class="row">
              <div class="col-sm-12" *ngFor="#emp of emps">
                <a [routerLink]="['ProfileEngineer', {id: emp._id}]">
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

    // Sort By
    sortByName(){
        this.emps.sort( function(name1, name2) {
            if ( name1.name < name2.name ){
                return -1;
            }else if( name1.name > name2.name ){
                return 1;
            }else{
                return 0;
            }
        });
    }

    sortByDep(){
        this.emps.sort( function(dep1, dep2) {
            if ( dep1.departement < dep2.departement ){
                return -1;
            }else if( dep1.departement > dep2.departement ){
                return 1;
            }else{
                return 0;
            }
        });
    }

    sortByTit(){
        this.emps.sort( function(tit1, tit2) {
            if ( tit1.titlejob < tit2.titlejob){
                return -1;
            }else if( tit1.titlejob > tit2.titlejob ){
                return 1;
            }else{
                return 0;
            }
        });
    }

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
}
