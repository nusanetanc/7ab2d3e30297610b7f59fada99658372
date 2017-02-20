import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'form-dashboard',
    template: `
    <div id="page-content-wrapper">
      <div class="content-header">
          <h3 id="home">
            <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
            </a>
              &nbsp; Dashboard
          </h3>

      </div>

      <div class="page-content inset" data-spy="scroll" data-target="#spy">
        <!-- <div class="row">

          <div class="jumbotron text-center" >
            <h1>Hello Beautiful!</h1>
            <p>This is a sidebar navigation responsive template built off of Bootstrap 3.0 and simple sidebar template. It includes anchors, scroll spy, smooth scroll, and Awesome icon fonts.</p>

          </div> -->

    </div>

    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDashboardComponent {

}
