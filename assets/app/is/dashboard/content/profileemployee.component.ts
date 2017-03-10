import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';


@Component({
    selector: 'form-profileemployee',
    template: `
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
        <nav id="spy">
            <div class="sidebar-brand">
                <div class="title">
                    <img src="ava.png" alt="ava">
                    <a class="name"><b>Ahmad Rifki</b></a>
                    <!-- Extra small button group -->
                    <div class="btn-group navbar-right">
                        <a class="dropdown-toggle name" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="employeeprofil.html">account</a></li>
                            <li><a href="employeeprofil.html">logout</a></li>
                        </ul>
                    </div>
                    <a class="user">Svp. Technical Support</a>
                </div>
            </div>
            <ul class="sidebar-nav nav">

                <li class="firstLiSidebar">
                    <a href="index.html" ><i class="material-icons">dashboard</i> <strong>DASHBOARD</strong></a>
                </li>
                <li class="active">
                    <a href="employee.html"><i class="material-icons">recent_actors</i> <strong>EMPLOYEE</strong></a>
                </li>
                <li>
                    <a href="stock.html"><i class="material-icons">widgets</i> <strong>STOCK</strong></a>
                </li>

            </ul>
            <div class="sidebar-footer">
                <div>
                    <img src="groovy-grayscale.png" alt="ava">
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                </div>
            </div>
        </nav>
    </div>
    <!-- /Sidebar -->

    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Employee
            </h3>
        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a href="employee.html" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
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
                                    <span>Name</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>Jhon Doe</span>
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
                                    <span>johndoe@example.com</span>
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
                                    <span>+62 812 1234 1111</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Department</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>Operational</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Job Title</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>General Administration</span>
                                </div>
                            </div>
                            <div class="row marginTB10 marginL5">
                                <div class="col-xs-6 col-sm-4">
                                    <span>Role Access</span>
                                </div>
                                <div class="col-xs-6 col-sm-1">
                                    <span>:</span>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <span>HR & GA</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-xs-6 col-md-3">
                                    <img class="avaProfile" src="ava.png" alt="ava">
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
export class ContentProfileEmployeeComponent {

}

