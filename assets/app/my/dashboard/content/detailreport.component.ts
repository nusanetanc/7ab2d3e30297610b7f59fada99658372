import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Complaint } from './complaints';
import {Observable} from 'rxjs/Observable';
import {ContentSubsNameComponent} from './subsname.component';
import {ContentEmpsNameComponent} from './empsname.component';
import { PushNotificationComponent } from './ng2-notifications'

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Report
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                      <a [routerLink]="['Reports']" class="btn btn-default buttonBack" type="button">
                          BACK
                      </a>
                </div>
            </div>
            <div class="row subInfo roboto grey8b reportDetail">
                <div class="col-sm-12">
                    <div class="row marginB20">
                        <div class="col-sm-10 "><span><b class="grey333">{{ complaints.subcategory }}</b></span></div>
                    </div>
                    <div class="row" *ngFor="#chat of chats">
                        <div class="col-sm-1 col-xs-12"><img class="ava" src="./images/ava.png" alt="ava"></div>
                        <div class="col-sm-10 col-xs-12 postBy marginT10"><span>Posted <b class="grey333">{{ stringAsDate(chat.date) | date:'medium' }}</b> by
                              <b *ngIf="chat.userStatus == 'Subscribe'" class="grey333"><form-subs [idsubs]=chat.userId></form-subs></b>
                              <b *ngIf="chat.userStatus == 'Helpdesk'" class="grey333"><form-emps [idemps]=chat.userId></form-emps></b>
                          <u>{{ chat.userStatus }}</u><br><br>{{ chat.message }}</span></div>
                        <div class="col-sm-10 col-xs-12 col-sm-offset-1">
                            <hr class="hr-report">
                        </div>
                    </div>
                    <div *ngIf="complaints.status == 'open'">
                        <div class="row">
                          <div class="col-sm-1 col-xs-12"><img class="ava marginB10" src="./images/ava.png" alt="ava"></div>
                             <div class="col-sm-10 col-xs-12">
                                <textarea id="message" #message class="input width100" rows="10" placeholder="*Type message here"></textarea>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 marginB20">
                                <button type="submit" (click)="addReport(message.value)" class="btn btn-default buttonOrange">
                                    SEND
                                </button>
                            </div>
                          </div>
                        </div>
                  </div>
            </div>
        </div>
    </div>
    <h6 style="margin-bottom: 0">VALUES:</h6>
	  <div *ngFor="let value of values">- {{ value }}</div>
    <button style="margin-top: 2rem;" (click)="init()">Init</button>
    `,
    directives: [ContentSubsNameComponent, PushNotificationComponent, ContentEmpsNameComponent, ROUTER_DIRECTIVES],
})
export class ContentDetailReportComponent implements OnInit {

private data: Observable<Array<number>>;
private values: Array<number> = [];
private anyErrors: boolean;
private finished: boolean;

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
complaints: any[] = [];
chats: any[] = [];

  constructor(private http: Http, private _routeParams: RouteParams) {}

  ngOnInit() {
    this.getDetailReport();
    this.getChatReport();
    this.data = new Observable(observer => {
        setTimeout(() => {
            observer.next(42);
        }, 1000);

        setTimeout(() => {
            observer.next(43);
        }, 2000);

        setTimeout(() => {
            observer.complete();
        }, 3000);
    });

      let subscription = this.data.subscribe(
          value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );
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
        .post(`${this.API}/subscribe/addchat/subs/${this._routeParams.get('id')}`,
            body, {
                headers: headers
            })
        .subscribe(data => {
            this.getChatReport();
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
}
}
