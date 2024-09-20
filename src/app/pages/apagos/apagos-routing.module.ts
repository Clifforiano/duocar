import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApagosPage } from './apagos.page';

const routes: Routes = [
  {
    path: '',
    component: ApagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApagosPageRoutingModule {}
