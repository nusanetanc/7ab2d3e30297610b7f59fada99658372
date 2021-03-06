import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import {mongoose} from 'mongoose';
import { Sub } from './subs';

@Component({
    selector: 'form-login',
    template: `
        <div *ngIf="sessionemps.accessrole == null" class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-4 card-login">
                            <form class="form-horizontal" [ngFormModel]="myForm">
                                <center><img src="images/logo-groovy.png" alt="Logo Groovy" width="40%">
                                <h6 class="grey-text">INFORMATION SYSTEM</h6></center><br><br>
                                <div class="form-group">
                                    <label for="inputEmail3" class="control-label orange-text">Email</label><br>
                                    <input [ngFormControl]="myForm.find('signEmail')" type="email" class="form-login" id="signEmail" #signEmail placeholder="Type your mail"><br>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword3" class="control-label orange-text">Password</label><br>
                                    <input [ngFormControl]="myForm.find('signPassword')" type="password" class="form-login" id="signPassword" #signPassword placeholder="Type your password"><br>
                                </div><br>
                                <div class="form-group form-forgot">
                                    <a href="" class="orange-text">I forgot password</a>
                                    <button [disabled]="!myForm.valid" type="submit" id="logins" class="btn btn-login" (click)="signEmp(signEmail.value, signPassword.value)">LOGIN</button>
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
        <style *ngIf="emps.accessrole == null">
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
        <div *ngIf="sessionemps.accessrole != null" class="load">
            <img src="images/logo-groovy.png">
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {
myForm: ControlGroup;
// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    constructor(private _fb:FormBuilder, private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
      this.getAcountEmp();
    }

  // Declare empty list of people
  emps: any[] = [];
  sessionemps: any[] = [];

  // Get all Sub from the API
  getAllEmp() {
    this.http.get(`${this.API}/employee/listemp`)
      .map(res => res.json())
      .subscribe(emps => {
        this.emps = emps
      })
  }

// Add one person to the API
    signEmp(signEmail, signPassword) {

        var body = `email=${signEmail}&password=${signPassword}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/subscribe/login`,
                body, {
                    headers: headers
                })
            .subscribe(
                data => {
                    window.location.href = `/is`;
                },
                error => {
                    //alert(error.text());
                    //console.log(JSON.stringify(error.json()));
                    document.getElementById("message").innerHTML = error.text();
                    $('#failed').modal('show');
                    $('.modal-backdrop').removeClass("modal-backdrop");
                }
            );
    }
    getAcountEmp() {
        this.http.get(`${this.API}/subscribe/detailemp`)
            .map(res => res.json())
            .subscribe(sessionemps => {
                this.sessionemps = sessionemps
                window.location.href = `/is`;
            }
          )
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
