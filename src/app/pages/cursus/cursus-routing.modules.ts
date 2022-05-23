import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CursusComponent } from './cursus.component';

const routes: Routes = [
  { path: '', component: CursusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursusRoutingModule { }
