import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuserPage } from './auser.page';

const routes: Routes = [
  {
    path: '',
    component: AuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuserPageRoutingModule {}
