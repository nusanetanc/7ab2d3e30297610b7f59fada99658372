import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Complaint } from './complaints';
import {ContentSubsNameComponent} from './subsname.component';
import {ContentEmpsNameComponent} from './empsname.component';
import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import {Message} from 'primeng/primeng';

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
                        <div class="col-sm-2 "><span class="grey333">Status : <span class="red">{{ complaints.status }}</span></span></div>
                    </div>
                    <div class="row" *ngFor="#chat of chats">
                        <div class="col-sm-1 col-xs-12"><img class="ava" src="./images/ava.png" alt="ava"></div>
                        <div class="col-sm-10 col-xs-12 postBy marginT10"><span>Posted <b class="grey333">{{ chat.date }}</b> by
                              <b *ngIf="chat.userStatus == 'Subscribe'" class="grey333"><form-subs [idsubs]=chat.userId></form-subs></b>
                              <b *ngIf="chat.userStatus == 'Helpdesk'" class="grey333"><form-emps [idemps]=chat.userId></form-emps></b>
                          <u>{{ chat.userStatus }}</u><br><br>{{ chat.message }}</span></div>
                        <div class="col-sm-10 col-xs-12 col-sm-offset-1">
                            <hr class="hr-report">
                        </div>
                    </div>
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
    <p-growl [value]="msgs" sticky="sticky"></p-growl>
    <div>
        <button type="button" pButton (click)="showSuccess()" label="Success" class="ui-button-success"></button>
        <button type="button" pButton (click)="showInfo()" label="Info" class="ui-button-info"></button>
        <button type="button" pButton (click)="showWarn()" label="Warn" class="ui-button-warning"></button>
        <button type="button" pButton (click)="showError()" label="Error" class="ui-button-error"></button>
        <button type="button" pButton (click)="showMultiple()" label="Multiple"></button>
        <button type="button" pButton (click)="clear()" icon="fa-close" style="float:right" label="Clear"></button>
    </div>
    `,
    directives: [ContentSubsNameComponent, ContentEmpsNameComponent, ROUTER_DIRECTIVES],
})
export class ContentDetailReportComponent implements OnInit {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

complaints: any[] = [];
chats: any[] = [];

  constructor(private http: Http, private _routeParams: RouteParams) {}

  ngOnInit() {
    this.getDetailReport();
    this.getChatReport();
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
        .post(`${this.API}/chatcomplaint/addchat/subs/${this._routeParams.get('id')}`,
            body, {
                headers: headers
            })
        .subscribe(data => {
            this.getChatReport();
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
}


msgs: Message[] = [];

    showInfo() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
    }

    showWarn() {
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
    }

    showError() {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
    }

    showMultiple() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
        this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
        this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
    }

    clear() {
        this.msgs = [];
    }
}
