import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-signin',
    template: `
    <div class="form-auth-is">
        <div class="container container-auth-client">
            <div class="top-margin text-center" *ngIf="subs.status == 'Registration'">
                <h4 style="color: #FFF;">Enter new password for your Groovy Account</h4>
                <div class="form">
                    <div class="form-group">
                        <input type="password" class="form-control" id="password" #password placeholder="New Password">
                        <input type="password" class="form-control" id="repassword" #repassword placeholder="Re-Type Password">
                    </div>
                    <button type="submit" (click)="Activation(password.value, repassword.value)" class="btn button-submit">SUBMIT</button>
                </div>
            </div>
            <div class="top-margin text-center" *ngIf="subs.status == 'Email Activation'">
              <h4>You have successfully set your Groovy Password.</h4>
              <h5>Please wait for our customer service to confirm your phone number</h5>
            </div>
            <div class="top-margin text-center" *ngIf="subs.status == 'Aktif'">
              <h4>Your Groovy account is active.</h4>
            </div>
        </div>
    </div>
`,
    directives: [ROUTER_DIRECTIVES],
})
export class ActivationComponent implements OnInit {
API = 'http://202.162.207.164:3000';
    subs: any[] = [];
  ngOnInit() {
      this.getSubs();
  }
  constructor(private http: Http, private _routeParams: RouteParams) {}
  // Get all City from the API
      getSubs() {
          this.http.get(`${this.API}/subscribe/activationid/${this._routeParams.get('id')}`)
              .map(res => res.json())
              .subscribe(subs => {
                  this.subs = subs
              })
      }
  Activation(password, repassword) {
      var body = `password=${password}`;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http
          .put(`${this.API}/subscribe/activationemail/${this._routeParams.get('id')}`,
              body, {
                  headers: headers
              })
          .subscribe(data => {
              this.getSubs();
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
  }
}
