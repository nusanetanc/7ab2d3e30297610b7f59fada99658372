import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';

@Component({
    selector: 'form-coveragestreet',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Add Coverage Area
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a href="coverage4.html" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row headerList paddingLR30">
                        <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>Add Street</strong></div>
                    </div>
                    <div class="row subInfo">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="formNewReport marginLR20">
                                        <form>
                                            <select name="problemCatagory">
                                                <option class="option" disabled="true" selected="true">-- Select City Name --</option>
                                                <option value="volvo">Jakarta</option>
                                                <option value="saab">Bandung</option>
                                                <option value="fiat">All Region</option>
                                            </select><br/>
                                        </form>
                                        <form>
                                            <select name="problemCatagory">
                                                <option class="option" disabled="true" selected="true">-- Select Property Name --</option>
                                                <option value="volvo">Jakarta</option>
                                                <option value="saab">Bandung</option>
                                                <option value="fiat">All Region</option>
                                            </select><br/>
                                        </form>
                                        <form>
                                            <select name="problemCatagory">
                                                <option class="option" disabled="true" selected="true">-- Select Cluster Name --</option>
                                                <option value="volvo">Jakarta</option>
                                                <option value="saab">Bandung</option>
                                                <option value="fiat">All Region</option>
                                            </select><br/>
                                        </form>
                                        <form>
                                            <select name="problemCatagory">
                                                <option class="option" disabled="true" selected="true">-- Select Block / Floor Name --</option>
                                                <option value="volvo">Jakarta</option>
                                                <option value="saab">Bandung</option>
                                                <option value="fiat">All Region</option>
                                            </select><br/>
                                        </form>
                                        <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Street Name">
                                        <a href="coverage6.html" class="btn btn-default buttonOrange">
                                            SEND
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCoverageStreetComponent {

}
