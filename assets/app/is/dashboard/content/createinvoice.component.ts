import {Component, OnInit, Attribute} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Billing } from './billing';
import { Sub } from './subs';
import {Now} from './datetime'

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
                                    <span>{{ subs.datebrith }}</span>
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
                                    <span>Level {{ subs.packprice }}</span>
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
                                    <span>No Virtual Account</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>{{ subs.nova }}</span>
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
                                    <span><now format="'yyyy:MM:dd'"></now></span>
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
                                    <span><now format="'yyyy:MM:dd'"></now></span>
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
                                    <input (keyup)="onKey($event)" type="number" class="form-control inputForm" #packageprice id="packageprice" placeholder="Package Price" value="499000"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="col-sm-12 paddingL35">
                                <form class="paddingTB20 paddingR30">
                                    <div class="form-group">

                                        <div class="row">
                                            <div class="col-sm-12">
                                                <form class="paddingTB20">
                                                    <div class="input-group">
                                                        <span class="input-group-addon">
                                                            <input type="checkbox" #routercheck id="routercheck" (click)="onItemClickedRouter(Router)">
                                                        </span>
                                                        <input disabled="true" [(ngModel)]="selectedRouter.harga" type="text" class="form-control inputForm" #routerprice id="routerprice" placeholder="Router Rent Fee"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-12">
                                                <form class="paddingTB20">
                                                    <div class="input-group">
                                                        <span class="input-group-addon">
                                                            <input type="checkbox" (click)="onItemClickedSTB(STB)">
                                                        </span>
                                                        <input disabled="true" [(ngModel)]="selectedSTB.harga" type="text" class="form-control inputForm" #stbprice id="stbprice" placeholder="STB Rent Fee">
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <input type="number" class="form-control inputForm" #cablej45price id="cablej45price" placeholder="Cable/RJ45" (keyup)="onKey($event)">

                                        <div class="row">
                                            <div class="col-sm-12">
                                                <form class="paddingTB20">
                                                    <div class="input-group">
                                                        <span class="input-group-addon">
                                                            <input type="checkbox" (click)="onItemClickedIns(Ins)">
                                                        </span>
                                                        <input disabled="true" [(ngModel)]="selectedIns.harga" type="text" class="form-control inputForm" #instalationprice id="instalationprice" placeholder="Instalation Fee">
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <p>Sub Total : {{totalharga}}</p>

                                        <form>
                                            <label *ngFor="#listPromo of listPromos" class="form-control">
                                                <input (click)=" onItemClickedPromo(listPromo)" type="radio" name="optradio">Promo {{ listPromo.name }}
                                            </label>
                                        </form><br/>
                                        <input disabled="true" [(ngModel)]="selectedPromo.harga" type="text" class="form-control inputForm" #promoprice id="promoprice" placeholder="Promo Price">
                                        <p>Tax : {{val}}</p>
                                        <p>Total Price : {{val}}</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12 paddingR45">
                            <!-- Small modal -->
                            <button type="submit" (click)="createInvoice(billingdate.value, billingduedate.value, subsid.value, namepackage.value, packageprice.value, routerprice.value, stbprice.value, cablej45price.value, instalationprice.value, subtotal.value, promoname.value, promoprice.value, taxprice.value, totalprice.value)" class="btn btn-default buttonOrange marginT20 marginL20 paddingL10" data-toggle="modal" data-target="#success">CONFIRM</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES, Now],
})
export class ContentCreateInvoiceComponent implements OnInit {
// Declare empty list of people
bills: any[] = [];
subs: any[] = [];
totalharga: number;
constructor(private http: Http, private _routeParams: RouteParams) {
  this.totalharga = this.subs[packprice];
}

val='';
  onKey(event:KeyboardEvent) {
    this.val = (event.target).value;
  }
public listPromos = [
      {name:"Gratis Instalasi", harga:"9000"},
      {name:"Groovy Play", harga:"10000"}
   ];
   public selectedPromo = {harga: ""};

   onItemClickedPromo(listPromo){
      this.selectedPromo=listPromo;
      this.val = listPromo.harga;
   }
   public selectedRouter = {harga: ""};
   public selectedSTB = {harga: ""};
   public selectedIns = {harga: ""};

   onItemClickedRouter(Router){
   if (routercheck.value = "1"){
     this.selectedRouter={harga:"40000"};
     this.val = "40000";
     this.totalharga = this.totalharga + 40000
     }
   }
   onItemClickedSTB(STB){
      this.selectedSTB={harga:"45000"};
      this.val = "45000";
   }
   onItemClickedIns(Ins){
      this.selectedIns={harga:"75000"};
      this.val = "75000";
   }
// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

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
  getSubs() {
  this.http.get(`${this.API}/subscribe/subs/${this._routeParams.get('id')}`)
    .map(res => res.json())
    .subscribe(subs => {
      this.subs = subs
    })
    }
}
