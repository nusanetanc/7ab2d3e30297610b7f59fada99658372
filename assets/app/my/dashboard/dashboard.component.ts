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
                              <a class="name" href="account.html"><strong>{{ subs.name }}</strong></a>
                              <a class="user" href="account.html">Subscriber - Level {{ subs.packlev }}</a>
                          </div>
                      </li>

                      <li class="active firstLiSidebar">
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
                              <img src="groovy-grayscale.png" alt="ava">
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

}
