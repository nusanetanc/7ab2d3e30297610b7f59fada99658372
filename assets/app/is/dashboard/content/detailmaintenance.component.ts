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
                    &nbsp; Add Coverage Area
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
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="formNewReport marginLR20">
                                            <form>
                                                <select id="clustercity">
                                                    <option class="option" disabled="true" value="0">-- Select City Name --</option>
                                                    <option ></option>
                                                </select><br/>
                                            </form>
                                            <form>
                                                <select id="clusterproperty" >
                                                    <option class="option" disabled="true"  value="0">-- Select Property Name --</option>
                                                    <option ></option>
                                                </select><br/>
                                            </form>
                                            <form>
                                                <select id="clusterlevel">
                                                    <option class="option" disabled="true"  selected="true" value="0">-- Select Level Cluster --</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                </select><br/>
                                            </form>
                                            <form>
                                                <input type="text" class="form-control inputForm" id="clustername" placeholder="New Cluster">
                                                <br/>
                                            </form>
                                            <button type="submit" class="btn btn-default buttonOrange">
                                                SEND
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row headerList paddingLR30">
                            <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>List Cluster</strong></div>
                        </div>
                        <div class="row subInfo">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-sm-12" >
                                                <div class="row subInfo">
                                                    <div class="col-sm-6 invoiceList"><span></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class DetailMaintenanceComponent implements OnInit {

}

