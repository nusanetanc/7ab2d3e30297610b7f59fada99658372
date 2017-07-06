import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {SigninComponent} from "./signin.component";

@Component({
    selector: 'my-app',
    template: `
            <my-header *ngIf="subs._id == null" ></my-header><br>
            <router-outlet *ngIf="subs._id == null"></router-outlet>
            <my-footer *ngIf="subs._id == null" ></my-footer>
            <style *ngIf="subs._id != null">
                .load > img {
                    bottom: 0;
                    left: 0;
                    margin: auto;
                    position: absolute;
                    right: 0;
                    top: 0;
                    height:159px;
                    width:500px;
                }
            </style>
            <div *ngIf="subs._id != null" class="load">
                <img src="images/logo-groovy.png">
            </div>
`,
    directives: [HeaderComponent, FooterComponent, SigninComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/signin', name: 'Signin', component: SigninComponent, useAsDefault: true}
])

export class AppComponent{
  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';


  subs: any[] = [];

    constructor(private http: Http) {}

    ngOnInit() {
      this.getAcountSub();
    }

  getAcountSub() {
    this.http.get(`${this.API}/subscribe/detailsub`)
      .map(res => res.json())
      .subscribe(
        subs => {
            this.subs = subs
              window.location.href = `/my`;
      });
  }
}
