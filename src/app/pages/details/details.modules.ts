import { NgModule } from '@angular/core';

import { DetailsRoutingModule } from './details-routing.modules';

import { DetailsComponent } from './details.component';


@NgModule({
  imports: [DetailsRoutingModule],
  declarations: [DetailsComponent],
  exports: [DetailsComponent]
})

export class DetailsModule { }
