import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-profileengineer',
    template: `
    <!-- Page content -->
      <div id="page-content-wrapper">
          <div class="content-header">
              <h3 id="home" class="fontWeight300">
                  <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                  </a>
                  &nbsp; Engineer Profile
              </h3>
          </div>

          <div class="page-content inset" data-spy="scroll" data-target="#spy">
              <div class="row marginB20 marginR0">
                  <div class="col-sm-12">
                      <a href="engineer.html" class="btn btn-default buttonBack" type="button">
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
                                      <span>{{ emps.name }}</span>
                                  </div>
                              </div>
                              <div class="row marginTB10 marginL5">
                                  <div class="col-xs-6 col-sm-4">
                                      <span>ID Employee</span>
                                  </div>
                                  <div class="col-xs-6 col-sm-1">
                                      <span>:</span>
                                  </div>
                                  <div class="col-xs-12 col-md-7">
                                      <span>{{ emps.idemployee }}</span>
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
                                      <span>{{ emps.email }}</span>
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
                                      <span>{{ emps.phone }}</span>
                                  </div>
                              </div>
                              <div class="row marginTB10 marginL5">
                                  <div class="col-xs-6 col-sm-4">
                                      <span>Dept & Office</span>
                                  </div>
                                  <div class="col-xs-6 col-sm-1">
                                      <span>:</span>
                                  </div>
                                  <div class="col-xs-12 col-md-7">
                                      <span>{{ emps.departement }} - {{ emps.titlejob }}</span>
                                  </div>
                              </div>
                          </div>
                          <div class="col-sm-6">
                              <div class="row">
                                  <div class="col-xs-4 col-md-2">
                                      <img class="avaProfile" src="ava.png" alt="ava">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <br/><br/>
                  <div class="row">
                      <div class="col-sm-12">
                          <div class="row headerList paddingLR30">
                              <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>List Job</strong></div>
                          </div>
                          <div class="row subInfo">
                              <div class="col-sm-12">
                                  <div class="row">
                                      <div class="col-sm-6">
                                        <div class="row">
                                            <div class="col-sm-12" *ngFor="#job of jobs">
                                                <div class="row subInfo">
                                                    <div class="col-sm-8 invoiceList"><span>{{job.name}}</span></div>
                                                    <div class="col-sm-4 invoiceList"><span>{{job.progress}}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
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
export class ContentProfileEngineerComponent implements OnInit {


    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    emps: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    ngOnInit() {
        this.getEmp();
        this.getJob();
    }

    getEmp(){
    this.http.get(`${this.API}/employee/emp/${this._routeParams.get('id')}`)
        .map(res => res.json())
        .subscribe(emps => {
            this.emps = emps
        })
    }
    getJob(){
    this.http.get(`${this.API}/job/emp/${this._routeParams.get('id')}`)
        .map(res => res.json())
        .subscribe(jobs => {
            this.jobs = jobs
        })
    }

}
