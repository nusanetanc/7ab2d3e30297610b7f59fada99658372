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
    
    
    
    
    <div class="container">

			<div class="masthead">
				<div class="pull-right">
					<div class="tweet-buttons">
						<a href="https://twitter.com/share" class="twitter-share-button" data-via="MrRio" data-size="large">Tweet</a>
						<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
						<a href="https://twitter.com/MrRio" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @MrRio</a>
						<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
					</div>
					<!--a class="btn btn-primary btn-large" href="http://jspdf.com/downloads/jsPDF-0.9.0rc2.zip">Download Now</a>
					<p class="muted" style="text-align: right;">Version 0.9.0rc2</p-->
					<a class="btn btn-primary btn-large" href="https://github.com/MrRio/jsPDF">Download Now</a>
					<p class="muted" style="text-align: right;" id="dversion">Version 0.9.0rc2</p>
				</div>
				<h1 class="muted">jsPDF</h1>
				<h4>HTML5 JavaScript PDF generation library from <a href="http://twitter.com/MrRio">@MrRio</a> at <a href="http://parall.ax">Parallax</a></h4>
			</div>

			<div class="row-fluid">
				<div class="span6" style="float: right">
					<iframe class="preview-pane" type="application/pdf" width="100%" height="650" frameborder="0" style="position:relative;z-index:999"></iframe>
				</div>
				<div class="span5 no-gutter">

					<h2>Have a play.</h2>

					<p>A HTML5 client-side solution for generating PDFs. Perfect for event tickets, reports, certificates, you name it! </p>

					<p><b>No servers were used in the making of this demo.</b></p>

					<div class="template-picker">
						<label for="template">Choose example</label>
						<select id="template" name="template">
							<option>Hold your horses...</option>
						</select>
					</div>
				</div>

				<div id="editor" class="bypass"></div>

			   <div class="controls">
					<div class="pull-right">
						<!--<a href="#" class="btn btn-primary">Download Your Code</a>-->
						<a href="#" class="btn btn-primary download-pdf">Download PDF</a>
					</div>

					<label class="checkbox">
						<input type="checkbox" id="auto-refresh" checked="checked"> Auto refresh on changes?
					</label>
					<a href="#" class="run-code hide btn btn-success">Run Code</a>

					<div class="alert hide">
						Auto refresh disabled for this
					</div>

			   </div>

			</div>
			<div class="clerfix"></div>
			<div class="span12 credits">

				<h2>The Basics</h2>

				<p>Simply include the jsPDF library in your <span class="source">&lt;head&gt;</span>, generate your PDF using the <i>many</i> built-in functions, then hook up a button to trigger the download. All the examples here use jQuery.</p>

				<h2>Browser Compatibility</h2>

				<p>jsPDF will work in IE6+*, Firefox 3+, Chrome, Safari 3+, Opera. For IE9 and below, we lazily load a Flash shim called Downloadify which enables the files to be downloaded.</p>

				<p>* Current build does not have IE6-9 shim enabled</p>

				<p><strong>NB:</strong> UTF-8 is <em>not</em> supported by default, however there might be some plugins allowing you to use it, such as <em>addHTML</em></p>

				<p>十五向學,三十而立,四十而不惑,五十而知天命,六十而耳順,七十而從心欲，不踰矩.</p>

				<h2>Need Help?</h2>

				<p>Send me a <a href="http://twitter.com/MrRio">tweet</a> and I'll see if I can help :)</p>

				<!-- ADD_PAGE -->
				<h2>Credits</h2>

				<p>Big thanks to Daniel Dotsenko from <a href="http://willow-systems.com">Willow Systems Corporation</a> for making huge contributions to the codebase. </p>

				<p>Thanks to Ajaxian.com for <a href="http://ajaxian.com/archives/dynamically-generic-pdfs-with-javascript">featuring us back in 2009</a>.</p>

				<p>Everyone else that's contributed patches or bug reports. You rock.</p>

				<h2>License</h2>

				<p>(MIT License)</p>

				<p>Copyright (c) 2010-2016 James Hall, <a href="https://github.com/MrRio/jsPDF">https://github.com/MrRio/jsPDF</a></p>

				<p>Permission is hereby granted, free of charge, to any person obtaining
				a copy of this software and associated documentation files (the
				"Software"), to deal in the Software without restriction, including
				without limitation the rights to use, copy, modify, merge, publish,
				distribute, sublicense, and/or sell copies of the Software, and to
				permit persons to whom the Software is furnished to do so, subject to
				the following conditions:</p>

				<p>The above copyright notice and this permission notice shall be
				included in all copies or substantial portions of the Software.</p>

				<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
				EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
				MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
				NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
				LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
				OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
				WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

			</div>

		</div> <!-- /container -->
    
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
        doc.fromHTML($('.container').get(0), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });

        // Save the PDF
        doc.save('invoice.pdf');
    }

}
