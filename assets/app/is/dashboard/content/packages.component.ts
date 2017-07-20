import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Cluster } from './cluster';
import { ContentClusterNameComponent } from './clustername.component';

@Component({
    selector: 'form-cpackages',
    template: `
    <!-- Page content -->
    <div *ngIf="emps.accessrole == '0' || emps.accessrole == '1' || emps.accessrole == '6' || emps.accessrole == '601'" id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Add Packages
            </h3>
        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add Packages</strong></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="formNewReport marginLR20">
                                        <form [ngFormModel]="myForm">
                                            <input [ngFormControl]="myForm.find('level')" style="margin:0px !important" #level type="text" class="form-control inputForm" id="level" placeholder="Level">
                                            <br/>
                                            <select [ngFormControl]="myForm.find('cluster')" #cluster id="cluster" [(ngModel)]="selectedClusters._id" (change)="onSelectClusters($event.target.value)">
                                                <option value="All">-- All Clusters --</option>
                                                <option *ngFor="#cluster of clusters" [value]=cluster._id>{{ cluster.name }}</option>
                                            </select><br/><br/>
                                            <select [ngFormControl]="myForm.find('detail')" #detail id="detail" name="package">
                                                <option disabled="true" selected="true" value="0">-- Select Detail --</option>
                                                <option value="Internet">Internet</option>
                                                <option value="Internet + TV">Internet + TV</option>
                                                <option value="Internet + TV + Voice">Internet + TV + Voice</option>
                                            </select><br/><br/>
                                            <select [ngFormControl]="myForm.find('type')" #type id="type" name="package">
                                                <option disabled="true" selected="true" value="0">-- Select Type --</option>
                                                <option value="Promo">Promo</option>
                                                <option value="Regular">Regular</option>
                                            </select><br/><br/>
                                            <input type="number" id="price" #price min="0" step="0.01" data-number-to-fixed="2" data-number-stepfactor="100" class="form-control inputForm" placeholder="Price">
                                            <input type="number">
                                        </form>                                     
                                        <div class="g-recaptcha" data-sitekey="6LdqYiMUAAAAAG24p30ejQSqeWdvTpD0DK4oj5wv"></div> 
                                        <button [disabled]="!myForm.valid" type="submit" (click)="addPackage(level.value, cluster.value, detail.value, type.value, price.value)" class="btn btn-default buttonOrange">
                                            SEND
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>List Package</strong></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-sm-12" *ngFor="#package of packages">
                                            <div class="row subInfo">
                                                <div class="col-sm-4 invoiceList"><span>Level {{package.level}} - {{package.type}}</span></div>
                                                <div class="col-sm-2 invoiceList"><span>Rp. {{package.price | number:'2.2-4'}}</span></div>
                                                <div class="col-sm-3 invoiceList"><span>{{package.detail}}</span></div>
                                                <form-cluster [idcluster]=package.cluster></form-cluster>
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
    <div *ngIf="emps.accessrole == '2' || emps.accessrole == '201' || emps.accessrole == '202' || emps.accessrole == '3' || emps.accessrole == '301' || emps.accessrole == '4' || emps.accessrole == '401' || emps.accessrole == '402' || emps.accessrole == '5' || emps.accessrole == '501' || emps.accessrole == '502' || emps.accessrole == '7' || emps.accessrole == '701' || emps.accessrole == '702' || emps.accessrole == '8' || emps.accessrole == '801'">
        <div class="center"><span style="font-size: 72px; font-weight: 700; color: #c1c1c1;"><center>404</center> PAGE NOT FOUND</span><br><hr class="hr1"></div>
    </div>
    <!-- Modal -->
    <div id="failed" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="alert alert-danger alert-dismissible fade in" role=alert>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4>An error occured</h4>
            </div>
        </div>
    </div>
    <!-- END CONTENT -->
    `,
    directives: [ContentClusterNameComponent, ROUTER_DIRECTIVES],
})
export class ContentPackagesComponent implements OnInit {
myForm: ControlGroup;
API = 'http://202.162.207.164:3000';
emps: any[] = [];
clusters: any[] = [];
constructor(private _fb:FormBuilder, private http: Http) {}

// Angular 2 Life Cycle event when component has been initialized
ngOnInit() {
    this.getAllPackages();
    this.getAcountEmp();
    this.getAllCluster();
    this.myForm = this._fb.group({
      level: ['', Validators.required],
      cluster: ['All', Validators.required]
      detail: ['0', Validators.required]
      type: ['0', Validators.required]
    })
}
selectedClusters: Cluster = new Cluster(0, 'dummy');
// Get all Property by city from the API
getAllPackages() {
    this.http.get(`${this.API}/package/listpackage`)
        .map(res => res.json())
        .subscribe(packages => {
            this.packages = packages
        })
}
getAllCluster() {
    this.http.get(`${this.API}/cluster/listcluster`)
        .map(res => res.json())
        .subscribe(clusters => {
            this.clusters = clusters
        })
}
    addPackage(level, cluster, detail, type, price) {

        var body = `level=${level}&cluster=${cluster}&detail=${detail}&type=${type}&price=${price}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/package/addpackage`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Packages Success');
                this.getAllPackages();
            }, error => {
                $('#failed').modal('show');
                //console.log(JSON.stringify(error.json()));
            });
    }
    getAcountEmp() {
        this.http.get(`${this.API}/subscribe/detailemp`)
            .map(res => res.json())
            .subscribe(emps => {
                this.emps = emps
            }
          )
    }
}
