import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-detailmaintenance',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Job Description
            </h3>
        </div>
    
        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a [routerLink]="['ProfileEngineer']" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row subInfo">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 style="color:#FC592E;">#{{ subs.subid }}</h4>
                        </div>
                        <div class="col-sm-12">
                            <h4>MAINTENANCE / INSTALLATION</h4>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Subscriber</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- IBNU ZULKIVLI</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- AHMAD CAHYADI</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- IVAN DUGEM</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- BALAMON DARTU</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Perangkat</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- ROUTER</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- RADIO</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- RJ-45</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- BALLET</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>ADD GOODS</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="formNewReport marginLR20">
                                <form>
                                    <select #typestatus id="typestatus">
                                        <option class="option" disabled="true" selected="true" value="0">-- Select Goods Name --</option>
                                        <option class="option" value="Account Active">Account Active</option>>
                                        <option class="option" value="Account and Service Active">Account and Service Active</option>
                                        <option class="option" value="Account Unactive">Account Unactive</option>
                                    </select><br/>
                                </form>
                                <form>
                                    <select #typestatus id="typestatus">
                                        <option class="option" disabled="true" selected="true" value="0">-- Select Barcode --</option>
                                        <option class="option" value="Account Active">Account Active</option>>
                                        <option class="option" value="Account and Service Active">Account and Service Active</option>
                                        <option class="option" value="Account Unactive">Account Unactive</option>
                                    </select><br/><br/>
                                </form>
                                <button type="submit" (click)="editStatus(typestatus.value)" class="btn btn-default buttonOrange">
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>TECHNICAL JOB</h4>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Date</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>25 / 04 / 2017</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Job</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>Maintenance</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Detail Job</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>Maintenance Rajawali block 4, lantai 7, no. 45</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Field Engineer</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- ERWANDO</span>
                                </div>
                                <div class="col-xs-12 col-sm-7 col-sm-offset-5">
                                    <span>- ARIF</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDetailMaintenanceComponent implements OnInit {

}

