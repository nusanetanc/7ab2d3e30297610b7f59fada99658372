import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent }   from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        ModalModule.forRoot(),
        BootstrapModalModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class TestModule { }