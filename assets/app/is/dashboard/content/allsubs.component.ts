import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES } from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './subs';

@Component({
    selector: 'form-allsubs',
    template: `
    <h1>hai</h1>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllSubsComponent {


}
