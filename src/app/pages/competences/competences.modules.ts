import { NgModule } from '@angular/core';

import { CompetencesRoutingModule } from './competences-rounting.modules';

import { CompetencesComponent } from './competences.component';


@NgModule({
  imports: [CompetencesRoutingModule],
  declarations: [CompetencesComponent],
  exports: [CompetencesComponent]
})

export class CompetencesModule { }
