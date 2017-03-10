import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Complaint } from './complaints';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Report
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                      <a [routerLink]="['Reports']" class="btn btn-default buttonBack" type="button">
                          BACK
                      </a>
                </div>
            </div>
            <div class="row subInfo roboto grey8b">
                <div class="col-sm-12">
                  <div class="row">
                      <div class="col-sm-10 invoiceId"><span><b class="grey333">{{ complaints.subject }}</b><br>{{ complaints.category }} - {{ complaints.subcategory }}</span></div>
                      <div class="col-sm-2 invoiceList"><span class="grey333">Status : <span class="red">{{ complaints.status }}s</span></span></div>
                  </div>
                  <div class="row">
                      <div class="col-sm-12 invoiceId"><span>Posted <b class="grey333">11 Feb 2017 - 11.00 PM</b> by <b class="grey333">Jhon Doe</b></span></div>
                  </div>
                  <div class="row">
                      <div class="col-sm-11 infoDetail">
                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt lectus felis, eget placerat erat imperdiet id. Aenean aliquam ac lacus non porttitor. Praesent sodales dui sit amet vestibulum maximus. Vestibulum tristique sem blandit leo consectetur, sodales vestibulum lacus ultricies. Sed gravida ex arcu, blandit suscipit ex semper feugiat. Fusce sed massa ut odio hendrerit semper et et ipsum. Phasellus dapibus congue lorem ac mattis. Fusce eget arcu euismod, pharetra metus pellentesque, tristique arcu. Morbi pretium purus ac mollis fermentum. Morbi maximus sit amet nisl vel finibus. Donec ullamcorper semper eros, eu ullamcorper arcu vulputate non. Sed facilisis, arcu quis dignissim luctus, nisi leo commodo ex, at efficitur mi est sed justo.</span>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDetailReportComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Report_ID = '58c24c1948bfc66fd001dbb8';

complaints: any[] = [];
  constructor(private http: Http) {}

  ngOnInit() {
    this.getDetailReport();
  }

getDetailReport() {
  this.http.get(`${this.API}/complaint/complaint/${this.Report_ID}`)
    .map(res => res.json())
    .subscribe(complaints => {
      this.complaints = complaints
    })
}
}
