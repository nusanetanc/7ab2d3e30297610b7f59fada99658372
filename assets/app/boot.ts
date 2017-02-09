///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from "./app.component";
//import { JobService } from "./messages/job.service";
//import { AuthService } from "./user/auth.service";
import {ErrorService} from "./errors/error.service";
import { ROUTER_PROVIDERS,  } from '@angular/router'
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provide } from '@angular/core';

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);
