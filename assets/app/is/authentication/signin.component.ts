import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Emp} from "../dashboard/emp";

@Component({
    selector: 'form-login',
    template: `
                <div class="form">
                    <div class="text">Sign in to continue to Information System</div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="signEmail" #signEmail placeholder="Email">
                        <input type="password" class="form-control" id="signPassword" #signPassword placeholder="Password">
                    </div>
                    <button type="submit" (click)="signEmp(signEmail.value, signPassword.value)" class="btn button-submit">SIGN IN</button>
                    <div class="text text-other"><a href="isforgot">I forgot passwosdasdrd</a></div>
                </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class SigninComponent {
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
