import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';

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
                            <div class="text text-other"><a href="isforgot">I forgot password</a></div>
                    </div>
                </div>
            </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class SigninComponent{


}
