import { NgModule } from '@angular/core';

import { LanguesRoutingModule } from './langues-rounting.modules';

import { LanguesComponent } from './langues.component';


@NgModule({
  imports: [LanguesRoutingModule],
  declarations: [LanguesComponent],
  exports: [LanguesComponent]
})

export class LanguesModule { }
