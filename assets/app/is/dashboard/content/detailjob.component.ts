import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-detailmaintenance',
    template: `
    {{jobs.subname}}
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDetailJobComponent implements OnInit {

// Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    jobs: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
        this.getAllJob();
    }

    // Get all users from the API
    getAllJob(){
        this.http.get(`${this.API}/job/job/${this._routeParams.get('id')}`)
            .map(res => res.json())
            .subscribe(jobs => {
                this.jobs = jobs
            })
    }

}

