import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Billing} from './allbill';


@Component({
    selector: 'form-allbills',
    template: `
    <!-- Page content -->
    <div *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '5' || emps.accessrole == '501' || emps.accessrole == '502'" id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                All Billing
            </h3>
        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a (click)="sortRev()" style="cursor: pointer;" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <button (click)="sortByName()" class="btn btn-default dropdown-toggle buttonSort right" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        NAME
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#sub of subs">
                    <a [routerLink]="['BillSubscribe', {id: sub._id}]">
                        <div class="row subInfo fontWeight300">
                            <div class="col-sm-2 invoiceId"><span>{{ sub.subid }}</span></div>
                            <div class="col-sm-8 invoiceList"><span><a href="account.html" class="grey333">{{ sub.name }}</a></span></div>
                            <div class="col-sm-1 invoiceList"><span class="green">{{ sub.status }}</span></div>
                            <div class="col-sm-1 invoiceList"><span class="red">Not Paid</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div *ngIf="emps.accessrole == '2' || emps.accessrole == '201' || emps.accessrole == '202' || emps.accessrole == '3' || emps.accessrole == '301' || emps.accessrole == '4' || emps.accessrole == '401' || emps.accessrole == '402' || emps.accessrole == '6' || emps.accessrole == '601' || emps.accessrole == '7' || emps.accessrole == '701' || emps.accessrole == '702' || emps.accessrole == '8' || emps.accessrole == '801'">
        <div class="center"><span style="font-size: 72px; font-weight: 700; color: #c1c1c1;"><center>404</center> PAGE NOT FOUND</span><br><hr class="hr1"></div>
    </div>
    <!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllBillsComponent {

    // Sort By
    sortByName(){
        this.subs.sort( function(a, b) {
            if ( a.name < b.name ){
                return -1;
            }else if( a.name > b.name ){
                return 1;
            }else{
                return 0;
            }
        });
    }

    sortRev(){
        this.subs.sort( function(name1, name2) {
            if ( name1.name < name2.name ){
                return 1;
            }else if( name1.name > name2.name ){
                return -1;
            }else{
                return 0;
            }
        });
    }

    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    subs: any[] = [];
    emps: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllSub();
        this.getAcountEmp();
    }

    // Get all users from the API
    getAllSub() {
        this.http.get(`${this.API}/subscribe/listsub`)
            .map(res => res.json())
            .subscribe(subs => {
                this.subs = subs
            })
    }
    getAcountEmp() {
        this.http.get(`${this.API}/subscribe/detailemp`)
            .map(res => res.json())
            .subscribe(emps => {
                this.emps = emps
            }
          )
    }

}
