import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';

@Component({
    selector: 'form-dashboard',
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
            <div class="row">
                <div class="col-sm-12">
                    <div class="row marginLR15">
                        <div class="col-sm-4">
                            <div class="cardDashboardCover">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="text-center grey333">ADD CITY</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="cardDashboardCover">
                                <div class="row white">
                                    <div class="col-sm-12">
                                        <h4 class="text-center grey333">ADD PROPERTY</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="cardDashboardCover">
                                <div class="row white">
                                    <div class="col-sm-12">
                                        <h4 class="text-center grey333">ADD CLUSTER</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="cardDashboardCover">
                                <div class="row white">
                                    <div class="col-sm-12">
                                        <h4 class="text-center grey333">ADD BLOCK / FLOOR</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="cardDashboardCover">
                                <div class="row white">
                                    <div class="col-sm-12">
                                        <h4 class="text-center grey333">ADD STREET</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="cardDashboardCover">
                                <div class="row white">
                                    <div class="col-sm-12">
                                        <h4 class="text-center grey333">ADD HOME NUMBER</h4>
                                    </div>
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
export class ContentCovergeComponent {
}
