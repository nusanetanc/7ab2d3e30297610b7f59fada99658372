import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-profilemp',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
       <div class="content-header">
          <h3 id="home" class="fontWeight300">
             <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
             </a>
             &nbsp; Profile
          </h3>
       </div>
       <div class="page-content inset" data-spy="scroll" data-target="#spy">
          <div class="row marginB20 marginR0">
             <div class="col-sm-12">
                 <a [routerLink]="['AllEmployee']" class="btn btn-default buttonBack" type="button">
                    BACK
                 </a>
                 <div *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '7' || emps.accessrole == '701'">
                     <button *ngIf="emps.status=='Disabled'" type="submit" (click)="AccountEnabled()" class="btn btn-default buttonOrange right">
                         Enable Account
                     </button>
                     <button *ngIf="emps.status=='Enabled'" type="submit" (click)="AccountDisabled()" class="btn btn-default buttonOrange right">
                         Disabled Account
                     </button>
                  </div>
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
                            <span>Full Name</span>
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
                            <span>Employee Id</span>
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
                            <span>Dept / Job Title</span>
                         </div>
                         <div class="col-xs-6 col-sm-1">
                            <span>:</span>
                         </div>
                         <div class="col-xs-12 col-md-7">
                            <span>{{ emps.departement }} / {{ emps.titlejob }}</span>
                         </div>
                      </div>
                      <div class="row marginTB10 marginL5">
                         <div class="col-xs-6 col-sm-4">
                            <span>Account Status</span>
                         </div>
                         <div class="col-xs-6 col-sm-1">
                            <span>:</span>
                         </div>
                         <div class="col-xs-12 col-md-7">
                            <span>{{ emps.status }}</span>
                         </div>
                      </div>
                   </div>
                   <div class="col-sm-4">
                      <div class="row">
                         <div class="col-xs-4 col-md-2">
                            <img class="avaProfile" src="images/ava.png" alt="ava">
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <br/><br/>
          <div *ngIf="emps.departement == 'Technical'" class="row">
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
                                  <a [routerLink]="['DetailJob', {id: job._id}]">
                                     <div class="col-sm-8 invoiceList"><span>{{job.name}}</span></div>
                                     <div class="col-sm-4 invoiceList"><span>{{job.status}}</span></div>
                                  </a>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div *ngIf="emps.departement == 'Technical'" class="row">
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
                                  <a [routerLink]="['DetailJob', {id: job._id}]">
                                     <div class="col-sm-8 invoiceList"><span>{{job.name}}</span></div>
                                     <div class="col-sm-4 invoiceList"><span>{{job.status}}</span></div>
                                  </a>
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
    <!-- /Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentProfileEmpComponent implements OnInit {


    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    emps: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    ngOnInit() {
        this.getEmp();
        this.getJob();
    }

    getEmp(){
    this.http.get(`${this.API}/subscribe/emp/${this._routeParams.get('id')}`)
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
    AccountEnabled() {
        var body = `status='Enabled'`
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .put(`${this.API}/employee/enableaccount/${this._routeParams.get('id')}`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Account Employee Enabled');
                this.getEmp();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }
    AccountDisabled() {
        var body = `status='Disabled'`
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .put(`${this.API}/employee/disableaccount/${this._routeParams.get('id')}`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Account Employee Disabled');
                this.getEmp();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }

}
