import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Report} from './allreports';


@Component({
    selector: 'form-allreports',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
                        <a href="">OPEN</a>
                        <a (click)="onItemClicked1(Area)">SOLVED</a>
                        <a (click)="onItemClicked2(Pack)">DONE</a>
                      </div>
                    </div>
                </div>
            </div>
            <div class="row" *ngIf="clickedItem.name == 'regArea'">
                <div class="col-sm-12">
                    <div class="row subInfo fontWeight300" *ngFor="#complaint of complaints">
                        <a class="grey333" [routerLink]="['ReplyReport', {id: complaint.complaintId}]">
                            <div class="col-sm-3 invoiceId"><span>{{complaint.dateopen}}</span></div>
                            <div class="col-sm-7 invoiceList"><span>{{complaint.subcategory}}</span></div>
                            <div class="col-sm-2 invoiceList"><span class="red">{{complaint.status}}</span></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row" *ngIf="clickedItem.name == 'regPack'">
                <div class="col-sm-12">
                    SOLVED
                    <div class="row subInfo fontWeight300" *ngFor="#complaint of complaints">
                        <a class="grey333" [routerLink]="['ReplyReport', {id: complaint.complaintId}]">
                            <div class="col-sm-3 invoiceId"><span>{{complaint.dateopen}}</span></div>
                            <div class="col-sm-7 invoiceList"><span>{{complaint.subcategory}}</span></div>
                            <div class="col-sm-2 invoiceList"><span class="red">{{complaint.status}}</span></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row" *ngIf="clickedItem.name == 'regInst'">
                <div class="col-sm-12">
                    DONE
                    <div class="row subInfo fontWeight300" *ngFor="#complaint of complaints">
                        <a class="grey333" [routerLink]="['ReplyReport', {id: complaint.complaintId}]">
                            <div class="col-sm-3 invoiceId"><span>{{complaint.dateopen}}</span></div>
                            <div class="col-sm-7 invoiceList"><span>{{complaint.subcategory}}</span></div>
                            <div class="col-sm-2 invoiceList"><span class="red">{{complaint.status}}</span></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllReportsComponent {

    public clickedItem = {name: "regArea"};

    onItemClicked1(Area) {
        this.clickedItem = {name: "regPack"};
    }

    onItemClicked2(Pack) {
        this.clickedItem = {name: "regInst"};
    }

    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    complaints: any[] = [];

    constructor(private http: Http) {}

    ngOnInit() {
        this.getAllReport();
    }

    // Get all users from the API
    getAllReport() {
        this.http.get(`${this.API}/complaint/listcomplaint`)
            .map(res => res.json())
            .subscribe(complaints => {
                this.complaints = complaints
            })
    }
}
