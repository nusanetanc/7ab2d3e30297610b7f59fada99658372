import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Billing } from './billing';


@Component({
    selector: 'form-crateinvoice',
    template: `
    <!-- Page content -->
<div id="page-content-wrapper">
    <div class="content-header">
        <h3 id="home">
            <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
            </a>
            &nbsp; BILLING
        </h3>

    </div>
    <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row subInfo">
                <div class="col-sm-12">

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h4 class="titleH4">NEW INVOICE</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 paddingL35">
                                    <form class="paddingTB20 paddingR30">
                                        <div class="form-group">
                                            <input type="text" class="form-control inputForm" #billingdate id="billingdate" placeholder="Billing Date">
                                            <input type="text" class="form-control inputForm" #billingduedate id="billingduedate" placeholder="Billing Due Date">
                                            <input type="text" class="form-control inputForm" #subsid id="subsid" placeholder="Subscribe ID"  disabled="true">
                                            <select #namepackage id="namepackage" class="inputForm">
                                                <option disabled="true" selected="true">-- Select Package --</option>
                                                <option value="1">Level 1</option>
                                                <option value="2">Level 2</option>
                                                <option value="3">Level 3</option>
                                                <option value="4">Level 4</option>
                                                <option value="5">Level 5</option>
                                                <option value="6">Level 6</option>
                                            </select><br/>
                                            <input type="text" class="form-control inputForm" #packageprice id="packageprice" placeholder="Package Price">
                                            <input type="text" class="form-control inputForm" #routerprice id="routerprice" placeholder="Router Rent Fee">
                                            <input type="text" class="form-control inputForm" #stbprice id="stbprice" placeholder="STB Rent Fee">
                                            <input type="text" class="form-control inputForm" #cablej45price id="cablej45price" placeholder="Cable/RJ45">
                                            <input type="text" class="form-control inputForm" #instalationprice id="instalationprice" placeholder="Instalation Fee">
                                            <input type="text" class="form-control inputForm" #subtotal id="subtotal" placeholder="Subtotal">
                                            <input type="text" class="form-control inputForm" #promoname id="promoname" placeholder="Promo Name">
                                            <input type="text" class="form-control inputForm" #promoprice id="promoprice" placeholder="Promo Price">
                                            <input type="text" class="form-control inputForm" #taxprice id="taxprice" placeholder="Tax 10%">
                                            <input type="text" class="form-control inputForm" #totalprice id="totalprice" placeholder="Total Pay">
                                        </div>
                                    </form>
                                </div>
                            </div>

                    <div class="row">
                        <div class="col-sm-12 paddingR45">
                            <!-- Small modal -->
                            <button type="submit" (click)="createInvoice(billingdate.value, billingduedate.value, subsid.value, namepackage.value, packageprice.value, routerprice.value, stbprice.value, cablej45price.value, instalationprice.value, subtotal.value, promoname.value, promoprice.value, taxprice.value, totalprice.value)" class="btn btn-default buttonOrange marginT20 marginL20" data-toggle="modal" data-target="#success">CONFIRM</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    </div>

</div></div><!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCreateInvoiceComponent implements OnInit {
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

  // Declare empty list of people
  bills: any[] = [];
  subs: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllBill();
    this.getSubs();
  }


// Add one person to the API
  createInvoice(billingdate, billingduedate, subsid, namepackage, packageprice, routerprice, stbprice, cablej45price, instalationprice, subtotal, promoname, promoprice, taxprice, totalprice) {

  var body = `namepack=${namepackage}&pricepack=${packageprice}&priceinstal=${instalationprice}&pricerouter=${routerprice}&
  pricestb=${stbprice}&pricerj45cable=${cablej45price}&promoname=${promoname}&pricepromo=${promoprice}
  &changetax=${taxprice}&totalprice=${subtotal}&totalpay=${totalprice}&billdate=${billingdate}&duedate=${billingduedate}
  &status='Waiting For Payment'&sub=${subsid}`;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
        .post(`${this.API}/bill/addbill`,
          body, {
            headers: headers
          })
          .subscribe(data => {
                alert('Create New Invoice Success');
                this.getAllBill();
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
  }

  // Get all Sub from the API
  getAllBill() {
    this.http.get(`${this.API}/bill/listbill`)
      .map(res => res.json())
      .subscribe(bills => {
        this.bills = bills
      })
  }
}
