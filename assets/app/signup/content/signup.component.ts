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
                                <select style="" name="cars">
                                    <option disabled="true" selected="true" style="height: 30px;">Select your city</option>
                                    <option value="volvo" >Jakarta</option>
                                    <option value="saab">Bandung</option>
                                    <option value="fiat">Medan</option>
                                </select><br/>
                            </form>
                            <a href="/signup-data" class="next btn btn-default dropdown-toggle" style="">
                                NEXT
                            </a>
                        </div>
                    </div>
                </div>
            </div>

`,
    directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent {

}
