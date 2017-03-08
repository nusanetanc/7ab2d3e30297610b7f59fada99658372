import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";

@Component({
    selector: 'my-app',
    template: `
            <my-header></my-header><br>
            <router-outlet></router-outlet>
            <my-footer></my-footer>
`,
    directives: [HeaderComponent, FooterComponent]
})
export class AppComponent{

}