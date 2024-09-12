import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajecPageRoutingModule } from './viajec-routing.module';

import { ViajecPage } from './viajec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajecPageRoutingModule
  ],
  declarations: [ViajecPage]
})
export class ViajecPageModule {}
