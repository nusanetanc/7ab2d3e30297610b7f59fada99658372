import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-allsubs',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Information
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                  <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                  <div class="dropdown right">
                      <a class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="background-color: #E2E2E2; border: none; border-radius: 0px; color: #676767; padding: 12.5px 40px 12.5px 40px; text-decoration: none;">
                          DATE
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li><a href="#">NAME</a></li>
                          <li><a href="#">ID</a></li>
                      </ul>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                  <div class="row subInfo">
                      <div class="col-sm-2 invoiceId"><span><a href="information-detail.html" class="linkGrey">11 Feb 2017</a></span></div>
                      <div class="col-sm-8 invoiceList"><span><a href="information-detail.html" class="linkGrey">Fiber Optic Network Disruption</a></span></div>
                      <div class="col-sm-2 invoiceList"><span style="color: red;">On Progress</span></div>
                  </div>
                  <div class="row subInfo">
                      <div class="col-sm-2 invoiceId"><span>09 Feb 2017</span></div>
                      <div class="col-sm-8 invoiceList" style="padding: 20px 0px 20px 0px;"><span>Network Server Maintenance</span></div>
                      <div class="col-sm-2 invoiceList" style="padding: 20px 0px 20px 0px;"><span style="color: green;">Solved</span></div>
                  </div>
                  <div class="row subInfo">
                      <div class="col-sm-2 invoiceId" style="padding: 20px 0px 20px 35px;"><span>21 Jan 2017</span></div>
                      <div class="col-sm-8 invoiceList" style="padding: 20px 0px 20px 0px;"><span>Welcome to Groovy</span></div>
                      <div class="col-sm-2 invoiceList" style="padding: 20px 0px 20px 0px;"><span></span></div>
                  </div>
                </div>
            </div>
        </div>
    </div><!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentInformationComponent {

}
