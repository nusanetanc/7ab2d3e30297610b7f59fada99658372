import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './content/subs';

@Component({
    selector: 'form-account',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Account
            </h3>
        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row subInfo">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>PERSONAL INFORMATION</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-xs-6 col-sm-2">
                                    <p>Fullname</p>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <p>:</p>
                                </div>
                                <div class="col-xs-12 col-md-5">
                                    <p>{{ subs.name }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 col-sm-2">
                                    <p>Email</p>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <p>:</p>
                                </div>
                                <div class="col-xs-12 col-md-5">
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" value="{{ subs.email }}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 col-sm-2">
                                    <p>Handphone</p>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <p>:</p>
                                </div>
                                <div class="col-xs-12 col-md-5">
                                    <input type="text" class="form-control" id="exampleInputHp" placeholder="Handphone" value="{{ subs.phone }}">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 col-sm-2">
                                    <p>Password</p>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <p>:</p>
                                </div>
                                <div class="col-xs-12 col-md-5">
                                    <input type="text" class="form-control" id="exampleInputPassword" placeholder="Leave Blank to not change">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 col-sm-2">
                                    <p>Re-type Password</p>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <p>:</p>
                                </div>
                                <div class="col-xs-12 col-md-5">
                                    <input type="text" class="form-control" id="exampleInputPassword">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 col-sm-2">
                                    <p>Profile Picture</p>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <p>:</p>
                                </div>
                                <div class="col-xs-12 col-md-5">
                                    <div class="form-control">
                                        <button type="button">choose file</button>
                                        <p>No choose file</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <form action="">
                                    <input type="checkbox" name="vehicle" value="Time" /> Please send me news and updates about Groovy.
                                </form>
                                <a href="#" class="btn btn-default">
                                    SAVE
                                </a>
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
export class ContentAccountComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Session_ID = '58b3cdac45912d052e2c85a5';

subs: any[] = [];
  constructor(private http: Http) {}

  ngOnInit() {
    this.getAcountSub();
  }

getAcountSub() {
  this.http.get(`${this.API}/subscribe/sub/${this.Session_ID}`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
    })
}
}
