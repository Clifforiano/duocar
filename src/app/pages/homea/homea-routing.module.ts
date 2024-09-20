import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeaPage } from './homea.page';

const routes: Routes = [
  {
    path: '',
    component: HomeaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeaPageRoutingModule {}
