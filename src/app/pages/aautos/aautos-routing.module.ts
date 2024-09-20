import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AautosPage } from './aautos.page';

const routes: Routes = [
  {
    path: '',
    component: AautosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AautosPageRoutingModule {}
