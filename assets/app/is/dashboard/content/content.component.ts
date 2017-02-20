import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
<div id="page-content-wrapper">
    <div class="content-header">
        <h3 id="home">
            <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
            </a>
            &nbsp; All Subscribers
        </h3>

    </div>

    <div class="page-content inset" data-spy="scroll" data-target="#spy">
        <div class="row">
            <div class="form-group col-lg-12">
                <div class="inner-addon right-addon">
                    <i class="glyphicon glyphicon-search"></i>
                    <input type="text" class="form-control" placeholder="Search" />
                </div>
            </div>
            <div class="col-lg-12" style="margin: -7px 0 -12px 0;">
                <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                <div class="dropdown" style="float: right;">
                    <a class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Name
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Date</a></li>
                        <li><a href="#">ID</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-12" style="margin-top: 20px;">
                <ul class="subscriber-list">
                    <li>
                        <div class="row">
                            <div class="col-md-1 list-nik"><span>0123456</span></div>
                            <div class="col-md-9 list-name"><span>Yudi Nurhandi</span></div>
                            <div class="col-md-1 list-activ"><span style="color: green;">Active</span></div>
                            <div class="col-md-1 list-paid"><span style="color: red;">Not Paid</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-1 list-nik"><span>0123456</span></div>
                            <div class="col-md-9 list-name"><span>Yudi Nurhandi</span></div>
                            <div class="col-md-1 list-activ"><span style="color: green;">Active</span></div>
                            <div class="col-md-1 list-paid"><span style="color: green;">Paid</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-1 list-nik"><span>0123456</span></div>
                            <div class="col-md-9 list-name"><span>Yudi Nurhandi</span></div>
                            <div class="col-md-1 list-activ"><span style="color: green;">Active</span></div>
                            <div class="col-md-1 list-paid"><span style="color: red;">Not Paid</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-1 list-nik"><span>0123456</span></div>
                            <div class="col-md-9 list-name"><span>Yudi Nurhandi</span></div>
                            <div class="col-md-1 list-activ"><span style="color: green;">Active</span></div>
                            <div class="col-md-1 list-paid"><span style="color: green;">Paid</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-1 list-nik"><span>0123456</span></div>
                            <div class="col-md-9 list-name"><span>Yudi Nurhandi</span></div>
                            <div class="col-md-1 list-activ"><span style="color: green;">Active</span></div>
                            <div class="col-md-1 list-paid"><span style="color: green;">Paid</span></div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-md-1 list-nik"><span>0123456</span></div>
                            <div class="col-md-9 list-name"><span>Yudi Nurhandi</span></div>
                            <div class="col-md-1 list-activ"><span style="color: green;">Active</span></div>
                            <div class="col-md-1 list-paid"><span style="color: red;">Not Paid</span></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div><!-- Page content -->
</div><!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDashboardComponent {

}
