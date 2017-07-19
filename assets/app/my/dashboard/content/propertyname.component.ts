import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Property } from './property';

@Component({
    selector: 'form-properties',
    template: `
      <span>{{properties.name}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentPropertiesNameComponent implements OnInit {
@Input() idto: string;
API = 'http://202.162.207.164:3000';
properties: any[] = [];
  ngOnInit() {
      this.getProperties();
  }
  constructor(private http: Http) {}
  // Get all Properties from the API
      getProperties() {
          this.http.get(`${this.API}/property/property/${this.idto}`)
              .map(res => res.json())
              .subscribe(properties => {
                  this.properties = properties
              })
      }
}
