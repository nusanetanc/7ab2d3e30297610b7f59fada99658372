import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Billing } from './billing';

@Component({
    selector: 'form-dashboard',
    template: `

    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDetailBillingComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Billing_ID = '58d237f5ca0d0a5c78e44b34';

  bills: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getBills();
  }


// Get all bill from the API
getBills() {
 this.http.get(`${this.API}/bill/idbill/${this.Billing_ID}`)
   .map(res => res.json())
   .subscribe(bills => {
     this.bills = bills
   })
}
}
