import { NgModule } from '@angular/core';

import { ResumerRoutingModule } from './resumer-rounting.modules';

import { ResumerComponent } from './resumer.component';


@NgModule({
  imports: [ResumerRoutingModule],
  declarations: [ResumerComponent],
  exports: [ResumerComponent]
})

export class ResumerModule { }
