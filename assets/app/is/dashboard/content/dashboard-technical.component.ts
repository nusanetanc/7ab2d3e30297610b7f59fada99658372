import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import {Report} from './allreports';

@Component({
    selector: 'form-dashboard-tech',
    template: `
    <!-- START CONTENT -->
    <div id="page-content-wrapper">
       <div class="content-header">
          <h3 id="home">
             <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
             </a>
             &nbsp; Dashboard-Technical
          </h3>
       </div>
       <div class="page-content inset" data-spy="scroll" data-target="#spy">
          <div class="row">
             <div class="col-sm-12">
                <div class="row marginLR15">
                   <div class="col-sm-4">
                      <div class="cardDashboardSub">
                         <div class="row white">
                            <div class="col-sm-12">
                               <h4 class="marginT20 marginL20">WAITING INSTALLATION</h4>
                               <br>
                               <p class="text-center numberInCardBilling"><b>12</b></p>
                               <h4 class="text-center">SUBSCRIBERS</h4>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="col-sm-4">
                      <div class="cardDashboardSub">
                         <div class="row white">
                            <div class="col-sm-12">
                               <h4 class="marginT20 marginL20">WAITING MAINTENANCE</h4>
                               <br>
                               <p class="text-center numberInCardBilling"><b>2</b></p>
                               <h4 class="text-center">SUBSCRIBERS</h4>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="col-sm-4">
                      <div class="cardDashboardSub">
                         <div class="row white">
                            <div class="col-sm-12">
                               <h4 class="marginT20 marginL20">WAITING DISMANTLE</h4>
                               <br>
                               <p class="text-center numberInCardBilling"><b>3</b></p>
                               <h4 class="text-center">SUBSCRIBERS</h4>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <!-- Content List -->
          <div class="row paddingLR15Margin20">
             <div class="col-sm-12">
                <div class="row headerList paddingLR30">
                   <div class="col-sm-12 paddingT20 paddingL35 hid headerSubList"><strong>LATEST USER REPORT</strong></div>
                </div>
                <div class="row subInfo">
                   <div class="col-sm-2 invoiceId"><span><a href="reportreplay.html" class="grey333">11 Feb 2017</a></span></div>
                   <div class="col-sm-8 invoiceList"><span><a href="reportreplay.html" class="grey333">Unstable Internet Connection</a></span></div>
                   <div class="col-sm-2 invoiceList"><span class="red">On Progress</span></div>
                </div>
                <div class="row subInfo">
                   <div class="col-sm-2 invoiceId"><span>09 Feb 2017</span></div>
                   <div class="col-sm-8 invoiceList"><span>Account can't login in other device</span></div>
                   <div class="col-sm-2 invoiceList"><span class="green">Solved</span></div>
                </div>
                <div class="row subInfo">
                   <div class="col-sm-2 invoiceId"><span>21 Jan 2017</span></div>
                   <div class="col-sm-8 invoiceList"><span>Unstable Internet Connection</span></div>
                   <div class="col-sm-2 invoiceList"><span class="green">Solved</span></div>
                </div>
                <div class="row subInfo">
                   <div class="col-sm-12 invoiceId"><span><a href="" class="linkViewAll"><b>View all informaiton</b></a></span></div>
                </div>
             </div>
          </div>
          <!-- /Content List -->
       </div>
    </div>
    <!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDashboardTechComponent {
    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    complaints: any[] = [];
    subs: any[] = [];

    constructor(private http: Http) {}

    ngOnInit() {
        this.getAllReport();
        this.getAllSub();
    }

    // Get all users from the API
    getAllReport() {
        this.http.get(`${this.API}/complaint/listcomplaint`)
            .map(res => res.json())
            .subscribe(complaints => {
                this.complaints = complaints
            })
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
