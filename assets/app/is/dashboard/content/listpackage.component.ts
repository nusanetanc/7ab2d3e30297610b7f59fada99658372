import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Package } from './package';

@Component({
    selector: 'form-subs',
    template: `
      <span>{{packages.level}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentListPackageComponent implements OnInit {
//@Input() idsubs: string;
API = 'http://202.162.207.164:3000';
packages: any[] = [];
  ngOnInit() {
      this.getSubs();
  }
  constructor(private http: Http) {}
  // Get all Subs from the API
      getSubs() {
          this.http.get(`${this.API}/package/cluster/B`)
              .map(res => res.json())
              .subscribe(packages => {
                  this.packages = packages
              })
      }
}
