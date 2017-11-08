/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SampleModule }  from 'txt-img';

@Component({
  selector: 'app',
  template: `<txt-img width = 300 height = 500 tbackground="Green" tcolor="Yellow" action="TEXT" content="Circle This is amszing and i love it " tfont="30px helvetica"></txt-img>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, SampleModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
