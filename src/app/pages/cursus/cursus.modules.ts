import { NgModule } from '@angular/core';

import { CursusRoutingModule } from './cursus-routing.modules';

import {CursusComponent } from './cursus.component';


@NgModule({
  imports: [CursusRoutingModule],
  declarations: [CursusComponent],
  exports: [CursusComponent]
})

export class CursusModule { }
