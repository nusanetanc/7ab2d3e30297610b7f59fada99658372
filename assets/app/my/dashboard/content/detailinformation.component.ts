import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Information } from './informations';
import { Emp } from './emps';
@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
       <div id="page-content-wrapper">
           <div class="content-header">
               <h3 id="home">
                   <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
                         <div class="col-sm-12 invoiceId grey333"><span>Posted <b>11 Feb 2017 - 11.00 PM</b> by <b>{{ emps.name }} ({{ emps.titlejob }})</b></span></div>
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
  Information_ID = '58afac48129a7b7bfcddb735';
  Information_Emp = '589d3dd43b4dc715dcc29106';

informations: any[] = [];
emps: any[] = [];
  constructor(private http: Http) {}

  ngOnInit() {
    this.getDetailInformation();
    this.getUserCreate();
  }

getDetailInformation() {
  this.http.get(`${this.API}/information/information/${this.Information_ID}`)
    .map(res => res.json())
    .subscribe(informations => {
      this.informations = informations
    })
}

getUserCreate() {
  this.http.get(`${this.API}/employee/emp/${this.Information_Emp}`)
    .map(res => res.json())
    .subscribe(emps => {
      this.emps = emps
    })
}

}
