import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";
import { Sub } from './subs';
@Component({
    selector: 'form-subscriber',
    template: `

    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentSubscribeComponent implements  OnInit, OnDestroy {
  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';
    subid = '58b3cdac45912d052e2c85a5';

    // Declare empty list of people
    subs: any[] = [];

    constructor(private http: Http, private activatedRoute: ActivatedRoute) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
      this.getSub();
      this.idSubscription = this.activatedRoute.params.subscribe(params => {
            this.id = params['id']
            this.load()
        })
    }
    ngOnDestroy() {
        this.idSubscription.unsubscribe()
    }
    public id: string
    private idSubscription: Subscription

  // Get all users from the API
  getSub() {
    this.http.get(`${this.API}/subscribe/sub`)
      .map(res => res.json())
      .subscribe(subs => {
        this.subs = subs
      })
  }
  load() {
        console.log("Load Id " + this.id);
    }
}
