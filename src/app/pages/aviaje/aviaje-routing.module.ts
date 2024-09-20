import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AviajePage } from './aviaje.page';

const routes: Routes = [
  {
    path: '',
    component: AviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AviajePageRoutingModule {}
