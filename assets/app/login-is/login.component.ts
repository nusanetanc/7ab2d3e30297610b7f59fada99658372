import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';

@Component({
    selector: 'form-login',
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
                                    <button type="submit" class="btn btn-login" (click)="signEmp(signEmail.value, signPassword.value)">LOGIN</button>
                                </div>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {
// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    constructor(private http: Http) {}

// Add one person to the API
    signEmp(signEmail, signPassword) {

        var body = `email=${signEmail}&password=${signPassword}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/employee/signin`,
                body, {
                    headers: headers
                })
            .subscribe(
                data => {
                    window.location.href = `/is`;
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
    }
}
