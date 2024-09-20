import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoseditPage } from './autosedit.page';

const routes: Routes = [
  {
    path: '',
    component: AutoseditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoseditPageRoutingModule {}
