import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cambiarclave2Page } from './cambiarclave2.page';

const routes: Routes = [
  {
    path: '',
    component: Cambiarclave2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cambiarclave2PageRoutingModule {}
