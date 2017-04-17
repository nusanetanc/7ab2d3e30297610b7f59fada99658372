import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subscriber';
import {City} from "./cities";
import {Property} from "./property";
import {TypeProperty} from "./type";
import {Cluster} from "./cluster";
import {Blokfloor} from "./blokfloor";
import {Home} from "./home";
import {Package} from "./package";

@Component({
    selector: 'form-signin',
    template: `
<h1>tes</h1>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent implements OnInit{


}
