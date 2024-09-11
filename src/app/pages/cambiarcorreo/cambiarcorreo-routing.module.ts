import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarcorreoPage } from './cambiarcorreo.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarcorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarcorreoPageRoutingModule {}
