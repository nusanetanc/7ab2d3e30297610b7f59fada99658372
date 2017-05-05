import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES } from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './subs';

@Component({
    selector: 'form-allsubs',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
      <div class="content-header">
          <h3 id="home" class="fontWeight300">
              <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
              </a>
              &nbsp; Subscribers
          </h3>

      </div>

      <div class="page-content inset" data-spy="scroll" data-target="#spy">
          <div class="row marginB20 marginR0">
              <div class="col-sm-12">
                  <a [routerLink]="['AddSubs']" class="btn btn-default buttonOrange">
                      NEW SUBSCRIBER
                  </a>
                  <a (click)="sortRev()" class="glyphicon glyphicon-chevron-down sort-down"></a>
                  <button (click)="sortByName()" class="btn btn-default dropdown-toggle buttonSort right" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    NAME
                  </button>     
              </div>
          </div>
          <div class="row">
              <div class="col-sm-12" *ngFor="#sub of subs">
              <a [routerLink]="['Subscribe', {id: sub._id}]">
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
  </div><!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllSubsComponent {

    // Sort By
    sortByName(){
        this.subs.sort( function(name1, name2) {
            if ( name1.name < name2.name ){
                return -1;
            }else if( name1.name > name2.name ){
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
