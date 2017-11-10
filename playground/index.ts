/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TxtImgModule }  from 'txt-img';

@Component({
  selector: 'app',
  template: `<txt-img width = 300 height = 300 tbackground="Black" tcolor="Yellow" action="TEXT" content="WoW!! Nice to See this wrapped text as Image" tfont="30px Times New Roman"></txt-img>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, TxtImgModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
