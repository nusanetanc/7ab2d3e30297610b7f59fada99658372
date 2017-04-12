import {Component} from 'angular2/core';
import {Pipe} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
declare let jsPDF;
declare let kendo;

@Component({
    selector: 'form-test',
    template: `
        <!-- Page content -->
        <div id="page-content-wrapper">
            <div class="content-header">
                <h3 id="home" class="fontWeight300">
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
                                <a [routerLink]="['AllBill']" class="btn btn-default billInfoBack" type="button">
                                    BACK
                                </a>
                                <button onclick="generatePDF()" class="btn btn-default billInfoPrint" type="button">
                                    SAVE
                                </button>
                            </div>
                        </div>
                        <!-- /Row Button -->

                        <!-- Content List -->
                        <div style="zoom: 80%; -moz-transform: scale(0.8); -moz-transform-origin: 0 0;">
                        
                        <div id="formConfirmation">

                            <!-- Content List -->
                            <div id="body" class="container" style="background-color: #ffffff;padding: 40px 40px; color: #000;">
                                <div id="header" class="row">
                                    <div class="col-sm-12" style="margin-bottom: 30px;">
                                        <div class="col-sm-6">
                                            <img src="images/logo-groovy.png" width="70%">
                                        </div>
                                        <div class="col-sm-6" style="font-size: 19px; padding-top: 20px;">
                                            <br>
                                            <p class="text-right" style="color: #707070;">cs@groovy.id &nbsp; || &nbsp; www.groovy.id</p>
                                            <p class="text-right" style="color: #707070;">Cyber Building 7th Floor, Jl Kuningan Barat 8, Jakarta 12710</p>
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
                                                            <span><b>GR968091</b></span>
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
                                                            <span><b>Hj. Andi Siangka</b> <br> Residence One <br> Ruby 7 No. 36 <br> Indonesia</span>
                                                        </div>
                                                        <div class="col-sm-6" style="padding: 5px;">
                        
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6" style="margin-bottom: 0px;">
                                                        <div class="col-sm-4">
                                                            <div class="row">
                                                                <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                                    <span>Tgl. Jatuh Tempo <br> /<i>Billing Due Date</i></span>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                                    <span>09 April 2017</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <div class="row">
                                                                <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                                    <span>Tanggal Cetak <br> /<i>Billing Date</i></span>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                                    <span>06 April 2017</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <div class="row">
                                                                <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px;">
                                                                    <span>No. Tagihan <br> /<i>Billing Number</i></span>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-12 text-center" style="border: 1px solid orangered; padding: 5px; background-color: #e2e2e2;">
                                                                    <span>2259135300</span>
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
                                                        <span>Paket Level 3 (Internet) <i style="color: #999999;">  &nbsp; / &nbsp; Level 3 Package (Internet)</i></span>
                                                    </div>
                                                    <div class="col-sm-3 text-right" style="padding: 5px;">
                                                        <span>899.000</span>
                                                    </div>
                                                </div>
                                                <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                    <div class="col-sm-9" style="padding: 5px;">
                                                        <span>Sewa Router <i style="color: #999999;"> &nbsp; / &nbsp; Router rent</i></span>
                                                    </div>
                                                    <div class="col-sm-3 text-right" style="padding: 5px;">
                                                        <span>40.000</span>
                                                    </div>
                                                </div>
                                                <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                    <div class="col-sm-9" style="padding: 5px;">
                                                        <span>Sewa STB <i style="color: #999999;"> &nbsp; / &nbsp; STB rent</i></span>
                                                    </div>
                                                    <div class="col-sm-3 text-right" style="padding: 5px;">
                                                        <span>0</span>
                                                    </div>
                                                </div>
                                                <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                    <div class="col-sm-9" style="padding: 5px;">
                                                        <span>Kabel dan RJ 45 <i style="color: #999999;"> &nbsp; / &nbsp; Cable and RJ 45</i></span>
                                                    </div>
                                                    <div class="col-sm-3 text-right" style="padding: 5px;">
                                                        <span>20.000</span>
                                                    </div>
                                                </div>
                                                <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                    <div class="col-sm-9" style="padding: 5px;">
                                                        <span>Biaya Instalasi <i style="color: #999999;"> &nbsp; / &nbsp; Installation charge</i></span>
                                                    </div>
                                                    <div class="col-sm-3 text-right" style="padding: 5px;">
                                                        <span>75.000</span>
                                                    </div>
                                                </div>
                                                <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                    <div class="col-sm-9 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                        <span>TOTAL HARGA <i style="color: #999999;"> &nbsp; / &nbsp; TOTAL PRICE</i></span>
                                                    </div>
                                                    <div class="col-sm-3 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                        <span>1.034.000</span>
                                                    </div>
                                                </div>
                                                <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                    <div class="col-sm-9 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                        <span>PPN 10% <i style="color: #999999;"> &nbsp; / &nbsp; TAX 10%</i></span>
                                                    </div>
                                                    <div class="col-sm-3 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                        <span>103.000</span>
                                                    </div>
                                                </div>
                                                <div class="row" style="font-size: 20px; padding-left: 15px; padding-right: 15px;">
                                                    <div class="col-sm-9 text-right" style="border: 1px solid white; padding: 5px; background-color: #e2e2e2;">
                                                        <span><b>TOTAL PEMBAYARAN <i style="color: #999999;"> &nbsp; &nbsp; / &nbsp; TOTAL PAYMENT</i></b></span>
                                                    </div>
                                                    <div class="col-sm-3 text-right" style="border: 1px solid orangered; padding: 5px;">
                                                        <span><b>1.137.400</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" style="margin-bottom: 30px;">
                                            <div class="col-sm-12" style="font-size: 20px;">
                                                <p><u>Info Penting Pelanggan :</u></p>
                                                <ul style="list-style-type:none;">
                                                    <li style="margin-bottom: 10px;">1. Mohon melakukan pembayaran sebelum tanggal jatuh tempo untuk menghindari denda keterlambatan sejumlah Rp. 25.000,- (sebelum pajak) yang akan ditambahkan pada tagihan Anda di bulan berikutnya.</li>
                                                    <li style="margin-bottom: 10px;">2. Pembayaran ditujukan ke Bank mandiri Cabang Citra garden Jak-Bar No. Rek 118 000 58977 97 a/n PT. Media Andalan Nusa.</li>
                                                    <li style="margin-bottom: 10px;">3. Cantumkan Subscriber ID pada saat pembayaran.</li>
                                                    <li style="margin-bottom: 10px;">4. Konfirmasi pembayaran ke email <a mailto="billing@groovy.id"><u>billing@groovy.id</u></a> atau telepon ke 021-5276616.</li>
                                                    <li style="margin-bottom: 10px;">5. Pembayaran diterima setelah adanya konfirmasi.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row" style="margin-bottom: 30px;">
                                            <div class="col-sm-12" style="font-size: 20px; color: #999999;">
                                                <p><u>Subscriber hightlight information :</u></p>
                                                <ul style="list-style-type:none;">
                                                    <li style="margin-bottom: 10px;">1. Please make payment before due date to avoid late payment fee of Rp. 25.000,- (before VAT) which will be added to your next month's invoice.</li>
                                                    <li style="margin-bottom: 10px;">2. Payment is addressed to Bank Mandiri, Citra Garden Jak-Bar branch, account number 118 000 58977 97 beneficiary PT. Media Andalan Nusa.</li>
                                                    <li style="margin-bottom: 10px;">3. Please quote your Subscriber ID during payment.</li>
                                                    <li style="margin-bottom: 10px;">4. Payment confirmation by sending an email to <a mailto="billing@groovy.id"><u>billing@groovy.id</u></a> or contact number 021-5276616.</li>
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
                        <!-- /Content List -->
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})

export class ContentTestComponent {

    constructor() {
    }


    public print() {


        var print = function() {
            kendo.drawing.drawDOM($('#billing')).then(function(group) {
                kendo.drawing.pdf.saveAs(group, 'Converted PDF.pdf');
            });
        }

        //var doc = new jsPDF();

        // We'll make our own renderer to skip this editor
        //var specialElementHandlers = {
        //    '#editor': function(element, renderer){
        //        return true;
        //    }
        //};

        // All units are in the set measurement for the document
        // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
        //doc.fromHTML($('#billing').get(0), 15, 15, {
        //    'width': 170,
        //    'elementHandlers': specialElementHandlers
        //});

        // Save the PDF
        //doc.save('invoice.pdf');
    }

}
