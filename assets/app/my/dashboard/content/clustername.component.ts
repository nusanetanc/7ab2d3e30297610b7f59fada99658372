import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Cluster } from './cluster';

@Component({
    selector: 'form-clusters',
    template: `
      <span>{{clusters.name}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentClustersNameComponent implements OnInit {
@Input() idto: string;
API = 'http://202.162.207.164:3000';
clusters: any[] = [];
  ngOnInit() {
      this.getClusters();
  }
  constructor(private http: Http) {}
  // Get all Properties from the API
      getClusters() {
          this.http.get(`${this.API}/cluster/cluster/${this.idto}`)
              .map(res => res.json())
              .subscribe(clusters => {
                  this.clusters = clusters
              })
      }
}
