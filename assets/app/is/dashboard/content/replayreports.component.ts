import {Component, OnInit, OnDestroy, NgZone} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';
import { Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Complaint } from './complaints';
import {ContentSubsNameComponent} from './subsname.component';
import {ContentEmpsNameComponent} from './empsname.component';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
    <div  id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Report
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                      <a [routerLink]="['AllReport']" class="btn btn-default buttonBack" type="button">
                          BACK
                      </a>
                          <button *ngIf="emps.accessrole == '801' && complaints.status == 'open'" type="submit" (click)="CloseReport()" class="btn btn-default buttonOrange right">
                              Close Report
                          </button>
                </div>
            </div>
            <div class="row subInfo roboto grey8b reportDetail">
                <div class="col-sm-12">
                    <div class="row marginB20">
                        <div class="col-sm-10 "><span><b class="grey333">{{ complaints.subcategory }}</b></span></div>
                        <div class="col-sm-2 "><span class="grey333">Status : <span class="red">{{ complaints.status }}</span></span></div>
                    </div>
                    <div class="row" *ngFor="#chat of chats">
                        <div class="col-sm-1 col-xs-12"><img class="ava" src="./images/ava.png" alt="ava"></div>
                        <div class="col-sm-10 col-xs-12 postBy marginT10"><span>Posted <b class="grey333">{{ stringAsDate(chat.date) | date:'medium' }}</b> by
                          <a *ngIf="chat.userStatus == 'Subscribe'" [routerLink]="['Subscribe', {id: chat.userId}]">
                              <b class="grey333"><form-subs [idsubs]=chat.userId></form-subs></b>
                          </a>
                          <a *ngIf="chat.userStatus == 'Helpdesk'">
                              <b class="grey333"><form-emps [idemps]=chat.userId></form-emps></b>
                          </a>
                          <u>{{ chat.userStatus }}</u><br><br>{{ chat.message }}</span></div>
                        <div class="col-sm-10 col-xs-12 col-sm-offset-1">
                            <hr class="hr-report">
                        </div>
                    </div>
                    <div *ngIf="emps.accessrole == '801' && complaints.status == 'open'">
                    <form class="form" [ngFormModel]="myForm">
                      <div class="row">
                          <div class="col-sm-1 col-xs-12"><img class="ava marginB10" src="./images/ava.png" alt="ava"></div>
                           <div class="col-sm-10 col-xs-12">
                              <textarea [ngFormControl]="myForm.find('message')" id="message" #message class="input width100" rows="10" placeholder="*Type message here"></textarea>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-sm-10 col-sm-offset-1 marginB20">
                              <button [disabled]="!myForm.valid" type="submit" (click)="addReport(message.value)" class="btn btn-default buttonOrange">
                                  SEND
                              </button>
                          </div>
                      </div>
                      </form>
                  </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ContentSubsNameComponent, ContentEmpsNameComponent, ROUTER_DIRECTIVES],
})
export class ContentReplayReportComponent implements OnInit {

myForm: ControlGroup;
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

complaints: any[] = [];
chats: any[] = [];
emps: any[] = [];

  constructor(private _fb:FormBuilder, private http: Http, private _routeParams: RouteParams) {}

  ngOnInit() {
    this.getDetailReport();
    this.getChatReport();
    this.getAcountEmp();
    let timer = Observable.timer(20000, 50000);
    timer.subscribe(() => this.getChatReport());
    this.myForm = this._fb.group({
      message: ['', Validators.required]
    })
  }

    stringAsDate(dateStr: string) {
        return new Date(dateStr);
    }

getDetailReport() {
  this.http.get(`${this.API}/complaint/complaint/${this._routeParams.get('id')}`)
    .map(res => res.json())
    .subscribe(complaints => {
      this.complaints = complaints
    })
}
getChatReport() {
  this.http.get(`${this.API}/chatcomplaint/chat/${this._routeParams.get('id')}`)
    .map(res => res.json())
    .subscribe(chats => {
      this.chats = chats
    })
}
addReport(message) {
    var body = `message=${message}`;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
        .post(`${this.API}/subscribe/addchat/helpdesk/${this._routeParams.get('id')}`,
            body, {
                headers: headers
            })
        .subscribe(data => {
            this.getChatReport();
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
}
CloseReport(){
    var body = `status='close'`;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
        .put(`${this.API}/complaint/close/${this._routeParams.get('id')}`,
            body, {
                headers: headers
            })
        .subscribe(data => {
            this.getDetailReport();
        }, error => {
            console.log(JSON.stringify(error.json()));
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
