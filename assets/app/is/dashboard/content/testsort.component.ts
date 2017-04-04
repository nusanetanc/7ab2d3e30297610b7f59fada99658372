import {Component} from 'angular2/core';
import {Pipe} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-test',
    template: `
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                Test
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

/*@Pipe({
    name: "sortBy",
})*/

export class ContentTestComponent {

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

    /*names = [
        {"id": 1,"first_name": "Jason","last_name": "Martin"},
        {"id": 2,"first_name": "Douglas","last_name": "Holmes"},
        {"id": 3,"first_name": "Randy","last_name": "Woods"},
        {"id": 4,"first_name": "Thomas","last_name": "Castillo"},
        {"id": 5,"first_name": "Ryan","last_name": "Butler"},
        {"id": 6,"first_name": "Jose","last_name": "Turner"},
        {"id": 7,"first_name": "Carl","last_name": "Taylor"},
        {"id": 8,"first_name": "Brandon","last_name": "Mendoza"},
        {"id": 9,"first_name": "Willie","last_name": "Ross"},
        {"id": 10,"first_name": "Howard","last_name": "Montgomery"},
        {"id": 11,"first_name": "Ahmad","last_name": "Rifki"},
    ]

    ngOnInit(){
        this.names.sort( function(name1, name2) {
            if ( name1.first_name < name2.first_name ){
                return -1;
            }else if( name1.first_name > name2.first_name ){
                return 1;
            }else{
                return 0;
            }
        });
    }

    byId(){
        this.names.sort( function(id1, id2) {
            if ( id1.id < id2.id ){
                return -1;
            }else if( id1.id > id2.id ){
                return 1;
            }else{
                return 0;
            }
        });
    }

    byName(){
        this.names.sort( function(a, b) {
            if ( a.first_name < b.first_name ){
                return -1;
            }else if( a.first_name > b.first_name ){
                return 1;
            }else{
                return 0;
            }
        });
    }*/

    /*transform(array: Array<string>, args: string): Array<string> {
        array.sort((a: any, b: any) => {
            if ( a[args] < b[args] ){
                return -1;
            }else if( a[args] > b[args] ){
                return 1;
            }else{
                return 0;
            }
        });
        return array;
    }*/

}
