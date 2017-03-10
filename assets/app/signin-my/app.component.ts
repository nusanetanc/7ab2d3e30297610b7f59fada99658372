import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {SigninComponent} from "./signin.component";

@Component({
    selector: 'my-signin',
    template: `<my-header></my-header>
              <form-signin></form-signin>
            <my-footer></my-footer>
`,
    directives: [HeaderComponent, FooterComponent, SigninComponent, ROUTER_DIRECTIVES]
})
export class AppComponent{
}
