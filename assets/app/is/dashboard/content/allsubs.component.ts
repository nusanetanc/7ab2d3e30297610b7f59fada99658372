import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, ActivatedRoute } from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './subs';

@Component({
    selector: 'form-allsubs',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Subscribers
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['AddSubs']" class="btn btn-default buttonOrange">
                        NEW SUBSCRIBER
                    </a>
                    <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <div class="dropdown right">
                        <a class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            NAME
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#">PAID</a></li>
                            <li><a href="#">ID</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#sub of subs">
                    <a [routerLink]="['Subscribe', {id: sub._id}]">
                        <div class="row subInfo">
                            <div class="col-sm-2 invoiceId"><span>{{ sub.subid }}</span></div>
                            <div class="col-sm-8 invoiceList"><span><a class="grey333">{{ sub.name | uppercase }}</a></span></div>
                            <div class="col-sm-1 invoiceList"><span class="green">{{ sub.status }}</span></div>
                            <div class="col-sm-1 invoiceList"><span class="red">Not Paid</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllSubsComponent {

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
