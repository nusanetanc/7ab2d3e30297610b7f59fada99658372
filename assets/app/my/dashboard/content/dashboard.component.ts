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
                  &nbsp; Dashboard
              </h3>

          </div>

          <div class="page-content inset" data-spy="scroll" data-target="#spy">

          </div>

        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDashboardComponent {

}
