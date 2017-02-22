import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Sub } from './subs';

@Component({
    selector: 'form-allsubs',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
      <div class="content-header">
          <h3 id="home">
            <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
            </a>
              &nbsp; Dashboard
          </h3>

      </div>

    <div class="page-content inset" data-spy="scroll" data-target="#spy">
        <div class="row">
            <div class="form-group col-lg-12">
                <div class="inner-addon right-addon">
                    <i class="glyphicon glyphicon-search"></i>
                    <input type="text" class="form-control" placeholder="Search" />
                </div>
            </div>
            <div class="col-lg-12" style="margin: -7px 0 -12px 0;">
                <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                <div class="dropdown" style="float: right;">
                    <a class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Name
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Date</a></li>
                        <li><a href="#">ID</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-12" style="margin-top: 20px;">
                <ul class="subscriber-list" *ngFor="#sub of subs">
                    <li>
                        <div class="row">
                            <div class="col-md-1 list-nik"><span>{{ sub.subid }}</span></div>
                            <div class="col-md-9 list-name"><span></span></div>
                            <div class="col-md-1 list-activ"><span style="color: green;"></span></div>
                            <div class="col-md-1 list-paid"><span style="color: red;"></span></div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</div><!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllSubsComponent {

  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    // Declare empty list of people
    subs: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
      this.getAllSub();
    }

  // Get all users from the API
  getAllSub() {
    this.http.get(`${this.API}/subscribe/listsub`)
      .map(res => res.json())
      .subscribe(subs => {
        console.log(subs)
        this.subs = subs
      })
  }
}
