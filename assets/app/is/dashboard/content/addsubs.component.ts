import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './subs';

@Component({
    selector: 'form-addsubs',
    template: `
    <!-- Page content -->
<div id="page-content-wrapper">
    <div class="content-header">
        <h3 id="home">
            <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
            </a>
            &nbsp; Subscribers
        </h3>

    </div>

    <div class="page-content inset" data-spy="scroll" data-target="#spy">
        <div class="row subInfo">
            <div class="col-sm-12">

                <div class="row">
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-12">
                                <h4 class="titleH4">PERSONAL INFORMATION</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 paddingL35">
                                <form class="paddingTB20 paddingR30">
                                    <div class="form-group">
                                        <input #subname id="subname" type="text" class="form-control inputForm" placeholder="Full Name">
                                        <input #subphone id="subphone" type="text" class="form-control inputForm" placeholder="Handphone">
                                        <input #subemail id="subemail" type="email" class="form-control inputForm" placeholder="Email">
                                        <p>Upload your National Identity Card</p>
                                        <div class="form-control inputForm">
                                            <button class="left" type="button">choose file</button>
                                            <p class="left marginL5">No choose file</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <h4 class="titleH4">INSTALLATION DATE</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 paddingL35">
                                <p>Please select a installation date</p>
                                <div class="form-group">
                                    <div class="input-group date paddingR30" id="datetimepicker1">
                                        <input #subdateinst id="subdateinst" type='text' class="form-control" />
                                        <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                    </div>
                                </div>

                                <p>Please select a available timeslot for that date</p>
                                <div class="marginB20">
                                    <input type="radio" name="vehicle" value="9:00 am" /> 9:00 am PST<br>
                                    <input type="radio" name="vehicle" value="10:00 am" /> 10:00 am PST<br>
                                    <input type="radio" name="vehicle" value="11:00 am" /> 11:00 am PST<br>
                                    <input type="radio" name="vehicle" value="12:00 am" /> 12:00 am PST<br>
                                    <input type="radio" name="vehicle" value="1:00 pm" /> 1:00 pm PST<br>
                                    <input type="radio" name="vehicle" value="2:00 pm" /> 2:00 pm PST<br>
                                    <input type="radio" name="vehicle" value="3:00 pm" /> 3:00 pm PST<br>
                                    <input type="radio" name="vehicle" value="4:00 pm" /> 4:00 pm PST
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-12">
                                <h4 class="titleH4">SUBSCRIPTION PLAN</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 paddingL35">
                                <form class="marginT20 paddingR30">
                                    <select #subpacklev id="subpacklev" name="package" class="inputForm">
                                        <option disabled="true" selected="true">-- Select Package --</option>
                                        <option value="1">Level 1 - Monthly - IDR 349 K</option>
                                        <option value="2">Level 1 - Monthly - IDR 549 K</option>
                                        <option value="3">Level 1 - Monthly - IDR 899 K</option>
                                        <option value="4">Level 1 - Monthly - IDR 499 K</option>
                                        <option value="5">Level 1 - Monthly - IDR 699 K</option>
                                        <option value="6">Level 1 - Monthly - IDR 999 K</option>
                                    </select><br/>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <h4 class="titleH4">ADDRESS</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 paddingL35">
                                <form class="marginT20 paddingR30">
                                    <select class="inputForm" name="cars">
                                        <option disabled="true" selected="true" style="height: 30px;">-- Select your city --</option>
                                        <option value="volvo" >Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form class="paddingR30">
                                    <select class="inputForm" name="property">
                                        <option class="option" disabled="true" selected="true">-- Select Property Name --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form class="paddingR30">
                                    <select class="inputForm" name="type">
                                        <option class="option" disabled="true" selected="true">-- Select Type --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form class="paddingR30">
                                    <select class="inputForm" name="cluster">
                                        <option class="option" disabled="true" selected="true">-- Select Cluster --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form class="paddingR30">
                                    <select class="inputForm" name="block">
                                        <option class="option" disabled="true" selected="true">-- Select Block --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form class="paddingR30">
                                    <select class="inputForm" name="no">
                                        <option class="option" disabled="true" selected="true">-- Select No. --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 paddingR45">
                                <button type="submit" (click)="addSub(subname.value, subphone.value)" class="btn btn-default buttonOrange right marginT125">
                                    REGISTER
                                </button>
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
export class ContentAddSubsComponent implements OnInit {

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

  // Declare empty list of people
  subs: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllSub();
  }

// Add one person to the API
  addSub(subname.value, subphone.value) {

  var body = `name=${subname}&phone=${subphone}`;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
        .post(`${this.API}/subscribe/addsub`,
          body, {
            headers: headers
          })
          .subscribe(data => {
                alert('Add New Subscribe Success');
                this.getAllReports();
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
  }

  // Get all users from the API
  getAllSub() {
    this.http.get(`${this.API}/subscribe/listsub`)
      .map(res => res.json())
      .subscribe(subs => {
        this.subs = subs
      })
  }
}
