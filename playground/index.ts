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
  template: `<txt-img 
  width = 300 
  height = 300 
  tbackground="Green" 
  left-margin=70 
  tcolor="Yellow" 
  action="TEXT" 
  filter= "grayscale(20)"
  content="Nice to see this text wrapped as Image" 
  tfont="30px Times New Roman"></txt-img>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, TxtImgModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
