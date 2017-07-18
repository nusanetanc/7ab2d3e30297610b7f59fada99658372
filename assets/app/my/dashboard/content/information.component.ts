import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Information } from './informations';
import { Sub } from './subs';
import {ContentCitiesNameComponent} from './cityname.component';
import {ContentPropertiesNameComponent} from './propertyname.component';
import {ContentClustersNameComponent} from './clustername.component';
import {ContentBlokfloorsNameComponent} from './blokfloorname.component';

@Component({
    selector: 'form-allinformations',
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
                <a [routerLink]="['Detailinformation', {id: information?._id}]" *ngIf="information?.to == subs.idcity || information?.to == subs.idproperty || information?.to == subs.idcluster || information?.to == subs.idblokfloor || information?.to == subs.idstreetname || information?.to == subs.idhomeid">
                  <div class="row subInfo">
                      <div class="col-sm-4 invoiceId" style="padding: 20px 0px 20px 35px;"><span>{{ stringAsDate(information?.date) | date }}</span></div>
                      <div class="col-sm-4 invoiceList" style="padding: 20px 0px 20px 0px;"><span>{{ information?.subject }}</span></div>
                      <div *ngIf="information?.to == subs.idcity" class="col-sm-4 invoiceList" style="padding: 20px 0px 20px 0px;"><form-cities [idto]=information?.to></form-cities></div>
                      <div *ngIf="information?.to == subs.idproperty" class="col-sm-4 invoiceList" style="padding: 20px 0px 20px 0px;"><form-properties [idto]=information?.to></form-properties></div>
                      <div *ngIf="information?.to == subs.idcluster" class="col-sm-4 invoiceList" style="padding: 20px 0px 20px 0px;"><form-clusters [idto]=information?.to></form-clusters></div>
                      <div *ngIf="information?.to == subs.idblokfloor" class="col-sm-4 invoiceList" style="padding: 20px 0px 20px 0px;"><form-blokfloors [idto]=information?.to></form-blokfloors></div>
                      <div *ngIf="information?.to == subs.idstreetname" class="col-sm-4 invoiceList" style="padding: 20px 0px 20px 0px;"><form-streets [idto]=information?.to></form-streets></div>
                      <div *ngIf="information?.to == subs.idhomeid" class="col-sm-4 invoiceList" style="padding: 20px 0px 20px 0px;"><span>Tes Admin</span></div>
                  </div>
                </a>
                </div>
            </div>
        </div>
    </div><!-- Page content -->
    `,
    directives: [ContentBlokfloorsNameComponent, ContentClustersNameComponent, ContentCitiesNameComponent, ContentPropertiesNameComponent, ROUTER_DIRECTIVES],
})
export class ContentInformationComponent implements OnInit {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

    stringAsDate(dateStr: string) {
        return new Date(dateStr);
    }

  informations: any[] = [];
  subs: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllInformation();
    this.getSubs();
  }

// Get all users from the API
getAllInformation() {
  this.http.get(`${this.API}/subscribe/listinformation`)
    .map(res => res.json())
    .subscribe(informations => {
      this.informations = informations
    })
}
getSubs() {
  this.http.get(`${this.API}/subscribe/detailsub`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
    })
}
}
