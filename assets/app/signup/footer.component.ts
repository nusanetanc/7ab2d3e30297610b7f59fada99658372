import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-footer',
    template: `
    <div class="jumbotron home-footer">
        <div class="container home-content">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-sm-3">
                    <p style="line-height:25px;"><span class="home-footer-header-text">Stay Connected</span><br>
                        <span class="home-footer-body-text">
                        <a href="https://www.facebook.com/groovyplay">Facebook</a><br>
                        <a href="https://twitter.com/groovy_play">Twitter</a><br>
                        <a href="https://www.instagram.com/groovy_play/">Instagram</a><br>
                    </span></p>
                </div>
                <div class="col-xs-6 col-sm-6 col-sm-3">
                    <p style="line-height:25px;"><span class="home-footer-header-text">Features</span><br>
                        <span class="home-footer-body-text">
                        <a href="/features">Unlimited Internet Access</a><br>
                        <a href="/features">Fiber Optic to the Home</a><br>
                        <a href="/features">Free Public Wifi Account</a><br>
                        <a href="/features">IP Static</a><br>
                        <a href="/features">Helpdesk 24/7</a><br>
                    </span></p>
                </div>
                <div class="col-xs-6 col-sm-6 col-sm-3">
                    <p style="line-height:25px;"><span class="home-footer-header-text">Groovy</span><br>
                        <span class="home-footer-body-text">
                        <a href="/about">About</a><br/>
                        <a href="/career">Career</a><br>
                        <a href="/event">Event</a><br>
                        <a href="/contact">Contact</a><br>
                        <a href="/privacy-policy">Privacy Policy</a><br>
                        <a href="/terms-of-use">Terms of Use</a>
                    </span></p>
                </div>
                <div class="col-xs-6 col-sm-6 col-sm-3">
                    <p style="line-height:25px;"><span class="home-footer-header-text"><img src="images/groovy.png" alt="" width="120px"></span><br>
                        <span class="home-footer-body-text">Best Internet services for homes and apartments with a complete entertainment services, from live TV, video on demand, social TV, catch-up TV and radio streaming.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-home">
        <div class="container footer-home-text">
            <p>Copyright 2017 Groovy. All Right Reserved.</p>
        </div>
    </div>
`,
    directives: []
})
export class FooterComponent{

}