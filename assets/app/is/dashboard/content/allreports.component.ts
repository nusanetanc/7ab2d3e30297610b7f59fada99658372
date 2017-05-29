import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import {ContentSubsNameComponent} from './subsname.component';

@Component({
    selector: 'form-allreports',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Reports
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <div class="dropdown right">
                      <button class="buttonDrop buttonSort">REPORT &nbsp; <span href="" class="glyphicon glyphicon-chevron-down"></span></button>
                      <div class="dropdown-content">
                        <a (click)="onItemClicked0(open)">OPEN</a>
                        <a (click)="onItemClicked2(done)">DONE</a>
                      </div>
                    </div>
                </div>
            </div>
            <div class="row" *ngIf="clickedItem.name == 'regOpen'">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>OPEN</strong></div>
                    </div>
                    <div class="row subInfo fontWeight300" *ngFor="#opencomplaint of opencomplaints">
                        <a class="grey333" [routerLink]="['ReplyReport', {id: opencomplaint.complaintId}]">
                            <div class="col-sm-4 invoiceId"><span>{{stringAsDate(opencomplaint.dateopen) | date}}</span></div>
                            <div class="col-sm-3 invoiceList"><form-subs [idsubs]=opencomplaint.sub></form-subs></div>
                            <div class="col-sm-4 invoiceList"><span>{{opencomplaint.subcategory}}</span></div>
                            <div class="col-sm-1 invoiceList"><span class="red">{{opencomplaint.status}}</span></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row" *ngIf="clickedItem.name == 'regDone'">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>DONE</strong></div>
                    </div>
                    <div class="row subInfo fontWeight300" *ngFor="#closecomplaint of closecomplaints">
                        <a class="grey333" [routerLink]="['ReplyReport', {id: closecomplaint.complaintId}]">
                          <div class="col-sm-4 invoiceId"><span>{{stringAsDate(closecomplaint.dateopen) | date}}</span></div>
                          <div class="col-sm-3 invoiceList"><form-subs [idsubs]=closecomplaint.sub></form-subs></div>
                          <div class="col-sm-4 invoiceList"><span>{{closecomplaint.subcategory}}</span></div>
                          <div class="col-sm-1 invoiceList"><span class="red">{{closecomplaint.status}}</span></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- Page content -->
    `,
    directives: [ContentSubsNameComponent, ROUTER_DIRECTIVES],
})
export class ContentAllReportsComponent {

    public clickedItem = {name: "regOpen"};

    onItemClicked0(open) {
        this.clickedItem = {name: "regOpen"};
    }

    onItemClicked1(solved) {
        this.clickedItem = {name: "regSolved"};
    }

    onItemClicked2(done) {
        this.clickedItem = {name: "regDone"};
    }

    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    complaints: any[] = [];

    constructor(private http: Http) {}

    ngOnInit() {
        this.getAllReportOpen();
        this.getAllReportClose();
    }

    stringAsDate(dateStr: string) {
        return new Date(dateStr);
    }

    // Get all users from the API
    getAllReportOpen() {
        this.http.get(`${this.API}/complaint/listcomplaint/open`)
            .map(res => res.json())
            .subscribe(opencomplaints => {
                this.opencomplaints = opencomplaints
            })
    }
    // Get all users from the API
    getAllReportClose() {
        this.http.get(`${this.API}/complaint/listcomplaint/close`)
            .map(res => res.json())
            .subscribe(closecomplaints => {
                this.closecomplaints = closecomplaints
            })
    }
}
