import {Component} from 'angular2/core';
import {Pipe} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
declare let jsPDF;

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
                                <button (click)="print()" class="btn btn-default billInfoPrint" type="button">
                                    PRINT
                                </button>
                            </div>
                        </div>
                        <!-- /Row Button -->

                        <!-- Content List -->
                        <div id="billing" class="row rowBillInfoContList">
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
                                                                <span>{{ bills.cluster }}</span><br>
                                                                <span>{{ bills.address }} No.{{ bills.nohome }}</span>
                                                                <span>{{ bills.city }}</span>
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
                                                            <span class="right">{{ bills.pricepack }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 listWhite">
                                                        <div class="col-sm-10">
                                                            <span>Router rent</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">{{ bills.pricerouter }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 listWhite">
                                                        <div class="col-sm-10">
                                                            <span>STB Rent</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">{{ bills.pricestb }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 listWhite">
                                                        <div class="col-sm-10">
                                                            <span>Cable & RJ45</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">{{ bills.pricerj45cable }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 listWhite">
                                                        <div class="col-sm-10">
                                                            <span>Instalation Charge</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">{{ bills.priceinstal }}</span>
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
                                                            <span class="right">{{ bills.totalprice }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 listGrey">
                                                        <div class="col-sm-10">
                                                            <span class="right">TAX 10%</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">{{ bills.changetax }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12 listGrey">
                                                        <div class="col-sm-10">
                                                            <span class="right">TOTAL PAYMENT</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <span class="right">{{ bills.totalpay }}</span>
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
    <!-- Page content -->
    
    
    
    
    <!-- Add your site or application content here -->
    <div id="print" style="border: 1px solid #000; padding: 20px 20px;">
    
        <!-- Head -->
    
            <div class="head" style="border: 1px solid yellow;position:relative;min-height:1px;padding-right:15px;padding-left:15px;float:left;width:100%;">
                <div class="logo" style="border: 1px solid green;position:relative;min-height:1px;padding-right:15px;padding-left:15px;float:left;width:45%;">
                    <img src="logo.png" width="50%">
                </div>
                <div class="about" style="border: 1px solid red;position:relative;min-height:1px;padding-right:15px;padding-left:15px;float:left;width:45%;">
                    <span style="float: right;">cs@groovy.id &nbsp; www.groovy.id</span><br>
                    <span style="float: right;">Cyber Building 7th Floor, Jl Kuningan Barat 8, Jakarta 12710</span>
                </div>
            </div>
    
        <!-- /Head -->
    
        <!-- Content -->
            <div class="content" style="border: 1px solid burlywood;position:relative;min-height:1px;padding-right:15px;padding-left:15px;float:left;width:100%;">
                <div class="title" style="border: 1px solid gray;position:relative;min-height:1px;padding-right:15px;padding-left:15px;float:left;width:100%;">
                    <h4>INFORMASI TAGIHAN</h4>
                </div>
            </div>
        <!-- /Content -->
    
    </div>
    
    `,
    directives: [ROUTER_DIRECTIVES],
})

export class ContentTestComponent {

    constructor() {
    }

    public print() {

        var doc = new jsPDF();

        // We'll make our own renderer to skip this editor
        var specialElementHandlers = {
            '#editor': function(element, renderer){
                return true;
            }
        };

        // All units are in the set measurement for the document
        // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
        doc.fromHTML($('#print').get(0), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });

        // Save the PDF
        doc.save('invoice.pdf');
    }

}
