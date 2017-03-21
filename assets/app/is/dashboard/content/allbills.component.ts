import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Params} from 'angular2/router';
import { Http } from 'angular2/http';
import {Billing} from './allbill';


@Component({
    selector: 'form-allbills',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Billing
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                <a [routerLink]="['Createinvoice']" class="btn btn-default buttonOrange">
                    CREATE INVOICE
                </a>
                    <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <div class="dropdown right">
                       <a class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                           SUBS-ID
                       </a>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                           <li><a href="#">NAME</a></li>
                           <li><a href="#">ID</a></li>
                       </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#bill of bills">
                <a [routerLink]="['Detailbilling', {id: bill._id}]">
                    <div class="row subInfo">
                        <div class="col-sm-2 invoiceId"><span>{{bill.noinvoice}}</span></div>
                        <div class="col-sm-8 invoiceList"><span>{{bill.sub}}</span></div>
                        <div class="col-sm-1 invoiceList"><span class="green"></span></div>
                        <div class="col-sm-1 invoiceList"><span class="red">Waiting For Payment</span></div>
                    </div>
                </a>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllBillsComponent {
    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    bills: any[] = [];
    subs: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllBill();
        this.getAllSub();
    }

    // Get all users from the API
    getAllBill() {
        this.http.get(`${this.API}/bill/listbill`)
            .map(res => res.json())
            .subscribe(bills => {
                this.bills = bills
            })
    }

    // Get all users from the API
    getAllSub() {
        this.http.get(`${this.API}/subscribe/listsub`)
            .map(res => res.json())
            .subscribe(subs => {
                this.subs = subs
            })
    }
}
