
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';


@Component({
    selector: 'form-profileengineer',
    template: `
    <!-- Page content -->
      <div id="page-content-wrapper">
          <div class="content-header">
              <h3 id="home" class="fontWeight300">
                  <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                  </a>
                  &nbsp; Engineer Profile
              </h3>
          </div>

          <div class="page-content inset" data-spy="scroll" data-target="#spy">
              <div class="row marginB20 marginR0">
                  <div class="col-sm-12">
                      <a href="engineer.html" class="btn btn-default buttonBack" type="button">
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
                                      <span>Fullname</span>
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
                                      <span>ID Employee</span>
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
                                      <span>+62 812 1234 2222</span>
                                  </div>
                              </div>
                              <div class="row marginTB10 marginL5">
                                  <div class="col-xs-6 col-sm-4">
                                      <span>Dept & Office</span>
                                  </div>
                                  <div class="col-xs-6 col-sm-1">
                                      <span>:</span>
                                  </div>
                                  <div class="col-xs-12 col-md-7">
                                      <span>+62 812 1234 2222</span>
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
                  <div class="col-sm-12">
                      <div class="row">
                          <div class="col-sm-12">
                              <h4>JOB INFORMATION</h4>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentProfileEngineerComponent {

}
