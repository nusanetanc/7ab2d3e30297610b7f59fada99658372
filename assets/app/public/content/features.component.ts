import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-features',
    template: `
            <div class="jumbotron container wall-features">
                <div class="row">
                    <div class="col-sm-12">
                        <img width="100%" src="./images/background-feature-tv.png"/>
                    </div>
                    <div class="col-sm-12 text-center">
                        <h2 class="wall-features-title">High Speed Fiber Optic Internet For Home & Personal klml</h2>
                        <p class="wall-features-text">Go With Groovy High-Speed Internet for a consistentl fast connection. Enjoy high speed internet access to your home now. Stream live tv throughout out home using many of your favourite devices with 94 + Local & International Channel. Explore interesting features and lineups while away from home no your smart phone, tablet or laptop.</p>
                    </div>
                </div>
            </div>
            <div class="jumbotron features-content1">
                <div class="features-content1-container container">
                    <div class="row">
                        <div class="col-sm-6">
                            <p><span class="wall-content-title">Unlimited Internet Access</span></p>
                            <p><span class="home-content-text">Have it all lighting-fast network speeds and unlimited Internet usage Never wor about surprise charges again!</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jumbotron features-content2">
                <div class="container wall-content">
                    <div class="row">
                        <div class="col-sm-6"></div>
                        <div class="col-sm-6">
                            <p><span class="wall-title features-content2-title">Fiber Optic to Home</span></p>
                            <p><span class="home-content-text features-content2-text">You can take your entertainment with you. Wath the hottest shows and movies On Demand, stream live TV, social TV or watch your recorded shows. Just turn on yout TV, laptop, tablet or phone</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jumbotron features-content3">
                <div class="features-content3-container container">
                    <div class="row">
                        <div class="col-sm-6">
                            <p><span class="wall-content-title features-content3-title">Free Public WiFi Account</span></p>
                            <p><span class="home-content-text">Get free public wifi account with more than 100k hotspot location speed up to 100Mbps</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jumbotron features-content4">
                <div class="features-content4-container container">
                    <div class="row">
                        <div class="col-sm-6">
                            <p><span class="wall-content-title">IP Static</span></p>
                            <p><span class="home-content-text">Don't worry about the changes in the IP address during the connected session. Also when you connect to your computer through applications such as remote desktop, you need not be bothered about losing the IP address.</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jumbotron features-content5">
                <div class="features-content5-container container">
                    <div class="row">
                        <div class="col-sm-6">
                            <p><span class="wall-content-title">Helpdesk 24 H/7</span></p>
                            <p><span class="home-content-text">We're here to help when you need us. Our 24/7 live chat support is ready to answer your questions. You can also send us and email, and we'll answer within 24 hours</span></p>
                        </div>
                    </div>
                </div>
            </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class FeaturesComponent{

}