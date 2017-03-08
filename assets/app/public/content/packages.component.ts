import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-packages',
    template: `
            <p>Packages</p>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class PackagesComponent{

}