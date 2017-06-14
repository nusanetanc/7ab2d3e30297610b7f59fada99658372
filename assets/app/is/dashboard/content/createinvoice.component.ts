import {Component, OnInit, Attribute} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import {MomentModule} from 'angular2-moment';
import 'rxjs/add/operator/map';
import { Billing } from './billing';
import { Sub } from './subs';
import { ContentPackLevComponent } from './packlev.component';
import { ContentInputPackComponent } from './inputpack.component';

@Component({
    selector: 'form-crateinvoice',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
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
                                    <form-packlev *ngIf="subs.idpackage" [packid]=subs.idpackage></form-packlev>
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
                                    <span>{{ stringAsDate(subs.activedate) }}</span>
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
                                    <span>Pinalty Pay</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.pinaltypay }}</span>
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
                                    <input value="{{today | date: 'yyyy'}}/{{today | date: 'MM'}}/{{today | date: 'dd'}}" class="form-control inputForm" #invoicedate id="invoicedate" placeholder="Invoice Date" />
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
                                    <span>Package Level</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input [(ngModel)]="packages.level" type="number" class="form-control inputForm" #namepackage id="namepackage" placeholder="Package Level" />
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
                                    <input [(ngModel)]="packages.price" type="number" class="form-control inputForm" #packageprice id="packageprice" placeholder="Package Price" />
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Promo</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div  class="col-xs-12 col-md-7">
                                  <input *ngIf="packages.type == 'Promo'" value="yes" type="text" class="form-control inputForm" #promoname id="promoname" placeholder="yes/no"/>
                                  <input *ngIf="packages.type == 'Default'" value="no" type="text" class="form-control inputForm" #promoname id="promoname" placeholder="yes/no"/>
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
                                    <input value=40000 type="number" class="form-control inputForm" #routerprice id="routerprice" placeholder="Router Rent" />
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
                                    <input value="0" type="number" class="form-control inputForm" #stbprice id="stbprice1" placeholder="STB Rent" />
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
                                    <input *ngIf="subs.status == 'registrasi'" value="75000" type="number" class="form-control inputForm" #instalationprice1 id="instalationprice1" placeholder="Instalation Price" />
                                    <input *ngIf="subs.status != 'registrasi'" value="0" type="number" class="form-control inputForm" #instalationprice2 id="instalationprice2" placeholder="Instalation Price" />
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
                                    <input value="0" type="number" class="form-control inputForm" #cablerj45price1 id="cablerj45price1" placeholder="Cable/Rj45 Price"/>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Pinalty Price</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <input [(ngModel)]="subs.pinaltypay" type="number" class="form-control inputForm" #pinaltyprice id="pinaltyprice" placeholder="Pinalty Price" />
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
                                    <input [(ngModel)]= "subs.pinaltypay ++ packages.price ++ routerprice.value" type="number" class="form-control inputForm" #subtotal id="subtotal" placeholder="Sub Total" />
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
                                    <input [(ngModel)]="tax"  type="number" class="form-control inputForm" #taxprice id="taxprice" placeholder="Tax" />
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
                                    <input [(ngModel)]="totalbayar"  type="number" class="form-control inputForm" #totalprice id="totalprice" placeholder="Sub Total" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-left: 3px !important;">
                    <div class="col-sm-12">
                        <div class="g-recaptcha" data-sitekey="6LdqYiMUAAAAAG24p30ejQSqeWdvTpD0DK4oj5wv"></div>
                        <!-- Small modal -->
                        <button type="submit" (click)="createInvoice(invoicedate.value, duedate.value, namepackage.value, packageprice.value, routerprice.value, subtotal.value, promoname.value, taxprice.value, totalprice.value)" class="btn btn-default buttonOrange marginT20 marginL20 paddingL10">CONFIRM</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div id="failed" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="alert alert-danger alert-dismissible fade in" role=alert>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4>'An error occured'</h4>
            </div>
        </div>
    </div>
    <div id="success" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="alert alert-success alert-dismissible fade in" role=alert>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4>'Create New Invoice Success'</h4>
            </div>
        </div>
    </div>
    <!-- END CONTENT   -->`,
    directives: [ContentPackLevComponent, ContentInputPackComponent, ROUTER_DIRECTIVES],
})

export class ContentCreateInvoiceComponent implements OnInit {
today : Date = new Date();

    stringAsDate(dateStr: string) {
        return new Date(dateStr);
    }

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';
  paketlev = '1'
  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllBill();
    this.getSubs();
    this.getPackages();
  }

// Declare empty list of people
bills: any[] = [];
subs: any[] = [];
prices: any[] = [];
packages: any[] = [];
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
  createInvoice(invoicedate, duedate, namepackage, packageprice, routerprice, subtotal, promoname, taxprice, totalprice) {
  var body = `namepack=${namepackage}&pricepack=${packageprice}&pricerouter=${routerprice}&
  promoname=${promoname}&changetax=${taxprice}&totalprice=${subtotal}&totalpay=${totalprice}&
  billdate=${invoicedate}&duedate=${duedate}&status='Waiting For Payment'&sub=${this._routeParams.get('id')}`;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
        .post(`${this.API}/bill/addbill`,
          body, {
            headers: headers
          })
          .subscribe(data => {
            //$('#success').modal('show');
            this.getAllBill();

          }, error => {
            $('#failed').modal('show');
            //console.log(JSON.stringify(error.json()));
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
    })
    }
    getPackages() {
    this.http.get(`${this.API}/package/package/${this._routeParams.get('package')}`)
      .map(res => res.json())
      .subscribe(packages => {
        this.packages = packages
      })
      }
}
