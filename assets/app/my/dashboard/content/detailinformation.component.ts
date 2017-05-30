import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Information } from './informations';
import { Emp } from './emp';
@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
       <div id="page-content-wrapper">
           <div class="content-header">
               <h3 id="home">
                   <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
                         <div class="col-sm-10 invoiceId grey333"><span><b>{{ informations.subject }}</b></span></div>
                         <div class="col-sm-2 invoiceList"><span class="grey333"> Status : <span style="color: red;">{{ informations.status }}</span></span></div>
                     </div>
                     <div class="row">
                         <div class="col-sm-12 invoiceId grey333"><span>Posted <b>{{stringAsDate(informations.date) | date:'dd MM yy HH:mm:ss'}}</b> by <b>{{ informations.nameusercretae }} ({{ informations.jabusercretae }})</b></span></div>
                     </div>
                     <div class="row">
                         <div class="col-sm-11 infoDetail">
                             <span>{{ informations.desc }}</span>
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

    stringAsDate(dateStr: string) {
        return new Date(dateStr);
    }

informations: any[] = [];
  constructor(private http: Http, private _routeParams: RouteParams) {}

  ngOnInit() {
    this.getDetailInformation();
  }

getDetailInformation() {
  this.http.get(`${this.API}/information/information/${this._routeParams.get('id')}`)
    .map(res => res.json())
    .subscribe(informations => {
      this.informations = informations
    })
}
}
