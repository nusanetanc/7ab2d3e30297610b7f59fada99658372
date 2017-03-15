import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './content/subs';
@Component({
    selector: 'dashboard',
    template: `
    <!-- Sidebar -->
          <div id="sidebar-wrapper">
              <nav id="spy">
                  <ul class="sidebar-nav nav">
                      <li class="sidebar-brand">
                          <div class="title">
                              <img src="./images/ava.png" alt="ava">
                              <a [routerLink]="['Account']"  class="name"><strong>{{ subs.name }}</strong></a>
                              <a class="user">Subscriber - Level {{ subs.packlev }}</a>
                          </div>
                      </li>

                      <li>
                          <a [routerLink]="['Dashboard']" class="collapse" ><i class="material-icons">dashboard</i> <strong>DASHBOARD</strong></a>
                      </li>
                      <li>
                          <a [routerLink]="['Billing']" class="collapse"><i class="material-icons">supervisor_account</i> <strong>BILLING</strong></a>
                      </li>
                      <li>
                          <a [routerLink]="['Reports']" class="collapse"><i class="material-icons">announcement</i> <strong>REPORTS</strong></a>
                      </li>
                      <li>
                          <a [routerLink]="['Information']" class="collapse"><i class="material-icons">info</i> <strong>INFORMATION</strong></a>
                      </li>

                      <li class="sidebar-footer">
                          <div>
                              <img src="./images/groovy-grayscale.png" alt="ava">
                              <a href="">Privacy</a>
                              <a href="">Terms</a>
                          </div>
                      </li>
                  </ul>
              </nav>
          </div>
          <!-- /Sidebar -->
    `,
    directives: [ ROUTER_DIRECTIVES], providers: [],
})


export class DashboardComponent {

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Session_ID = '58b3cdac45912d052e2c85a5';

subs: any[] = [];
  constructor(private http: Http) {}

  ngOnInit() {
    this.getAcountSub();
  }

getAcountSub() {
  this.http.get(`${this.API}/subscribe/sub/{{sessionId}}`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
    })
}

}
