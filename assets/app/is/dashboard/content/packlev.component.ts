import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Package } from './package';
declare let kendo;

@Component({
    selector: 'form-packlev',
    template: `
      <span>Level {{packages.level}}({{packages.detail}}) - ({{packages.type}} - Rp. {{packages.price | number:'2.2-4'}})</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentPackLevComponent implements OnInit {
@Input() packid: string;
API = 'http://202.162.207.164:3000';
packages: any[] = [];
  ngOnInit() {
      this.getPackages();
  }
  constructor(private http: Http) {}
  // Get all Subs from the API
      getPackages() {
          this.http.get(`${this.API}/package/package/${this.packid}`)
              .map(res => res.json())
              .subscribe(packages => {
                  this.packages = packages
              })
      }
}
