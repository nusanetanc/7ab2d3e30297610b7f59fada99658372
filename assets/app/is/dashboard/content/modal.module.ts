import { NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AppComponent } from './app.component';

import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

import {ConfirmModalComponent} from "./dashboard/content/confirmmodal.component";

@NgModule({
    declarations: [
        AppComponent,
        ConfirmModalComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BootstrapModalModule
    ],
    //Don't forget to add the component to entryComponents section
    entryComponents: [
        ConfirmModalComponent,
    ],
    bootstrap: [AppComponent]
})

export class ModalModule {

}