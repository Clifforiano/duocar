import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AeditPage } from './aedit.page';

const routes: Routes = [
  {
    path: '',
    component: AeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AeditPageRoutingModule {}
