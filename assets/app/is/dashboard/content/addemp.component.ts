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
                                                <input #empid type="text" class="form-control inputForm" id="empid" placeholder="Employee IDy">
                                                <input #empname type="text" class="form-control inputForm" id="empname" placeholder="Employe Name">
                                                <input #empemail type="text" class="form-control inputForm" id="empemail" placeholder="Employee Email">
                                                <input #empphone type="text" class="form-control inputForm" id="empphone" placeholder="Employee Phone">
                                                <select #empdepartement class="form-control inputForm" id="empdepartement">
                                                  <option disabled="true" value="0">-- Select Departement --</option>
                                                  <option *ngFor="#dep of deps" value={{ dep.level }}>{{ dep.name }}</option>
                                                </select>
                                                <br/>
                                                <input #empaccess type="text" class="form-control inputForm" id="empaccess" placeholder="Access Role">
                                                <select #emptitlejob class="form-control inputForm" id="emptitlejob">
                                                  <option disabled="true">-- Select Title Job --</option>
                                                  <option *ngFor="#job of jobs">{{ job.name }}</option>
                                                </select>
                                            </form>
                                            <button type="submit" (click)="addCity(cityname.value)" class="btn btn-default buttonOrange">
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
                 {name: "Network Supervisior", level: "4", sublevel: ""},
                 {name: "Network Enginner", level: "4"},
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
}
