import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from 'angular2/http';
import {Billing} from './allbill';


@Component({
    selector: 'form-allbills',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                All Billing
            </h3>
        </div>
    
        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <div class="dropdown right">
                        <button (click)="sortByName()" class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            NAME
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#">NAME</a></li>
                            <li><a href="#">ID</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#sub of subs">
                    <a [routerLink]="['BillSubscribe', {id: sub._id}]">
                        <div class="row subInfo">
                            <div class="col-sm-2 invoiceId"><span>{{ sub.subid }}</span></div>
                            <div class="col-sm-8 invoiceList"><span><a href="account.html" class="grey333">{{ sub.name }}</a></span></div>
                            <div class="col-sm-1 invoiceList"><span class="green">{{ sub.status }}</span></div>
                            <div class="col-sm-1 invoiceList"><span class="red">Not Paid</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div><!-- END CONTENT -->
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

    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    subs: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllSub();
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
