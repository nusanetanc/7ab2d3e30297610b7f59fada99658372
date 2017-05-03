import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Information } from './allinformation';

@Component({
    selector: 'form-allinformations',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Information
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['AddInformation']" class="btn btn-default buttonOrange">
                        NEW INFORMATION
                    </a>
                    <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <div class="dropdown right">
                        <a class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
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
                <a [routerLink]="['DetailInformation', {id: information._id}]">
                    <div class="row subInfo fontWeight300">
                        <div class="col-sm-3 invoiceId"><span><a href="" class="grey333">{{ information.date }}</a></span></div>
                        <div class="col-sm-7 invoiceList"><span><a href="" class="grey333">{{ information.subject }}</a></span></div>
                        <div class="col-sm-2 invoiceList"><span class="red">{{ information.status }}</span></div>
                    </div>
                </a>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllInformationComponent {
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
