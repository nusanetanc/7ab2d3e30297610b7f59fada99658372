import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './subs';

@Component({
    selector: 'subs',
    template: `
      <span>{{subs.name}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentSubsComponent implements OnInit {
API = 'http://202.162.207.164:3000';
cities: City[];
  ngOnInit() {
      this.getSubs();
  }
  constructor(private http: Http) {}
  // Get all Subs from the API
      getSubs() {
          this.http.get(`${this.API}/subscribe/subs/58b3cdac45912d052e2c85a5`)
              .map(res => res.json())
              .subscribe(subs => {
                  this.subs = subs
              })
      }
}
