import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'form-dashboard',
    template: `
    <!-- Page content -->
          <div id="page-content-wrapper">
              <div class="content-header">
                  <h3 id="home">
                      <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                      </a>
                      &nbsp; Dashboard
                  </h3>
    
              </div>
    
              <div class="page-content inset" data-spy="scroll" data-target="#spy">
                  <div class="row">
                      <div class="col-sm-12">
                          <div class="row marginLR15">
                              <div class="col-sm-4">
                                  <div class="cardDashboardSub">
                                      <div class="row">
                                          <div class="col-sm-12">
                                              <p class="text-center font70MarginT35"><b>112</b></p>
                                              <h4 class="text-center">SUBSCRIBERS</h4>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-4">
                                  <div class="cardDashboardSub">
                                      <div class="row marginB10">
                                          <div class="col-sm-12 text-center">
                                              <i class="material-icons font100Margin30">info</i>
                                              <h4 class="marginLR20">VIEW ALL INFORMATION</h4>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-4">
                                  <div class="cardDashboardSub">
                                      <div class="row marginB10">
                                          <div class="col-sm-12 text-center">
    
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
    
                  <!-- Content List -->
                  <div class="row paddingLR15Margin20">
                      <div class="col-sm-12">
                          <div class="row headerList paddingLR30">
                              <div class="col-sm-12 paddingT20 paddingL35 headerSubList"><strong>LATEST USER REPORT</strong></div>
                          </div>
                          <div class="row subInfo">
                              <div class="col-sm-2 invoiceId"><span><a href="" class="grey333">11 Feb 2017</a></span></div>
                              <div class="col-sm-8 invoiceList"><span><a href="" class="grey333">Unstable Internet Connection</a></span></div>
                              <div class="col-sm-2 invoiceList"><span class="red">On Progress</span></div>
                          </div>
                          <div class="row subInfo">
                              <div class="col-sm-12 invoiceId"><span><a href="" class="linkViewAll"><b>View all informaiton</b></a></span></div>
                          </div>
                      </div>
                  </div>
                  <!-- /Content List -->
    
              </div>
          </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentDashboardComponent {

}
