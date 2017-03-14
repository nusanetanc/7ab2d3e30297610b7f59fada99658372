import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from '../subs';

@Component({
    selector: 'form-signin',
    template: `
          <div class="jumbotron signup-jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-md-12"><!-- header SignUp -->
                        <h3>Sign Up</h3>
                    </div><!-- .header SignUp -->
                </div>
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <form>
                            <select name="package">
                                <option disabled="true" selected="true">-- Select Package --</option>
                                <option value="level1">Level 1 - Monthly - IDR 349 K</option>
                                <option value="level2">Level 1 - Monthly - IDR 549 K</option>
                                <option value="level3">Level 1 - Monthly - IDR 899 K</option>
                                <option value="level4">Level 1 - Monthly - IDR 499 K</option>
                                <option value="level5">Level 1 - Monthly - IDR 699 K</option>
                                <option value="level6">Level 1 - Monthly - IDR 999 K</option>
                            </select><br/>
                        </form>
                    </div>
                    <div class="col-md-4 col-md-offset-4">
                        <a href="/signup-data" class="back btn btn-default dropdown-toggle">
                            BACK
                        </a>
                        <a href="/signup-installdate" class="next btn btn-default dropdown-toggle">
                            NEXT
                        </a>
                    </div>
                </div>
            </div>
        </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class PackageComponent {

}
