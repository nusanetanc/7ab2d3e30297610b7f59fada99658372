import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Package } from './package';

@Component({
    selector: 'form-package',
    template: `
      <select [(ngModel)]="selectedPackage.level" (change)="onSelectPackage($event.target.value)" #subpacklev id="subpacklev" name="package" class="inputForm">
          <option value="0" selected="true" disabled="true">-- Select Package --</option>
          <option *ngFor="#package of packages" value="{{ package.level }}">Level {{package.level}} - Monthly - {{package.price | currency:'IDR':true}}</option>
      </select><br/>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentListPackageComponent implements OnInit {
selectedPackage: Package = new Package(0, 'dummy');

onSelectPackage(level) {
    console.log(level)
}
//@Input() idsubs: string;
API = 'http://202.162.207.164:3000';
packages: any[] = [];
  ngOnInit() {
      this.getAllPackageByCluster();
  }
  constructor(private http: Http) {}
  getAllPackageByCluster() {
      this.http.get(`${this.API}/package/cluster/A`)
          .map(res => res.json())
          .subscribe(packages => {
              this.packages = packages
          })
  }
}
