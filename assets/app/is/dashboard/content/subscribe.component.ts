import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";
import { Sub } from './subs';
import { Job } from './job';

@Component({
    selector: 'form-subscriber',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
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
                            <h3 style="color:#FC592E;">#{{ subs.subid }}</h3>
                        </div>
                        <div class="col-sm-12">
                            <h4>PERSONAL INFORMATION</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Full Name</span>
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
                                    <span>National Identy Card No.</span>
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
                                    <span>Date of Birth</span>
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
                                    <span>Virtual Account No.</span>
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
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>ADD  TECHNICIAN JOB</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="formNewReport marginLR20">
                                <input #datejob type="date" class="form-control inputForm" id="datejob" placeholder="Date Job">
                                <form>
                                    <select #typejob id="typejob">
                                        <option class="option" disabled="true" selected="true" value="0">-- Select Job Type --</option>
                                        <option class="option" value="Installation">Installation</option>
                                        <option class="option" value="Maintenance">Maintenance</option>
                                        <option class="option" value="Switch Devices">Switch Devices</option>
                                        <option class="option" value="Take Device">Take Device</option>
                                    </select><br/><br/>
                                </form>
                                <textarea #detailjob id="detailjob" placeholder="Input Job Detail" class="form-control inputForm" rows="4" cols="50" style="padding-top: 20px;"></textarea>
                                <div class="row">
                                    <div class="col-sm-6">
                                      <form>
                                          <select #empjob2 id="empjob2" class="form-control inputForm">
                                              <option class="option" disabled="true" value="0" selected="true">-- Select Field Engineer --</option>
                                              <option *ngFor="#emp of emps" class="option" value="58f586a8ad9c9c427bb6321c">{{ emp.name }}</option>
                                          </select><br/>
                                      </form>
                                    </div>
                                    <div class="col-sm-6">
                                      <form>
                                        <select #empjob1 id="empjob1" class="form-control inputForm">
                                            <option class="option" disabled="true" value="0" selected="true">-- Select Field Engineer --</option>
                                            <option *ngFor="#emp of emps" class="option" value="58f586a8ad9c9c427bb6321c">{{ emp.name }}</option>
                                        </select><br/><br/>
                                      </form>
                                    </div>
                                </div>
                                <button type="submit" (click)="addJob(datejob.value, typejob.value, detailjob.value, typejob.value, empjob1.value, empjob2.value)" class="btn btn-default buttonOrange">
                                    SEND
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="right">
                    <a class="btn btn-default buttonOrange" type="button" style="margin-right: 50px !important;">
                        <i class="material-icons">create</i>
                    </a>
                </div> -->

            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentSubscribeComponent implements OnInit {
  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    subs: any[] = [];
    emps: any[] = [];
    jobs: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    ngOnInit() {
      this.getSubs();
      this.getAllJob();
    }

    addJob(datejob, detailjob, typejob, empjob1, empjob2) {
        var body = `date=${datejob}&name=${detailjob}&detail=${typejob}&emp1=${empjob2}&emp2=${empjob2}&subs=${this._routeParams.get('id')}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/job/addjob`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Job Success');
                this.getAllJob();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }

  getSubs() {
    this.http.get(`${this.API}/subscribe/subs/${this._routeParams.get('id')}`)
      .map(res => res.json())
      .subscribe(subs => {
        this.subs = subs
        this.getAllEmployee();
      })
    }
  // Get all users from the API
  getAllEmployee() {
      this.http.get(`${this.API}/employee/list/technical`)
          .map(res => res.json())
          .subscribe(emps => {
              this.emps = emps
          })
  }
  // Get all users from the API
  getAllJob() {
      this.http.get(`${this.API}/job/listjob`)
          .map(res => res.json())
          .subscribe(emps => {
              this.emps = emps
          })
  }
}
