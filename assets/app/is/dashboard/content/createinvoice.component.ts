import {Component, OnInit, Attribute} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import {MomentModule} from 'angular2-moment';
import 'rxjs/add/operator/map';
import { Billing } from './billing';
import { Sub } from './subs';

@Component({
    selector: 'form-crateinvoice',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; BILLING
            </h3>
        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
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
                                    <span>{{ subs.address }} No. {{ subs.nohome }},<br>{{ subs.cluster }}, {{ subs.city }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>No Identy Card</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.idnumber }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Birth Date</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.datebirth }}</span>
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
                                    <span>Level {{ subs.packlev }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Price Package</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.packprice }}</span>
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
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Active Date</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.activedate }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>No Virtual Account</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.nova }}</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Promo</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.promo }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 class="titleH4">NEW INVOICE</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Invoice Date</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input value="{{today | date: 'yyyy'}}/{{today | date: 'MM'}}/{{today | date: 'dd'}}" class="form-control inputForm" #invoicedate id="invoicedate" placeholder="Invoice Date" disabled/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Due Date</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input value="{{today | date: 'yyyy'}}/{{today | date: 'MM'}}/{{today.getDate()+3}}" class="form-control inputForm" #duedate id="duedate" placeholder="Due Date"/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Package Price</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input [(ngModel)]="subs.packprice" type="number" class="form-control inputForm" #packageprice id="packageprice" placeholder="Package Price" disabled/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Prorate Price</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input value="0" type="number" class="form-control inputForm" #prorateprice id="prorateprice" placeholder="Prorate Price"/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5" >
                                <div class="col-xs-6 col-sm-4">
                                    <span>Router Rent</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input value="40000" type="number" class="form-control inputForm" #routerprice id="routerprice" placeholder="Router Rent" disabled/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5" >
                                <div class="col-xs-6 col-sm-4">
                                    <span>STB Rent</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input *ngIf="subs.packlev == '4' || subs.packlev == '5' || subs.packlev == '6'" value="45000" type="number" class="form-control inputForm" #stbprice id="stbprice" placeholder="STB Rent" disabled/>
                                    <input *ngIf="subs.packlev == '1' || subs.packlev == '2' || subs.packlev == '3'" value="0" type="number" class="form-control inputForm" #stbprice id="stbprice" placeholder="STB Rent" disabled/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Instalation</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input *ngIf="subs.status == 'registrasi'" value="75000" type="number" class="form-control inputForm" #insprice id="insprice" placeholder="Instalation Price" disabled/>
                                    <input *ngIf="subs.status != 'registrasi'" value="0" type="number" class="form-control inputForm" #insprice id="insprice" placeholder="Instalation Price" disabled/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Cable/Rj45</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input *ngIf="subs.status == 'registrasi'" value="0" type="number" class="form-control inputForm" #cablerj45price id="cablerj45price" placeholder="Cable/Rj45 Price"/>
                                    <input *ngIf="subs.status != 'registrasi'" value="" type="number" class="form-control inputForm" #cablerj45price id="cablerj45price" placeholder="Cable/Rj45 Price"/>
                                </div>
                            </div>
                            <input #key_val (keyup)="0" type="number">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Promo Name</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                  <input [(ngModel)]="subs.promo" type="text" class="form-control inputForm" #promoname id="promoname" placeholder="Promo Name" disabled/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Promo Price</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input value="0" type="number" class="form-control inputForm" #promoprice id="promoprice" placeholder="Promo Price" disabled/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Sub Total</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input [(ngModel)]= "parseInt('key_val.value') + parseInt('totalharga')" type="number" class="form-control inputForm" #subtotal id="subtotal" placeholder="Sub Total" disabled/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Tax</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input [(ngModel)]="tax"  type="number" class="form-control inputForm" #taxprice id="taxprice" placeholder="Tax" disabled/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Total Price</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input [(ngModel)]="totalbayar"  type="number" class="form-control inputForm" #totalprice id="totalprice" placeholder="Sub Total" disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-left: 3px !important;">
                    <div class="col-sm-12">
                        <!-- Small modal -->
                        <button type="submit" (click)="createInvoice(billingdate.value, billingduedate.value, subsid.value, namepackage.value, packageprice.value, routerprice.value, stbprice.value, cablej45price.value, instalationprice.value, subtotal.value, promoname.value, promoprice.value, taxprice.value, totalprice.value)" class="btn btn-default buttonOrange marginT20 marginL20 paddingL10" data-toggle="modal" data-target="#success">CONFIRM</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END CONTENT   -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCreateInvoiceComponent implements OnInit {
today : Date = new Date();

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  paketlev = '1'
  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllBill();
    this.getSubs();
  }

// Declare empty list of people
bills: any[] = [];
subs: any[] = [];
prices: any[] = [];
routerrent: number;
totalharga: number;
tax: number;
totalbayar: number;
total:number;

      constructor(private http: Http, private _routeParams: RouteParams) {
      }

  public listPromo = [
      {name:"Potongan 100 Ribu", harga:100000}
   ];


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

  getSubs() {
  this.http.get(`${this.API}/subscribe/subs/${this._routeParams.get('id')}`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
      if(subs['packlev'] == '1' || subs['packlev'] == '2' || subs['packlev'] == '3'){
          this.total = subs['packprice'];
          this.totalharga = this.total + 40000;
      }
      if(subs['packlev'] == '4' || subs['packlev'] == '5' || subs['packlev'] == '6'){
          this.total = subs['packprice'];
          this.totalharga = this.total + 40000 + 45000;
      }
      if(subs['status'] =! 'registrasi'){
        this.totalharga = this.totalharga + 75000;
      }
      this.tax = this.totalharga * 0.1;
      this.totalbayar = this.totalharga + this.tax;
    })
    }

}
