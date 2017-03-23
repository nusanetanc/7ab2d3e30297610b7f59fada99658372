import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES } from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './subs';

@Component({
    selector: 'form-allsubs',
    template: `

    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllSubsComponent {

  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
      subs: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
      this.getAllSub();
    }

  // Get all users from the API
  getAllSub() {
    this.http.get(`${this.API}/subscribe/listsub`)
      .map(res => res.json())
      .subscribe(subs => {
        this.subs = subs
      })
  }
}
