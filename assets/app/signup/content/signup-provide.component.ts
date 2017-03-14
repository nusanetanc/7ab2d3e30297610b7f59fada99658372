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
                        <P>Please Provide Your Contact Information Below. Your Address : <br> 112 Diamond Cove Terrace Unit 12, 94134</P>
                    </div><!-- .header SignUp -->
                </div>
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputName" placeholder="Full Name">
                                <input type="text" class="form-control" id="exampleInputHp" placeholder="Handphone">
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                                <p>Upload your National Identity Card</p>
                                <div class="form-control">
                                    <button type="button">choose file</button>
                                    <p>No choose file</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4 col-md-offset-4">
                        <a href="/signup-installdate" class="back btn btn-default dropdown-toggle">
                            BACK
                        </a>
                        <a href="/signup-done" class="next btn btn-default dropdown-toggle">
                            FINISH
                        </a>
                    </div>
                </div>
            </div>
        </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class ProvideComponent {

}
