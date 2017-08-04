import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';
import {Subscription} from "rxjs/Rx";
import { Sub } from './subs';
import { Job } from './job';
import { Employee } from './employee';
import {Package} from "./package";
import { City } from './cities';
import { Property } from './property';
import { Type } from './type';
import { Cluster } from './cluster';
import { Blokfloor } from './blokfloor';
import { Home } from './home';
import { ContentPackLevComponent } from './packlev.component';

@Component({
    selector: 'form-subscriber',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
                                    <span>Wifi Id</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.wifiid }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Vendor</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.vendorfo }}</span>
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
                                    <span>{{ subs.address }} <br>No. {{ subs.nohome }}, Blok {{ subs.blok }}<br>{{ subs.cluster }}, {{ subs.city }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Registration(By-Ref-Sales)</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.regisby }} - {{ subs.regisref }} - {{ subs.sales }}</span>
                                </div>
                            </div>
                            <div *ngIf="sessionemps.accessrole == '601'" class="col-sm-12">
                              <button (click)="onItemClicked(EditData)" class="btn btn-default buttonOrange">
                                  UPDATE PERSONAL DATA
                              </button>
                              <button (click)="onItemClicked0(EditAdd)" class="btn btn-default buttonOrange">
                                  UPDATE ADDRESS DATA
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
                                    <span>Wifi Id</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input  value={{subs.wifiid}} #editwifiid type="text" class="form-control inputForm" id="editwifiid" placeholder="Example : 674576457*******">
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Vendor</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                  <select  class="inputForm" #editvendor id="editvendor">
                                      <option value="0" disabled selected>-- Select Vendor --</option>
                                      <option value="Bittek">Bittek</option>
                                      <option value="Fiberstar">Fiberstar</option>
                                      <option value="Telkom">Telkom</option>
                                  </select><br/>
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
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Reference Registration</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input value={{subs.regisby}} #editregisby type="text" class="form-control inputForm" id="editregisby" placeholder="Example : Personal/CS/Sales">
                                    <select  class="inputForm" #editregisref id="editregisref">
                                        <option value="0" disabled selected>-- Select Reference --</option>
                                        <option value="Media Sosial">Media Sosial</option>
                                        <option value="Website">Website</option>
                                        <option value="Event">Event</option>
                                        <option value="Sales">Sales</option>
                                    </select><br/>
                                    <select (change)="onSelectSales($event.target.value)" class="inputForm" #editregissales id="editregissales">
                                        <option value="0" disabled selected>-- Select Sales --</option>
                                        <option *ngFor="#sale of sales" value={{sale._id}}>{{sale.name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-12">
                              <button (click)="editSubs(editname.value, editemail.value, editphone.value, editid.value, editwifiid.value, editvendor.value,  editbrithdate.value, editregisby.value, editregisref.value, editregissales.value)" type="submit" class="btn btn-default buttonOrange">
                                  SUBMIT
                              </button>
                              <button (click)="onItemClicked1(Cancel)" class="btn btn-default buttonOrange">
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
                    <div *ngIf="clickedItem.name == 'EditAdd' && sessionemps.accessrole == '601'" class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                              <div class="col-xs-12 col-sm-12">
                                <select [(ngModel)]="selectedCity._id" (change)="onSelectCity($event.target.value)" class="inputForm">
                                    <option value="0">-- Select City --</option>
                                    <option *ngFor="#city of cities" value={{city._id}}>{{ city.name }}</option>
                                </select>
                              </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                              <div class="col-xs-12 col-sm-12">
                                <select [(ngModel)]="selectedProperty._id" (change)="onSelectProperty($event.target.value)" class="inputForm" name="cars">
                                    <option value="0">-- Select Property --</option>
                                    <option *ngFor="#property of properties" value={{property._id}}>{{ property.name }}</option>
                                </select>
                              </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                              <div class="col-xs-12 col-sm-12">
                                <select [(ngModel)]="selectedCluster._id" (change)="onSelectCluster($event.target.value)" class="inputForm" name="cars">
                                    <option value="0">-- Select Clusters --</option>
                                    <option *ngFor="#cluster of clusters" value={{cluster._id}}>{{ cluster.name }} - {{ cluster.building }}</option>
                                </select>
                              </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                              <div class="col-xs-12 col-sm-12">
                                <select [(ngModel)]="selectedStreet._id" (change)="onSelectStreet($event.target.value)" class="inputForm" name="cars">
                                    <option value="0">-- Select Street Name --</option>
                                    <option *ngFor="#streetname of streetnames" value={{streetname._id}}>{{ streetname.name }} - Blok {{streetname.blok}}</option>
                                </select>
                              </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                              <div class="col-xs-12 col-sm-12">
                                <select [(ngModel)]="selectedHome._id" (change)="onSelectHome($event.target.value)" #subgroovyid id="subgroovyid" class="inputForm" name="cars">
                                    <option value="0">-- Select Home Number --</option>
                                    <option *ngFor="#home of homes" [value]=home._id>{{ home.nohome }}</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-sm-12">
                              <button (click)="editHome(subgroovyid.value)" type="submit" class="btn btn-default buttonOrange">
                                  SUBMIT
                              </button>
                              <button (click)="onItemClicked1(Cancel)" class="btn btn-default buttonOrange">
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
                                            <option class="option" value="0" selected="true">-- Select Field Engineer 1 --</option>
                                            <option *ngFor="#city of cities" class="option" [value]=city._id>{{ city.name }}</option>
                                        </select><br/>
                                    </form>
                                  </div>
                                  <div class="col-sm-6">
                                    <form>
                                      <select  [(ngModel)]="selectedEmp1._id" (change)="onSelectEmp1($event.target.value)" #empjob1 id="empjob1" class="form-control inputForm">
                                          <option class="option" value="0" selected="true">-- Select Field Engineer 2 --</option>
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

    selectedCity: City = new City(0, 'dummy');
    selectedProperty: City = new City(0, 'dummy');
    selectedCluster: City = new City(0, 'dummy');
    selectedStreet: City = new City(0, 'dummy');
    selectedHome: Home = new Home(0, 'dummy');

public clickedItem = {name: "View"};

onItemClicked(EditData) {
   this.clickedItem = {name: "EditData"};
}
onItemClicked0(Add) {
   this.clickedItem = {name: "EditAdd"};
}
onItemClicked1(Cancel) {
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
onSelectHome(_id) {
    console.log(nohome)
}
onSelectSales(_id){
  console.log(_id)
}
onSelectCity(_id) {
    this.properties = this.getAllPropertyByCity(){
        this.http.get(`${this.API}/property/propertybycity/${_id}`)
            .map(res => res.json())
            .subscribe(properties => {
                this.properties = properties
            })
    }
}

onSelectProperty(_id) {
    this.clusters = this.getAllClusterByProperty(){
        this.http.get(`${this.API}/cluster/clusterbyproperty/${_id}`)
            .map(res => res.json())
            .subscribe(clusters => {
                this.clusters = clusters
            })
    }
}

onSelectCluster(_id) {
this.streetnames = this.getAllStreetByCluster(){
    this.http.get(`${this.API}/streetname/streetnamebycluster/${_id}`)
        .map(res => res.json())
        .subscribe(streetnames => {
            this.streetnames = streetnames
        })
}
}

onSelectStreet(_id) {
    this.homes = this.getAllHomeByStreet(){
        this.http.get(`${this.API}/home/homebystreet/${_id}`)
            .map(res => res.json())
            .subscribe(homes => {
                this.homes = homes
            })
    }
}
    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    subs: any[] = [];
    emps: any[] = [];
    jobs: any[] = [];
    sessionemps: any[] = [];
    listpackages: any[] = [];
    cities: any[] = [];
    properties: any[] = [];
    clusters: any[] = [];
    homes: any[] = [];
    streetnames: any[] = [];
    sales: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    ngOnInit() {
      this.getAllCity();
      this.getSubs();
      this.getAllJob();
      this.getAcountEmp();
      this.getAllPackages();
      this.getSales();
      this.getAllEmployee();
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
    editHome(subgroovyid) {
        var body = `groovyid=${subgroovyid}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .put(`${this.API}/subscribe/editgroovyid/${this._routeParams.get('id')}`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Edit Address Succses');
                this.getSubs();
                this.clickedItem = {name: "View"};
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
    editSubs(editname, editemail, editphone, editid, editwifiid, editvendor, editbrithdate, editregisby, editregisref, editregissales) {
        var body = `name=${editname}&email=${editemail}&phone=${editphone}&idnumber=${editid}&wifiid=${editwifiid}&vendorfo=${editvendor}&datebirth=${editbrithdate}&regisby=${editregisby}&regisref=${editregisref}&sales=${editregissales}`;
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
  // Get all City from the API
      getAllCity() {
          this.http.get(`${this.API}/city/listcity`)
              .map(res => res.json())
              .subscribe(cities => {
                  this.cities = cities
              })
      }

      // Get all Property by city from the API
      getAllPropertyByCity() {
          this.http.get(`${this.API}/property/propertybycity/${this.city_id}`)
              .map(res => res.json())
              .subscribe(properties => {
                  this.properties = properties
              })
      }
      // Get all Type from the API
      getAllClusterByProperty() {
          this.http.get(`${this.API}/cluster/clusterbyproperty/${this.property_id}`)
              .map(res => res.json())
              .subscribe(clusters => {
                  this.clusters = clusters
              })
      }

      // Get all Home from the API
      getAllHomeByStreet() {
          this.http.get(`${this.API}/home/homebystreet/${this.street_id}`)
              .map(res => res.json())
              .subscribe(homes => {
                  this.homes = homes
              })
      }

          // Get all Street from the API
          getAllStreetByCluster() {
              this.http.get(`${this.API}/streetname/streetnamebycluster/${this.cluster_id}`)
                  .map(res => res.json())
                  .subscribe(streetnames => {
                      this.streetnames = streetnames
                  })
          }

      // Get all BLokfloor from the API
      getAllBLokfloorByCluster() {
          this.http.get(`${this.API}/blokfloor/blokfloorbycluster/${this.cluster_id}`)
              .map(res => res.json())
              .subscribe(blokfloors => {
                  this.blokfloors = blokfloors
              })
      }
  // Get all users from the API
  getAllJob() {
      this.http.get(`${this.API}/job/listjob`)
          .map(res => res.json())
          .subscribe(jobs => {
              this.jobs = jobs
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
  getSales() {
      this.http.get(`${this.API}/employee/list/Sales`)
          .map(res => res.json())
          .subscribe(sales => {
              this.sales = sales
          })
  }
}
