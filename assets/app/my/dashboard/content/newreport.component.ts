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
                                    <select #category id="category" [(ngModel)]="selectedProblem.category" (change)="onSelectCategory($event.target.value)">
                                        <option class="option" value="0">-- Problem Catagory --</option>
                                        <option value="Internet Problem">Internet Problem</option>
                                        <option value="TV Problem">TV Problem</option>
                                        <option value="Billing Problem">Billing Problem</option>
                                        <option value="Account Problem">Account Problem</option>
                                    </select><br/>
                                </form>
                                <form>
                                    <select #subcategory id="subcategory" name="subcategory" (change)="onSelectSubCategory($event.target.value)">
                                        <option class="option" value="0">-- Select Internet Problem --</option>
                                        <option *ngFor="#problem of problems" [value] = "problem.desc" >{{ problem.subcategory }}</option>
                                    </select><br/>
                                </form>
                                <textarea id="message" class="input width100" name="message" rows="10" placeholder="*note"></textarea>
                                <input type="hidden" value="{{today | date:'medium'}}" #date class="form-control inputForm" />
                                <a (click)="addReport(category.value, subcategory.value, subs._id, date.value, message.value)" class="btn btn-default">
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
                                    <div class="col-sm-11" >
                                        Whats up..! What is going on ? <br> Please select the category of your problem
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div *ngIf="selectedSubProblem" class="col-sm-6">
                            <div class="alertNewReports">
                                <div class="row">
                                    <div class="col-sm-1">
                                        <i class="material-icons">info</i>
                                    </div>
                                    <div *ngFor="#descproblem of descproblems" class="col-sm-11" >
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
    today : Date = new Date();
    // Add one person to the API
    addReport(category, subcategory, subs, date, message) {
        var body = `category=${category}&subcategory=${subcategory}&sub=${subs}&dateopen=${date}`;
        var body2 = `sub=${subs}&date=${date}&message=${message}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post(`${this.API}/complaint/addcomplaint`,
                body, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Your Report Success');
                this.getAllComplaint();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
        this.http
            .post(`${this.API}/chatcomplaint/addchat`,
                body2, {
                    headers: headers
                })
            .subscribe(data => {
                alert('Add Your Report Success');
                this.getAllChat();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }

  selectedProblem: Problem = new Problem(0, 'dummy');
  selectedSubProblem: Problem;

  onSelectCategory(category) {
    console.log(category);
    this.problems = this.getProblem(){
      this.http.get(`${this.API}/problem/category/${category}`)
          .map(res => res.json())
          .subscribe(problems => {
            this.problems = problems
          })
    }
  }

  onSelectSubCategory(subcategory) {
    console.log(subcategory);
    this.descproblems = this.getDescProblem(){
      this.http.get(`${this.API}/problem/subcategory/${subcategory}`)
          .map(res => res.json())
          .subscribe(descproblems => {
            this.descproblems = descproblems
          })
    }
    this.selectedSubProblem = subcategory;
  }

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Session_ID = '58b3cdac45912d052e2c85a5';

  complaints: any[] = [];
  problems: any[] = [];
  descproblems: any[] = [];
  subs: any[] = [];
  chats: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllComplaint();
    this.getAcountSub();
  }

  getAllComplaint() {
    this.http.get(`${this.API}/complaint/listcomplaint`)
      .map(res => res.json())
      .subscribe(complaints => {
        this.complaints = complaints
      })
  }

  getAllChat() {
    this.http.get(`${this.API}/chatcomplaint/listchat`)
      .map(res => res.json())
      .subscribe(chats => {
        this.chats = chats
      })
  }
  getProblem() {
    this.http.get(`${this.API}/problem/category/${this.category}`)
      .map(res => res.json())
      .subscribe(problems => {
        this.problems = problems
      })
  }
  getDescProblem() {
    this.http.get(`${this.API}/problem/subcategory/${this.subcategory}`)
      .map(res => res.json())
      .subscribe(descproblems => {
        this.descproblems = descproblems
      })
  }

  getAcountSub() {
    this.http.get(`${this.API}/subscribe/detailsub`)
        .map(res => res.json())
        .subscribe(subs => {
          this.subs = subs
        })
  }

  /*getDescProblem(inputsubcategory) {
  var body = `subcategory=${inputsubcategory}`;
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
  }*/
}
