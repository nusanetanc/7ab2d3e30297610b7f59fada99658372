import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';

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
                      <a href="information.html" class="btn btn-default buttonBack" type="button">
                          BACK
                      </a>
                </div>
            </div>
            <div class="row subInfo roboto colorInfoDetail">
                <div class="col-sm-12">
                  <div class="row">
                      <div class="col-sm-10 invoiceId grey333"><span><b>{{information.subject}}</b></span></div>
                      <div class="col-sm-2 invoiceList"><span class="grey333"> Status : <span style="color: red;">{{information.status}}</span></span></div>
                  </div>
                  <div class="row">
                      <div class="col-sm-12 invoiceId grey333"><span>Posted <b>{{information.date}}</b> by <b>{{information.usercreat}}</b></span></div>
                  </div>
                  <div class="row">
                      <div class="col-sm-11 infoDetail">
                          <span>{{information.desc}}</span>
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

    constructor(private http: Http) {}

    ngOnInit() {
        this.getAllInformation();
    }

    // Get all users from the API
    getAllInformation() {
        this.http.get(`${this.API}/information/information/:id`)
            .map(res => res.json())
            .subscribe(informations => {
                this.informations = informations
            })
    }
}
