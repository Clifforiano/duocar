import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApagosPageRoutingModule } from './apagos-routing.module';

import { ApagosPage } from './apagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApagosPageRoutingModule
  ],
  declarations: [ApagosPage]
})
export class ApagosPageModule {}
