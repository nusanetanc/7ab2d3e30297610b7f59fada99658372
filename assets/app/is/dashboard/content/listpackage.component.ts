import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Package } from './package';

@Component({
    selector: 'form-package',
    template: `
    <li *ngFor="#package of packages">{{package.level}}</li>
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
      this.getAllPackages();
  }
  constructor(private http: Http) {}
  // Get all Packages from the API
      getAllPackages() {
          this.http.get(`${this.API}/package/cluster/B`)
              .map(res => res.json())
              .subscribe(packages => {
                  this.subs = packages
              })
      }
}
