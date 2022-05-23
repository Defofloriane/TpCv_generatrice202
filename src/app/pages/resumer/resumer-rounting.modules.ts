import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumerComponent} from './resumer.component';

const routes: Routes = [
  { path: '', component: ResumerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumerRoutingModule { }
