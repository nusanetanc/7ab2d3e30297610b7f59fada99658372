import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-app',
    template: `
   <!-- START CONTENT -->
     <div class="container">
            <my-header></my-header><br>
            <router-outlet>testt</router-outlet>
            <my-footer></my-footer>
        </div>
`,
    directives: []
})
export class AppComponent{

}