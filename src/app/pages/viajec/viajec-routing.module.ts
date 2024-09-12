import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajecPage } from './viajec.page';

const routes: Routes = [
  {
    path: '',
    component: ViajecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajecPageRoutingModule {}
