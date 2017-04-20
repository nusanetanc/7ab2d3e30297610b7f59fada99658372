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
                                                  <option disabled="true">-- Select Departement --</option>
                                                </select>
                                                <select #emptitlejob class="form-control inputForm" id="emptitlejob">
                                                  <option disabled="true">-- Select Title Job --</option>
                                                </select>
                                                <select #empdepartement class="form-control inputForm" id="empdepartement">
                                                  <option disabled="true">-- Select Departement --</option>
                                                </select>
                                                <select #empdepartement class="form-control inputForm" id="empdepartement">
                                                  <option disabled="true">-- Select Access Role --</option>
                                                </select>
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
                </div>
        </div><!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddEmpComponent implements OnInit {
}
