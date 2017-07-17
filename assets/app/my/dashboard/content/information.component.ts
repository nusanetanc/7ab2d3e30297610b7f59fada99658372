import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Information } from './informations';
import { Sub } from './subs';

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
                  <div class="dropdown right">
                    <button href="" class="glyphicon glyphicon-chevron-down sort-down" data-toggle="dropdown"></button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li><a href="">For Your</a></li>
                          <li><a href="">For City</a></li>
                          <li><a href="">For Property</a></li>
                          <li><a href="">For Cluster</a></li>
                          <li><a href="">For All Subscribe</a></li>
                      </ul>
                  </div>
                  <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li><a href="#">HTML</a></li>
                      <li><a href="#">CSS</a></li>
                      <li><a href="#">JavaScript</a></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#information of informations">
                <a [routerLink]="['Detailinformation', {id: information?._id}]" *ngIf="information?.to == subs.idcity || information?.to == subs.idproperty || information?.to == subs.idcluster || information?.to == subs.idblokfloor || information?.to == subs.idstreetname || information?.to == subs.idhomeid">
                  <div class="row subInfo">
                      <div class="col-sm-4 invoiceId" style="padding: 20px 0px 20px 35px;"><span>{{ stringAsDate(information?.date) | date }}</span></div>
                      <div class="col-sm-6 invoiceList" style="padding: 20px 0px 20px 0px;"><span>{{ information?.subject }}</span></div>
                  </div>
                </a>
                </div>
            </div>
        </div>
    </div><!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
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
