import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Employee } from './employee';

@Component({
    selector: 'form-emp',
    template: `
      <span>{{emps.name}} - {{emps.idemployee}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentEmpDetailComponent implements OnInit {
@Input() idemps: string;
API = 'http://202.162.207.164:3000';
emps: any[] = [];
  ngOnInit() {
      this.getEmps();
  }
  constructor(private http: Http) {}
  // Get all Subs from the API
      getEmps() {
          this.http.get(`${this.API}/employee/emp/${this.idemps}`)
              .map(res => res.json())
              .subscribe(emps => {
                  this.emps = emps
              })
      }
}
