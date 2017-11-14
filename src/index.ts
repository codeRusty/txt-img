import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxtImgComponent } from './txtimg.component';


export * from './txtimg.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TxtImgComponent
  ],
  exports: [
    TxtImgComponent
  ]
})
export class TxtImgModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TxtImgModule,
      providers: []
    };
  }
}
