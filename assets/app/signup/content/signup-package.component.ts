import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from '../subs';
import {Package} from "./package";

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
                                <option *ngFor="#package of packages" value="{{ package._id }}">Level {{package.level}} - Monthly - {{package.price | currency:'IDR':true}}</option>
                                <option value="level2">Level 1 - Monthly - IDR 549 K</option>
                                <option value="level3">Level 1 - Monthly - IDR 899 K</option>
                                <option value="level4">Level 1 - Monthly - IDR 499 K</option>
                                <option value="level5">Level 1 - Monthly - IDR 699 K</option>
                                <option value="level6">Level 1 - Monthly - IDR 999 K</option>
                            </select><br/>
                        </form>
                    </div>
                    <div class="col-md-4 col-md-offset-4">
                        <a [routerLink]="['SignupData']" class="back btn btn-default dropdown-toggle">
                            BACK
                        </a>
                        <a [routerLink]="['SignupInstalldate']" class="next btn btn-default dropdown-toggle">
                            NEXT
                        </a>
                    </div>
                </div>
            </div>
        </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class PackageComponent implements OnInit {
    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    packages: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllPackage();
    }
// Get all Package from the API
    getAllPackage() {
        this.http.get(`${this.API}/package/listpackage`)
            .map(res => res.json())
            .subscribe(packages => {
                this.packages = packages
            })
    }
}
