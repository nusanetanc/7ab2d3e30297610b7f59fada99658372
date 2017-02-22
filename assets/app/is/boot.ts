///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from 'angular2/http';
import {GithubService} from './GithubService'
//import {DashboardComponent} from "./dashboard/dashboard.component";
import {ROUTER_PROVIDERS} from "angular2/router"

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS,GithubService]);
