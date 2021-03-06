import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Employee } from './employee';

@Component({
    selector: 'form-emps',
    template: `
      <span>{{emps.name}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentEmpsNameComponent implements OnInit {
@Input() idemps: string;
API = 'http://202.162.207.164:3000';
emps: any[] = [];
  ngOnInit() {
      this.getEmps();
  }
  constructor(private http: Http) {}
  // Get all Subs from the API
      getEmps() {
          this.http.get(`${this.API}/subscribe/emp/${this.idemps}`)
              .map(res => res.json())
              .subscribe(emps => {
                  this.emps = emps
              })
      }
}
