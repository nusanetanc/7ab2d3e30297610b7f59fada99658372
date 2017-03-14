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
                        <P>All Set! We Will See You At The Date And Time You Chose <br> And A Confirmation Email Was Sent With Details Below</P>
                    </div><!-- .header SignUp -->
                </div>
                <div class="row">
                    <div class="col-md-8 col-md-offset-3">
                        <div class="row" style="margin-bottom: 10px;">
                            <div class="col-xs-6 col-sm-2 col-md-offset-1">
                                Fullname
                            </div>
                            <div class="col-xs-6 col-sm-1">
                                :
                            </div>
                            <div class="col-xs-6 col-md-5">
                                Jhon Doe
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 10px;">
                            <div class="col-xs-6 col-sm-2 col-md-offset-1">
                                Handphone
                            </div>
                            <div class="col-xs-6 col-sm-1">
                                :
                            </div>
                            <div class="col-xs-6 col-md-5">
                                +62 812 1234 2222
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 10px;">
                            <div class="col-xs-6 col-sm-2 col-md-offset-1">
                                Email
                            </div>
                            <div class="col-xs-6 col-sm-1">
                                :
                            </div>
                            <div class="col-xs-6 col-md-5">
                                jhondoe@gmail.com
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 10px;">
                            <div class="col-xs-6 col-sm-2 col-md-offset-1">
                                Address
                            </div>
                            <div class="col-xs-6 col-sm-1">
                                :
                            </div>
                            <div class="col-xs-6 col-md-5">
                                112 Diamond Cove Terrace Unit 12, 94134
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 10px;">
                            <div class="col-xs-6 col-sm-2 col-md-offset-1">
                                Package
                            </div>
                            <div class="col-xs-6 col-sm-1">
                                :
                            </div>
                            <div class="col-xs-6 col-md-5">
                                Level 2
                            </div>
                        </div>
                        <div class="row" style="margin-bottom: 10px;">
                            <div class="col-xs-6 col-sm-2 col-md-offset-1">
                                Installation Date
                            </div>
                            <div class="col-xs-6 col-sm-1">
                                :
                            </div>
                            <div class="col-xs-6 col-md-5">
                                Wednesday, March 4, 2017 - 10.00 WIB
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class DoneComponent {

}
