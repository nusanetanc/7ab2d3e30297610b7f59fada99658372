import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Package } from './package';

@Component({
    selector: 'form-package',
    template: `
      <span *ngFor="#package of packages" >{{packages.name}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentListPackageComponent implements OnInit {
//@Input() idsubs: string;
API = 'http://202.162.207.164:3000';
packages: any[] = [];
  ngOnInit() {
      this.getPackages();
  }
  constructor(private http: Http) {}
  // Get all Subs from the API
      getPackages() {
          this.http.get(`${this.API}/package/cluster/B`)
              .map(res => res.json())
              .subscribe(packages => {
                  this.packages = packages
              })
      }
}
