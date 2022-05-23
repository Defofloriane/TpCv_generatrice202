import { NgModule } from '@angular/core';

import { ExperiencesRoutingModule } from './experiences-routing.modules';

import { ExperiencesComponent } from './experiences.component';


@NgModule({
  imports: [ExperiencesRoutingModule],
  declarations: [ExperiencesComponent],
  exports: [ExperiencesComponent]
})

export class ExperiencesModule { }
