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
                            <p>Please select a installation date</p>
                            <div class="col-sm-6">
                                <div class="container">
                                    <div class="row">
                                        <div class='col-sm-6'>
                                            <div class="form-group">
                                                <div class='input-group date' id='datetimepicker1'>
                                                    <input type='text' class="form-control" />
                                                    <span class="input-group-addon">
                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <script type="text/javascript">
                                            $(function () {
                                                $('#datetimepicker1').datetimepicker();
                                            });
                                        </script>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <p>Please select a available timeslot for that date</p>
                            <div class="col-sm-6 col-sm-offset-4">
                                <form action="">
                                    <input type="radio" name="vehicle" value="Time" /> 9:00 am PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 10:00 am PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 11:00 am PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 12:00 am PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 1:00 pm PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 2:00 pm PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 3:00 pm PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 4:00 pm PST
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <a href=[routerLink]="['SignupPackage']" class="back btn btn-default dropdown-toggle">
                                BACK
                            </a>
                            <a [routerLink]="['SignupProvide']" class="next btn btn-default dropdown-toggle">
                                NEXT
                            </a>
                        </div>
                    </div>
                </div>
            </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class InstalldateComponent {

}
