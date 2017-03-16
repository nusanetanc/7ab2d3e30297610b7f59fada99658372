import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from '../subs';
import {City} from "./cities";

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
                                <select *ngIf="show" style="" name="cars">
                                    <option disabled="true" selected="true" style="height: 30px;">Select your city</option>
                                    <option *ngFor="#city of cities" value="{{ city._id }}" onclick="selectCity()">{{ city.name }}</option>
                                </select><br/><br/>
                                <select *ngIf="!show" style="" name="cars">
                                    <option disabled="true" selected="true" style="height: 30px;">Select your citys</option>
                                    <option *ngFor="#city of cities" value="{{ city._id }}" (click)="toggleHidden()">{{ city.name }}</option>
                                </select><br/>
                            </form>
                            <a (click)="toggleHidden()" class="next btn btn-default dropdown-toggle" style="">
                                NEXT
                            </a>
                        </div>
                    </div>
                </div>
            </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent implements OnInit{
    show = true;
    hidden = false;
    toggleShow() {
        this.show = !this.show;
    }

    selectCity(city:any) {
        console.log(city);
    }

    toggleHidden() {
        this.hidden = !this.hidden;
    }
// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    cities: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllCity();
    }

// Get all City from the API
    getAllCity() {
        this.http.get(`${this.API}/city/listcity`)
            .map(res => res.json())
            .subscribe(cities => {
                this.cities = cities
            })
    }
}