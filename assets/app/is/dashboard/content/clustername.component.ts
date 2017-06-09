import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Cluster } from './cluster';

@Component({
    selector: 'form-cluster',
    template: `
      <span>{{clusters.name}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentClusterNameComponent implements OnInit {
@Input() idcluster: string;
API = 'http://202.162.207.164:3000';
clusters: any[] = [];
  ngOnInit() {
      this.getCluster();
  }
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
