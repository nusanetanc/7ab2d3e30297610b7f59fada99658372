import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { City } from './cities';

@Component({
    selector: 'form-cities',
    template: `
      <span>{{cities.name}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCitiesNameComponent implements OnInit {
@Input() idto: string;
API = 'http://202.162.207.164:3000';
cities: any[] = [];
  ngOnInit() {
      this.getCities();
  }
  constructor(private http: Http) {}
  // Get all Cities from the API
      getCities() {
          this.http.get(`${this.API}/city/city/${this.idto}`)
              .map(res => res.json())
              .subscribe(cities => {
                  this.cities = cities
              })
      }
}
