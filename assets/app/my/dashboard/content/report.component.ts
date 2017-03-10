import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Complaint } from './complaints';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Reports History
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['Newreport']" class="btn btn-default buttonOrange">
                        NEW REPORT
                    </a>
                    <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <div class="dropdown right">
                        <a class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            DATE
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#">NAME</a></li>
                            <li><a href="#">ID</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#complaint of complaints">
                <a [routerLink]="['Detailreport', {id: complaint._id}]">
                    <div class="row subInfo">
                        <div class="col-sm-2 invoiceId"><span><a class="grey333">11 Feb 2017</a></span></div>
                        <div class="col-sm-8 invoiceList"><span><a class="grey333">{{ complaint.subject}} </a></span></div>
                        <div class="col-sm-2 invoiceList"><span class="red">{{ complaint.status }}</span></div>
                    </div>
                </a>
                </div>
              </div>
        </div>
    </div><!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentReportComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Session_ID = '58b3cdac45912d052e2c85a5';

  complaints: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllComplaint();
  }

getAllComplaint() {
  this.http.get(`${this.API}/complaint/listcomplaint`)
    .map(res => res.json())
    .subscribe(complaints => {
      this.complaints = complaints
    })
}
}
