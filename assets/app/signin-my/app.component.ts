import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";

@Component({
    selector: 'my-signin',
    template: `
            <my-header></my-header><div class="container container-auth-client">
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
            <my-footer></my-footer>
`,
    directives: [HeaderComponent, FooterComponent]
})
export class AppComponent{

}
