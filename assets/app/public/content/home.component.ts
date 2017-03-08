import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-home',
    template: `
            <div class="wall-home jumbotron">
                <div class="container wall-content">
                    <div class="row">
                        <div class="col-sm-6">
                            <p><span class="wall-title"><strong>Happy is simple,<br/> Start from your home, Right now!</strong></span></p>
                            <div class="wall-home-text">
                                <p><span class="home-content-text">Combine high speed <strong>Internet</strong>  access with <strong>TV</strong> and <strong>WiFi</strong> more than 100K hotspot location, speed up to 100Mbps</span></p>
                            </div>
                            <a href="/signup" type="submit" class="btn btn-subscribe">SUBSCRIBE NOW</a>
                        </div>
                        <div class="col-sm-6">
                            <img src="images/groovy-multi-device-copy.png" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="jumbotron wall-home-content">
                <div class="container wall-home-content-container">
                    <div class="row">
                        <div class="col-sm-6">
                            <p><span class="wall-content-title">High Speed Fiber Internet</span></p>
                            <p><span class="home-content-text">With Groovy High-Speed Fiber Internet, you're always connected to our reliable network</span></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="jumbotron wall-home-content-2">
                <div class="container-fluid wall-content">
                    <div class="row">
                        <div class="col-sm-6">
                            <img src="images/home-experiences.jpg" width="100%"/>
                        </div>
                        <div class="col-sm-6">
                            <p><span class="wall-title">All Entertainment In One Product</span></p>
                            <p><span class="home-content-text">You can take your entertainment with you. Wath the hottest shows and movies On Demand, stream live TV, social TV or watch your recorded shows. Just turn on yout TV, laptop, tablet or phone</span></p>
                        </div>
                    </div>
                </div>
            </div>
`,
    directives: []
})
export class HomeComponent{

}