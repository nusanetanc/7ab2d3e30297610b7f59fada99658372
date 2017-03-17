import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';
import { NgLocalStorage } from 'ng-localstorage';

@Component({
    selector: 'form-signin',
    template: `
            <div class="container container-auth-client">
                <div class="top-margin text-center">
                    <div class="form">
                            <div class="form-group">
                                <input type="text" class="form-control" id="signEmail" #signEmail placeholder="Email">
                                <input type="password" class="form-control" id="signPassword" #signPassword placeholder="Password">
                            </div>
                            <button type="submit" (click)="signSub(signEmail.value, signPassword.value)" class="btn button-submit">SIGN IN</button>
                            <div class="text text-other"><a href="isforgot.html">I forgot password</a></div>
                    </div>
                </div>
            </div>
`,
    directives: [ROUTER_DIRECTIVES, NgLocalStorage]
})
export class SigninComponent implements OnInit {

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

constructor(private http: Http) {}


  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllSub();
  }

// Declare empty list of people
subs: any[] = [];

// Get all Sub from the API
getAllSub() {
  this.http.get(`${this.API}/subscribe/listsub`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
    })
}

// Add one person to the API
  signSub(signEmail, signPassword) {

  var body = `email=${signEmail}&password=${signPassword}`;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
        .post(`${this.API}/subscribe/signin`,
          body, {
            headers: headers
          })
    .subscribe(
            data => {
              window.location.href = `/my`;
              localStorage.setItem('token', data.obj);
              localStorage.setItem('MongoId', data._id);
            },
            error => {
              alert(error.text());
              console.log(error.text());
            }
          );
  }
}
