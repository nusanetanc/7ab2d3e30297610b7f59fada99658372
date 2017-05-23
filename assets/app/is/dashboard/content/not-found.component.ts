import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-not-found',
    template: `
    <div class='fullscreenDiv'>
        <div class="center"><span style="font-size: 72px; font-weight: 700; color: #c1c1c1;"><center>404</center> PAGE NOT FOUND</span><br><hr class="hr1"></div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentNotFoundComponent implements OnInit {

}
