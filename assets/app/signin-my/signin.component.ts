import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';

@Component({
    selector: 'form-signin',
    template: `

        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-4 card-login">
                            <form class="form-horizontal">
                                <center><img src="images/logo-groovy.png" alt="Logo Groovy" width="40%">
                                <h6 class="grey-text">INFORMATION SYSTEM</h6></center><br><br>
                                <div class="form-group">
                                    <label for="inputEmail3" class="control-label orange-text">Email</label><br>
                                    <input type="email" class="form-login" id="signEmail" #signEmail placeholder="Type your mail"><br>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword3" class="control-label orange-text">Password</label><br>
                                    <input type="password" class="form-login" id="signPassword" #signPassword placeholder="Type your password"><br>
                                </div><br>
                                <div class="form-group form-forgot">
                                    <a href="" class="orange-text">I forgot password</a>
                                    <button type="submit" id="logins" class="btn btn-login" (click)="signEmp(signEmail.value, signPassword.value)">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div id="failed" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
          <div class="modal-dialog" role="document" style="float: left; padding-left: 44%;">
            <div class="text-center" style="padding: 5px; background-color: #FC592E; width: 200px; float: left; box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0);">
              <h5 id="message" style="color: #FFF;"></h5>
            </div>
          </div>
        </div>
        

        <div class="container container-auth-client">
           <div class="top-margin text-center">
              <form class="form" [ngFormModel]="myForm">
                 <div class="form-group">
                    <input [ngFormControl]="myForm.find('signEmail')" type="text" class="form-control" id="signEmail" #signEmail placeholder="Email">
                    <input [ngFormControl]="myForm.find('signPassword')" required type="password" class="form-control" id="signPassword" #signPassword placeholder="Password">
                 </div>
                 <button [disabled]="!myForm.valid" id="signin" type="submit" (click)="signSub(signEmail.value, signPassword.value)" class="btn button-submit">SIGN IN</button>
                 <div class="text text-other"><a href="isforgot.html">I forgot password</a></div>
              </form>
           </div>
        </div>
        <!-- Modal -->
        <div id="failed" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="alert alert-danger alert-dismissible fade in" role=alert>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4>'User could not be found'</h4>
                </div>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class SigninComponent implements OnInit {

myForm: ControlGroup;

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

constructor(private _fb:FormBuilder, private http: Http) {}

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

            },
            error => {
                $('#failed').modal('show');
            }
          );
  }
  ngOnInit() {
    this.myForm = this._fb.group({
      signEmail: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      signPassword: ['', Validators.required]
    })
  }
  private isEmail(control: Control): { [s: string]: boolean} {
    var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|id|ida|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if(!control.value.match(re)){
      console.log(control.value);
      return {invalidEmail: true};
    }
  }
}
