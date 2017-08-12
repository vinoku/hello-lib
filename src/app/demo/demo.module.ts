import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import { LibModule } from '../lib/lib.module';

@NgModule({
  imports: [
    LibModule
  ],
  declarations: [
    DemoComponent
  ],
  exports: [
    DemoComponent
  ]
})
export class DemoModule {
}

