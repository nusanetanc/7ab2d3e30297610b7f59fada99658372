import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-packages',
    template: `
            <div class="wall-package jumbotron" style="background-color:#e2e2e2;">
                <div class="container wall-content text-center">
                    <div class="row">
                        <div class="col-sm-12">
                            <p><span class="wall-title" style="font-weight: lighter">Pilih Paket yang Sesuai Dengan Kebutuhan Anda</span></p>
                            <p><span class="home-content-text">Paket yang mengkombinasikan antara layanan internet berkecepatan tinggi, <br> dengan layanan Live TV terlengkap di Indonesia dengan harga sangat terjangkau</span></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="wall-package-content jumbotron">
                <div class="container">
            
                    <!-- Groovy Time -->
                    <div class="package-content">
                        <div class="row">
                            <div class="col-sm-12">
                                <p class="text-center"><span class="wall-package-content-title"><strong>Groovy Time</strong></span></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 container">
            
                                <div class="col-xs-12 col-md-4 price-box">
                                    <div class="price-box-container">
                                        <div class="price-box-header">
                                            <div class="price-box-header-level">LEVEL 1</div><br>
                                            <div class="price-box-header-total">
                                                <div style="float: left;">
                                                    <span class="price-box-header-currency">Rp.</span>
                                                    <span class="price-box-header-number">349.</span>
                                                </div>
                                                <div style="float: left">
                                                    <span class="price-box-header-month">/month</span><br>
                                                    <span class="price-box-header-number-2">000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="price-box-body">
                                            <div class="price-box-body-list">
                                                <ul>
                                                    <li>1 - 4 Devices</li>
                                                    <li>Unlimited Quota</li>
                                                    <li>IP Static Private</li>
                                                    <li>Wi-Fi Access Point</li>
                                                    <li>Free 1 Nusanet Wifi Account</li>
                                                    <li>No Penalty</li>
                                                    <li>Installation free Rp. 75.000,-</li><br>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-list-keterangan">
                                                <ul>
                                                    <li><i>Not include tax</i></li>
                                                    <li><i>Router rental free Rp. 40.000,- /month</i></li>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-button">
                                                <a href="#" class="btn price-box-btn-subscribe">SUBSCRIBE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-xs-12 col-md-4 price-box">
                                    <div class="price-box-container">
                                        <div class="price-box-header">
                                            <div class="price-box-header-level">LEVEL 2</div><br>
                                            <div class="price-box-header-total">
                                                <div style="float: left;">
                                                    <span class="price-box-header-currency">Rp.</span>
                                                    <span class="price-box-header-number">899.</span>
                                                </div>
                                                <div style="float: left">
                                                    <span class="price-box-header-month">/month</span><br>
                                                    <span class="price-box-header-number-2">000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="price-box-body">
                                            <div class="price-box-body-list">
                                                <ul>
                                                    <li>1 - 8 Devices</li>
                                                    <li>Unlimited Quota</li>
                                                    <li>IP Static Private</li>
                                                    <li>Wi-Fi Access Point</li>
                                                    <li>Free 2 Nusanet Wifi Account</li>
                                                    <li>No Penalty</li>
                                                    <li>Installation free Rp. 75.000,-</li><br>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-list-keterangan">
                                                <ul>
                                                    <li><i>Not include tax</i></li>
                                                    <li><i>Router rental free Rp. 40.000,- /month</i></li>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-button">
                                                <a href="#" class="btn price-box-btn-subscribe">SUBSCRIBE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-xs-12 col-md-4 price-box">
                                    <div class="price-box-container">
                                        <div class="price-box-header">
                                            <div class="price-box-header-level">LEVEL 3</div><br>
                                            <div class="price-box-header-total">
                                                <div style="float: left;">
                                                    <span class="price-box-header-currency">Rp.</span>
                                                    <span class="price-box-header-number">549.</span>
                                                </div>
                                                <div style="float: left">
                                                        <span class="price-box-header-month">/month</span><br>
                                                        <span class="price-box-header-number-2">000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="price-box-body">
                                            <div class="price-box-body-list">
                                                <ul>
                                                    <li>1 - 80 Devices</li>
                                                    <li>Unlimited Quota</li>
                                                    <li>IP Static Private</li>
                                                    <li>Wi-Fi Access Point</li>
                                                    <li>Free 4 Nusanet Wifi Account</li>
                                                    <li>No Penalty</li>
                                                    <li>Installation free Rp. 75.000,-</li><br>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-list-keterangan">
                                                <ul>
                                                    <li><i>Not include tax</i></li>
                                                    <li><i>Router rental free Rp. 40.000,- /month</i></li>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-button">
                                                <a href="#" class="btn price-box-btn-subscribe">SUBSCRIBE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </div>
                    <!-- /End Groovy Time -->
            
            
                    <!-- Groovy Movie -->
                    <div class="package-content">
                        <div class="row">
                            <div class="col-sm-12">
                                <p class="text-center"><span class="wall-package-content-title"><strong>Groovy Movie</strong></span></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 container">
            
                                <div class="col-xs-12 col-md-4 price-box">
                                    <div class="price-box-container">
                                        <div class="price-box-header">
                                            <div class="price-box-header-level">LEVEL 4</div><br>
                                            <div class="price-box-header-total">
                                                <div style="float: left;">
                                                    <span class="price-box-header-currency">Rp.</span>
                                                    <span class="price-box-header-number">499.</span>
                                                </div>
                                                <div style="float: left">
                                                    <span class="price-box-header-month">/month</span><br>
                                                    <span class="price-box-header-number-2">000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="price-box-body">
                                            <div class="price-box-body-list">
                                                <ul>
                                                    <li>1 - 4 Devices</li>
                                                    <li><span style="color:#ea442d">Elementary TV Channels</span></li>
                                                    <li>Unlimited Quota</li>
                                                    <li>IP Static Private</li>
                                                    <li>Wi-Fi Access Point</li>
                                                    <li>Free 1 Nusanet Wifi Account</li>
                                                    <li>No Penalty</li>
                                                    <li>Installation free Rp. 75.000,-</li><br>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-list-keterangan">
                                                <ul>
                                                    <li><i>Not include tax</i></li>
                                                    <li><i>Router rental free Rp. 40.000,- /month</i></li>
                                                    <li><i>STB rental free Rp. 45.000,- /month</i></li>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-button">
                                                <a href="#" class="btn price-box-btn-subscribe">SUBSCRIBE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-xs-12 col-md-4 price-box">
                                    <div class="price-box-container">
                                        <div class="price-box-header">
                                            <div class="price-box-header-level">LEVEL 5</div><br>
                                            <div class="price-box-header-total">
                                                <div style="float: left;">
                                                    <span class="price-box-header-currency">Rp.</span>
                                                    <span class="price-box-header-number">699.</span>
                                                </div>
                                                <div style="float: left">
                                                    <span class="price-box-header-month">/month</span><br>
                                                    <span class="price-box-header-number-2">000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="price-box-body">
                                            <div class="price-box-body-list">
                                                <ul>
                                                    <li>1 - 8 Devices</li>
                                                    <li><span style="color:#ea442d">Basic TV Channels</span></li>
                                                    <li>Unlimited Quota</li>
                                                    <li>IP Static Private</li>
                                                    <li>Wi-Fi Access Point</li>
                                                    <li>Free 2 Nusanet Wifi Account</li>
                                                    <li>No Penalty</li>
                                                    <li>Installation free Rp. 75.000,-</li><br>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-list-keterangan">
                                                <ul>
                                                    <li><i>Not include tax</i></li>
                                                    <li><i>Router rental free Rp. 40.000,- /month</i></li>
                                                    <li><i>STB rental free Rp. 45.000,- /month</i></li>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-button">
                                                <a href="#" class="btn price-box-btn-subscribe">SUBSCRIBE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="col-xs-12 col-md-4 price-box">
                                    <div class="price-box-container">
                                        <div class="price-box-header">
                                            <div class="price-box-header-level">LEVEL 6</div><br>
                                            <div class="price-box-header-total">
                                                <div style="float: left;">
                                                    <span class="price-box-header-currency">Rp.</span>
                                                    <span class="price-box-header-number">999.</span>
                                                </div>
                                                <div style="float: left">
                                                    <span class="price-box-header-month">/month</span><br>
                                                    <span class="price-box-header-number-2">000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="price-box-body">
                                            <div class="price-box-body-list">
                                                <ul>
                                                    <li>1 - 80 Devices</li>
                                                    <li><span style="color:#ea442d">Basis+ TV Channels</span></li>
                                                    <li>Unlimited Quota</li>
                                                    <li>IP Static Private</li>
                                                    <li>Wi-Fi Access Point</li>
                                                    <li>Free 4 Nusanet Wifi Account</li>
                                                    <li>No Penalty</li>
                                                    <li>Installation free Rp. 75.000,-</li><br>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-list-keterangan">
                                                <ul>
                                                    <li><i>Not include tax</i></li>
                                                    <li><i>Router rental free Rp. 40.000,- /month</i></li>
                                                    <li><i>STB rental free Rp. 45.000,- /month</i></li>
                                                </ul>
                                            </div>
                                            <div class="price-box-body-button">
                                                <a href="#" class="btn price-box-btn-subscribe">SUBSCRIBE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                        </div>
                    </div>
                        <!-- /End Groovy Movie -->
            
                        <!-- Groovy TV List -->
                    <div class="package-content">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 container">
                                <div class="col-xs-12">
                                    <p><!-- List 1 -->
                                        <span class="icon"><i class="material-icons" style="vertical-align: middle">tv</i></span>
                                        <span class="tv-list-text"><strong>ELEMENTARY TV CHANNELS</strong><br>
                                          TRANS TV, METRO TV, ANTV, TV ONE, SCTV, NET TV, KPLUS, START WORLD, AXN, CNN INTERNATIONAL, NAT GEO CHANNEL, CHANNEL V, FASHION TV, DREAMWORKS, CARTOON NETWORK, FOX MOVIE PREMIUM, HBO, BEIN 1, BEIN 2, BEIN 3
                                        </span>
                                    </p>
                                    <p><!-- List 2 -->
                                        <span class="icon"><i class="material-icons" style="vertical-align: middle">tv</i></span>
                                        <span class="tv-list-text"><strong>BASIC TV CHANNELS</strong><br>
                                          TRANS TV, TRANS 7, METRO TV, ANTV, KOMPAS TV, CNN INDONESIA, TV ONE, SCTV, NET TV, KPLUS, START WORLD, WAKU - WAKU JAPAN, NHK WORLD PREMIUM, ANIPLUS, CHANNEL M, AXN, CNN INTERNATIONAL, CCTV 4, BLOOMBERG INTERNATIONAL, DWTV, CNBC ASIA, NAT GEO CHANNEL, CHANNEL V, FASHION TV, NAT GEO PEOPLE, FOX, FX, DREAMWORKS, CARTOON NETWORK, FOX MOVIE PREMIUM, FOX ACTION MOVIES, FOX FAMILY MOVIES, CELESTIAL MOVIES, HBO, RED, FLIK, GALAXY,  BEIN 1, BEIN 2, BEIN 3
                                        </span>
                                    </p>
                                    <p><!-- List 3 -->
                                        <span class="icon"><i class="material-icons" style="vertical-align: middle">tv</i></span>
                                        <span class="tv-list-text"><strong>BASIC+ TV CHANNELS</strong><br>
                                          TRANS TV, TRANS 7, METRO TV, ANTV, KOMPAS TV, CNN INDONESIA, TV ONE, SCTV, NET TV, KPLUS, START WORLD, WAKU - WAKU JAPAN, NHK WORLD PREMIUM, ANIPLUS, CHANNEL M, ALJAZEERA, AUSTRALIA+, CCTV 4, BLOOMBERG INTERNATIONAL, CNN INTERNATIONAL, DWTV, CNBC ASIA, EURONEWS, NAT GEO CHANNEL, CHANNEL V, MTV LIVE, FASHION ONE, FASHION TV, NAT GEO WORLD, FOX, FX, AXN, DIVA, UNIVERSAL, SONY CHANNEL, SYFY, E!, STAR CHINESE CHANNEL, ZEE HIBURAN, DISNEY CHANNEL, DREAMWORKS, CARTOON NETWORK, BABY FIRST, FOX MOVIE PREMIUM, FOX ACTION MOVIES, CELESTIAL MOVIES, HBO, HBO HITS, HBO SIGNATURE, HBO FAMILY, CINEMAX, RED, FLIK, GALAXY,  FOX SPORT 1 FOX SPORT 2 FOX SPORT NEWS, BEIN 1, BEIN 2, BEIN 3
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    </div>
                </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class PackagesComponent{

}