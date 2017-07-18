import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Street } from './street';

@Component({
    selector: 'form-streets',
    template: `
      <span>{{streets.name}}</span>
    `,

    directives: [ROUTER_DIRECTIVES],
})
export class ContentStreetsNameComponent implements OnInit {
@Input() idto: string;
API = 'http://202.162.207.164:3000';
streets: any[] = [];
  ngOnInit() {
      this.getStreets();
  }
  constructor(private http: Http) {}
  // Get all Properties from the API
      getStreets() {
          this.http.get(`${this.API}/streetname/streetname/${this.idto}`)
              .map(res => res.json())
              .subscribe(streets => {
                  this.streets = streets
              })
      }
}
