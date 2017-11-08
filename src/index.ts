import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxtImgComponent } from './txtimg.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './txtimg.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TxtImgComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    TxtImgComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class TxtImgModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TxtImgModule,
      providers: [SampleService]
    };
  }
}
