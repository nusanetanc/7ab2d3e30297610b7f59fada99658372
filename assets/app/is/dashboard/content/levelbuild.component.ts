import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Cluster } from './cluster';
import {ContentListPackageComponent} from "./listpackage.component";

@Component({
    selector: 'form-levelbuild',
    template: `
    {{clusters.level}}
      <form-package [levelbuild]=clusters.level></form-package>
    `,
    directives: [ContentListPackageComponent,
                  ROUTER_DIRECTIVES],
})
export class ContentLevelBuildComponent {
@Input() idcluster: string;
API = 'http://202.162.207.164:3000';
clusters: any[] = [];
  constructor(private http: Http) {}
  // Get all Subs from the API
      getCluster() {
          this.http.get(`${this.API}/cluster/cluster/${this.idcluster}`)
              .map(res => res.json())
              .subscribe(clusters => {
                  this.clusters = clusters
              })
      }
}
