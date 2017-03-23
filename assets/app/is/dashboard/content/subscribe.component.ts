import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Params} from 'angular2/router';
import { Http } from 'angular2/http';
import { Location } from 'angular2/common';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";
import 'rxjs/add/operator/switchMap';
import { Sub } from './subs';

@Component({
    selector: 'form-subscriber',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Subscriber
            </h3>
        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['AllSubs']" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row subInfo">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>PERSONAL INFORMATION</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Fullname</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.name }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Email</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.email }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Handphone</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.phone }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Address</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.address }} No. {{ subs.nohome }},<br>{{ subs.cluster }}, {{ subs.city }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>No Identy Card</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.idnumber }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Birth Date</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.datebrith }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-xs-6 col-md-3">
                                    <img class="avaProfile" src="images/{{ subs._id }}.png" alt="{{ subs._id }}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>BILLING INFORMATION</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Current Package</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>Level {{ subs.packlev }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Status</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span class="green">{{ subs.status }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>No Virtual Account</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.nova }}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentSubscribeComponent implements  OnInit {
  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';
    subid = '58b3cdac45912d052e2c85a5';

    // Declare empty list of people
    subs: any[] = [];

    constructor(
    private http: Http) {}
    constructor(
    private route: ActivatedRoute){}
    constructor(
    private location: Location){}

    ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.getSub = this.getSub(id);
});


    }

  // Get all users from the API
  getSub(id: string) {
    this.http.get(`${this.API}/subscribe/sub/${this.id}`)
      .map(res => res.json())
      .subscribe(subs => {
        this.subs = subs
      })
  }
}
