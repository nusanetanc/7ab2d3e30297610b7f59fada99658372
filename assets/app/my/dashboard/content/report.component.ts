import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
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
                <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Feedback History
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a *ngIf="!opencomplaints" [routerLink]="['Newreport']" class="btn btn-default buttonOrange">
                        NEW REPORT
                    </a>
                    <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <div class="dropdown right">
                        <a class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            DATE
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#complaint of complaints">
                <a [routerLink]="['Detailreport', {id: complaint.complaintId}]">
                    <div class="row subInfo">
                        <div class="col-sm-4 invoiceId"><span>{{ stringAsDate(complaint.dateopen) | date }}</span></div>
                        <div class="col-sm-6 invoiceList"><span>{{ complaint.subcategory }}</span></div>
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
export class ContentReportComponent implements OnInit{
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

    stringAsDate(dateStr: string) {
        return new Date(dateStr);
    }

  complaints: any[] = [];
  subs: any[] = [];
  opencomplaints: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllComplaint();
    this.getAcountSub();
    this.getComplaintOpen();
  }

getAllComplaint() {
  this.http.get(`${this.API}/subscribe/listcomplaint`)
    .map(res => res.json())
    .subscribe(complaints => {
      this.complaints = complaints
    })
}

getComplaintOpen() {
  this.http.get(`${this.API}/subscribe/complaint/open`)
    .map(res => res.json())
    .subscribe(opencomplaints => {
      this.opencomplaints = opencomplaints
    })
}

    getAcountSub() {
        this.http.get(`${this.API}/subscribe/detailsub`)
            .map(res => res.json())
            .subscribe(subs => {
                this.subs = subs
            })
    }
}
