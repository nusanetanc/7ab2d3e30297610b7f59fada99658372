import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-signin',
    template: `
    <div class="container container-auth-client">
    <div class="top-margin text-center">
        <h4>Enter new password for your Groovy Account</h4>
        <div class="form">
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="New Password">
                <input type="password" class="form-control" id="password" placeholder="Re-Type Password">
            </div>
            <button href="#" class="btn button-submit">SUBMIT</button>
        </div>
    </div>
</div>
`,
    directives: [ROUTER_DIRECTIVES],
})
export class ActivationComponent{


}
