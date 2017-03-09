import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Complaint } from './complaints';
import { Problem } from './problem';

@Component({
    selector: 'form-newreport',
    template: `
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Send New Reports
            </h3>
        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row subInfo">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>TYPE OF PROBLEMS</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="formNewReport marginLR20">
                                <form>
                                    <select name="problemCatagory">
                                        <option class="option" disabled="true" selected="true">-- Problem Catagory --</option>
                                        <option value="volvo">Internet Problem</option>
                                        <option value="saab">TV Problem</option>
                                        <option value="fiat">Billing Problem</option>
                                        <option value="fiat">Account Problem</option>
                                    </select><br/>
                                </form>
                                <form>
                                    <select  #subcategory id="subcategory"  (click)="getDescProblem(subcategory.value)">
                                        <option class="option" disabled="true" selected="true">-- Select Internet Problem --</option>
                                        <option *ngFor="#problem of problems" value = "{{problem.subcategory}}" >{{ problem.subcategory }}</option>
                                    </select><br/>
                                </form>
                                <textarea id="message" class="input width100" name="message" rows="10" placeholder="*note"></textarea>
                                <a href="#" class="btn btn-default">
                                    SEND
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="alertNewReports">
                                <div class="row">
                                    <div class="col-sm-1">
                                        <i class="material-icons">info</i>
                                    </div>
                                    <div class="col-sm-11" *ngFor="#descproblem of descproblems">
                                        Whats up..! What is going on ? <br> Please select the category of your problem
                                         {{ descproblem.desc }}
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
export class ContentNewReportComponent implements OnInit {

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Session_ID = '58b3cdac45912d052e2c85a5';

  complaints: any[] = [];
  problems: any[] = [];
  descproblems: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllComplaint();
      this.getProblem()
  }

  getAllComplaint() {
    this.http.get(`${this.API}/complaint/listcomplaint`)
      .map(res => res.json())
      .subscribe(complaints => {
        this.complaints = complaints
      })
  }
  getProblem() {
    this.http.get(`${this.API}/problem/listproblem`)
      .map(res => res.json())
      .subscribe(problems => {
        this.problems = problems
      })
  }
  getDescProblem(subcategory) {
  var body = `subcategory=${subcategory}`;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
      .post(`${this.API}/problem/desc`,
      body, {
        headers: headers
      })
      .subscribe(descproblems => {
        this.descproblems = descproblems
      })
  }
}
