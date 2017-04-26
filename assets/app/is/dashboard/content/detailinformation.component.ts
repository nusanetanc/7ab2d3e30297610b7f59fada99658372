import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";
@Component({
    selector: 'form-detailinformation',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Information
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                      <a [routerLink]="['Information']" class="btn btn-default buttonBack" type="button">
                          BACK
                      </a>
                </div>
            </div>
            <div class="row subInfo roboto colorInfoDetail">
                <div class="col-sm-12">
                  <div class="row">
                      <div class="col-sm-10 invoiceId grey333"><span><b>{{informations.subject}}</b></span></div>
                  </div>
                  <div class="row">
                      <div class="col-sm-12 invoiceId grey333"><span>Posted <b>{{informations.date}}</b> by <b>{{informations.nameusercretae}}</b> - {{informations.jabusercretae}}</span></div>
                  </div>
                  <div class="row">
                      <div class="col-sm-11 infoDetail">
                          <span>{{informations.desc}}</span>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDetailInformationComponent {
    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    informations: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    ngOnInit() {
        this.getAllInformation();
    }

    // Get all users from the API
    getAllInformation() {
        this.http.get(`${this.API}/information/information/${this._routeParams.get('id')}`)
            .map(res => res.json())
            .subscribe(informations => {
                this.informations = informations
            })
    }
}
