import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Information } from './informations';

@Component({
    selector: 'form-allinformations',
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
                  <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                  <div class="dropdown right">
                      <a class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="background-color: #E2E2E2; border: none; border-radius: 0px; color: #676767; padding: 12.5px 40px 12.5px 40px; text-decoration: none;">
                          DATE
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li><a href="#">NAME</a></li>
                          <li><a href="#">ID</a></li>
                      </ul>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#information of informations">
                  <div class="row subInfo">
                      <div class="col-sm-2 invoiceId" style="padding: 20px 0px 20px 35px;"><span>{{ information.date }}</span></div>
                      <div class="col-sm-8 invoiceList" style="padding: 20px 0px 20px 0px;"><span>{{ information.subject }}</span></div>
                      <div class="col-sm-2 invoiceList" style="padding: 20px 0px 20px 0px;"><span>{{ information.status }}</span></div>
                  </div>
                </div>
            </div>
        </div>
    </div><!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentInformationComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

  informations: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllInformation();
  }

// Get all users from the API
getAllInformation() {
  this.http.get(`${this.API}/information/listinformation`)
    .map(res => res.json())
    .subscribe(informations => {
      this.informations = informations
    })
}
}
