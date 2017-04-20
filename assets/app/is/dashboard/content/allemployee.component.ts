import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from 'angular2/http';
import {Employee} from './employee';


@Component({
    selector: 'form-allempoloyee',
    template: `

    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllEmployeeComponent {
  // Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

  // Declare empty list of people
  emps: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {

      this.getAllEmployee();
  }

  // Get all users from the API
  getAllEmployee() {
      this.http.get(`${this.API}/employee/listemp`)
          .map(res => res.json())
          .subscribe(emps => {
              this.emps = emps
          })
  }
}
