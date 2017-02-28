import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Bill } from './bills';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
   <div id="page-content-wrapper">
       <div class="content-header">
           <h3 id="home">
               <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
               </a>
               &nbsp; Billing
           </h3>

       </div>

       <div class="page-content inset" data-spy="scroll" data-target="#spy">
           <div class="row">
               <div class="col-lg-12">
                   <!-- Row Button -->
                   <div class="row rowButton">
                       <div class="col-sm-12">
                           <a href="billing.html" class="btn btn-default billInfoBack" type="button">
                               BACK
                           </a>
                           <a href="#" class="btn btn-default billInfoPrint" type="button">
                               PRINT
                           </a>
                       </div>
                   </div>
                   <!-- /Row Button -->

                   <!-- Content List -->
                   <div class="row rowBillInfoContList">
                       <div class="col-md-12">
                           <div class="row headerList">
                               <div class="col-sm-12 invoiceId"><strong>BILLING INFORMATION</strong></div>
                           </div>
                           <div class="row">
                               <div class="col-sm-12">
                                   <div class="row c1">
                                       <div class="col-sm-6">
                                           <div class="row rowBillInfoAddr">
                                               <div class="col-sm-12">
                                                   <div class="row">
                                                       <div class="col-sm-5">
                                                           <span><b>Rahmanto Wifajar</b></span>
                                                       </div>
                                                   </div>
                                                   <div class="row">
                                                       <div class="col-sm-5">
                                                           <span>Grand Pinus Regency</span><br>
                                                           <span>Pinus Barat No.33</span>
                                                           <span>Indonesia</span>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div class="col-sm-6">
                                           <div class="row rowBillinfoDate">
                                               <div class="col-sm-12">
                                                   <div class="col-sm-7">
                                                       <span>Subscriber ID</span>
                                                   </div>
                                                   <div class="col-sm-5">
                                                       <span>GR123456</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row rowBillinfoDate">
                                               <div class="col-sm-12 hid">
                                                   <div class="col-sm-4">
                                                       <span>Billing Due Date</span>
                                                   </div>
                                                   <div class="col-sm-4">
                                                       <span>Billing Date</span>
                                                   </div>
                                                   <div class="col-sm-4">
                                                       <span>Billing Number</span>
                                                   </div>
                                               </div>
                                               <div class="col-sm-12 billInfoDateList">
                                                   <div class="col-sm-4">
                                                       <span class="bildate"><b>Billing Due Date</b></span><br>
                                                       <span>Feb, 21 2017</span>
                                                   </div>
                                                   <div class="col-sm-4">
                                                       <span class="bildate"><b>Billing Date</b></span><br>
                                                       <span>Feb, 11 2017</span>
                                                   </div>
                                                   <div class="col-sm-4">
                                                       <span class="bildate"><b>Billing Number</b></span><br>
                                                       <span>1234567890</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div class="row rowBillInfoP1">
                                       <div class="col-sm-12">
                                           <span><b>Thank you for using our Groovy service. The following are the details of your bill.</b></span>
                                       </div>
                                   </div>
                                   <div class="row">
                                       <div class="col-md-12">
                                           <!-- HeaderList -->
                                           <div class="row hid">
                                               <div class="col-sm-12">
                                                   <div class="col-sm-10">
                                                       <span>Description</span>
                                                   </div>
                                                   <div class="col-sm-2">
                                                       <span class="right">Amount (Rp.)</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <!-- /HeaderList -->

                                           <!-- List -->
                                           <div class="row">
                                               <div class="col-sm-12 listWhite">
                                                   <div class="col-sm-10">
                                                       <span>Level 4 Package (Internet & UserTV)</span>
                                                   </div>
                                                   <div class="col-sm-2">
                                                       <span class="right">499.000</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row">
                                               <div class="col-sm-12 listWhite">
                                                   <div class="col-sm-10">
                                                       <span>Router rent</span>
                                                   </div>
                                                   <div class="col-sm-2">
                                                       <span class="right">40.000</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row">
                                               <div class="col-sm-12 listWhite">
                                                   <div class="col-sm-10">
                                                       <span>STB Rent</span>
                                                   </div>
                                                   <div class="col-sm-2">
                                                       <span class="right">45.000</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row">
                                               <div class="col-sm-12 listWhite">
                                                   <div class="col-sm-10">
                                                       <span>Cable</span>
                                                   </div>
                                                   <div class="col-sm-2">
                                                       <span class="right">0</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row">
                                               <div class="col-sm-12 listWhite">
                                                   <div class="col-sm-10">
                                                       <span>Instalation Charge</span>
                                                   </div>
                                                   <div class="col-sm-2">
                                                       <span class="right">75.000</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <!-- /List -->

                                           <!-- TotalList -->
                                           <div class="row">
                                               <div class="col-sm-12 listGrey">
                                                   <div class="col-sm-10">
                                                       <span class="right">TOTAL PRICE</span>
                                                   </div>
                                                   <div class="col-sm-2">
                                                       <span class="right">659.000</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row">
                                               <div class="col-sm-12 listGrey">
                                                   <div class="col-sm-10">
                                                       <span class="right">TAX 10%</span>
                                                   </div>
                                                   <div class="col-sm-2">
                                                       <span class="right">65.900</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row">
                                               <div class="col-sm-12 listGrey">
                                                   <div class="col-sm-10">
                                                       <span class="right">TOTAL PAYMENT</span>
                                                   </div>
                                                   <div class="col-sm-2">
                                                       <span class="right">563.000</span>
                                                   </div>
                                               </div>
                                           </div>
                                           <!-- /TotalList -->
                                       </div>
                                   </div>
                                   <div class="row rowBillInfoP2">
                                       <div class="col-sm-12">
                                           <h5>Subscriber hightlight information :</h5>
                                           <ul>
                                               <li>1. Please make payment before due date to avoid late payment fee of Rp. 25.000,- (before VAT) which will be.</li>
                                               <li>2. added to your next month's invoice.</li>
                                               <li>3. Payment is addressed to Bank Mandiri, Citra Garden Jak-Bar branch, account number 118 000 58977 97.</li>
                                               <li>4. beneficiary PT. Media Andalan Nusa.</li>
                                               <li>5. Please quote your Subscriber ID during payment</li>
                                               <li>6. Payment confirmation by sending an email to billing@groovy.id or contact number 021-5276616.</li>
                                               <li>7. Payment will be recognized after confirmation is acknowledged.</li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <!-- /Content List -->
               </div>
           </div>
       </div>
   </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentBillingComponent {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  Session_ID = '58b3cdac45912d052e2c85a5';

  bills: any[] = [];
  subs: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllBills();
    this.getAcountSub();
  }

// Get all users from the API
getAllBills() {
  this.http.get(`${this.API}/bill/listbill`)
    .map(res => res.json())
    .subscribe(bills => {
      this.bills = bills
    })
}
  getAcountSub() {
    this.http.get(`${this.API}/subscribe/sub/${this.Session_ID}`)
      .map(res => res.json())
      .subscribe(subs => {
        this.subs = subs
      })
  }
}
