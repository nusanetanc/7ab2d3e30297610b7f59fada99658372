import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

declare let kendo;

@Component({
    selector: 'form-detailbilling',
    template: `

        <!-- Page content -->
        <div id="page-content-wrapper">
            <div class="content-header">
                <h3 id="home" class="fontWeight300">
                    <a id="menu-toggle" onClick="menuToggle()" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                    </a>
                    &nbsp; Detail Payment
                </h3>

            </div>

            <div class="page-content inset" data-spy="scroll" data-target="#spy">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Row Button -->
                        <div class="row rowButton">
                            <div class="col-sm-12">
                                <a [routerLink]="['Billing']" class="btn btn-default billInfoBack" type="button" *ngIf="clickedItem.name == 'regBill'">
                                    BACK
                                </a>
                                <button (click)="onItemClicked0(Bill)" onclick="printPenagihan()" class="btn btn-default billInfoBack" type="button" *ngIf="clickedItem.name == 'regInvoice'">
                                    BACK
                                </button>
                                <button (click)="onItemClicked1(Inovice)" onclick="printPembayaran()" class="btn btn-default billInfoBack" type="button" *ngIf="clickedItem.name == 'regPayment'">
                                    BACK
                                </button>


                                <button (click)="onItemClicked1(Invoice)" onclick="printPenagihan()" class="btn btn-default buttonOrange" type="button" style="float:right;" *ngIf="clickedItem.name == 'regBill'">
                                    Print Penagihan
                                </button>
                                <button (click)="onItemClicked2(Payment)" onclick="printPembayaran()" class="btn btn-default buttonOrange" type="button" style="float:right;" *ngIf="clickedItem.name == 'regInvoice'">
                                    Print Pembayaran
                                </button>
                            </div>
                        </div>
                        <!-- /Row Button -->

                        <!-- Content List -->
                        <div class="row rowBillInfoContList" *ngIf="clickedItem.name == 'regBill'">
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
                                                                <span><b>{{ bills.name }}</b></span>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-sm-5">
                                                            <span>{{ bills.cluster }}, </span>
                                                            <span>Blok. {{bills.blok}}</span><br>
                                                            <span>{{ bills.address }}, No.{{ bills.nohome }}</span><br>
                                                            <span>{{ bills.city }}, Indonesia</span>
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
                                                            <span>{{ bills.subid }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row rowBillinfoDate">
                                                    <div class="col-sm-12 hid">
                                                        <div class="col-sm-3">
                                                            <span>Billing Due Date</span>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <span>Billing Date</span>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <span>Pay Date</span>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <span>Billing Number</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 billInfoDateList">
                                                        <div *ngIf="bills.duedate != null" class="col-sm-3">
                                                            <span class="bildate"><b>Billing Due Date</b></span><br>
                                                            <span>{{stringAsDate(bills.duedate) | date}}</span>
                                                        </div>
                                                        <div *ngIf="bills.billdate != null" class="col-sm-3">
                                                            <span class="bildate"><b>Billing Date</b></span><br>
                                                            <span>{{ stringAsDate(bills.billdate) | date }}</span>
                                                        </div>
                                                        <div *ngIf="bills.paydate != null" class="col-sm-3">
                                                            <span class="bildate"><b>Pay Date</b></span><br>
                                                            <span>{{ stringAsDate(bills.paydate) | date }}</span>
                                                        </div>
                                                        <div *ngIf="bills.duedate == null" class="col-sm-3">
                                                            <span class="bildate"><b>Billing Due Date</b></span><br>
                                                            <span>-</span>
                                                        </div>
                                                        <div *ngIf="bills.billdate == null" class="col-sm-3">
                                                            <span class="bildate"><b>Billing Date</b></span><br>
                                                            <span>-</span>
                                                        </div>
                                                        <div *ngIf="bills.paydate == null" class="col-sm-3">
                                                            <span class="bildate"><b>Pay Date</b></span><br>
                                                            <span>-</span>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <span class="bildate"><b>Billing Number</b></span><br>
                                                            <span>{{ bills.noinvoice }}</span>
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
                                                            <span>Level {{ bills.namepack }} Package</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">Rp. {{ bills.pricepack | number:'2.2-4'}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 listWhite">
                                                        <div class="col-sm-10">
                                                            <span>Router rent</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">Rp. {{ bills.pricerouter | number:'2.2-4' }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div *ngIf="bills.pricestb != '0'">
                                                <div *ngIf="bills.pricestb != null"  class="row">
                                                    <div class="col-sm-12 listWhite">
                                                        <div class="col-sm-10">
                                                            <span>STB Rent</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">Rp. {{ bills.pricestb | number:'2.2-4' }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div *ngIf="bills.pricerj45cable != '0'">
                                                <div *ngIf="bills.pricerj45cable != null" class="row">
                                                    <div class="col-sm-12 listWhite">
                                                        <div class="col-sm-10">
                                                            <span>Cable & RJ45</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">Rp. {{ bills.pricerj45cable | number:'2.2-4' }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div *ngIf="bills.priceinstal != '0'">
                                                <div class="row"  *ngIf="bills.priceinstal != null">
                                                    <div class="col-sm-12 listWhite">
                                                        <div class="col-sm-10">
                                                            <span>Instalation Charge</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">Rp. {{ bills.priceinstal | number:'2.2-4' }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div *ngIf="bills.pinaltypay != null">
                                                <div *ngIf="bills.pinaltypay != '0'" class="row">
                                                    <div  class="col-sm-12 listWhite">
                                                        <div class="col-sm-10">
                                                            <span>Pinalty Charge</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">Rp. {{ bills.pinaltypay | number:'2.2-4' }}</span>
                                                        </div>
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
                                                            <span class="right">Rp. {{ bills.totalprice | number:'2.2-4' }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 listGrey">
                                                        <div class="col-sm-10">
                                                            <span class="right">TAX 10%</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">Rp. {{ bills.changetax | number:'2.2-4' }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 listGrey">
                                                        <div class="col-sm-10">
                                                            <span class="right">TOTAL PAYMENT</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">Rp. {{ bills.totalpay | number:'2.2-4' }}</span>
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
                                                    <li style="margin-bottom: 10px;">1. Mohon melakukan pembayaran sebelum tanggal jatuh tempo untuk menghindari denda keterlambatan sejumlah Rp. 25.000,- (sebelum pajak) yang akan ditambahkan pada tagihan Anda di bulan berikutnya.</li>
                                                    <li style="margin-bottom: 10px;">2. Pembayaran khusus nasabah BCA atau giro (bank lain dan BCA) ditunjukan ke Rekening Virtual BCA No. Rekening 02750181597 a/n GROOVY {{ bills.name }}.</li>
                                                    <li style="margin-bottom: 10px;">3. Cantumkan Subscriber ID pada saat pembayaran.</li>
                                                    <li style="margin-bottom: 10px;">4. Konfirmasi pembayaran ke email &nbsp; <a mailto="billing@groovy.id"><u>billing@groovy.id</u></a> &nbsp; atau telepon ke 021-5276616.</li>
                                                    <li style="margin-bottom: 10px;">5. Pembayaran diterima setelah adanya konfirmasi.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row rowBillInfoP2">
                                            <div class="col-sm-12">
                                                <h5>Subscriber hightlight information :</h5>
                                                <ul>
                                                    <li style="margin-bottom: 10px;">1. Please make payment before due date to avoid late payment fee of Rp. 25.000,- (before VAT) which will be added to your next month's invoice.</li>
                                                    <li style="margin-bottom: 10px;">2. Payment BCA customers or giro (another bank and BCA) is streetnameed to BCA Virtual Account No. 02750181597 on behalf of GROOVY {{ bills.name }} (confirmation not required).</li>
                                                    <li style="margin-bottom: 10px;">3. Please quote your Subscriber ID during payment.</li>
                                                    <li style="margin-bottom: 10px;">4. Payment confirmation by sending an email to &nbsp; <a mailto="billing@groovy.id"><u>billing@groovy.id</u></a> &nbsp; or contact number 021-5276616.</li>
                                                    <li style="margin-bottom: 10px;">5. Payment will be recognized after confirmation is acknowledged.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Content List -->

                        <!-- Content Print -->
                        <div class="print" style="width: 100%;" *ngIf="clickedItem.name == 'regInvoice'">
                           <div id="printPenagihan" style="width: 100%;">
                              <!-- Content List -->
                              <div id="body" class="container" style="background-color: #ffffff;padding: 40px 40px; color: #000; font-weight:300; width:100%;">
                                 <div id="header" class="row">
                                    <div class="col-sm-12" style="margin-bottom: 30px;">
                                       <div class="col-sm-6">
                                          <img src="images/logo-groovy.png" width="70%">
                                       </div>
                                       <div class="col-sm-6" style="font-size: 18px; padding-top: 20px;">
                                          <br>
                                          <p class="text-right" style="color: #707070;"><img src="images/email.png" width="6%"> cs@groovy.id &nbsp; <img src="images/earth.png" width="6%"> www.groovy.id</p>
                                          <p class="text-right" style="color: #707070;"><img src="images/map-marker.png" width="6%"> Cyber Building 7th Floor, Jl Kuningan Barat 8, Jakarta 12710</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div id="content" class="row">
                                    <div class="col-sm-12">
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12" >
                                             <div class="col-sm-12 text-center" style="padding: 5px;background: linear-gradient(to right, #ed4224 , #f8d143); background: -webkit-linear-gradient(left, #ed4224 , #f8d143); background: -linear-gradient(right, #ed4224 , #f8d143); background: -moz-linear-gradient(right, #ed4224 , #f8d143);">
                                                <span style="color: #FFF; font-size: 22px; font-weight: 700;">INFORMASI TAGIHAN <i style="opacity: 0.5;"> &nbsp; / &nbsp; BILLING INFORMATION</i></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12">
                                             <div class="row" style="font-size: 20px;">
                                                <div class="col-sm-6">
                                                </div>
                                                <div class="col-sm-6">
                                                   <div class="col-sm-6" style="border: 1px solid orangered; padding: 5px;">
                                                      <span>Subscriber ID</span>
                                                   </div>
                                                   <div class="col-sm-6 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                      <span><b>{{ bills.subid }}</b></span>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12" style="padding-bottom: 30px">
                                             <div class="row" style="font-size: 20px;">
                                                <div class="col-sm-6" >
                                                   <div class="col-sm-6" style="padding: 5px;">
                                                      <span><b>{{ bills.name }}</b> <br> {{ bills.cluster }}, Blok {{ bills.blok }} <br> {{ bills.address }} No.{{ bills.nohome }} <br> {{ bills.city }}, Indonesia</span>
                                                   </div>
                                                   <div class="col-sm-6" style="padding: 5px;">
                                                   </div>
                                                </div>
                                                <div class="col-sm-6" style="margin-bottom: 0px;">
                                                   <div class="col-sm-4">
                                                      <div class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                            <span style="font-size:16px;">Tgl. Jatuh Tempo<br>/<i>Billing Due Date</i></span>
                                                         </div>
                                                      </div>
                                                      <div class="row" *ngIf="bills.duedate != null">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">{{stringAsDate(bills.duedate) | date}}</span>
                                                         </div>
                                                      </div>
                                                      <div class="row" *ngIf="bills.duedate == null">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">-</span>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div class="col-sm-4">
                                                      <div class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                            <span style="font-size:16px;">Tanggal Cetak<br>/<i>Billing Date</i></span>
                                                         </div>
                                                      </div>
                                                      <div class="row" *ngIf="bills.billdate != null">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">{{ stringAsDate(bills.billdate) | date }}</span>
                                                         </div>
                                                      </div>
                                                      <div class="row" *ngIf="bills.billdate == null">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">-</span>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div class="col-sm-4">
                                                      <div class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                            <span style="font-size:16px;">No. Tagihan<br>/<i>Billing Number</i></span>
                                                         </div>
                                                      </div>
                                                      <div class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">{{ bills.noinvoice }}</span>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12">
                                             <p style="font-size: 24px;">Terima kasih telah menggunakan layanan Groovy. Berikut ini adalah informasi detail tagihan Anda. <i style="color: #999999;"> &nbsp; / &nbsp; Thank you for using our Groovy service. The following are the details of your bill.</i></p>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12">
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="border: 1px solid orangered; padding: 5px;">
                                                   <span>Deskripsi / Description</span>
                                                </div>
                                                <div class="col-sm-3 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                   <span>Jumlah / Amount (Rp.)</span>
                                                </div>
                                             </div>
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Paket Level {{ bills.namepack }} <i style="color: #999999;">  &nbsp; / &nbsp; Level {{ bills.namepack }} Package (Internet)</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pricepack | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             <div *ngIf="bills.pricerouter != '0'">
                                             <div *ngIf="bills.pricerouter != null" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Sewa Router <i style="color: #999999;"> &nbsp; / &nbsp; Router rent</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pricerouter | number:'2.2-4' }}</span>
                                                </div>
                                             </div></div>
                                             <div *ngIf="bills.pricestb != '0'">
                                             <div *ngIf="bills.pricestb != null" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Sewa STB <i style="color: #999999;"> &nbsp; / &nbsp; STB rent</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pricestb | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             </div>
                                             <div *ngIf="bills.pricerj45cable != '0'">
                                             <div *ngIf="bills.pricerj45cable != null" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Kabel dan RJ 45 <i style="color: #999999;"> &nbsp; / &nbsp; Cable and RJ 45</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pricerj45cable | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             </div>
                                             <div *ngIf="bills.priceinstal != '0'">
                                             <div *ngIf="bills.priceinstal != null" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Biaya Instalasi <i style="color: #999999;"> &nbsp; / &nbsp; Installation charge</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.priceinstal | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             </div>
                                             <div *ngIf="bills.pinaltypay != null">
                                             <div *ngIf="bills.pinaltypay != '0'" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Biaya Denda <i style="color: #999999;"> &nbsp; / &nbsp; Pinalty Charge</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pinaltypay | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             </div>
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span>TOTAL HARGA <i style="color: #999999;"> &nbsp; / &nbsp; TOTAL PRICE</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span>Rp. {{ bills.totalprice | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span>PPN 10% <i style="color: #999999;"> &nbsp; / &nbsp; TAX 10%</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span>Rp. {{ bills.changetax | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span><b>TOTAL PEMBAYARAN <i style="color: #999999;"> &nbsp; &nbsp; / &nbsp; TOTAL PAYMENT</i></b></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="border: 1px solid orangered; padding: 5px;">
                                                   <span><b>Rp. {{ bills.totalpay | number:'2.2-4' }}</b></span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12" style="font-size: 20px;">
                                             <p><u>Info Penting Pelanggan :</u></p>
                                             <ul style="list-style-type:none;">
                                                <li style="margin-bottom: 10px;">1. Mohon melakukan pembayaran sebelum tanggal jatuh tempo untuk menghindari denda keterlambatan sejumlah Rp. 25.000,- (sebelum pajak) yang akan ditambahkan pada tagihan Anda di bulan berikutnya.</li>
                                                <li style="margin-bottom: 10px;">2. Pembayaran khusus nasabah BCA atau giro (bank lain dan BCA) ditunjukan ke Rekening Virtual BCA No. Rekening 02750181597 a/n GROOVY {{ bills.name }}.</li>
                                                <li style="margin-bottom: 10px;">3. Cantumkan Subscriber ID pada saat pembayaran.</li>
                                                <li style="margin-bottom: 10px;">4. Konfirmasi pembayaran ke email &nbsp; <a mailto="billing@groovy.id"><u>billing@groovy.id</u></a> &nbsp; atau telepon ke 021-5276616.</li>
                                                <li style="margin-bottom: 10px;">5. Pembayaran diterima setelah adanya konfirmasi.</li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12" style="font-size: 20px; color: #999999;">
                                             <p><u>Subscriber hightlight information :</u></p>
                                             <ul style="list-style-type:none;">
                                                <li style="margin-bottom: 10px;">1. Please make payment before due date to avoid late payment fee of Rp. 25.000,- (before VAT) which will be added to your next month's invoice.</li>
                                                <li style="margin-bottom: 10px;">2. Payment BCA customers or giro (another bank and BCA) is streetnameed to BCA Virtual Account No. 02750181597 on behalf of GROOVY {{ bills.name }} (confirmation not required).</li>
                                                <li style="margin-bottom: 10px;">3. Please quote your Subscriber ID during payment.</li>
                                                <li style="margin-bottom: 10px;">4. Payment confirmation by sending an email to &nbsp; <a mailto="billing@groovy.id"><u>billing@groovy.id</u></a> &nbsp; or contact number 021-5276616.</li>
                                                <li style="margin-bottom: 10px;">5. Payment will be recognized after confirmation is acknowledged.</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div id="footer" style="background: linear-gradient(to right, #ed4224 , #f8d143); background: -webkit-linear-gradient(left, #ed4224 , #f8d143); background: -linear-gradient(right, #ed4224 , #f8d143); background: -moz-linear-gradient(right, #ed4224 , #f8d143);height: 20px;margin: 30px -40px -40px -40px;"></div>
                              </div>
                              <!-- /Content List -->
                           </div>
                        </div>
                        <!-- /Content Print -->

                        <!-- Content Print -->
                        <div class="print" style="width: 100%;" *ngIf="clickedItem.name == 'regPayment'">
                           <div id="printPembayaran" style="width: 100%;">
                              <!-- Content List -->
                              <div id="body" class="container" style="background-color: #ffffff;padding: 40px 40px; color: #000; font-weight:300; width: 100%;">
                                 <div id="header" class="row">
                                    <div class="col-sm-12" style="margin-bottom: 30px;">
                                       <div class="col-sm-6">
                                          <img src="images/logo-groovy.png" width="70%">
                                       </div>
                                       <div class="col-sm-6" style="font-size: 18px; padding-top: 20px;">
                                          <br>
                                          <p class="text-right" style="color: #707070;"><img src="images/email.png" width="6%"> cs@groovy.id &nbsp; <img src="images/earth.png" width="6%"> www.groovy.id</p>
                                          <p class="text-right" style="color: #707070;"><img src="images/map-marker.png" width="6%"> Cyber Building 7th Floor, Jl Kuningan Barat 8, Jakarta 12710</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div id="content" class="row">
                                    <div class="col-sm-12">
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12" >
                                             <div class="col-sm-12 text-center" style="padding: 5px;background: linear-gradient(to right, #ed4224 , #f8d143); background: -webkit-linear-gradient(left, #ed4224 , #f8d143); background: -linear-gradient(right, #ed4224 , #f8d143); background: -moz-linear-gradient(right, #ed4224 , #f8d143);">
                                                <span style="color: #FFF; font-size: 22px; font-weight: 700;">INFORMASI PEMBAYARAN <i style="opacity: 0.5;"> &nbsp; / &nbsp; PAYMENT INFORMATION</i></span>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12">
                                             <div class="row" style="font-size: 20px;">
                                                <div class="col-sm-6">
                                                </div>
                                                <div class="col-sm-6">
                                                   <div class="col-sm-6" style="border: 1px solid orangered; padding: 5px;">
                                                      <span>Subscriber ID</span>
                                                   </div>
                                                   <div class="col-sm-6 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                      <span><b>{{ bills.subid }}</b></span>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12" style="padding-bottom: 30px">
                                             <div class="row" style="font-size: 20px;">
                                                <div class="col-sm-6" >
                                                   <div class="col-sm-6" style="padding: 5px;">
                                                      <span><b>{{ bills.name }}</b> <br> {{ bills.cluster }}, Blok {{ bills.blok }} <br> {{ bills.address }} No.{{ bills.nohome }} <br> {{ bills.city }}, Indonesia</span>
                                                   </div>
                                                   <div class="col-sm-6" style="padding: 5px;">
                                                   </div>
                                                </div>
                                                <div class="col-sm-6" style="margin-bottom: 0px;">
                                                   <div class="col-sm-4">
                                                      <div class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                            <span style="font-size:16px;">Tgl. Pembayaran<br> /<i>Payment Date</i></span>
                                                         </div>
                                                      </div>
                                                      <div *ngIf="bills.paydate == null" class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">-</span>
                                                         </div>
                                                      </div>
                                                      <div *ngIf="bills.paydate != null" class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">{{ stringAsDate(bills.paydate) | date }}</span>
                                                         </div>
                                                      </div>

                                                   </div>
                                                   <div class="col-sm-4">
                                                      <div class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                            <span style="font-size:16px;">Tanggal Cetak<br> /<i>Billing Date</i></span>
                                                         </div>
                                                      </div>
                                                      <div *ngIf="bills.billdate == null" class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">-</span>
                                                         </div>
                                                      </div>
                                                      <div *ngIf="bills.billdate != null" class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">{{ stringAsDate(bills.billdate) | date }}</span>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div class="col-sm-4">
                                                      <div class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                            <span style="font-size:16px;">No. Tagihan<br> /<i>Billing Number</i></span>
                                                         </div>
                                                      </div>
                                                      <div class="row">
                                                         <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                            <span style="font-size:16px;">{{ bills.noinvoice }}</span>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12">
                                             <p style="font-size: 24px;">Terima kasih telah menggunakan layanan Groovy. Berikut ini adalah informasi detail tagihan Anda. <i style="color: #999999;"> &nbsp; / &nbsp; Thank you for using our Groovy service. The following are the details of your bill.</i></p>
                                          </div>
                                       </div>
                                       <div class="row" style="margin-bottom: 30px;">
                                          <div class="col-sm-12">
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="border: 1px solid orangered; padding: 5px;">
                                                   <span>Deskripsi / Description</span>
                                                </div>
                                                <div class="col-sm-3 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                   <span>Jumlah / Amount (Rp.)</span>
                                                </div>
                                             </div>
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Paket Level {{ bills.namepack }} <i style="color: #999999;">  &nbsp; / &nbsp; Level {{ bills.namepack }} Package (Internet)</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pricepack | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             <div *ngIf="bills.pricerouter != '0'">
                                             <div *ngIf="bills.pricerouter != null" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Sewa Router <i style="color: #999999;"> &nbsp; / &nbsp; Router rent</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pricerouter | number:'2.2-4' }}</span>
                                                </div>
                                             </div></div>
                                             <div *ngIf="bills.pricestb != '0'">
                                             <div *ngIf="bills.pricestb != null" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Sewa STB <i style="color: #999999;"> &nbsp; / &nbsp; STB rent</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pricestb | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             </div>
                                             <div *ngIf="bills.pricerj45cable != '0'">
                                             <div *ngIf="bills.pricerj45cable != null" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Kabel dan RJ 45 <i style="color: #999999;"> &nbsp; / &nbsp; Cable and RJ 45</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pricerj45cable | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             </div>
                                             <div *ngIf="bills.priceinstal != '0'">
                                             <div *ngIf="bills.priceinstal != null" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Biaya Instalasi <i style="color: #999999;"> &nbsp; / &nbsp; Installation charge</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.priceinstal | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             </div>
                                             <div *ngIf="bills.pinaltypay != null">
                                             <div *ngIf="bills.pinaltypay != '0'" class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9" style="padding: 5px;">
                                                   <span>Biaya Denda <i style="color: #999999;"> &nbsp; / &nbsp; Pinalty Charge</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="padding: 5px;">
                                                   <span>Rp. {{ bills.pinaltypay | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             </div>
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span>TOTAL HARGA <i style="color: #999999;"> &nbsp; / &nbsp; TOTAL PRICE</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span>Rp. {{ bills.totalprice | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span>PPN 10% <i style="color: #999999;"> &nbsp; / &nbsp; TAX 10%</i></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span>Rp. {{ bills.changetax | number:'2.2-4' }}</span>
                                                </div>
                                             </div>
                                             <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                <div class="col-sm-9 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                   <span><b>TOTAL PEMBAYARAN <i style="color: #999999;"> &nbsp; &nbsp; / &nbsp; TOTAL PAYMENT</i></b></span>
                                                </div>
                                                <div class="col-sm-3 text-right" style="border: 1px solid orangered; padding: 5px;">
                                                   <span><b>Rp. {{ bills.totalpay | number:'2.2-4' }}</b></span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>

                                    </div>
                                 </div>
                                 <div id="footer" style="background: linear-gradient(to right, #ed4224 , #f8d143); background: -webkit-linear-gradient(left, #ed4224 , #f8d143); background: -linear-gradient(right, #ed4224 , #f8d143); background: -moz-linear-gradient(right, #ed4224 , #f8d143);height: 20px;margin: 30px -40px -40px -40px;"></div>
                              </div>
                              <!-- /Content List -->
                           </div>
                        </div>
                        <!-- /Content Print -->

                    </div>
                </div>
            </div>
        </div>
        <!-- Page Content -->

    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDetailBillingComponent implements OnInit {

    public clickedItem = {name: "regBill"};

    onItemClicked0(Bill) {
        this.clickedItem = {name: "regBill"};
    }

    onItemClicked1(Invoice) {
        this.clickedItem = {name: "regInvoice"};
    }

    onItemClicked2(Payment) {
        this.clickedItem = {name: "regPayment"};
    }

    // Link to our api, pointing to localhost
    API = 'http://202.162.207.164:3000';

    stringAsDate(dateStr: string) {
        return new Date(dateStr);
    }

    bills: any[] = [];

    constructor(private http: Http, private _routeParams: RouteParams) {}

    ngOnInit() {
        this.getBills();
    }

    getBills(){
    this.http.get(`${this.API}/subscribe/idbill/${this._routeParams.get('id')}`)
        .map(res => res.json())
        .subscribe(bills => {
            this.bills = bills
        })
    }

}
