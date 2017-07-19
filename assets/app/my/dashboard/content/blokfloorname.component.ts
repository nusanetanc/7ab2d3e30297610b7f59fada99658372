import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Blokfloor } from './blokfloor';

@Component({
    selector: 'form-blokfloors',
    template: `
      <span>{{blokfloors.name}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentBlokfloorsNameComponent implements OnInit {
@Input() idto: string;
API = 'http://202.162.207.164:3000';
blokfloors: any[] = [];
  ngOnInit() {
      this.getBlokfloors();
  }
  constructor(private http: Http) {}
  // Get all Properties from the API
      getBlokfloors() {
          this.http.get(`${this.API}/blokfloor/blokfloor/${this.idto}`)
              .map(res => res.json())
              .subscribe(blokfloors => {
                  this.blokfloors = blokfloors
              })
      }
}
