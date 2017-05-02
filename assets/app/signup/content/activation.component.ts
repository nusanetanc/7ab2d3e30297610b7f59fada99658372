import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-signin',
    template: `
    <div class="container container-auth-client">
    <div class="top-margin text-center">
        <div class="form">
            <div class="form-group">
                <input type="text" class="form-control" id="email" placeholder="Email">
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <a href="#" class="btn button-submit">SIGN IN</a>
            <div class="text text-other"><a href="isforgot.html">I forgot password</a></div>
        </div>
    </div>
</div>
`,
    directives: [ROUTER_DIRECTIVES],
})
export class ActivationComponent{


}
