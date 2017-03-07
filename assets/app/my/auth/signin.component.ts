import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthenticationService, User} from './auth.service';

@Component({
    selector: 'form-login',
    providers: [AuthenticationService],
    template: `
    <div class="container container-auth-client">
        <div class="top-margin text-center">
            <div class="form">
                <div class="form-group">
                    <input class="form-control" [(ngModel)]="user.email" id="email" type="email" placeholder="Email">
                    <input type="password" class="form-control" [(ngModel)]="user.password" id="password" placeholder="Password">
                </div>
                <span>{{errorMsg}}</span>
                <button type="submit" (click)="login()" class="btn button-submit">SIGN IN</button>
                <div class="text text-other"><a href="/forgot-password">I forgot password</a></div>
            </div>
        </div>
    </div>`
})
export class SigninComponent {

public user = new User('','');
 public errorMsg = '';

 constructor(
     private _service:AuthenticationService) {}

 login() {
     if(!this._service.login(this.user)){
         this.errorMsg = 'Failed to login';
     }
 }

}
