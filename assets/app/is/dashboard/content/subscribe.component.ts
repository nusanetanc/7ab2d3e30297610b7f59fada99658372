import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'form-dashboard',
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
              <div class="row marginB20 marginR0">
                  <div class="col-sm-12">
                      <a [routerLink]="['AllSubs']" class="btn btn-default buttonBack" type="button">
                          BACK
                      </a>
                  </div>
              </div>
              <div class="row subInfo">
                  <div class="col-sm-12">
                      <div class="row">
                          <div class="col-sm-12">
                              <h4>PERSONAL INFORMATION</h4>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-sm-6">
                              <div class="row marginTB10 marginL5">
                                  <div class="col-xs-6 col-sm-4">
                                      <span>Fullname</span>
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
                                      <span>Address</span>
                                  </div>
                                  <div class="col-xs-6 col-sm-1">
                                      <span>:</span>
                                  </div>
                                  <div class="col-xs-12 col-md-7">
                                      <span>Jln. Media No. 14,<br>Komplek Indah, Bandung</span>
                                  </div>
                              </div>
                              <div class="row marginTB10 marginL5">
                                  <div class="col-xs-6 col-sm-4">
                                      <span>Identy Card</span>
                                  </div>
                                  <div class="col-xs-6 col-sm-1">
                                      <span>:</span>
                                  </div>
                                  <div class="col-xs-12 col-md-7">
                                      <div style="height: 80px; width: 120px; background-color: #CCCCCC;"></div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-sm-6">
                              <div class="row">
                                  <div class="col-xs-6 col-md-3">
                                      <img style="border-radius: 50%; height: 250px; width: 250px;" src="ava.png" alt="ava">
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
                                      <span>Level {{ subs.packlev }} (Internet & TV)</span>
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
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentSubscribeComponent {
  // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';
    GET_Id = '58bce3932973b2146b49d20e';

    // Declare empty list of people
    subs: any[] = [];

    constructor(private http: Http) {}

    // Angular 2 Life Cycle event when component has been initialized
    ngOnInit() {
      this.getSub();
    }

  // Get all users from the API
  getSub() {
    this.http.get(`${this.API}/subscribe/sub/${this.GET_Id}`)
      .map(res => res.json())
      .subscribe(subs => {
        this.subs = subs
      })
  }
}
