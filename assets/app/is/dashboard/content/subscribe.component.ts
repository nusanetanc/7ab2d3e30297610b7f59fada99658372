import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";
import { Sub } from './subs';
import { Job } from './job';
import { Employee } from './employee';
import {Package} from "./package";
import { ContentPackLevComponent } from './packlev.component';

@Component({
    selector: 'form-subscriber',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
                    <!--
                    <div class="right">
                      <a [routerLink]="['EditSubs', {id: subs._id}]" class="btn btn-default buttonOrange" type="button">
                          EDIT DATA SUBSCRIBE
                      </a>
                    </div> -->
                </div>
            </div>
            <div class="row subInfo">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 style="color:#FC592E;">#{{ subs.subid }}</h4>
                        </div>
                        <div class="col-sm-12">
                            <h4>PERSONAL INFORMATION</h4>
                        </div>
                    </div>

                    <div *ngIf="clickedItem.name == 'View'" class="row">
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
                                    <span>{{ subs.datebirth }}</span>
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
                            <div class="col-sm-12">
                              <button (click)="onItemClicked(EditData)" class="btn btn-default buttonOrange">
                                  UPDATE PERSONAL DATA
                              </button>

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

                    <div *ngIf="clickedItem.name == 'EditData' && sessionemps.accessrole == '601'" class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Full Name</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input value={{subs.name}} #editname type="text" class="form-control inputForm" id="editname" placeholder="Example : John Doe">
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
                                    <input value={{subs.email}} #editemail type="text" class="form-control inputForm" id="editemail" placeholder="Example : John Doe">
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
                                    <input value={{subs.phone}} #editphone type="text" class="form-control inputForm" id="editphone" idnumber>
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
                                    <input  value={{subs.idnumber}} #editid type="text" class="form-control inputForm" id="editid" placeholder="Example : 3243432*******">
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
                                    <input value={{subs.datebirth}} #editbrithdate type="date" class="form-control inputForm" id="editbrithdate" placeholder="Example : 2017/12/31">
                                </div>
                            </div>
                            <div class="col-sm-12">
                              <button (click)="editSubs(editname.value, editemail.value, editphone.value, editid.value, editbrithdate.value)" type="submit" class="btn btn-default buttonOrange">
                                  SUBMIT
                              </button>
                              <button (click)="onItemClicked(Cancel)" class="btn btn-default buttonOrange">
                                  CANCEL
                              </button>
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
                                    <form-packlev *ngIf="subs.idpackage" [packid]=subs.idpackage></form-packlev>
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
                <div *ngIf="sessionemps.accessrole == '0' || sessionemps.accessrole == '601'" class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>UPDATE PACKAGE</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="formNewReport marginLR20">
                                <form>
                                  <select [(ngModel)]="selectedPackage.level" (change)="onSelectPackage($event.target.value)" #subpackage id="subpackage" name="package" class="inputForm">
                                      <option value="0">-- Select Package --</option>
                                      <option *ngFor="#listpackage of listpackages" [value]=listpackage._id>Level {{listpackage.level}} {{listpackage.type}} - Monthly - {{listpackage.price | currency:'IDR':true}}</option>
                                  </select><br/>
                                </form>
                                <button type="submit" (click)="editPackages(subpackage.value)" class="btn btn-default buttonOrange">
                                    UPDATE
                                </button>
                            </div>
                        </div>
                    </div>
                <div *ngIf="sessionemps.accessrole == '0' || sessionemps.accessrole == '601'" class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>EDIT STATUS</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="formNewReport marginLR20">
                                <form>
                                    <select #typestatus id="typestatus">
                                        <option class="option" disabled="true" selected="true" value="0">-- Select Status --</option>
                                        <option class="option" value="Account Active">Account Active</option>>
                                        <option class="option" value="Account and Service Active">Account and Service Active</option>
                                        <option class="option" value="Account Unactive">Account Unactive</option>
                                    </select><br/><br/>
                                </form>
                                <button type="submit" (click)="editStatus(typestatus.value)" class="btn btn-default buttonOrange">
                                    EDIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div *ngIf="sessionemps.accessrole == '0' || sessionemps.accessrole == '601'" class="col-sm-12">
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
                                          <select  [(ngModel)]="selectedEmp2._id" (change)="onSelectEmp2($event.target.value)" #empjob2 id="empjob2" class="form-control inputForm">
                                              <option class="option" value="0" selected="true">-- Select Field Engineer --</option>
                                              <option *ngFor="#emp of emps" class="option" [value]=emp._id>{{ emp.name }}</option>
                                          </select><br/>
                                      </form>
                                    </div>
                                    <div class="col-sm-6">
                                      <form>
                                        <select  [(ngModel)]="selectedEmp1._id" (change)="onSelectEmp1($event.target.value)" #empjob1 id="empjob1" class="form-control inputForm">
                                            <option class="option" value="0" selected="true">-- Select Field Engineer --</option>
                                            <option *ngFor="#emp of emps" class="option" [value]=emp._id>{{ emp.name }}</option>
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
    directives: [ContentPackLevComponent, ROUTER_DIRECTIVES],
})
export class ContentSubscribeComponent implements OnInit {

public clickedItem = {name: "View"};

onItemClicked(EditData) {
   this.clickedItem = {name: "EditData"};
}

onItemClicked(Cancel){
  this.clickedItem = {name: "View"};
}
selectedEmp1: Employee = new Employee(0, 'dummy');
selectedEmp2: Employee = new Employee(0, 'dummy');
selectedPackage: Package = new Package(0, 'dummy');

onSelectPackage(level) {
    console.log(level)
}
onSelectEmp1(_id) {
    console.log(_id)
}
onSelectEmp2(_id) {
    console.log(_id)
}
    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    subs: any[] = [];
    emps: any[] = [];
    jobs: any[] = [];
    sessionemps: any[] = [];
    listpackages: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    ngOnInit() {
      this.getSubs();
      this.getAllJob();
      this.getAcountEmp();
      this.getAllPackages();
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
    editStatus(typestatus) {
        var body = `status=${typestatus}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .put(`${this.API}/subscribe/activationaccount/${this._routeParams.get('id')}`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Edit Status Succses');
                this.getSubs();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }
    editPackages(subpackage) {
        var body = `idpackage=${subpackage}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .put(`${this.API}/subscribe/updatepackage/${this._routeParams.get('id')}`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Edit Package Succses');
                this.getSubs();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }
    editSubs(editname, editemail, editphone, editid, editbrithdate) {
        var body = `name=${editname}&email=${editemail}&phone=${editphone}&idnumber=${editid}&datebirth=${editbrithdate}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .put(`${this.API}/subscribe/updatesubs/${this._routeParams.get('id')}`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Edit Data Succses');
                this.getSubs();
                this.clickedItem = {name: "View"};
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
  getAcountEmp() {
      this.http.get(`${this.API}/subscribe/detailemp`)
          .map(res => res.json())
          .subscribe(sessionemps => {
              this.sessionemps = sessionemps
          }
        )
  }
  getAllPackages(){
      this.http.get(`${this.API}/package/listpackage`)
          .map(res => res.json())
          .subscribe(listpackages => {
              this.listpackages = listpackages
          })
  }
}
